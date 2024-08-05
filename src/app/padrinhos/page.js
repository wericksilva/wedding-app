"use client"

import { useState } from "react";
import CountDown from "../components/countdown";
import Curtidas from "../components/curtidas";

export default function Home() {


  const [counter, setCounter] = useState(1);

  const handleSvgClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleOpenPdf = () => {
    // URL do arquivo PDF que você deseja abrir
    const pdfUrl = './imagens/manual-padrinhos.pdf';

    // Abrir o PDF em uma nova aba
    window.open(pdfUrl, '_blank');
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

      <div class="container" style={{ marginTop: "10px" }} >
        <div class="row">

          

          <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" onClick={handleOpenPdf} type="button">Abrir Manual</button>

</div>

        </div>
      </div>



    </>
  );
}
