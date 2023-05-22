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

function Sobre() {
  return (
    <Container className="margem ">
        <div className="fundo">            
            <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong >SOBRE NÓS</strong>
            </h4>

            <span>
                <Evento />
            </span>

            <p className = "identa">
                Criado em 2011, mas oficializado em Outubro de 2015, na cidade de Teresópolis-RJ, a capital nacional do montanhismo, 
                pelos irmãos <Link className="text-green-800 hover:text-green-900 font-bold" href="Guias"><strong >Carine Ribeiro</strong></Link> e Pablo Rocha,
                guias cadastrados CADASTUR, o <strong className="text-dark">Trilhando Teresópolis</strong> conta hoje com mais de <strong>100</strong> participantes,
                nos mais diversos tipos de aventuras: trilhas, travessias, expedições, escaladas, rafting, rapel.
            </p>      

            <p className = "identa">
                O ano de 2004 foi o início de tudo com viagens em família, passeios religiosos com amigos de igreja e parques temáticos levando amigos de escola. 
                Com os irmãos Pablo Rocha e Felippe Rocha, Carine Ribeiro obteve o apoio para organizar os passeios e, assim, chamando os amigos para completar o ônibus.
            </p>

            <p className = "identa">
                Quando Carine começou a trabalhar, e assim, tendo maior acesso a Internet, ela começou a pesquisar sobre turismo e
                trilhas na Internet, onde viu algumas fotos da Pedra Bonita no Rio, e então decidiu fazer um passeio com familiares
                e amigos, <strong>onde foi realizada a primeira trilha do grupo em 2011</strong>.
            </p>

            <p className = "identa">
                Após um longo período sem fazer trilhas e viagens devido à falta de tempo, já que seus irmãos Felippe e Pablo também já estavam trabalhando,
                os três irmãos decidiram juntar alguns amigos e em Outubro de 2015 retornaram às trilhas 
                e conhecer o Pico da Tijuca.
                Após a trilha, decidiram criar um grupo no <i>WhatsApp</i> para convidar mais pessoas que também gostam de fazer trilhas.
            </p>

            <p className = "identa">
                Assim o grupo foi crescendo e batizado de <i className='font-bold'>MoreAdventure</i>, que significa Mais Aventura.
            </p>

            <p className = "identa">
                Não querendo ficar limitado a um grupo, e sim criar uma marca para nossa cidade e explorar as trilhas tanto de Teresópolis-RJ,
                contribuindo para o turismo do município, quando no Estado do Rio de Janeiro, <span className='font-bold'>Pablo Rocha</span> criou
                a página <Link className="text-green-800 hover:text-green-900 font-bold" href="https://instagram.com/trilhandoteresopolis?igshid=1vq7gglu8x5j7" rel="noreferrer" target="_blank">TrilhandoTeresopolis</Link> no <i>Instagram</i><span>&reg;</span>,
                mostrado as belezas da nossa cidade através de <i>post</i> e <i>reposts</i>.
                Nossa página hoje conta com mais de 4 mil seguidores.
            </p>

            <p className = "identa">
                Durante o ano de 2019, Carine Ribeiro queria criar um site para o Trilhando Teresópolis, mas ela estava envolvida em vários projetos durante
                o ano. Então, no início do ano de 2020, <Link className="text-green-800 hover:text-green-900 font-bold" href='https://instagram.com/robson_teodoro?utm_medium=copy_link' rel="noreferrer" target="_blank">Robson Teodoro</Link>, o trilheiro mais antigo do <i className="font-weight-bold">MoreAdventure</i>, decidiu criar o site 
                para o Trilhando Teresópolis, assim desenvolvendo uma maneira de interagir as pessoas do grupo <i>More Adventure</i> e com pessoas que gostam de
                trilhas e monstanhismo, mostrando <Link href="galeria" className="text-green-800 hover:text-green-900 font-bold">os lugares por onde já passamos</Link>,
                como também <Link href='dicas' className="text-green-800 hover:text-green-900 font-bold">dicas para suas trilhas</Link>.
            </p>

            <p className = "identa">
                No ano de 2019, o Trilhando Teresópolis deu um grande passo, quando <span className='font-bold'>Pablo Rocha</span>, <Link className="text-green-800 hover:text-green-900 font-bold" href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">Carine Ribeiro</Link>
                , <Link className="text-green-800 hover:text-green-900 font-bold" href="https://www.instagram.com/edventure_expedicoes/" rel="noreferrer" target="_blank">Edson Sena</Link> (Eddy)
                e <Link className="text-green-800 hover:text-green-900 font-bold" href="https://instagram.com/karinabeloguiadeturismo?igshid=p8rtixvww0o7" rel="noreferrer" target="_blank">Karina Belo</Link> se
                formaram <Link href="guias" className="text-green-800 hover:text-green-900 font-bold">guias</Link> cadastrados pela CADASTUR.
            </p>

            <p className = "identa">
                E em 2020, mesmo em meio a pandemia do COVID-19, Carine Ribeiro concluiu seu curso de <span className='font-bold'>Agente de Viagens</span> pelo SENAC-RJ.
            </p>

            <br />

            <Grid container spacing={4} className='primeiraLinha'>
                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                                src={img1}
                                alt="Pablo Rocha"
                                width={260}
                                height={260}
                            />
                        </Link>
                        <div className="">
                        <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800 ">Pablo Rocha</h2>
                        <Button href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <strong><p className=" mt-2 text-black text-bold">Instagram</p></strong>
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
                        <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800 ">Carine Ribeiro</h2>
                        <Button href="https://www.instagram.com/carirch/" target="_blank" rel="noopener noreferrer">
                            <strong><p className=" mt-2 text-black text-bold">Instagram</p></strong>
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
                        <h2 className="guias block mt-1 text-lg leading-tight text-center font-bold text-green-800 ">Edson Sena</h2>
                        <Button href="https://www.instagram.com/edventure_expedicoes/" rel="noopener noreferrer"target="_blank">
                            <strong><p className=" mt-2 text-black text-bold">Instagram</p></strong>
                        </Button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6} md={3}>
                    <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                        <Link className="text-green-800 " href='https://instagram.com/robson_teodoro?utm_medium=copy_link' rel="noreferrer" target="_blank">
                            <Image
                                className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                                src={img4}
                                alt="Karina Belo"
                                width={260}
                                height={260}
                            />
                        </Link>
                        <div className="">
                        <h2 className="guias block mt-1 text-lg leading-tight font-bold text-green-800 hover:text-green-900 font-bold">Robson Teodoro</h2>
                        <Button className="text-green-800 hover:text-green-900 font-bold" href='https://instagram.com/robson_teodoro?utm_medium=copy_link' rel="noreferrer" target="_blank">
                            <strong><p className="guias mt-2 text-black text-bold">Instagram</p></strong>
                        </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </Container>
  )
}

export default Sobre
