
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Quiz = () => {

    const questions = [

        {
            question: "Qual é o lugar perfeito para a nossa lua de mel?",
            options: [
                "Praia paradisíaca",
                "Montanha coberta de neve",
                "Cidade cheia de cultura",
                "Um safári na África"
            ],
            answer: "Montanha coberta de neve",
        },
        {
            question: "Qual é o nosso sonho para o futuro?",
            options: [
                "Construir uma casa cheia de amor",
                "Ter uma família grande",
                "Viajar o mundo juntos",
                "Abrir um negócio em conjunto"
            ],
            answer: "Construir uma casa cheia de amor",
        },
        {
            question: "Qual é a nossa viagem dos sonhos juntos?",
            options: [
                "Explorar as ruas de Paris",
                "Relaxar em Bali",
                "Uma road trip pela Califórnia",
                "Visitar as auroras boreais na Noruega"
            ],
            answer: "Visitar as auroras boreais na Noruega",
        },
        {
            question: "Qual é a nossa tradição favorita?",
            options: [
                "Noite de jogos toda sexta-feira",
                "Cozinhar juntos aos domingos",
                "Assistir a filmes de Natal em dezembro",
                "Fazer um jantar temático todo mês"
            ],
            answer: "Fazer um jantar temático todo mês",
        },
        {
            question: "Qual é o nosso filme romântico favorito?",
            options: [
                "Diário de uma Paixão",
                "Como se fosse a primeira vez",
                "Uma Linda Mulher",
                "O Melhor de Mim"
            ],
            answer: "Diário de uma Paixão",
        }
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (option) => {
        setSelectedAnswer(option); // Define a resposta selecionada
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null); // Limpa a resposta selecionada para a próxima pergunta
            } else {
                setQuizCompleted(true);
            }
        }, 500); // Delay para mostrar a resposta antes de mudar
    };

    return (
        <div className="container text-center mt-5">
            <Card>
                <Card.Header as="h2">Quiz do Casamento</Card.Header>
                <Card.Body>
                    {quizCompleted ? (
                        <div>
                            <h3>Você acertou {score} de {questions.length} perguntas!</h3>
                            <p>Obrigado por participar e compartilhar esse momento especial conosco!</p>
                        </div>
                    ) : (
                        <div>
                            <Card.Title>{questions[currentQuestion].question}</Card.Title>
                            <div className="d-flex flex-column align-items-center">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        variant={selectedAnswer === option ? "primary" : "light"}
                                        className="m-2 w-75"
                                        disabled={selectedAnswer !== null} // Desabilita botões após resposta
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;
