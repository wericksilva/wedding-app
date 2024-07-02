"use client"

import { useState } from "react";
import CountDown from "../components/countdown";


export default function Home() {


  const [counter, setCounter] = useState(1000);

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

            <div className="text-center">
              <img src="./imagens/foto1.svg" width="170px" height="160px" className="me-12" alt="Historia" />
            </div>

            <div className="text-center">

              <svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg"  style={{ width: "30px" , height: "18px"  }} h color="red" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
              <span>{counter}</span>
              
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "35px" , height: "18px"  }} color="red" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "18px"   }}  fill="currentColor" color="red" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
            </div>

          </div>

          <div class="col-6 mb-2">

            <div className="text-center">
              <img src="./imagens/foto2.svg" width="170px" height="160px" className="me-12" alt="Historia" />
            </div>
            <div className="text-center">

<svg onClick={handleSvgClick} xmlns="http://www.w3.org/2000/svg" width="16" style={{ width: "30px", height: "18px"   }}  color="red" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
</svg>
<span>{counter+1000}</span>
<svg xmlns="http://www.w3.org/2000/svg" style={{ width: "35px", height: "18px"   }}  color="red" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "18px"   }}  fill="currentColor" color="red" class="bi bi-send" viewBox="0 0 16 16">
<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
</div>

          </div>
          <div class="col-6 mb-2">


            <div className="text-center">
              <img src="./imagens/foto3.svg" width="170px" height="160px" className="me-12" alt="Historia" />
            </div>

            <div className="text-center">

<svg onClick={handleSvgClick}xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "18px"   }}color="red" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
</svg>
<span>{counter +2000}</span>
<svg xmlns="http://www.w3.org/2000/svg" style={{ width: "35px", height: "18px"   }}  color="red" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "18px"   }} fill="currentColor" color="red" class="bi bi-send" viewBox="0 0 16 16">
<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
</div>

          </div>








        </div>
      </div>




    </>
  );
}
