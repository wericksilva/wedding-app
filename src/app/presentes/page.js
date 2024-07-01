"use client"

import { useState } from "react";
import CountDown from "../components/countdown";


export default function Home() {

   


    return (
        <>

<div className="container">
<a className="nav-link" href="/wedding-app/">
                <div className="text-center">
                    <img src="./imagens/baner.svg" width="352px" className="me-12" alt="Banner" />
                </div>
            </a>
            </div>
            
            <CountDown></CountDown>


            <div class="container" style={{ marginTop: "10px" }} >
  <div class="row">
  
  <div class="col-6 mb-2">
      <div class="card">
      <div className="text-center">
                            <img src="./imagens/jantar.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body">
          <p class="card-text">Jantar em um restaurante</p>
          <p class="card-text">250 R$</p>
        </div>
      </div>
    </div>

    <div class="col-6 mb-2">
      <div class="card">
      <div className="text-center">
                            <img src="./imagens/polonorte.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body">
          <p class="card-text">Expedição ao Polo Norte ou Antártida.</p>
          <p class="card-text">5.000,00 R$</p>
        </div>
      </div>
    </div>
    <div class="col-6 mb-2">
      <div class="card">
        <div className="text-center">
                            <img src="./imagens/streaming.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body">
          <p class="card-text">Um mês de assinatura de um streaming</p>
         
          <p class="card-text">50 R$</p>
        </div>
      </div>
    </div>
   
    <div class="col-6 mb-2">
      <div class="card">
      <div className="text-center">
                            <img src="./imagens/internet.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body">
          <p class="card-text">Um mês de assinatura de internet</p>
          <p class="card-text">100 R$</p>
        </div>
      </div>
    </div>

    
      
        <div className="container text-center">
                <div className="card mt-2">
                    <div className="card-body">

                    <p class="card-text">Para nos presentear de forma simples e rápida, utilize nossa chave PIX dedicada:</p>
                    <p class="card-text">(61) 98235-3621</p>
                       </div>
                </div>
    
</div>
    
    
  </div>
</div>


           
      
        </>
    );
}
