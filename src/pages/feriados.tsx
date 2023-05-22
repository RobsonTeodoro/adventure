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

import img1 from '../images/eventos/feriados/rosilhaFim.jpg';
import img2 from '../images/eventos/feriados/videirasFim.jpg';
import img3 from '../images/eventos/feriados/rosilha.jpg';
import img4 from '../images/eventos/feriados/videiras.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function Feriados() {
  return (
    <div className="fundo">
        <Container className='margem'>
          <h4 className="titulo text-2xl font-bold bg-green-800">
            <strong >FERIADOS</strong>
          </h4>

          <div>
        <Container className=''>
        <span>
          <Evento />
        </span>

          <p>
            <strong className='font-bold text-green-800'>FERIADOS</strong>
          </p>

            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoFeriados1">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img1}
                      alt="FINS DE SEMANA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/eventoFeriados1'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoFeriados2">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img2}
                      alt="FINS DE SEMANA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                      <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                      <Button href='/eventoFeriados2'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>
              {/*<Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoFeriados3">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="Cabeça de Dragão"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/eventoFeriados3'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoFeriados4">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img4}
                      alt="Cabeça de Dragão"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                      <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                      <Button href='/eventoFeriados4'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>*/}
            </Grid>          
        </Container>
      </div>
    </Container>
  </div>
  )
}

