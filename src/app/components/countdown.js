"use client"

import { useState, useEffect } from "react";

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const countDownDate = new Date("Feb 8, 2025 11:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft("CHEGOU A HORA!");
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
                <div className="text-center mt-4 font-italic">

                    <p>Dia 08 de Fevereiro de 2025, ás 11h:30</p>

                </div>
            </div>


            <div className="container">
                <div className="text-center mt-8 d-flex align-items-center justify-content-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                    </svg>
                    <p className="ms-2 mb-0 align-middle">{timeLeft}</p>
                </div>


            </div>

            
        </>
    );
}