import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig';
import { ref, push, onValue } from 'firebase/database';

const GuestMessages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Função para buscar mensagens do Realtime Database
    const fetchMessages = () => {
      const messagesRef = ref(db, 'messages');
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const messagesList = data ? Object.values(data).map(item => item.text) : [];
        setMessages(messagesList);
      });
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    try {
      const messagesRef = ref(db, 'messages');
      await push(messagesRef, {
        text: message,
        timestamp: new Date().toISOString()
      });
      setMessage('');
      alert("Obrigado pela sua mensagem!"); // Exibe o alerta de agradecimento
    } catch (error) {
      console.error("Erro ao salvar mensagem: ", error);
    }
  };

  return (
    <div className="container text-center mt-5">
      <Card>
        <Card.Header as="h2">Deixe sua Mensagem</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Escreva uma mensagem de carinho:</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Sua mensagem aqui..."
              />
            </Form.Group>
            <Button type="submit" variant="primary">Enviar</Button>
          </Form>

          <h4 className="mt-4">Mensagens dos Convidados:</h4>
          <div className="mt-3">
            {messages.length === 0 ? (
              <p>Nenhuma mensagem ainda.</p>
            ) : (
              messages.map((msg, index) => (
                <Card key={index} className="mb-2">
                  <Card.Body>{msg}</Card.Body>
                </Card>
              ))
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GuestMessages;
