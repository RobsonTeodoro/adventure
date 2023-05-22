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

import img1 from '../images/eventos/elas/rosilhaFim.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function paraElas() {
  return (
    <div className="fundo">
      <Container className='margem'>
        <h4 className="titulo text-2xl bg-green-800">
          <strong >PARA ELAS</strong>
        </h4>

        <span className='identa'>
            <Evento />
          </span>
          <br />

        <p className="identa">
          Página exclusiva para mulheres que desejam fazer trilhas, nossa guia 
          <Link className="text-pink-600 font-weight-bold hover:text-pink-400" href="/guias">
            <strong> Carine Ribeiro</strong>
          </Link> levará* você nos eventos marcados aqui ou, caso queira conhecer outros destinos, nos envie um email clicando no botão abaixo e agende sua aventura!
        </p>
  
        
        <Grid container spacing={4} className='primeiraLinha'>
          <Grid item xs={6} md={3}>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <Link href="/eventoParaElas">
                <Image
                  className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                  src={img1}
                  alt="PARA ELAS"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Cobiçado x Ventania</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                <Button href='/eventoParaElas'>
                  <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <p className="identa">
          *Poderá ter no mínimo 1 (um) <Link className="text-pink-600 font-bold hover:text-pink-400" href="/guias">guia</Link> do sexo masculino para auxílio do guiamento.
        </p>
      </Container>
    </div>
  )
}

