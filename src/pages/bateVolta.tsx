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

import img1 from '../images/eventos/batevolta/cobvent.jpg';
import img2 from '../images/eventos/batevolta/videirasFim.jpg';
import img3 from '../images/eventos/batevolta/rosilha.jpg';
import img4 from '../images/eventos/batevolta/videiras.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function bateVolta() {
  return (
      <div className="fundo">
        <Container className='margem'>
          <h4 className="titulo text-2xl font-bold bg-green-800">
            <strong >BATE E VOLTA</strong>
          </h4>

          <span>
            <Evento />
          </span>

          {/*BATE E VOLTA*/}
          <strong className='font-bold text-green-800'>BATE E VOLTA</strong>
            <Grid container spacing={4} className='primeiraLinha'>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoBateVolta1">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img2}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/eventoBateVolta1'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoBateVolta2">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img1}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Cobiçado x Ventania</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/eventoBateVolta2'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>
              
              {/*<Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                  <Link href="/eventoBateVolta3">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img2}
                      alt="Cabeça de Dragão"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/eventoBateVolta3'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                  <Link href="/eventoBateVolta4">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img2}
                      alt="Cabeça de Dragão"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/eventoBateVolta4'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>*/}
            </Grid>          
        </Container>
      </div>    
  )
}

