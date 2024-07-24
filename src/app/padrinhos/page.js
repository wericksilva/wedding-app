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
        <div className="card mt-2">
          <div className="container">

            <div className="text-center">
              <img src="./imagens/padrinhos.svg" width="352px" height="205px" className="me-12" alt="Historia" />
            </div>

          </div>

          <div className="card-body">

            <p>Bem-vindos, Padrinhos e Madrinhas!</p>
          </div>

          <div className="card-body">

            <p>Nesta página, reunimos todas as informações e orientações necessárias para que possam nos ajudar a tornar este dia inesquecível. Aqui vocês encontrarão um manual detalhado com dicas, sugestões e esclarecimentos sobre suas funções e responsabilidades ao longo do processo.</p>
          </div>
        </div>
      </div>



      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="./imagens/manualPadrinhos.svg" class="d-block w-100" alt="manualPadrinhos"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="./imagens/manualPadrinhos.svg" class="d-block w-100" alt="manualPadrinhos"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./imagens/manualPadrinhos.svg" class="d-block w-100" alt="manualPadrinhos"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.0.2/js/bootstrap.bundle.min.js"></script>


    </>
  );
}
