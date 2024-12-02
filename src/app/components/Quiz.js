// Adicione a diretiva 'use client' para indicar que o componente usa hooks de cliente
'use client';

import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Table } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig'; // Importação correta do db
import { ref, set, get } from 'firebase/database'; // Usando get para obter dados de uma vez

const Quiz = () => {
    const questions = [
        {
            question: "Onde o casal se conheceu?",
            options: [
                "Na escola/universidade",
                "Em um evento social",
                "No mesmo bairro ainda criança",
                "Em uma viagem"
            ],
            answer: "No mesmo bairro ainda criança",
        },
        {
            question: "Qual é o prato preferido do casal?",
            options: [
                "Pizza",
                "Sushi",
                "Churrasco",
                "Massa italiana"
            ],
            answer: "Churrasco",
        },
        {
            question: "Qual é a estação do ano preferida da noiva?",
            options: [
                "Verão",
                "Outono",
                "Inverno",
                "Primavera"
            ],
            answer: "Inverno",
        },
        {
            question: "Qual é a estação do ano preferida do noivo?",
            options: [
                "Verão",
                "Outono",
                "Inverno",
                "Primavera"
            ],
            answer: "Verão",
        },
        {
            question: "Qual é o ritmo musical favorito do casal?",
            options: [
                "MPB",
                "Rock",
                "Pop",
                "Reggae"
            ],
            answer: "Reggae",
        }
    ];

    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [playerName, setPlayerName] = useState('');
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        // Função para buscar rankings do Firebase assim que a página carregar
        const fetchRankings = async () => {
            const rankingsRef = ref(db, 'rankings');
            try {
                const snapshot = await get(rankingsRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const rankingsArray = Object.entries(data).map(([key, value]) => ({
                        name: value.name,
                        score: value.score
                    }));
                    rankingsArray.sort((a, b) => b.score - a.score); // Ordenar pela pontuação
                    setRankings(rankingsArray);
                } else {
                    setRankings([]);
                }
            } catch (error) {
                console.error("Erro ao buscar rankings:", error);
            }
        };

        fetchRankings();
    }, []); // Esse efeito executa uma vez quando o componente for montado

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
            } else {
                setQuizCompleted(true);
            }
        }, 500);
    };

    const submitQuiz = async () => {
        if (playerName.trim() !== '') {
            try {
                // Salvar o resultado no Firebase
                const rankingsRef = ref(db, 'rankings/' + playerName); // Caminho único para o jogador
                await set(rankingsRef, {
                    name: playerName,
                    score: score
                });

                // Atualizar os rankings após o envio
                const rankingsSnapshot = await get(ref(db, 'rankings'));
                const data = rankingsSnapshot.val();
                const rankingsArray = data ? Object.entries(data).map(([key, value]) => ({
                    name: value.name,
                    score: value.score
                })) : [];
                rankingsArray.sort((a, b) => b.score - a.score); // Ordena por pontuação
                setRankings(rankingsArray);

                // Resetar o quiz
                setQuizCompleted(false);
                setCurrentQuestion(0);
                setScore(0);
                setPlayerName('');
            } catch (error) {
                console.error('Erro ao salvar o resultado:', error);
            }
        } else {
            alert('Por favor, insira seu nome antes de enviar!');
        }
    };

    const renderStars = (numStars) => {
        const totalStars = 5;
        let stars = [];

        for (let i = 0; i < totalStars; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"   // Ajuste o tamanho da estrela
                    height="1em"  // Ajuste o tamanho da estrela
                    fill={i < numStars ? "yellow" : "gray"}  // Preenche a estrela de amarelo ou cinza


                    className="bi bi-star"
                    viewBox="0 0 16 16"
                >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
            );
        }
        return stars;
    };



    return (
        <div className="container text-center mt-5">


            {/* Quiz */}
            <Card >
                <Card.Header as="h4">Quiz do Casamento</Card.Header>
                <Card.Body>
                    {quizCompleted ? (
                        <div>
                            <h4>Você acertou {score} de {questions.length} perguntas!</h4>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Seu Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={playerName}
                                        onChange={(e) => setPlayerName(e.target.value)}
                                        placeholder="Digite seu nome"
                                    />
                                </Form.Group>
                                <Button onClick={submitQuiz} variant="primary">
                                    Enviar Resultado
                                </Button>
                            </Form>
                        </div>
                    ) : (
                        <div>
                            <h3>{questions[currentQuestion].question}</h3>
                            {questions[currentQuestion].options.map((option, index) => (
                                <Button
                                    key={index}
                                    variant="outline-primary"
                                    className="m-2"
                                    onClick={() => handleAnswer(option)}
                                    disabled={selectedAnswer !== null}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    )}
                </Card.Body>
            </Card>

            {/* Exibir Ranking no Topo */}
            <Card className="mt-4">
                <Card.Header as="h4">Ranking de Participantes</Card.Header>
                <Card.Body>
                    <Table responsive="sm" striped bordered hover>
                        <thead>
                            <tr>

                                <th>Nome</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((rank, index) => (
                                <tr key={index}>
                                    <td>{rank.name}</td>
                                    <td>{renderStars(rank.score)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Quiz;
