"use client"

import { useState } from "react";
import CountDown from "../components/countdown";
import Quiz from "../components/Quiz";
import { Carousel } from "react-bootstrap";

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
              <img src="./imagens/historia.svg" width="352px" height="205px" className="rounded-circle me-12" alt="Historia" />
            </div>

          </div>

          <div className="card-body">

            <p>Durante essa jornada, compartilhamos valores e alinhamos pensamentos, construindo uma base firme para o futuro. Vivenciamos juntos as mais diversas emoções e experiências, e agora, com clareza e convicção, decidimos dar o próximo passo: casar. Estamos ansiosos para construir uma família linda e repleta de amor, e mal podemos esperar para compartilhar essa nova etapa com vocês.</p>

          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: "10px" }} >
        <div class="row">
          <Carousel interval={3000} controls={false} pause={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Nosso Grande Dia</h3>
                <p>A jornada que nos trouxe até aqui é cheia de amor, sorrisos e memórias inesquecíveis.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Juntos, Hoje e Sempre</h3>
                <p>Desde o primeiro encontro até o altar, cada momento foi especial porque foi ao seu lado.</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Uma Nova Aventura</h3>
                <p>Estamos prontos para escrever o próximo capítulo da nossa história, repleto de amor e felicidade.</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto4.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>A Promessa de Sempre</h3>
                <p>Prometemos nos amar e apoiar, hoje e por todos os dias de nossas vidas.</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto5.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Corações Entrelaçados</h3>
                <p>Dois corações, uma alma. Nosso amor nos guia para um futuro brilhante juntos.</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto6.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Nossa História de Amor</h3>
                <p>Do primeiro olhar ao "sim", cada passo nos trouxe mais perto desse dia inesquecível.</p>


              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto7.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Um Amor Para a Eternidade</h3>

                <p>A jornada que começamos hoje será repleta de alegrias, desafios e muito amor.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto8.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Dois Corações, Uma História</h3>

                <p>Cada passo que damos juntos nos aproxima ainda mais do nosso conto de fadas.</p>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto9.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Uma Nova Aventura</h3>
                <p>Estamos prontos para escrever o próximo capítulo da nossa história, repleto de amor e felicidade.</p>

              </Carousel.Caption>
            </Carousel.Item>

           

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./imagens/foto11.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Corações Entrelaçados</h3>
                <p>Dois corações, uma alma. Nosso amor nos guia para um futuro brilhante juntos.</p>

              </Carousel.Caption>
            </Carousel.Item>



          </Carousel>

          {/** 
          <Quiz />*/}

        </div>
      </div>

    </>
  );
}
