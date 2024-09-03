"use client"

import { useState, useEffect } from "react";
import CountDown from "./components/countdown";
import { Router } from "next/router";


export default function Home() {
    return (
        <>
            <div className="container">
                <div className="text-center mt-4">
                    
                    <img src="./imagens/baner.svg" width="370px" className="me-12" alt="Banner" />
                </div>
            </div>

            <CountDown></CountDown>

            <div className="container text-center">
                <div className="mt-2">
                    <div className="container">
                        <a href="/wedding-app/historia">
                        <div className="text-center">
                            <img src="./imagens/historia.svg" width="352px" height="205px" className="me-12" alt="Historia" />
                        </div>
                        </a>
                    </div>
                    <div className="card-body mt-4">
                    
                        <p>Nos conhecemos ainda crianças, em 2004, e acompanhamos um ao outro ao longo de todos esses anos. Vimos a infância se transformar em adolescência, a adolescência em juventude, e agora, com a maturidade dos adultos, olhamos para trás com gratidão e carinho. Nossa amizade e cumplicidade cresceram e se fortaleceram com o tempo, e temos a certeza de que estamos prontos para iniciar um casamento centrado em Cristo.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="container">
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9">
                            <div className="text-center">
                                <img src="./imagens/cerimonia.svg" width="352px" height="205px" className="me-12" alt="Cerimonia" />
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <p>É com imensa alegria que convidamos você para celebrar conosco o nosso casamento, que acontecerá no dia 08 de fevereiro de 2025, às 11h30, na Catedral Metropolitana de Brasília, Nossa Senhora Aparecida. Este será um momento muito especial para nós, e sua presença será uma grande honra.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="container">
                          
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8">
                            <div className="text-center">
                                <img src="./imagens/recepcao.svg" width="352px" height="205px" className="me-12" alt="Recepcao" />
                            </div>
                         </a>

                    </div>
                    <div className="card-body">
                        <p>Após a cerimônia, teremos o prazer de recebê-los para a recepção no Salão Itamaraty da Steak Bull. A festa começará logo após o término da celebração na catedral. Queremos ressaltar a importância de estarem conosco desde a cerimônia até a recepção, para que possamos compartilhar juntos todos os momentos deste dia inesquecível.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="container">
                        <a className="nav-link" target="_blank" href="https://forms.gle/52Uy58jHBpuMQHW97">
                            <div className="text-center" style={{ marginTop: "36px" }}>
                                <img src="./imagens/presenca.svg" width="355px" height="190px" className="me-12" alt="Presenca" />
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <p>Para que possamos nos preparar da melhor forma para a nossa celebração, pedimos a gentileza de confirmar sua presença até o dia 20 de dezembro de 2024. A presença de cada um de vocês é muito importante para nós, mas entendemos que imprevistos podem ocorrer e outros compromissos podem já estar agendados para essa data.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="container">
                    <a href="/wedding-app/presentes">
                                    
                        <div className="text-center">
                            <img src="./imagens/presentes.svg" width="355px" height="190px" className="me-12" alt="Presentes" />
                        </div>
                                </a>
                    </div>
                    <div className="card-body">
                        <p>Para aqueles que desejarem nos presentear, ficaremos imensamente gratos. O que mais desejamos é a sua presença, mas, caso queira nos agraciar com um presente, preparamos uma lista especial com experiências que enriquecerão nossa vida juntos e criarão memórias afetivas inesquecíveis.</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="container">
                    <a href="/wedding-app/padrinhos">
                                    
                        <div className="text-center">
                            <img src="./imagens/padrinhos.svg" width="355px" height="190px" className="me-12" alt="Presentes" />
                        </div>
                                </a>
                    </div>
                    <div className="card-body">
                        <p>Queridos padrinhos e madrinhas, é com imensa alegria que contamos com a presença e o apoio de vocês neste momento tão especial de nossas vidas. Sabemos que o papel de vocês vai muito além de estar ao nosso lado no altar. Vocês são parte essencial desta jornada, amigos queridos que escolhemos para compartilhar e celebrar nosso amor.</p>
                    </div>
                </div>

                
            </div>
        </>
    );
}