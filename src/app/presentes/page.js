"use client"

import { useState } from "react";
import CountDown from "../components/countdown";


export default function Home() {

  const handleSvgClick = async () => {
    try {
      const textToCopy = document.getElementById('pix-key').innerText;
      await navigator.clipboard.writeText(textToCopy);
      alert('Chave Pix copiada para a área de transferência!');
    } catch (error) {
      console.error('Falha ao copiar a Chave Pix:', error);
      alert('Erro ao copiar a Chave Pix.');
    }
  };


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
          <p class="card-text" color="blue">250 R$</p>
        </div>
      </div>
    </div>

    <div class="col-6 mb-2">
      <div class="card">
      <div className="text-center">
                            <img src="./imagens/polonorte.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body">
          <p class="card-text">Expedição Polo Norte ou Antártida</p>
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
          <p class="card-text">Um mês de tv/streaming</p>
         
          <p class="card-text">50 R$</p>
        </div>
      </div>
    </div>
   
    <div class="col-6 mb-2">
      <div class="card">
      <div className="text-center">
                            <img src="./imagens/internet.svg" width="175px" height="110px" className="me-12" alt="Historia" />
                        </div>
        <div class="card-body" >
          <p class="card-text">Um mês de internet celular </p>
          <p class="card-text"></p>
          <p class="card-text">100 R$</p>
        </div>
      </div>
    </div>

    
      
        <div className="container text-center">
                <div className="card mt-2">
                    <div className="card-body">

                    <p class="card-text">Para nos presentear de forma simples e rápida, utilize nossa chave PIX dedicada:</p>
                    <p class="card-text">Chave Pix: f1d8428e-3d73-4bc2-b8b3-4359a84d5d08 



                    </p>
                    
                    <a className="nav-link" target="_blank" href="https://picpay.me/werick.silva9">
                    <p class="card-text">link PicPay: https://picpay.me/werick.silva9
                            
                    </p>
                  
                        </a>

          

        

                       </div>
                </div>
    
</div>
    
    
  </div>
</div>


           
      
        </>
    );
}
