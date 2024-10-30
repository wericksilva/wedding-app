"use client"

import { useState } from "react";
import CountDown from "../components/countdown";
import ImageUpload from "../components/ImageUpload";

export default function Home() {




    return (
        <>

            <div className="container">
                <a className="nav-link" href="/wedding-app">
                    <div className="text-center">
                        <img src="./imagens/baner.svg" width="370px" className="me-12" alt="Banner" />
                    </div>
                </a>
            </div>

            <CountDown></CountDown>

            

                <ImageUpload />
        </>
    );
}
