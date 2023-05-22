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

function Cancelamento() {
  return (
    <Container className="margem ">
        <div className="fundo">            
            <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong >POLÍTICAS DE CANCELAMENTO</strong>
            </h4>

            <span>
                <Evento />
            </span>

            <p className='identa'>
              Em caso de cancelamento por iniciativa do cliente, em consonância com a deliberação normativa nº 161 de 09 de Agosto de 1985, da Embratur:
            </p>

            <p className='identa'>
              A devolução será feita nas seguintes condições: <br />
            </p>

            
              <ol className="identa">
                <li>Até 30 dias antes do inicio do passeio: 90% do valor depositado;</li>
                <li>Entre 29 e 21 dias antes do inicio do passeio: 80% do valor depositado;</li>
                <li>Entre 20 e 7 dias antes do inicio do passeio: 50% do valor depositado;</li>
                <li>Menos de 7 dias antes do inicio do passeio: sem devolução;</li>
                <li>Em caso de interrupção do passeio durante sua execução devido a fatores climáticos não haverá devolução do valor pago pelo passeio.</li>
              </ol>

              <div className="container-fluid container-md">
                <ul className="pagination">
                  <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="Servicos">Mais Servicos</Link></li>
                  <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="cancelamento">1</Link></li>
                  <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="duvidas">2</Link></li>
                  <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="termos">3</Link></li>
                </ul>
              </div>
        </div>
    </Container>
  )
}

export default Cancelamento
