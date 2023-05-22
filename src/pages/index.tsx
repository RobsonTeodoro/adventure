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

import img1 from '../images/home/ParedaoSantoAntonio.jpg';
import img2 from '../images/home/cobvent.jpg';
import img3 from '../images/home/mochila.jpg';
import img4 from '../images/home/cavalos.jpg'
import img5 from '../images/home/parnaso.jpg';
import img6 from '../images/home/tartaruga3.jpg';
import img7 from '../images/home/cabecaDeDragao4.jpg';

import img8 from '../images/aniversariantes/junho/aline.jpg';
import img9 from '../images/aniversariantes/junho/eddy.jpg';
import img10 from '../images/aniversariantes/junho/eliane.jpg';
import img11 from '../images/aniversariantes/junho/eric.jpg';
import img12 from '../images/aniversariantes/junho/izabela.jpg';
import img13 from '../images/aniversariantes/junho/jaque.jpg';
import img14 from '../images/aniversariantes/junho/neia.jpg';
/*import img15 from '../images/aniversariantes/agosto/robson.jpg';*/

import Evento from "@/components/Evento/Evento";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Container className='margem'>          
          <h4 className="titulo font-bold bg-green-800 py-1">            
              <Link href="https://www.instagram.com/trilhandoteresopolis/?igshid=1vq7gglu8x5j7" rel="noreferrer" target="_blank">
                <strong className='text-2xl font-bold text-white '>TRILHANDO TERESÓPOLIS - SUA AVENTURA COMEÇA AQUI!</strong>
              </Link>
          </h4>

          <span>
            <Evento />
          </span>
        
          <Grid container spacing={4} className='primeiraLinha'>
            <Grid item xs={6} md={3}>
              <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                <Link href="/fotoMes">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img1}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Fotos Destaques do Mês</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Veja as fotos que foram destaques do mês</p>
                  <Button href='/fotoMes'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                <Link href="/eventoBateVolta1">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img2}
                    alt="Eventos"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Próximo Evento</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Cobiçado x Ventania</p>
                  <Button href='/eventoBateVolta1'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
                <Link href="/dicas">
                  <Image
                    className='h-full w-full object-fill object-center rounded-t-lg  md:h-full'
                    src={img3}
                    alt="Cabeça de Dragão"
                    width={400}
                    height={400}
                  />
                </Link>
                <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Dicas</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Siga aqui as nossas melhores dicas para sua trilha</p>
                  <Button href='/dicas'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} md={3}>
              <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700 font-bold">
                <Carousel fade>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img8}
                      alt="Image One"
                    />
                    <Carousel.Caption>
                        <span>Aline</span>
                    </Carousel.Caption>
                    </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img9}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Edson Senna</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img10}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Eliane</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img11}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Eric</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img12}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Izabela</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img13}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Jaqueline</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  <Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img14}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Néia</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                  
                  {/*<Carousel.Item interval={3500}>
                    <Image
                      className="d-block h-full w-full"
                      src={img15}
                      alt="Image Two"
                    />
                    <Carousel.Caption>
                    <span>Robson</span>
                    </Carousel.Caption>
                  </Carousel.Item>*/}

                </Carousel>
                <h2 className="block mt-1 text-lg leading-tight font-bold text-black">Aniversáriantes</h2>
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Parabéns</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container className=''>               
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
              <Link href="/paraElas">
                <Image
                  className='h-full w-full object-fill object-center md:h-full'
                  src={img4}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Para Elas</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Página para mulheres que desejam fazer trilhas</p>
                <Button href='/paraElas'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
              <Link href="/kids">
                <Image
                  className='h-full w-full object-fill object-center md:h-full'
                  src={img5}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Eventos Kids</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Eventos para mamães e papais levarem seus filhos!!</p>
                <Button href='/kids'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
              <Link href="/galeria">
                <Image
                  className='h-full w-full object-fill object-center md:h-full'
                  src={img6}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Conheça Nossos Destinos</h2>
                <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Veja nossa galeria de fotos</p>
                <Button href='/galeria'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={3}>
            <div className="card max-w-sm border border-gray-400 rounded-lg dark:border-700">
              <Link href="/sobre">
                <Image
                  className='h-full w-full object-fill object-center md:h-full'
                  src={img7}
                  alt="Cabeça de Dragão"
                  width={400}
                  height={400}
                />
              </Link>
              <div className="">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Sobre Nós</h2>                
                  <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-dark">Veja como nossa história começou</p>
                  <Button href='/sobre'>
                    <p className=" mt-2 content-center text-black font-bold">Clique aqui</p>
                  </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <div>
          <p className='font-bold text-green-800 font-italic'>
            Acesse nossa página no <i>Instagram<span>&reg;</span></i> pelo QRCode!!
          </p>
          <QRCode className='' value='https://instagram.com/trilhandoteresopolis?igshid=YmMyMTA2M2Y=' renderAs='canvas'></QRCode>
        </div>

      </Container>
    </div>     
  )
}