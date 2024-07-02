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
                <img src="./imagens/foto1.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              <Curtidas></Curtidas>
            </div>
          </div>

          <div class="col-6 mb-2">
            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto2.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>
              <Curtidas></Curtidas>
            </div>
          </div>
          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto3.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              <Curtidas></Curtidas>

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto4.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              <Curtidas></Curtidas>

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto5.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              <Curtidas></Curtidas>

            </div>
          </div>

          <div class="col-6 mb-2">

            <div class="card">
              <div className="text-center">
                <img src="./imagens/foto6.svg" width="170px" height="160px" className="me-12" alt="Historia" />
              </div>

              <Curtidas></Curtidas>

            </div>
          </div>










        </div>
      </div>




    </>
  );
}
