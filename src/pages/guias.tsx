import React from 'react';
import { ReactDOM } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, Container } from '@mui/material';
import { Grid} from '@mui/material';

import img1 from '../images/guias/pablo.jpg';
import img2 from '../images/guias/carine.jpg';
import img3 from '../images/guias/eddy.jpg';
import img4 from '../images/guias/karina.jpg';

import Evento from "@/components/Evento/Evento";

function Guias() {
  return (
    <div className="fundo">
        <Container className="margem ">
            <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong>GUIAS</strong>
            </h4>

            <span>
                <Evento />
            </span>

            <p className="identa">
                Amantes do montanhismo, <Link className="text-green-800 hover:text-green-900 font-bold" href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">Carine Ribeiro
                </Link>, <Link className="text-green-800 hover:text-green-900 font-bold" href="https://www.instagram.com/edventure_expedicoes/" rel="noopener noreferrer"target="_blank">Edson Sena</Link> (Eddy)
                e <Link className="text-green-800 hover:text-green-900 font-bold" href="https://instagram.com/karinabeloguiadeturismo?igshid=p8rtixvww0o7" rel="noopener noreferrer" target="_blank">Karina Belo</Link>,
                concluíram em 2019 o curso de guias da Cadastur e continuam se especializando para melhor atender o grupo.
            </p>       

            <p className = "identa">
                Hoje guias cadastrados Cadastur e oficializados como guias na <Link className="text-green-800 hover:text-green-900 font-bold" href="https://www.turismo.teresopolis.rj.gov.br/servicos/guiasdeturismo" rel="noopener noreferrer" target="_blank">
                Prefeituta de Teresópolis</Link>  realizam excursões dentro do Estado do Rio de Janeiro, incluindo trilhas, expedições, turismo e rafting. Agende sua
                próxima aventura nos enviando um <Link className="text-green-800 hover:text-green-900 font-bold" href="#enviar">email</Link>!   
            </p>

            <br />

            <Grid container spacing={4} className='primeiraLinha'>
                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link href="/#">
                        <Image
                            className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                            src={img1}
                            alt="Pablo Rocha"
                            width={260}
                            height={260}
                        />
                        </Link>
                        <div className="">
                        <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800">Pablo Rocha</h2>
                        <p className="guias mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">CADASTUR 19.239899.42-8</p>
                        <Button href='/#'>
                            <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                        </Button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                                src={img2}
                                alt="Carine Ribeiro"
                                width={260}
                                height={260}
                            />
                        </Link>
                        <div className="">
                        <Link href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800">Carine Ribeiro</h2>
                        </Link>
                        <p className="guias block mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">CADASTUR 19.239899.42-8</p>
                        <Button href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                        </Button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link href="https://www.instagram.com/edventure_expedicoes/" rel="noopener noreferrer"target="_blank">
                            <Image
                                className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                                src={img3}
                                alt="Edson Sena"
                                width={260}
                                height={260}
                            />
                        </Link>
                        <div className="">
                        <Link href="https://www.instagram.com/edventure_expedicoes/" rel="noopener noreferrer"target="_blank">
                            <h2 className="guias block mt-1 text-lg leading-tight text-center font-bold text-green-800">Edson Sena</h2>
                        </Link>
                        <p className="guias mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">CADASTUR 19.476495.43-2</p>
                        <Button href="https://www.instagram.com/edventure_expedicoes/" rel="noopener noreferrer"target="_blank">
                            <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                        </Button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link href="https://www.turismo.teresopolis.rj.gov.br/servicos/guiasdeturismo" rel="noopener noreferrer" target="_blank">
                            <Image
                                className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                                src={img4}
                                alt="Karina Belo"
                                width={260}
                                height={260}
                            />
                        </Link>
                        <div className="">
                        <Link href="https://www.turismo.teresopolis.rj.gov.br/servicos/guiasdeturismo" rel="noopener noreferrer" target="_blank">
                            <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800">Karina Belo</h2>
                        </Link>
                        <p className="guias mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">CADASTUR 19.364056.79-0</p>
                        <Button href="https://www.turismo.teresopolis.rj.gov.br/servicos/guiasdeturismo" rel="noopener noreferrer" target="_blank">
                            <p className="guias mt-2 text-black text-bold">Clique aqui</p>
                        </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Guias
