// components/Navbar.tsx
import React, { useState } from 'react'
import { ReactDOM } from 'react';
import Link from 'next/link'
import Image from 'next/image';

import img1 from './logo.jpg';

const Navbar = () => {
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
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >

        <div className="text-sm lg:flex-grow">
          <Link href="/guias" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  mr-4">
              Guias
          </Link>

          <Link href="/galeria" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  mr-4">
              Nossas Aventuras
          </Link>

          <Link href="/eventos" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  mr-4">
              Próximos Eventos
          </Link>

          <Link href="/paraElas" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  mr-4">
              Para Elas
          </Link>

          <Link href="/dicas" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold  mr-4">
              Dicas
          </Link>

          <Link href="/sobre" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold ">  
              Sobre
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
