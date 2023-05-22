import React from 'react';
import { ReactDOM } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, Container } from '@mui/material';
import { Grid} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import QRCode from 'qrcode.react';

function Evento() {
  return (
    <div>
      <Container className='identa2'>        
        <span>
          <Link className="bg-green-800 text-white rounded-full cursor-pointer hover:bg-green-600 font-bold py-1 px-4" href="/eventos">Eventos</Link>
        </span>
      </Container>
    </div>
  )
}

export default Evento