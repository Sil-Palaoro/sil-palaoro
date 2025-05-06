//Componente de la Barra de navegación
"use client"
import Link from 'next/link';
import styles from "../../styles/HomePpal.module.css";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from 'react-i18next';


function BarraNavHome () {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const { language, changeLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  // const hamMenuRef = useRef(null);
  // const hamNavRef = useRef(null);
  const [hamMenuButtonVar, setHamMenuButtonVar] = useState(null);
  const [offScreenMenuVar, setOffScreenMenuVar] = useState(null);  

  console.log("BarraNavHome language:", language); // Debugging

 
  useEffect(() => {
    setIsClient(true)

    setHamMenuButtonVar(document.getElementById('hamMenuButton'));
    setOffScreenMenuVar(document.getElementById('offScreenMenu'));
  }, [])
 
  return (
    <>
    {isClient && (
    <header className={styles.header}>
      <h1 className={styles.h1}>
      <Link href={`/${language}`} title="Silvina Palaoro" className={styles.a}>
        Silvina Palaoro
      </Link>
      </h1>
      
      {/*Links del menu de navegacion*/}
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link title="Home" className={styles.a} href={`/${language}`}>Home</Link>
          </li>          
          <li className={styles.li}>
            <Link href={`/${language}#projects`} title="Projects" className={styles.a}>{t("tituloProjects")}</Link>
          </li>
          <li className={styles.li}>
            <Link href={`/${language}#skills`} title="Skills" className={styles.a}>{t("skills")}</Link>
          </li>
          <li className={styles.li}>
            <Link href={`/${language}#about`} title="About" className={styles.a}>{t("tituloAbout")}</Link>
          </li>
          <li className={styles.li}>
            <button onClick={() => {
              console.log("Language in button in BarraNavHome:", language);
              changeLanguage(language === 'es' ? 'en' : 'es');
            }} className={styles.languageButton}>
                {language === 'es' ? "Change to EN" : "Cambiar a ES"}
            </button>
          </li>          
        </ul>

        {/*Menu hamburguesa*/}
        <div className={styles.ul} id={styles.menuBar}>
        {/* <div className={styles.hamNav} id={styles.menu}> */}
          <button 
          className={styles.hamMenuButton}
          id={styles.hamMenuButton} 
          // ref={hamMenuRef}
          onClick={ () => {
            // hamMenuRef.current.classList.toggle('active');
            // hamNavRef.current.classList.toggle('active');
            // const hamMenuButtonVar = document.getElementById('hamMenuButton');
            // const offScreenMenuVar = document.getElementById('offScreenMenu');

            console.log("hamMenuButtonVar:", hamMenuButtonVar);
            console.log("offScreenMenuVar:", offScreenMenuVar);

            if (hamMenuButtonVar && offScreenMenuVar) {
              hamMenuButtonVar.classList.toggle('active');
              offScreenMenuVar.classList.toggle('active');
            } else {
              console.error("Elements not found!");
            }

            // hamMenuButtonVar.classList.toggle('active');
            // offScreenMenuVar.classList.toggle('active');
          }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        {/* </div> */}
        </div>
      </nav>

      {/*Links Menu hamburguesa*/}   

      <div className={styles.offScreenMenu} id={styles.offScreenMenu}>
        <ul className={styles.ulHam}>          
          <li className={styles.liHam}>
            <Link title="Home" className={styles.a} href={`/${language}`}>Home</Link>
          </li>          
          <li className={styles.liHam}>
            <Link href={`/${language}#projects`} title="Projects" className={styles.a}>{t("tituloProjects")}</Link>
          </li>
          <li className={styles.liHam}>
            <Link href={`/${language}#skills`} title="Skills" className={styles.a}>{t("skills")}</Link>
          </li>
          <li className={styles.liHam}>
            <Link href={`/${language}#about`} title="About" className={styles.a}>{t("tituloAbout")}</Link>
          </li>
          <li className={styles.liHam}>
            <button onClick={() => {
              console.log("Language in button in BarraNavHome:", language);
              changeLanguage(language === 'es' ? 'en' : 'es');
            }} className={styles.button}>
                {language === 'es' ? "Change to EN" : "Cambiar a ES"}
            </button>
          </li>       
        </ul>
      </div>        
    </header>
    )}
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


// import { useRouter } from 'next/router';

  // const { locale } = useRouter();