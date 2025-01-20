import { useState, useEffect } from "react";

// Função para embaralhar as cartas
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MemoryGame = () => {
  const images = [
    "./imagens/foto2.jpg", // Substitua com suas imagens ou links
    "./imagens/foto3.jpg", // Substitua com suas imagens ou links
    "./imagens/foto4.jpg", // Substitua com suas imagens ou links
    "./imagens/foto5.jpg", // Substitua com suas imagens ou links
    // Adicione mais imagens conforme necessário
  ];

  // Criação do deck de cartas (duplicadas para combinar)
  const cards = [...images, ...images].map((image, index) => ({
    id: index,
    image,
    flipped: false,
    matched: false,
  }));

  const [deck, setDeck] = useState(shuffleArray(cards)); // Deck de cartas embaralhado
  const [flippedCards, setFlippedCards] = useState([]); // Cartas viradas
  const [matchedCount, setMatchedCount] = useState(0); // Contagem de cartas combinadas

  // Função para virar a carta
  const flipCard = (index) => {
    if (flippedCards.length === 2 || deck[index].flipped || deck[index].matched) return;

    const newDeck = [...deck];
    newDeck[index].flipped = true;
    setDeck(newDeck);
    setFlippedCards([...flippedCards, index]);
  };

  // Função para verificar se as cartas viradas são iguais
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (deck[firstIndex].image === deck[secondIndex].image) {
        const newDeck = [...deck];
        newDeck[firstIndex].matched = true;
        newDeck[secondIndex].matched = true;
        setDeck(newDeck);
        setMatchedCount(matchedCount + 1);
      } else {
        setTimeout(() => {
          const newDeck = [...deck];
          newDeck[firstIndex].flipped = false;
          newDeck[secondIndex].flipped = false;
          setDeck(newDeck);
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards, deck]);

  // Função para reiniciar o jogo
  const restartGame = () => {
    const shuffledDeck = shuffleArray(cards);
    setDeck(shuffledDeck);
    setMatchedCount(0);
    setFlippedCards([]);
  };

  return (
    <div className="memory-game">
      <h2>Jogo de Memória</h2>
      <div className="deck">
        {deck.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => flipCard(index)}
          >
            <div className="card-inner">
              <div className="card-front"></div>
              <div className="card-back">
                <img src={card.image} alt={`Carta ${card.id}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info">
        <p>Cartas combinadas: {matchedCount}</p>
        {matchedCount === images.length && <p>Parabéns! Você completou o jogo!</p>}
        <button onClick={restartGame}>Reiniciar Jogo</button>
      </div>

      <style jsx>{`
        .memory-game {
          text-align: center;
        }
        .deck {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          justify-content: center;
          margin: 20px 0;
        }
        .card {
          width: 100px;
          height: 100px;
          perspective: 1000px;
        }
        .card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateY(0deg);
          transition: transform 0.3s;
        }
        .card.flipped .card-inner {
          transform: rotateY(180deg);
        }
        .card-front,
        .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 8px;
        }
        .card-front {
          background-color: #ccc;
        }
        .card-back img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        .info {
          margin-top: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MemoryGame;

