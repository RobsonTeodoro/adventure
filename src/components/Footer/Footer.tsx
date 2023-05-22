// components/Navbar.tsx
import React, { useState } from 'react'
import { ReactDOM } from 'react';
import Link from 'next/link'
import Image from 'next/image';


import img1 from '../../images/footer/logo001.jpg';
import img2 from '../../images/footer/cartao.png';
import img3 from '../../images/footer/picpay.png';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)    
  };  
  

  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-800 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/#">
          <Image
            className="w-full object-fill object-center rounded-t-lg  md:h-full"
            src={img1}
            alt="Logo"
            width={110}
            height={110}
          />
        </Link>
      </div>

      <div className="block lg:hidden">
        
        <button
          className="flex items-center px-3 py-2 border rounded text-white font-bold border-gray-600  hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z"
              />
            )}
          </svg>
        </button>
      </div>      

      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } menu w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
          <div className="text-sm lg:flex-grow font-bold text-gray-900">
                <div className="flex flex-wrap px-6">
                  <div className="w-1/4">
                  <i>Serviços</i>
                      <a href="cancelamento" className="text-white block px-4 py-2 mb-4 hover:underline">Políticas de Cancelamento</a>
                      <a href="duvidas" className="text-white block px-4 py-2 mb-4 hover:underline">Dúvidas Frequentes</a>                        
                      <a href="termos" className="text-white block px-4 py-2 mb-4 hover:underline">Termos</a>
                      {/*<a href="https://instagram.com/trilhandoteresopolis?igshid=1vq7gglu8x5j7" target="_blank" rel="noreferrer" className="text-white block px-4 py-2 mb-4 hover:underline">Instagram</a>*/}
                  </div>
                    
                    <div className="w-1/4">
                        <i>Mídias Sociais</i>
                            <a href="https://www.facebook.com/trilhandoteresopolisrj" target="_blank" rel="noreferrer" className="text-white block px-4 py-2 mb-4 hover:underline">Facebook</a>
                            <a href="https://instagram.com/trilhandoteresopolis?igshid=1vq7gglu8x5j7" target="_blank" rel="noreferrer" className="text-white block px-4 py-2 mb-4 hover:underline">Instagram</a>
                    </div>

                    <div className="w-1/4">
                        <i>Contato</i>
                            <a href="https://wa.me/5521976979947?text=Olá%20Trilheiro" target="_blank" rel="noreferrer" className="text-white block px-4 py-2 mb-4 hover:underline">Whatsapp</a>
                            <a href="mailto:reservas.trilhandoteresopolis@gmail.com" target="_blank" rel="noreferrer" className="text-white block px-4 py-2 mb-4 hover:underline">Email</a>
                    </div>

                    <div className="w-1/4">
                        <span className="text-white block px-4 py-2 mb-4 hover:underline">Pagamento</span>
                            <Image
                                className="px-2"
                                src={img2}
                                alt="visa master"
                                
                            />
                            <br />
                            <Image
                                className="px-2"
                                src={img3}
                                alt="picpay"
                            />
                    </div>
                </div>
          </div>
      </div>
    </nav>
  )
}

export default Footer
