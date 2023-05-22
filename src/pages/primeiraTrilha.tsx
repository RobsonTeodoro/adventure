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

function primeiraTrilha() {
  return (    
    <div className="fundo">        
      <Container className="margem ">
        <h4 className="titulo text-2xl font-bold bg-green-800">
          <strong >DICAS PARA A SUA PRIMEIRA TRILHA</strong>
        </h4>

        <span className='identa'>
          <Evento />
        </span>

        <h6>
          <strong>1</strong> – Respeite o seu limite
        </h6>

        <p className = "identa">
          Respeitar o seu limite começa muito antes de você iniciar a trilha. Seja verdadeiro consigo ao avaliar o seu preparo 
          físico e escolha um percurso condizente com a sua capacidade. Utilize aplicativos, como o <i>Wikiloc</i>, que indicam trilhas e 
          mostram informações como altimetria e dificuldade do percurso. Como todo estreante, a nossa sugestão é que você comece por 
          trilhas simples e vá evoluindo gradativamente em distância e dificuldade.
        </p>

        <h6>
          <strong>2</strong> – Confira a previsão climática
        </h6>
        <p className = "identa">
          Antes de sair para qualquer aventura, mesmo que ela seja curta, confira qual é a previsão climática. Depois que você está na trilha não dá mais 
          tempo de voltar em casa para colocar uma bota ou jaqueta impermeável ou pegar mais um fleece. Então, veja se o clima estará estável, quente ou frio. 
          Para quem está começando, uma sugestão é fazer trilhas durante o outono, quando as temperaturas já estão mais amenas e as chances de chuva também são baixas.
        </p>

        <h6>
          <strong>3</strong> – Mantenha pessoas informadas sobre o seu cronograma
        </h6>
        <p className = "identa">
          Nem sempre é possível ter sinal de telefone no meio da trilha. Portanto, é essencial e vital que você mantenha alguém informado sobre o seu paradeiro, 
          previsão de saída, chegada e até o seu cronograma durante a aventura. 
          Esse é um detalhe simples, mas que pode fazer toda a diferença e até salvar a sua vida caso alguma emergência aconteça.
        </p>

        <h6>
          <strong>4</strong> – Tenha os itens essenciais na mochila
        </h6>
        <p className = "identa">
          Leve o essencial para poder trilhar tranquilamente, não precisa levar a casa nas costas. 
          Esses itens vão desde um protetor solar até itens de primeiros socorros, água e comida leve para poder aproveitar o máximo.
        </p>

        <h6>
          <strong>5</strong> – Use roupas e acessórios funcionais
        </h6>
        <p className = "identa">
          Por mais que seja legal estar na moda, essa não é a prioridade em uma trilha. É muito importante usar calçados apropriados, 
          roupas com tecidos de secagem rápida e acessórios que agregam em conforto e proteção. Meias para trekking feitas em lã merino, 
          por exemplo, ajudam a evitar o suor e as bolhas. As botas corretas vão proteger os seus pés, tornozelos, joelhos e coluna. 
          A mochila para trekking vai te ajudar a equilibrar melhor o peso e a forçar menos os ombros e as costas. Por aí vai. 
          Pense em todas as funções e utilidade de cada peça que você está vestindo ou carregando.
        </p>

        <h6>
          <strong>6</strong> – Hidrate-se e coma bem
        </h6>
        <p className = "identa">
          Água e comida são fatores que determinam a nossa existência. Na trilha eles são ainda mais importantes. Crie o hábito de beber água pontualmente,
          mesmo que você ainda não esteja sentindo sede. Aliás, a própria sede já é um sinal de desidratação e ninguém quer passar mal no meio do caminho. 
          A comida também. Alimente-se bem antes de ir e faça o cálculo de calorias e nutrientes necessários e que devem ser consumidos ao longo do dia.
          Pense em opções práticas e não perecíveis, pois facilitarão toda a dinâmica na floresta.
        </p>

        <h6>
          <strong>7</strong> – Respeite a natureza
        </h6>
        <p className = "identa">
          Essa é uma regra básica em qualquer lugar do mundo, seja na cidade ou na montanha: não deixe o seu rastro para trás,
          deixe apenas as suas pegadas. Leve sacolas extras para armazenar o seu próprio lixo e depois descarte-o em um local adequado.
          Jamais deixe resíduos na natureza, essa é a principal regra de etiqueta da trilha.
        </p>

        <div className="container-fluid container-md">
          <ul className="pagination">
            <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="Servicos">Mais Dicas</Link></li>
            <li className="page-item disabled"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="primeiraTrilha">1</Link></li>
            <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="mochila">2</Link></li>
            <li className="page-item"><Link className="page-link text-green-800 hover:text-green-900 font-bold" href="motivos">3</Link></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default primeiraTrilha
