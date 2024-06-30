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
                       {/**
                        * 
                                <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
                                </svg>
                        */}
                            
                        </div>

                    </div>


                    <div class="card mt-4">
                        <div className="container">
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/cerimonia.svg" width="352px" height="205px" className="me-12" alt="Cerimonia" /> {/* Corrigido: atributo className */}
                            </div>
                            </a>
                        </div>
                        <div class="card-body">
                            {/***
                             * 
                            <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/q9tLoYmP62dTkNzM9">
                                <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16">
                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282" />
                                </svg>
                            </a>
                             */}
                        </div>
                    </div>


                    <div class="card  mt-4">
                        <div className="container">
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/recepcao.svg" width="352px" height="205px" className="me-12" alt="Recepcao" /> {/* Corrigido: atributo className */}
                            </div>
                            </a>
                        </div>
                        <div class="card-body">
                        {/**
                         * 
                        <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/ww61LAaK9ZgrtEeW8">
                            <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                            </svg>
                        </a>
                         */}
                        </div>
                    </div>


                    <div class="card  mt-4">
                        <div className="container">
                        <a className="nav-link" target="_blank" href="https://www.listapresenca.com.br/?d=NzMwOF84NjA3">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/presenca.svg" width="370px" height="200px" className="me-12" alt="Presenca" /> {/* Corrigido: atributo className */}
                            </div>
                            </a>
                        </div>
                        <div class="card-body">
                            {/**
                             * 
                            <a className="nav-link" target="_blank" href="https://www.listapresenca.com.br/?d=NzMwOF84NjA3">
                                <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                </svg>
                            </a>
                             */}
                        </div>

                    </div>
                    <div class="card  mt-4">
                        <div className="container">
                            <div className="text-center"> {/* Corrigido: className para text-center */}
                                <img src="./imagens/presentes.svg" width="370px" height="200px" className="me-12" alt="Presentes" /> {/* Corrigido: atributo className */}
                            </div>
                        </div>
                        <div class="card-body">
                            {/**
                             * 
                        <svg xmlns="http://www.w3.org/2000/svg" color="green" width="42" height="60" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
                            </svg>
                             */}
                        </div>

                    </div>


                </div>








            </body>
        </>
    );
}
