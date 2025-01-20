import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garantir que a execução ocorra apenas no lado do cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Chama a função de play automaticamente ao carregar no cliente
    if (isClient) {
      setIsPlaying(true);
    }
  }, [isClient]);

  return (
    <div style={{ display: "none" }}>
      {isClient && (
        <ReactPlayer
          url="/audio/casamento.mp3"
          playing={isPlaying}
          loop
          controls={false} // Remove controles, fica invisível
          muted={false} // Define para não estar mudo, para garantir que não seja bloqueado
          width="0" // Define o tamanho como zero
          height="0" // Define o tamanho como zero
        />
      )}
    </div>
  );
};

export default MusicPlayer;
