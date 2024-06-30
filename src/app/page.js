"use client"

import { useState, useEffect } from "react";
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'react-bootstrap';

export default function Home() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const countDownDate = new Date("Feb 8, 2025 00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft("EXPIRED");
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${days}D - ${hours}H - ${minutes}M - ${seconds}S`);
        };

        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container">
                <div className="text-center">
                    <img src="./imagens/baner.svg" width="352px" className="me-12" alt="Banner" />
                </div>
            </div>

            <div className="container">
                <div className="text-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                    <h5>{timeLeft}</h5>
                </div>
            </div>

            <div className="container text-center">
                <div className="card mt-2">
                    <div className="container">
                        <div className="text-center">
                            <img src="./imagens/historia.svg" width="352px" height="205px" className="me-12" alt="Historia" />
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Other content */}
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
                        {/* Other content */}
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
                        {/* Other content */}
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                        <a className="nav-link" target="_blank" href="https://www.listapresenca.com.br/?d=NzMwOF84NjA3">
                            <div className="text-center">
                                <img src="./imagens/presenca.svg" width="352px" height="205px" className="me-12" alt="Presenca" />
                            </div>
                        </a>
                    </div>
                    <div className="card-body">
                        {/* Other content */}
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="container">
                        <div className="text-center">
                            <img src="./imagens/presentes.svg" width="352px" height="205px" className="me-12" alt="Presentes" />
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Other content */}
                    </div>
                </div>
            </div>
        </>
    );
}