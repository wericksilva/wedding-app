// components/TreasureHunt.js
import React, { useState } from 'react';
import { Card, Button, ListGroup, Alert, Spinner } from 'react-bootstrap';

const TreasureHunt = () => {
    // Estado para armazenar os desafios completados
    const [completedChallenges, setCompletedChallenges] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para controle de animação de carregamento

    // Lista de desafios
    const challenges = [
        {
            id: 1,
            text: 'Tire uma foto do lugar onde você está assistindo à cerimônia!',
        },
        {
            id: 2,
            text: 'Deixe uma mensagem de felicitações para o casal no livro de mensagens!',
        },
        {
            id: 3,
            text: 'Responda a uma pergunta sobre o casal no quiz interativo!',
        },
        {
            id: 4,
            text: 'Compartilhe uma foto ou vídeo no mural de fotos!',
        },
    ];

    // Função para marcar/desmarcar o desafio como completo
    const handleChallengeCompletion = (id) => {
        setLoading(true); // Ativa o carregamento

        setTimeout(() => {
            if (completedChallenges.includes(id)) {
                setCompletedChallenges(completedChallenges.filter((challengeId) => challengeId !== id));
            } else {
                setCompletedChallenges([...completedChallenges, id]);
            }

            setLoading(false); // Desativa o carregamento após 1 segundo
        }, 500); // Simula um delay de 500ms para animação
    };

    // Verificando se todos os desafios foram completados
    const isCompleted = completedChallenges.length === challenges.length;

    return (
        <div className="container text-center mt-5">
            <Card className="shadow-lg">
                <Card.Header as="h2" className="bg-primary text-white">
                    Caça ao Tesouro Digital
                </Card.Header>
                <Card.Body>
                    {!isCompleted ? (
                        <div>
                            <h3 className="mb-4">Complete os desafios abaixo e ganhe uma recompensa digital!</h3>
                            
                            {/* Lista de Desafios */}
                            <ListGroup variant="flush">
                                {challenges.map((challenge) => (
                                    <ListGroup.Item key={challenge.id} className="d-flex justify-content-between align-items-center">
                                        <span>{challenge.text}</span>

                                        {/* Botão interativo */}
                                        <Button
                                            variant={completedChallenges.includes(challenge.id) ? 'success' : 'outline-primary'}
                                            onClick={() => handleChallengeCompletion(challenge.id)}
                                            disabled={loading} // Desabilita o botão enquanto carrega
                                            className="ms-3"
                                        >
                                            {completedChallenges.includes(challenge.id) ? 'Desmarcar' : 'Marcar como Completo'}
                                        </Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            {/* Mensagem de progresso */}
                            <p className="mt-3">Você completou {completedChallenges.length} de {challenges.length} desafios!</p>

                            {loading && <Spinner animation="border" variant="primary" />}
                        </div>
                    ) : (
                        <div>
                            <Alert variant="success">
                                <h3>Parabéns! Você completou todos os desafios!</h3>
                                <p>Obrigado por participar da nossa caça ao tesouro digital. Esperamos que tenha se divertido!</p>
                                <Button variant="outline-primary" href="/caça-ao-tesouro">Voltar e Explorar mais</Button>
                            </Alert>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default TreasureHunt;
