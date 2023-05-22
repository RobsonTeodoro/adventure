import React from 'react';
import { ReactDOM } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Container } from '@mui/material';
import { Grid} from '@mui/material';

import Evento from "@/components/Evento/Evento";

import img1 from '../images/eventos/batevolta/cobvent.jpg';

import {
    FaGlobeAmericas,
    FaCalendarAlt,
    FaShuttleVan,
    FaTicketAlt,
    FaCompass,
    FaCameraRetro,
    FaGrinBeamSweat,
    FaMoneyBillWave,
    FaRegHourglass
  } from 'react-icons/fa'

  import{
    FaMapSigns
  } from 'react-icons/fa';


const EventoBateVolta2 = () => {
    return (
        <div className='fundo'>
          <Container className='margem'>                    
              <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong>BATE E VOLTA - Cobiçado x Ventania</strong>
              </h4>
                <Container>
                <span>
                  <Evento />
                </span>
                  <Grid container spacing={4} className='primeiraLinha'>
                    <Grid item xs={6} md={3}>
                      <div className="card max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-green-500">
                        <Link href="/bateVolta">
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
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
                    
                <Container>
                  <p className="">
                    <ul>
                        <li className="text-green-600">
                            <h5><strong>Junho</strong></h5>
                        </li>
                        <ul>
                            <li>
                                <FaMapSigns size="17" color='brown'/><strong className='text-success'>Cobiçado x Ventania</strong>
                                <FaGlobeAmericas size="17" color='blue'/> Local: Petrópolis
                                <FaCalendarAlt size="17" color='green'/> Data: 03/06/2023

                                <h4 className="margem">
                                  <strong className="text-green-600">Serviços Inclusos</strong>
                                </h4>
                                
                                <FaShuttleVan size="17" color=''/> Transporte 
                                {/*<FaTicketAlt size="17" color='blue'/> Ingresso */}
                                <FaCompass size="17" color='brown'/> Guias de Turismo 
                                <FaCameraRetro size="17" color='gray'/> Fotos 
                                <p className='margem'>
                                  <FaGrinBeamSweat size="17" color='#e5af00' /> Nivel: Moderado
                                  <FaMoneyBillWave size="17" color='green'/> Valor: R$110,00
                                  <FaRegHourglass size="17" color='red'/> Vagas: 16 (esgotadas)
                                </p>

                                <h4 className="margem">
                                  <strong className="text-green-600">Serviços não Inclusos</strong>
                                </h4>
                                <ul>
                                  <li>Alimentação e bebida pessoal</li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                  </p> 
                </Container>
          </Container>
        </div>
    )
}

export default EventoBateVolta2
