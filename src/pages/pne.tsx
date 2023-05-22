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

import img1 from '../images/eventos/pne/rosilhaFim.jpg';


const inter = Inter({ subsets: ['latin'] })

export default function PNE() {
  return (
    <div className="fundo">
        <Container className='margem'>
          <h4 className="titulo text-2xl font-bold bg-green-800">
            <strong >PNE</strong>
          </h4>

          <span className='identa'>
            <Evento />
          </span>
          
          <strong className='font-bold text-green-800'>PNE</strong>
            <Grid container spacing={4} className='primeiraLinha'>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <Link href="/eventoPNE">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img1}
                      alt="PNE"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/eventoPNE'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
        </Container>
    </div>
  )
}

