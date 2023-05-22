import React from 'react';
import { ReactDOM } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Button, Container } from '@mui/material';
import { Grid} from '@mui/material';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import Evento from "@/components/Evento/Evento";

function Motivos() {
  return (
    <div className="fundo">
        <Container className="margem ">
            <h4 className="titulo text-2xl font-bold bg-green-800">
                <strong >MOTIVOS</strong>
            </h4>

            <span className='identa'>
                <Evento />
            </span>
            <br />

            <h5>
                <p className="identa">
                    Você conhece os benefícios de fazer trilhas?
                </p>
            </h5>
            

            <p className="identa">
                Essa atividade traz inúmeros benefícios para sua saúde física e mental. 
            </p>

            <p className="identa">
                Não faltam bons motivos para você começar a mudar de vida e encarar o mundo das trilhas, 
                e um dos melhores motivos é essa caminhada para fora da nossa zona de conforto. 
            </p>

            <p className="identa">
                Confira nossa lista e motive-se a trilhar conosco. Vamos começar a trilhar? 
            </p>

            <ol className="identa">
            <strong><li className="cargueira"><p className="font-weight-bold">Contato com a natureza</p></li></strong>
                <ul className="identa">
                    <li>Proporciona o bem estar físico e mental.</li>
                </ul>
                
            <strong><li className="cargueira"><p className="font-weight-bold">Sair da rotina</p></li></strong>
                <ul className="identa">
                    <li>Ótima opção para sair do estresse e correria do dia a dia.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Conectar consigo mesmo</p></li></strong>
                <ul className="identa">
                    <li>Contribui para o auto conhecimento, você aprende a lhe dar com o seu corpo e a sua mente.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Fazer novas amizades</p></li></strong>
                <ul className="identa">
                    <li>Excelente oportunidade de socialização e fazer novos amigos</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Superação</p></li></strong>
                <ul className="identa">
                    <li>Desafiar os seus próprios limites.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Conhecer novos lugares</p></li></strong>
                <ul className="identa">
                    <li>Te permite a conhecer novos lugares, explorar novos caminhos e realizar sonhos.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Melhora o humor</p></li></strong>
                <ul className="identa">
                    <li>Além de combater a insônia, ansiedade e depressão.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Prevenção de doenças</p></li></strong>
                <ul className="identa">
                    <li>Reduz o risco de doenças e estimula o sistema cardiovascular e a saúde mental.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Aumenta a criatividade</p></li></strong>
                <ul className="identa">
                    <li>O contato com a natureza contribui com o aumento das funções cognitivas.</li>
                </ul>

            <strong><li className="cargueira"><p className="font-weight-bold">Atividade física</p></li></strong>
                <ul className="identa">
                    <li>Ótima preparação para outros esportes. Melhora a resistência física e ajuda a ganhar condicionamento.</li>
                </ul>
            </ol>

            <div className="container-fluid container-md">
                <ul className="pagination">
                    <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="Servicos">Mais Dicas</Link></li>
                    <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="primeiraTrilha">1</Link></li>
                    <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="mochila">2</Link></li>
                    <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="motivos">3</Link></li>
                </ul>
            </div>
          
        </Container>
    </div>
  )
}

export default Motivos
