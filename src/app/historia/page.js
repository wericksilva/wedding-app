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

            <p>Durante essa jornada, compartilhamos valores e alinhamos pensamentos, construindo uma base firme para o futuro. Vivenciamos juntos as mais diversas emoções e experiências, e agora, com clareza e convicção, decidimos dar o próximo passo: casar. Estamos ansiosos para construir uma família linda e repleta de amor, e mal podemos esperar para compartilhar essa nova etapa com vocês.</p>
            
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: "10px" }} >
        <div class="row">

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto1.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto2.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>
              
            </div>
          </div>
          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto3.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto4.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

            

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto5.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
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
