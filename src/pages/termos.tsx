import React from 'react';
import { ReactDOM } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, Container } from '@mui/material';
import { Grid} from '@mui/material';
import Evento from "@/components/Evento/Evento";

import img1 from '../images/sobre/pablo.jpg';
import img2 from '../images/sobre/carine.jpg';
import img3 from '../images/sobre/eddy.jpg';
import img4 from '../images/sobre/robson.jpg';

function Termos() {
  return (
    <Container className="margem ">
        <div className="fundo">            
            <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong>TERMOS</strong>
            </h4>

            <span>
                <Evento />
            </span>

            <p className='identa'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex neque, maximus sed leo eget, 
              fringilla tempor orci. Nunc non elementum dui. Sed sed est vitae sapien aliquet pellentesque. 
              Donec faucibus ipsum urna, nec porttitor elit cursus vel. Fusce sit amet metus id lectus maximus 
              hendrerit sed non metus. Donec mollis, nisl quis placerat euismod, ligula lacus consectetur mi, 
              sed venenatis nisi neque ac libero. Aenean nec maximus dui. Phasellus fermentum justo sed sapien efficitur
                imperdiet. Mauris fringilla faucibus neque. Nam sollicitudin tempor metus nec vehicula. Vivamus interdum 
                nisl metus, non congue lorem scelerisque in. Proin eget eros egestas, maximus nulla eu, consectetur arcu. 
                Donec eu quam sed turpis cursus feugiat et eu ante. Quisque tempus malesuada lorem, nec eleifend lorem 
                condimentum laoreet. Ut ultricies nunc vitae neque suscipit, vel euismod massa luctus. Sed laoreet sem eu tempor feugiat.
            </p>
            <div className="container-fluid container-md">
                <ul className="pagination">
                  <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="Servicos">Mais Servicos</Link></li>
                  <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="cancelamento">1</Link></li>
                  <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="duvidas">2</Link></li>
                  <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="termos">3</Link></li>
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Termos
