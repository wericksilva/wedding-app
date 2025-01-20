import { useEffect, useState, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null); // Referência para o elemento de áudio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar se o áudio está tocando
  const [isMuted, setIsMuted] = useState(true); // Começar mudo
  const [isClient, setIsClient] = useState(false); // Garantir que o efeito seja executado apenas no cliente

  // Garantir que o efeito seja executado no cliente, não no servidor
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Simulando o clique no botão automaticamente
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.warn("Reprodução automática bloqueada pelo navegador.", err);
        });
        setIsMuted(false); // Desmutar automaticamente após reprodução
      }
    }
  }, [isClient]);

  return (
    <div>
      {/* O player de áudio começa mudo e será desmutado automaticamente */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/audio/casamento.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* O botão de desmutar foi removido, ele não será mais exibido */}
    </div>
  );
};

export default MusicPlayer;
