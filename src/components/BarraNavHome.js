//Componente de la Barra de navegación
"use client"
import Link from 'next/link';
import styles from "../styles/HomePpal.module.css";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';



function BarraNavHome () {
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
    <>
    {isClient == true ?
    <header className={styles.header}>
      <h1 className={styles.h1}>
      <Link href="/" title="Silvina Palaoro" className={styles.a}>
        Silvina Palaoro
      </Link>
      </h1>
      
      {/*Links del menu de navegacion*/}
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
          <Link title="Home" className={styles.a} href="/">Home</Link>
          </li>          
          <li className={styles.li}>
          <Link href="#projects" title="Projects" className={styles.a}>Projects</Link>
          </li>
          <li className={styles.li}>
          <Link href="#about" title="About" className={styles.a}>About</Link>
          </li>          
         </ul>
      </nav>
    </header> :
    " "}
    </>
  );  
}

export default BarraNavHome;

{/*<header className={styles.header}>
            <h1 className={styles.h1}><a href="#home" title="Silvina Palaoro" className={styles.a}>Silvina Palaoro</a></h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                    <Link title="Home" className={styles.a} href="#home">Home</Link>
                    {/* <a href="#home" title="Home" className={styles.a}>Home</a> 
                    </li>
                    <li className={styles.li}>
                    <Link href="#projects" title="Projects" className={styles.a}>Projects</Link>
                      {/* <a href="#projects" title="Projects" className={styles.a}>Projects</a> 
                    </li>
                    <li className={styles.li}>
                    <Link href="#about" title="About" className={styles.a}>About</Link>
                      {/* <a href="#about" title="About" className={styles.a}>About</a> 
                    </li>
                </ul>
            </nav>
        </header>
*/}