"use client"

import { useState, useEffect } from "react";
import CountDown from "./components/countdown";
import { Router } from "next/router";
import { Carousel } from "react-bootstrap";
import GuestMessages from "./components/GuestMessages";
import MusicPlayer from "./components/MusicPlayer";


export default function Home() {
    return (
        <>
            <div className="container">
                <div className="text-center mt-4">

                    <img src="./imagens/baner.svg" width="370px" className="me-12" alt="Banner" />
                </div>
            </div>
            <MusicPlayer />
            <CountDown></CountDown>


            <div className="container" style={{ marginTop: "10px" }}>
                <div className="row">
                    <Carousel interval={3000} controls={false} pause={false} indicators={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto13.jpg"
                                alt="First slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Nosso Grande Dia</h3>
                                <p>A jornada que nos trouxe até aqui é cheia de amor, sorrisos e memórias inesquecíveis.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto2.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Amor em Cada Detalhe</h3>

                                <p>Cada sorriso, cada lágrima de alegria, nos lembrará do amor que nos trouxe até aqui.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto12.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Nossa Linda História de Amor</h3>

                                <p>Hoje é o dia em que as páginas da nossa história se tornam ainda mais bonitas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto1.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Um Dia de Alegria e Amor</h3>

                                <p>Este é o dia que sonhamos, onde cada momento se transforma em uma memória eterna.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto9.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Para Sempre Começa Aqui</h3>

                                <p>Hoje, damos o primeiro passo em uma nova aventura, cheia de amor e descobertas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto15.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Um Encontro de Almas</h3>

                                <p>Neste dia mágico, unimos nossos destinos e celebramos nossa conexão única.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto16.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>O Dia em que Tudo Mudou</h3>

                                <p>Hoje, transformamos nossos sonhos em realidade, cercados de amor e carinho.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto19.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Um Amor que Brilha</h3>
                                <p>Neste dia especial, deixamos nosso amor brilhar e aquecer os corações de todos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto20.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Para Sempre Começa Aqui</h3>

                                <p>Hoje, damos o primeiro passo em uma nova aventura, cheia de amor e descobertas.</p>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./imagens/foto21.jpg"
                                alt="Second slide"
                                style={{ height: "400px", objectFit: "cover" }} // Ajuste a altura conforme necessário
                            />
                            <Carousel.Caption>
                                <h3>Corações Entrelaçados</h3>
                                <p>Dois corações, uma alma. Nosso amor nos guia para um futuro brilhante juntos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>


            <div className="container text-center">
                

            <div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="/wedding-app/historia" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/historia.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Nossa história"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Nos conhecemos ainda crianças, em 2004, e acompanhamos um ao outro ao longo de todos esses anos. 
            Vimos a infância se transformar em adolescência, a adolescência em juventude, e agora, com a maturidade dos adultos, 
            olhamos para trás com gratidão e carinho. Nossa amizade e cumplicidade cresceram e se fortaleceram com o tempo, 
            e temos a certeza de que estamos prontos para iniciar um casamento centrado em Cristo.
        </p>
    </div>
</div>

<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="/wedding-app/presentes" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/presentes.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Presentes"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Para aqueles que desejarem nos presentear, ficaremos imensamente gratos. O que mais desejamos é a sua presença, mas, caso queira nos agraciar com um presente, preparamos uma lista especial com experiências que enriquecerão nossa vida juntos e criarão memórias afetivas inesquecíveis.
        </p>
    </div>
</div>

<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="https://forms.gle/52Uy58jHBpuMQHW97" target="_blank" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/presenca.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Confirmar Presença"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Para que possamos nos preparar da melhor forma para a nossa celebração, pedimos a gentileza de confirmar sua presença até o dia 20 de dezembro de 2024. A presença de cada um de vocês é muito importante para nós, mas entendemos que imprevistos podem ocorrer e outros compromissos podem já estar agendados para essa data.
        </p>
    </div>
</div>

<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9" target="_blank" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/cerimonia.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Cerimônia"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            É com imensa alegria que convidamos você para celebrar conosco o nosso casamento, que acontecerá no dia 08 de fevereiro de 2025, às 11h30, na Catedral Metropolitana de Brasília, Nossa Senhora Aparecida. Este será um momento muito especial para nós, e sua presença será uma grande honra.
        </p>
    </div>
</div>

<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8" target="_blank" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/recepcao.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Recepção"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Após a cerimônia, teremos o prazer de recebê-los para a recepção no Salão Itamaraty da Steak Bull. A festa começará logo após o término da celebração na catedral. Queremos ressaltar a importância de estarem conosco desde a cerimônia até a recepção, para que possamos compartilhar juntos todos os momentos deste dia inesquecível.
        </p>
    </div>
</div>





<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="/wedding-app/padrinhos" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/padrinhos.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Padrinhos"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Queridos padrinhos e madrinhas, é com imensa alegria que contamos com a presença e o apoio de vocês neste momento tão especial de nossas vidas. Sabemos que o papel de vocês vai muito além de estar ao nosso lado no altar. Vocês são parte essencial desta jornada, amigos queridos que escolhemos para compartilhar e celebrar nosso amor.
        </p>
    </div>
</div>

<div className="mt-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
                <a href="/wedding-app/capsula" className="d-inline-block link-clicavel">
                    <img 
                        src="./imagens/capsula.svg" 
                        className="img-fluid rounded-3 shadow-lg hover-scale" 
                        alt="Cápsula do Tempo"
                    />
                </a>
            </div>
        </div>
    </div>
    <div className="card-body mt-4">
        <p className="text-justify fs-6">
            Cápsula do Tempo do Casamento! Compartilhe suas memórias e ajude-nos a guardar este momento especial.
        </p>
    </div>
</div>


                <GuestMessages />
                
                

            </div>
        </>
    );
}