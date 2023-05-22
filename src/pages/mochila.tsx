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

import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function Mochila() {
  return (
    <div className="">   
      <Container className="margem">
        <h4 className="titulo text-2xl font-bold bg-green-800">
          <strong >COMO ORGANIZAR A SUA MOCHILA</strong>
        </h4>

          <span className='identa'>
            <Evento />
          </span>
          <br />
          

        <p className="identa">
          Você sabia que podemos aliviar até 30% do peso dos ombros ao regularmos corretamente a mochila? Com a regulagem correta da barrigueira,
          ombro, alças e peitoral é possível transferir boa parte do peso para a cintura!
        </p>

        <p className="identa">
          Arrume sua mochila com antecedência de no mínimo dois dias, faça uma lista do que levar na aventura.
          Elabore uma lista pessoal e importantes pra você.
        </p>

        <p className="identa">
          Agrupe por itens, como: roupas; casa e cama; cozinha; acessórios; emergência; proteção, higiene pessoal e ferramentas.
          Para não deixar todo jogado dentro da mochila, separe os itens em sacos plásticos grossos que além de organizar, 
          protege de eventuais mudanças climáticas. Não confie na impermeabilidade da mochila; ela não é um estanque.
        </p>

        <p className="identa">
          A seguir mostraremos algumas recomendações para distribuir o peso dentro da mochila.
        </p>

        <p className="identa">
          Aproveite as dicas:
        </p>

        <h6>
          <strong>1 – Teto</strong>
        </h6>
        <p className = "identa">
          Nessa parte deve-se colocar os objetos leves, como o isolante térmico.
        </p>

        <h6>
          <strong>2 – Leve</strong>
        </h6>
        <p className = "identa">
          Celular, chave, lanterna de cabeça, canivete, protetor solar, repelente na tampa da mochila de preferência, 
          pois é um local de fácil acesso. Se precisar, eles estarão à mão;
        </p>

        <h6>
          <strong>3 – Parte frontal</strong>
        </h6>
        <p className = "identa">
        Equipamentos leves, como Blusa de Fleece e Itens de fácil acesso nós aconselhamos itens que você usará rapidamente durante a trilha ou no setor de escalada;<br />
        * Jaqueta Anorak. E mais uma dica: fique de olho se estiver pra chover, leve nesse bolso também uma Capa de Chuva para a mochila.
        </p>

        <h6>
          <strong>4 – Bolso frontal</strong>
        </h6>
        <p className = "identa">
          Leve o essencial para poder trilhar tranquilamente, não precisa levar a casa nas costas. 
          Esses itens vão desde um protetor solar até itens de primeiros socorros, água e comida leve para poder aproveitar o máximo.
        </p>

        <h6>
          <strong>5 – Pesado/Médio</strong>
        </h6>
        <p className = "identa">
          Equipamentos pesados: pra quem escala, é em geral a Água, Comida, Corda Dinâmica, Costura Expressa, Gri-gri, e para quem é da Caminhada/Trekking é o Água, 
          Comida, fogareiro, gás, talher, comida que não tenha problema de amassar para a janta (enlatados geralmente). Deixe a água e a comida por cima, 
          pois pode bater uma vontade de descansar e comer e beber algo;
        </p>

        <h6>
          <strong>6 – Fundo da mochila</strong>
        </h6>
        <p className = "identa">
          Saco de dormir - nessa parte inferior da mochila, nós aconselhamos o Saco de Dormir, Roupas, Travesseiro. Bom sempre levar dentro de um saco plástico 
          para protegê-los de uma chuva forte;
        </p>

        <h6>
          <strong>7 – Laterais da mochila</strong>
        </h6>
        <p className = "identa">
          Nessa parte vai depender da sua criatividade. Em geral aconselhamos colocar o isolante térmico, barraca, cadeira/banquinho ou corda de escalada, 
          se preferir colocar por fora.
        </p> 

        <h6>
          <strong>8 – Bolso inferior</strong>
        </h6>
        <p className = "identa">
          Nesse bolso se colocar a barraca dobrada em forma quadrada embaixo de tudo, para dá estabilidade na mochila, para ficar em pé. Também vai chinelos, 
          saco de lixo e roupa molhada (devidamente embalada).
        </p> 

        <h6>
          <strong>9 – Dica importante</strong>
        </h6>
        <p className = "identa">
          Organize sempre com calma a sua mochila, pra garantir que não irá esquecer de nada e para garantir que a sua coluna fique sempre protegida e confortável nas Trilhas. 
          E leve sempre uma capa de mochila.
        </p> 
        
        <div className="container-fluid container-md">
          <ul className="pagination">
            <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="Servicos">Mais Dicas</Link></li>
            <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="primeiraTrilha">1</Link></li>
            <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="mochila">2</Link></li>
            <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="motivos">3</Link></li>
          </ul>
        </div>
      </Container>
  </div>
  )
}
export default Mochila
