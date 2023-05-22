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
import img3 from '../images/eventos/batevolta/rosilhaFim.jpg';
import img4 from '../images/eventos/batevolta/videirasFim.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Eventos() {
  return (
    <div className="fundo">
      <div className="">
        <Container className='margem'>
          <h4 className="titulo text-2xl font-bold bg-green-800">
            <strong >PRÓXIMOS EVENTOS</strong>
          </h4>

          {/*BATE E VOLTA*/}
            <strong className='mt-2 content-center text-black text-bold '>
                <Button href="/bateVolta">
                <strong className='font-bold text-green-800'>Bate e Volta</strong>
              </Button>
            </strong>
            <Grid container spacing={4} className='primeiraLinha'>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoBateVolta1">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img2}
                      alt="Bate e Volta"
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
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-red-300 duration-300">
                  <Link href="/eventoBateVolta2">
                    <Image
                      className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                      src={img1}
                      alt="Bate e Volta"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Cobiçado x Ventania</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/eventoBateVolta2'>
                      <strong><p className="mt-2 content-center text-black text-bold">Clique aqui</p></strong>
                    </Button>
                  </div>
                </div>
              </Grid>

              {/*<Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
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
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/#'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
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
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                    <Button href='/#'>
                      <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                    </Button>
                  </div>
                </div>
              </Grid>*/}
            </Grid>
        </Container>
      </div>
      {/*BATE E VOLTA*/}

      {/*FINS DE SEMANA*/}
      <div>
        <Container className=''>
          <Button href="/fds">
                <strong className='font-bold text-green-800'>FINS DE SEMANA</strong>
          </Button>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFDS1">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="FINS DE SEMANA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/eventoFDS1'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFDS2">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img4}
                      alt="FINS DE SEMANA"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                      <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Videiras x Araras</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Petrópolis - RJ</p>
                      <Button href='/eventoFDS2'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>
              {/*<Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFDS3">
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
                    <Button href='/eventoFDS3'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFDS4">
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
                      <Button href='/eventoFDS4'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>*/}
            </Grid>          
        </Container>
      </div>
      {/*FINS DE SEMANA*/}

      {/*FERIADOS*/}
      <div className='margem'>
        <Container className=''>
          <Button href="/feriados">
                <strong className='font-bold text-green-800'>FERIADOS</strong>
            </Button>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFeriados1">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="FERIADOS"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/eventoFeriados2'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/eventoFeriados2">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img4}
                      alt="FERIADOS"
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
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
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
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
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
      {/*FERIADOS*/}

      {/*PNE*/}
      <div className='margem'>
        <Container className=''>
          <Button href="/pne">
                <strong className='font-bold text-green-800'>PNE</strong>
              </Button>  <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/pne">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="PNE"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/pne'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>
            </Grid>          
        </Container>
      </div>
      {/*PNE*/}

      {/*PARA ELAS*/}
      <div className='margem'>
        <Container className=''>
        <Button href="/paraElas">
              <strong className='font-bold text-pink-500'>PARA ELAS</strong>
          </Button>   
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/paraElas">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="PARA ELAS"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/paraElas'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>              
            </Grid>          
        </Container>
      </div>
      {/*PARA ELAS*/}

      {/*KIDS*/}
      <div className='margem'>
        <Container className=''>
          <Button href="/kids">
              <strong className='font-bold text-orange-800'>KIDS</strong>
          </Button>   
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <div className="card max-w-sm  border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-gray-400 duration-300">
                  <Link href="/kids">
                    <Image
                      className='h-full w-full object-fill object-center md:h-full'
                      src={img3}
                      alt="KIDS"
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Pedra da Rosilha</h2>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Rio de Janeiro - RJ</p>
                    <Button href='/kids'>
                        <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                      </Button>
                  </div>
                </div>
              </Grid>              
            </Grid>     
            <div>            
          </div>
        </Container>
      </div>
      {/*KIDS*/}
    </div>     
  )
}

