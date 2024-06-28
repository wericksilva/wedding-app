import Image from "next/image";
import styles from "./page.module.css";

// or less ideally
import { Button } from 'react-bootstrap';
export default function Home() {
    return (
        <>
            {/*
            <header className="bg-success py-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Samanta & Werick</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Cerimonia</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Recepção</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Capsula do tempo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Lista presente</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            */}
            <body>
                <div className="container">
                    <div className="text-center"> {/* Corrigido: className para text-center */}
                        <img src="./imagens/baner.svg" width="352px" className="me-12" alt="Banner" /> {/* Corrigido: atributo className */}
                    </div>
                </div>


                <div className="container text-center" >


                    <div class="card  mt-2">
                        <div className="container">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/historia.svg" width="352px" height="205px" className="me-12" alt="Historia" /> {/* Corrigido: atributo className */}
                            </div>
                        </div>
                        <div class="card-body">
                            Nossa História
                        </div>

                    </div>


                    <div class="card mt-4">
                        <div className="container">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/cerimonia.svg" width="352px" height="205px" className="me-12" alt="Cerimonia" /> {/* Corrigido: atributo className */}
                            </div>
                        </div>
                        <div class="card-body">
                            <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9">



                                <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16">
                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
                                </svg>

                            </a>


                        </div>

                    </div>


                    <div class="card  mt-4">
                        <div className="container">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/recepcao.svg" width="352px" height="205px" className="me-12" alt="Recepcao" /> {/* Corrigido: atributo className */}
                            </div>
                        </div>
                        <div class="card-body">
                            <i class="bi-alarm"></i>
                        </div>
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8">
                            <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                            </svg>
                        </a>
                    </div>

                    <div class="card  mt-4">
                        <div className="container">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/presentes.svg" width="370px" height="200px" className="me-12" alt="Presentes" /> {/* Corrigido: atributo className */}
                            </div>
                        </div>
                        <div class="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-airplane-engines" viewBox="0 0 16 16">
                                <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                            </svg>
                        </div>

                    </div>


                </div>








            </body>
        </>
    );
}
