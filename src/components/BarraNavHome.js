//Componente de la Barra de navegación
"use client"
import Link from 'next/link';
import "../styles/navbar.css";
import "../styles/css-home/HomePpal.module.css"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';



function BarraNav () {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
    <>
    {isClient == true ?
    <nav className="navigation">
      <Link href="/" className="brand-name">
        Silvina Palaoro
      </Link>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {/*Links del menu de navegacion*/}
      <div
        className="navigation-menu">
        <ul>
          <li>
          {pathname !== '/' ? (<Link href="/">Home</Link>) : null}
          </li>          
          <li>
          {pathname !== '/iniciar_sesion' && pathname !== '/tareas'  ? (<Link href="/iniciar_sesion">Iniciar sesión</Link>) : null}
          </li>
          <li>
          {pathname !== '/registro' && pathname !== '/tareas' ? (<Link href="/registro">Registrarse</Link>) : null}
          </li>
          <li>
          {pathname !== '/' && pathname !== '/registro' && pathname !== '/iniciar_sesion' ? (<Link href="/cerrar-sesion">Cerrar sesión</Link>) : null}
          </li>
         </ul>
      </div>
    </nav> :
    " "}
    </>
  );  
}

export default BarraNav;
