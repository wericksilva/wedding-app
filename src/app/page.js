"use client"

import { useState, useEffect } from "react";
import CountDown from "./components/countdown";
import { Router } from "next/router";


export default function Home() {
    return (
        <>
            <div className="container">
                <div className="text-center">
                    
                    <img src="./imagens/baner.svg" width="370px" className="me-12" alt="Banner" />
                </div>
            </div>

            <CountDown></CountDown>

            <div className="container text-center">
                <div className=" mt-2">
                    <div className="container">
                        <a href="/wedding-app/historia">
                        <div className="text-center">
                            <img src="./imagens/historia.svg" width="352px" height="205px" className="me-12" alt="Historia" />
                        </div>
                        </a>
                    </div>
                    <div className="card-body mt-4">
                    
                        <p>Nos conhecemos em uma tarde ensolarada e, desde então, nossas vidas se entrelaçaram em uma linda história de amor. Venha descobrir cada capítulo dessa jornada incrível que nos trouxe até aqui.</p>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9">
                            <div className="text-center">
                                <img src="./imagens/cerimonia.svg" width="352px" height="205px" className="me-12" alt="Cerimonia" />
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <p>Junte-se a nós para celebrar o amor e a união em nossa cerimônia especial. Sua presença tornará este momento ainda mais inesquecível.</p>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                          
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8">
                            <div className="text-center">
                                <img src="./imagens/recepcao.svg" width="352px" height="205px" className="me-12" alt="Recepcao" />
                            </div>
                         </a>

                    </div>
                    <div className="card-body">
                        <p>Venha comemorar conosco em nossa recepção! Será uma tarde de alegria, dança e muitas lembranças especiais.</p>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                        <a className="nav-link" target="_blank" href="https://forms.gle/zh1TAMvs3cb3BfXo8">
                            <div className="text-center">
                                <img src="./imagens/presenca.svg" width="355px" height="190px" className="me-12" alt="Presenca" />
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        <p>Confirme sua presença e nos ajude a tornar este dia ainda mais especial. Estamos ansiosos para celebrar com você!</p>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                    <a href="/wedding-app/presentes">
                                    
                        <div className="text-center">
                            <img src="./imagens/presentes.svg" width="355px" height="190px" className="me-12" alt="Presentes" />
                        </div>
                                </a>
                    </div>
                    <div className="card-body">
                        <p>Sua presença é o nosso maior presente, mas se desejar nos presentear, veja nossas sugestões com carinho. Agradecemos de coração!</p>
                    </div>
                </div>

                <div className="card mt-4">
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