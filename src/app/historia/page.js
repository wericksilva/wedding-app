"use client"

import { useState } from "react";
import CountDown from "../components/countdown";
import Curtidas from "../components/curtidas";

export default function Home() {


  const [counter, setCounter] = useState(1);

  const handleSvgClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

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

      <div className="container text-center">
        <div className="mt-2">
          <div className="container">
         
              <div className="text-center">
                <img src="./imagens/historia.svg" width="352px" height="205px" className="me-12" alt="Historia" />
              </div>
            
          </div>
           
          <div className="card-body">

            <p>Era uma vez dois corações destinados a se encontrar. Em uma tarde ensolarada, nossos olhares se cruzaram e, desde então, nossas vidas se entrelaçaram de forma mágica. Cada riso, cada abraço, fortaleceu nosso amor e cumplicidade. Hoje, celebramos essa jornada incrível, prontos para escrever novos capítulos juntos. Que nosso futuro seja sempre iluminado por esse amor tão especial.</p>
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: "10px" }} >
        <div class="row">

          <div class="col-6 mb-2">
            <div >
              <div className="text-center">
                <img src="./imagens/foto1.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              
            </div>
          </div>

          <div class="col-6 mb-2">
            <div >
              <div className="text-center">
                <img src="./imagens/foto2.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>
              
            </div>
          </div>
          <div class="col-6 mb-2">

            <div >
              <div className="text-center">
                <img src="./imagens/foto3.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              

            </div>
          </div>

          <div class="col-6 mb-2">

            <div >
              <div className="text-center">
                <img src="./imagens/foto4.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

            

            </div>
          </div>

          <div class="col-6 mb-2">

            <div >
              <div className="text-center">
                <img src="./imagens/foto5.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              

            </div>
          </div>

          <div class="col-6 mb-2">

            <div >
              <div className="text-center">
                <img src="./imagens/foto6.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

             

            </div>
          </div>










        </div>
      </div>




    </>
  );
}
