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

import img1 from '../images/dicas/primeira.jpg';
import img2 from '../images/dicas/bota.jpg';
import img3 from '../images/dicas/mochila.jpg';
import img4 from '../images/dicas/motivo.jpg';
import img5 from '../images/dicas/barraca.jpg';
import img6 from '../images/dicas/trekking.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function Dicas() {
  return (
    <div className="fundo">
      <Container className='margem'>
        <h4 className="titulo text-2xl font-bold bg-green-800">
          <strong >DICAS</strong>
        </h4>

        <span>
          <Evento />
        </span>

        <h5>
          <p>Aqui mostraremos nossas melhores dicas para você se preparar para suas aventuras.</p>
        </h5>
          
        <Grid container spacing={4} className='primeiraLinha'>
          <Grid item xs={6} md={3}>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <Link href="/primeiraTrilha">
                <Image
                  className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                  src={img1}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Sua primeira trilha?</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para a sua primeira aventura</p>
                <Button href='/primeiraTrilha'>
                  <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <Link href="/#">
                <Image
                  className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                  src={img2}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Dúvida na escolha da bota?</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para o calçado adequado para você</p>
                <Button href='/#'>
                  <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <Link href="/mochila">
                <Image
                  className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                  src={img3}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Como organizar a sua mochila?</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para preparar a sua mochila</p>
                <Button href='/mochila'>
                  <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <Link href="/motivos">
                <Image
                  className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                  src={img4}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Quer começar a trilhar?</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira os benefícios de trilhar e conhecer a natureza</p>
                <Button href='/motivos'>
                  <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      
        <Grid container spacing={4} className='primeiraLinha'>
            <Grid item xs={6} md={3}>
              <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <Link href="/#">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img5}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Cobiçado x Ventania</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para a sua primeira aventura</p>
                  <Button href='/#'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <Link href="/#">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img6}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Sua primeira trilha?</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para a sua primeira aventura</p>
                  <Button href='/#'>
                    <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                  </Button>
                </div>
              </div>
            </Grid>

            {/*<Grid item xs={6} md={3}>
              <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <Link href="/#">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img1}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Sua primeira trilha?</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para a sua primeira aventura</p>
                  <Button href='/#'>
                    <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <Link href="/#">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img2}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Sua primeira trilha?</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Confira nossas dicas para a sua primeira aventura</p>
                  <Button href='/#'>
                    <strong><p className=" mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                  </Button>
                </div>
              </div>
            </Grid>*/}
          </Grid>
      </Container>
    </div>     
  )
}

