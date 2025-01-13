import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { ref as dbRef, set, push, get } from "firebase/database"; // Substituímos `onValue` por `get`
import { storage, db } from "../firebase/firebaseConfig";

export default function ImageUpload() {
    const [media, setMedia] = useState(null);
    const [caption, setCaption] = useState(""); // Legenda adicionada
    const [preview, setPreview] = useState(null);
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Carregar imagens existentes do Realtime Database uma vez
    useEffect(() => {
        const fetchMedia = async () => {
            const mediaListRef = dbRef(db, "mediaCaptions");
            const snapshot = await get(mediaListRef); // Busca os dados uma única vez
            if (snapshot.exists()) {
                const data = snapshot.val();
                const mediaArray = Object.values(data);
                setUrls(mediaArray);
            }
        };
        fetchMedia();
    }, []);

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.split("/")[0];
            if (fileType === "image" || fileType === "video") {
                setMedia(file);
                setPreview(URL.createObjectURL(file));
                setError("");

                // Para vídeos, verifica a duração
                if (fileType === "video") {
                    const videoElement = document.createElement("video");
                    videoElement.src = URL.createObjectURL(file);
                    videoElement.onloadedmetadata = () => {
                        if (videoElement.duration > 60) {
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

    const resizeImage = (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const scaleFactor = 0.7;
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(
                    (blob) => resolve(blob),
                    "image/jpeg",
                    0.7
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
            if (media.type.startsWith("image/")) {
                uploadMedia = await resizeImage(media);
            } else {
                uploadMedia = media;
            }

            console.log("Iniciando o upload...");
            await uploadBytes(mediaRef, uploadMedia);
            const downloadURL = await getDownloadURL(mediaRef);
            console.log("URL obtida:", downloadURL);

            // Salva no Realtime Database
            const mediaDbRef = push(dbRef(db, "mediaCaptions"));
            const newEntry = { url: downloadURL, caption };
            await set(mediaDbRef, newEntry);

            // Atualiza o estado local (evita re-renderizações desnecessárias)
            setUrls((prevUrls) => [...prevUrls, newEntry]);
            alert("Upload bem-sucedido!");
        } catch (error) {
            console.error("Erro ao fazer upload:", error);
            alert("Falha no upload. Tente novamente.");
        } finally {
            setLoading(false);
            setMedia(null);
            setPreview(null);
            setCaption(""); // Limpa a legenda
        }
    };

    return (
        <>
            <div className="container text-center">
                <div className="mt-2">
                    <div className="container">
                        <div className="text-center">
                            <img
                                src="./imagens/capsula.svg"
                                width="352px"
                                height="205px"
                                className="rounded-circle me-12"
                                alt="Historia"
                            />
                        </div>
                    </div>

                    <div className="card-body">
                        <p>
                            Este espaço é dedicado para você compartilhar fotos e
                            momentos especiais do nosso casamento. Sua contribuição
                            fará parte de uma cápsula do tempo, onde guardaremos essas
                            lembranças para sempre. Carregue suas fotos e vídeos
                            preferidos para eternizar esse dia único junto conosco!
                        </p>
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
                        style={{ display: "none" }}
                        accept="image/*,video/*"
                    />

                    {error && <p className="text-danger text-center">{error}</p>}

                    {preview && (
                        <div className="text-center mb-3">
                            {media.type.startsWith("video/") || media.type.endsWith("gif") ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    controls={false} // Remove controles para evitar interrupções
                                    onEnded={(e) => e.target.play()} // Garante reinício manual para vídeos problemáticos
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                                >
                                    <source src={preview} type={media.type} />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            ) : (
                                <img
                                    src={preview}
                                    alt="Pré-visualização"
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                                />
                            )}
                        </div>
                    )}


                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Escreva uma legenda (opcional)"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />

                    <button
                        onClick={handleUpload}
                        disabled={loading}
                        className="btn btn-primary w-100"
                    >
                        {loading ? "Carregando..." : "Fazer Upload"}
                    </button>
                </div>
            </div>

            <div className="container mt-4">
                <h4 className="text-center mb-3">Galeria de Memórias</h4>
                <div className="row">
                    {urls.map((media, index) => (
                        <div key={index} className="col-6 mb-3">
                            {media.url.endsWith(".mp4") || media.url.endsWith(".gif") ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "100%" }}
                                >
                                    <source src={media.url} type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            ) : (
                                <img src={media.url} alt={`Uploaded ${index}`} className="img-fluid rounded" />
                            )}
                            {media.caption && <p className="text-center mt-2">{media.caption}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
