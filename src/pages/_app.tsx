import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import type { AppProps } from "next/app";
import { Button, Container } from '@mui/material';
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Clique from "@/components/Clique/Clique";
import Evento from "@/components/Evento/Evento";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />    
    {/*<Layout />*/}{/* poderia ter só p layout, sem as tags do nav e o footer*/}
      <Component {...pageProps} />;    
      <Clique/> <br />      
    <Footer />
  </>
    
  );
}
export default MyApp;
