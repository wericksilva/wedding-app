// components/ImageUpload.js
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../firebase/firebaseConfig';

export default function ImageUpload() {
    const [media, setMedia] = useState(null); // Alterado para aceitar imagens e vídeos
    const [preview, setPreview] = useState(null);
    const [urls, setUrls] = useState([]); // Lista de URLs para exibir todas as mídias
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMedia = async () => {
            const mediaRef = ref(storage, 'media'); // Usar uma pasta para armazenar tanto imagens quanto vídeos
            const mediaList = await listAll(mediaRef);
            const urls = await Promise.all(mediaList.items.map(item => getDownloadURL(item)));
            setUrls(urls);
        };
        fetchMedia();
    }, []);

    const handleMediaChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileType = file.type.split('/')[0];

            // Permitir apenas imagens ou vídeos
            if (fileType === "image" || fileType === "video") {
                setMedia(file);
                setPreview(URL.createObjectURL(file));
                setError("");

                // Se for um vídeo, verificar a duração
                if (fileType === "video") {
                    const videoElement = document.createElement('video');
                    videoElement.src = URL.createObjectURL(file);

                    videoElement.onloadedmetadata = () => {
                        const duration = videoElement.duration;
                        // Limitar a duração a 60 segundos
                        if (duration > 60) {
                            setError("O vídeo não pode ter mais de 1 minuto.");
                            setMedia(null);
                            setPreview(null);
                        }
                    };
                }
            } else {
                setError("Por favor, selecione um arquivo de imagem ou vídeo.");
                setMedia(null);
                setPreview(null);
            }
        }
    };

    // Reduz a qualidade da imagem antes do upload
    const resizeImage = (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const scaleFactor = 0.7; // Ajuste esse valor para redimensionar (0.7 reduz a 70%)
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
                // Converte o canvas para Blob com compressão
                canvas.toBlob(
                    (blob) => {
                        resolve(blob);
                    },
                    'image/jpeg', // Formato da imagem
                    0.7 // Qualidade da imagem (0.7 para 70%)
                );
            };
        });
    };

    const handleUpload = async () => {
        if (!media) {
            alert("Por favor, selecione uma imagem primeiro!");
            return;
        }

        setLoading(true);
        const mediaRef = ref(storage, `media/${media.name}`);

        try {
            let uploadMedia;

            // Verifica se é uma imagem e redimensiona
            if (media.type.startsWith('image/')) {
                uploadMedia = await resizeImage(media); // Redimensiona a imagem
            } else {
                // Para vídeos, apenas cria um Blob, sem compressão
                uploadMedia = media;
            }

            console.log("Iniciando o upload:", mediaRef); // Log para verificar o caminho de upload
            console.log("Tipo de mídia:", media.type); // Log para verificar o tipo de arquivo

            await uploadBytes(mediaRef, uploadMedia); // Faz upload do Blob
            const downloadURL = await getDownloadURL(mediaRef);
            console.log("URL da mídia carregada:", downloadURL); // Log para verificar a URL carregada
            setUrls((prevUrls) => [...prevUrls, downloadURL]); // Adiciona nova mídia à lista
            alert("Upload bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer imagem da mídia:", error);
            alert("Falha no upload. Tente novamente.");
        } finally {
            setLoading(false);
            setMedia(null);
            setPreview(null);
        }
    };

    return (
        <>
            <div className="container text-center">
                <div className="mt-2">
                    <div className="container">
                        <div className="text-center">
                            <img src="./imagens/capsula.svg" width="352px" height="205px" className="rounded-circle me-12" alt="Historia" />
                        </div>
                    </div>

                    <div className="card-body">
                        <p>Este espaço é dedicado para você compartilhar fotos e momentos especiais do nosso casamento. Sua contribuição fará parte de uma cápsula do tempo, onde guardaremos essas lembranças para sempre. Carregue suas fotos e vídeos preferidos para eternizar esse dia único junto conosco!</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="p-4 shadow-sm">
                   

                    <label htmlFor="file-upload" className="btn btn-outline-secondary w-100 mb-3">
                        Selecionar Imagem
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleMediaChange}
                        style={{ display: 'none' }} // Oculta o input original
                        accept="image/*,video/*" // Aceita apenas imagens e vídeos
                    />

                    {error && <p className="text-danger text-center">{error}</p>}

                    {preview && (
                        <div className="text-center mb-3">
                            {media.type.startsWith('video/') ? (
                                <video controls className="img-fluid rounded" style={{ maxWidth: "100%", maxHeight: "300px" }}>
                                    <source src={preview} type={media.type} />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            ) : (
                                <img src={preview} alt="Pré-visualização" className="img-fluid rounded" style={{ maxWidth: "100%", maxHeight: "300px" }} />
                            )}
                        </div>
                    )}

                    <button
                        onClick={handleUpload}
                        disabled={loading}
                        className="btn btn-primary w-100"
                    >
                        {loading ? "Carregando..." : "Fazer Upload"}
                    </button>
                </div>
            </div>

            {/* Exibir todas as mídias em uma grade de duas colunas */}
            <div className="container mt-4">
                <h4 className="text-center mb-3">Galeria de Memórias</h4>
                <div className="row">
                    {urls.map((url, index) => (
                        <div key={index} className="col-6 mb-3">
                            {url.endsWith('.mp4') ? ( // Verifica se a URL é de um vídeo
                                <video controls className="img-fluid rounded" style={{ maxWidth: "100%" }}>
                                    <source src={url} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            ) : (
                                <img src={url} alt={`Uploaded ${index}`} className="img-fluid rounded" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
