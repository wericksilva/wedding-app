// components/ImageUpload.js
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '../firebase/firebaseConfig';

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null); // Estado para a pré-visualização da imagem
    const [urls, setUrls] = useState([]); // Lista de URLs para exibir todas as imagens
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesRef = ref(storage, 'images');
            const imageList = await listAll(imagesRef);
            const urls = await Promise.all(imageList.items.map(item => getDownloadURL(item)));
            setUrls(urls);
        };
        fetchImages();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Define a pré-visualização
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
        if (!image) {
            alert("Por favor, Carregar uma imagem primeiro!");
            return;
        }

        setLoading(true);
        const imageRef = ref(storage, `images/${image.name}`);

        try {
            const resizedImage = await resizeImage(image); // Redimensiona a imagem
            await uploadBytes(imageRef, resizedImage); // Faz upload do Blob redimensionado
            const downloadURL = await getDownloadURL(imageRef);
            setUrls((prevUrls) => [...prevUrls, downloadURL]); // Adiciona nova imagem à lista
            alert("Upload bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error);
            alert("Falha no upload. Tente novamente.");
        } finally {
            setLoading(false);
            setImage(null);
            setPreview(null); // Remove a pré-visualização após o upload
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
                        <p>Este espaço é dedicado para você compartilhar fotos e momentos especiais do nosso casamento. Sua contribuição fará parte de uma cápsula do tempo, onde guardaremos essas lembranças para sempre. Carregue suas fotos preferidas para eternizar esse dia único junto conosco!</p>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="p-4 shadow-sm">
                    

                    {/* Label de carregamento de imagem personalizado */}
                    <label htmlFor="file-upload" className="btn btn-outline-secondary w-100 mb-3">
                        Carregar Imagem
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }} // Oculta o input original
                    />

                    {/* Pré-visualização da imagem */}
                    {preview && (
                        <div className="text-center mb-3">
                            <img src={preview} alt="Pré-visualização" className="img-fluid rounded" style={{ maxWidth: "100%", maxHeight: "300px" }} />
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

            {/* Exibir todas as imagens em uma grade de duas colunas */}
            <div className="container mt-4">
                <h4 className="text-center mb-3">Galeria de Memórias</h4>
                <div className="row">
                    {urls.map((url, index) => (
                        <div key={index} className="col-6 mb-3">
                            <img src={url} alt={`Uploaded ${index}`} className="img-fluid rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
