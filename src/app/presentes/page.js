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

      <div className="container text-center">
        <div className="mt-2">
          <div className="container">
            
              <div className="text-center">
                <img src="./imagens/presentes.svg" width="355px" height="190px" className="me-12" alt="Presentes" />
              </div>
            
          </div>
          <div className="card-body">

            <p>Nesta lista, você encontrará opções variadas, desde contribuições para nossa lua de mel até experiências únicas como passeios e eventos. Sua contribuição, de qualquer valor, nos ajudará a viver momentos especiais e significativos.
              Agradecemos profundamente por fazer parte desta nova jornada conosco!
            </p>
          </div>
        </div>
      </div>


      <div className="container" style={{ marginTop: "10px" }} >
        <div className="row">

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/jantar.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body">
                <p className="card-text">Jantar em um restaurante</p>
                <p className="card-text" color="blue">R$ 250,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/polonorte.svg" width="170px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body">
                <p className="card-text">Expedição Polo Norte ou Antártida</p>
                <p className="card-text">R$ 5.000,00$</p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/streaming.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body">
                <p className="card-text">Um mês de tv/streaming</p>

                <p className="card-text">R$ 50,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/internet.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Um mês de internet celular </p>
                <p className="card-text"></p>
                <p className="card-text">R$ 100,00</p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/luademel.svg" width="170px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text"> Contribuição com a lua de mel.</p>
                <p className="card-text"></p>
                <p className="card-text">Qualquer valor</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/balao.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Passeio de balão ou trilha guiada.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 200,00</p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/massagem.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Massagens e relaxamento.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 200,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/cinema.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Dois ingressos de cinema.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 70,00</p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/show.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Ingressos show/evento.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 100,00</p>
              </div>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/piquenique.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Piquenique no Parque.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 50,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/viajems.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Passagens aereas qualquer destino.</p>
                <p className="card-text"></p>
                <p className="card-text">Qualquer valor.</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/paraquedas.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Um dia de  novas experiência.</p>
                <p className="card-text"></p>
                <p className="card-text">Qualquer valor.</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/presentinho.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Para não dizer que eu não dei nada.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 50,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/parecetaloka.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Kit calmante para a noiva.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 70,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/futebol.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Liberar o futebol de quarta.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 90,00</p>
              </div>
            </div>
          </div>


          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/chopp.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Uma rodada de chopp.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 100,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/cartao.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Ajude a pagar o cartão.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 500,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/buffet.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Primeiro lugar na fila do buffet.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 120,00</p>
              </div>
            </div>
          </div>

          

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/buque.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Jogar o buquê na sua direção.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 100,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/paodequeijo.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Pão de queijo no aeroporto.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 75,00</p>
              </div>
            </div>
          </div>

          

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/boleto.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Adote um boleto atrasado para ajudar os noivos.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 300,00</p>
              </div>
            </div>
          </div>

          

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/alexa.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Alexa para a noiva ter mais alguém pra mandar.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 250,00</p>
              </div>
            </div>
          </div>

          

          

          

          

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/europa.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Uma viagem para a europa</p>
                <p className="card-text"></p>
                <p className="card-text">Qualquer valor</p>
              </div>
            </div>
          </div>

         
          
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/maracugina.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Maracugina para os noivos.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 250,00</p>
              </div>
            </div>
          </div>

          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/aponsentadoria.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Ajuda para a aposentadoria dos noivos.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 250,00</p>
              </div>
            </div>
          </div>
          
          <div className="col-6 mb-2">
            <div className="card">
              <div className="text-center">
                <img src="./imagens/choro.svg" width="175px" height="110px" className="me-12" alt="Historia" />
              </div>
              <div className="card-body" >
                <p className="card-text">Lenço para não borrar maquiagem da noiva.</p>
                <p className="card-text"></p>
                <p className="card-text">R$ 50,00</p>
              </div>
            </div>
          </div>
          

          <div className="container text-center">
            <div className="card mt-2">
              <div className="card-body">
                <p className="card-text">Para nos presentear de forma simples e rápida, utilize chave PIX ou Cartão de Credito</p>

                <div className="row">

                  <div className="row">
                    <span id="pix-ke-chavey" style={{ marginRight: "10px" }} >Chave PIX:</span>
                    <span id="pix-key" style={{ marginRight: "10px" }}>f1d8428e-3d73-4bc2-b8b3-4359a84d5d08


                      <svg xmlns="http://www.w3.org/2000/svg" color="blue" className="link-primary bi bi-copy" onClick={handleSvgClick} style={{ marginLeft: "15px" }} width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                      </svg>
                    </span>

                  </div>

                </div>
                
                <span id="pix-ke-chavey" style={{ marginRight: "30px" }}>Cartão de Credito Via PicPay:</span>
                <a className="nav-link link-primary" target="_blank" href="https://picpay.me/werick.silva9">
                  <p className="card-text">PicPay: https://picpay.me/werick.silva9

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
