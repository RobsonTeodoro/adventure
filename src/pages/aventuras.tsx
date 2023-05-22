import React from "react";
import Image from "next/image";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import { Container } from "@mui/material";

import Evento from "@/components/Evento/Evento";

import img1 from '../images/aventuras/janeladoceu.jpg';
import img2 from '../images/aventuras/Acu.jpg';
import img3 from '../images/aventuras/bonsucesso.jpg';
import img4 from '../images/aventuras/tartaruga3.jpg';
import img5 from '../images/aventuras/portaisDeHercules.jpg';
import img6 from '../images/aventuras/Gavea.jpg';


export default function Aventuras() {
  return (
    <div className='fundo'>
      <Container className='margem'>
      <h4>Veja por onde nós já passamos!</h4>
      <span>
        <Evento />
      </span>
        <div style={{ display: 'block', width: 700, padding: 60}} className="my-8 py-8">          
            <Carousel fade>
              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img1}
                  alt="Image One"
                />
                <Carousel.Caption>
                  <h3>Janela do Céu</h3>
                  <p>Ibitipoca - MG</p>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img2}
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>Portais de Hécules</h3>
                  <p>Travessia Petrópolis x Teresópolis</p>
                </Carousel.Caption>        
              </Carousel.Item>
              
              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img3}
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>Torres de Bonssucesso</h3>
                  <p>Teresópolis - RJ</p>
                </Carousel.Caption>        
              </Carousel.Item>

              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img4}
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>Pedra da Tartaruga - Vista para a Mulher de Pedra</h3>
                  <p>Teresópolis - RJ</p>
                </Carousel.Caption>        
              </Carousel.Item>

              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img5}
                  alt="Image Two"
                />
                <Carousel.Caption>
                <h3>Portais de Hécules</h3>
                <p>Travessia Petrópolis x Teresópolis</p>
                </Carousel.Caption>        
              </Carousel.Item>

              <Carousel.Item interval={3500}>
                <Image
                  className="d-block w-100"
                  src={img6}
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>Morro dois Irmãos</h3>
                  <p>Rio de Janeiro - RJ</p>
                </Carousel.Caption>        
              </Carousel.Item>

            </Carousel>
        </div>
      </Container>
    </div>
  );
}