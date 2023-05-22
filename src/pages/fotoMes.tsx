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

import img1 from '../images/fotoMes/ParedaoSantoAntonio.jpg';
import img2 from '../images/fotoMes/parqueDaCidade.jpg';
import img3 from '../images/fotoMes/garrafao.jpg';
import img4 from '../images/fotoMes/travessia.jpg';

export default function fotoMes() {
  return (
      <div className="fundo">
        <Container className='margem'>
          <h4 className="titulo text-2xl font-bold bg-green-800">
            <strong >Fotos do Mês</strong>
          </h4>

        
        <span className="identa">
          <Evento />
        </span>
      

          <p className="identa">
            Aqui estão as fotos destaques desse mês!
          </p>

            <Grid container spacing={4} className='primeiraLinha'>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img1}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Paredao de Santo Antônio</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Ibitipoca - MG</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img2}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Parque da cidade</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Niterói - RJ</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img3}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Garrafão</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Travessia Petrópolis x Teresópolis- RJ</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img4}
                      alt="BATE E VOLTA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Travessia Petrópolis x Teresópolis- RJ</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Travessia Petrópolis x Teresópolis- RJ</p>
                  </div>
                </div>
              </Grid>
            </Grid>          
        </Container>
      </div>    
  )
}

