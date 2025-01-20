import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // Inicia mudo
      audio.play()
        .then(() => {
          audio.muted = false; // Desmuta após iniciar
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Reprodução automática bloqueada pelo navegador.", err);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/audio/casamento.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
