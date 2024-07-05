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
            <img src="./imagens/baner.svg" width="370px" className="me-12" alt="Banner" />
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
                <img src="./imagens/polonorte.svg" width="170px" height="110px" className="me-12" alt="Historia" />
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
          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/luademel.svg" width="170px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text"> Contribuição com a lua de mel.</p>
                <p class="card-text"></p>
                <p class="card-text">Qualquer valor</p>
              </div>
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/balao.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Passeio de balão ou trilha guiada.</p>
                <p class="card-text"></p>
                <p class="card-text">200 R$</p>
              </div>
            </div>
          </div>
          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/massagem.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Massagens e relaxamento.</p>
                <p class="card-text"></p>
                <p class="card-text">200 R$</p>
              </div>
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/cinema.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Dois ingresso de cinema.</p>
                <p class="card-text"></p>
                <p class="card-text">70 R$</p>
              </div>
            </div>
          </div>
          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/show.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Ingressos show/evento.</p>
                <p class="card-text"></p>
                <p class="card-text">100 R$</p>
              </div>
            </div>
          </div>
          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/piquenique.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Piquenique no Parque.</p>
                <p class="card-text"></p>
                <p class="card-text">50 R$</p>
              </div>
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/viajems.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Passagens aereas qualquer destino.</p>
                <p class="card-text"></p>
                <p class="card-text">Qualquer valor.</p>
              </div>
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/paraquedas.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div class="card-body" >
                <p class="card-text">Um dia de  novas experiência.</p>
                <p class="card-text"></p>
                <p class="card-text">Qualquer valor.</p>
              </div>
            </div>
          </div>
         



          <div className="container text-center">
            <div className="card mt-2">
              <div className="card-body">
                <p class="card-text">Para nos presentear de forma simples e rápida, utilize chave PIX ou Cartão de Credito</p>

                <div class="row">

                  <div class="row">
                  <span id="pix-ke-chavey" style={{ marginRight: "10px" }} >Chave PIX:</span>
                    <span id="pix-key" style={{ marginRight: "10px" }} >f1d8428e-3d73-4bc2-b8b3-4359a84d5d08


                    <svg xmlns="http://www.w3.org/2000/svg" color="blue" class="link-primary bi bi-copy" onClick={handleSvgClick} style={{ marginLeft: "15px" }} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                    </span>
                    
                  </div>

                </div>
                <span id="pix-ke-chavey" style={{ marginRight: "30px" }} >Cartão de Credito:</span>
                <a className="nav-link link-primary" target="_blank" href="https://picpay.me/werick.silva9">
                  <p class="card-text">PicPay: https://picpay.me/werick.silva9

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
