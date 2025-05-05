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
  

  console.log("BarraNavHome language:", language); // Debugging

 
  useEffect(() => {
    setIsClient(true)
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
            }} className={styles.button}>
                {language === 'es' ? "Change to EN" : "Cambiar a ES"}
            </button>
          </li>          
         </ul>
      </nav>
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