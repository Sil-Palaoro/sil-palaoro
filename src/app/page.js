/*Homepage Portfolio - Silvina Palaoro*/
"use client"

import styles from '../styles/HomePpal.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';


/*Página principal*/

export default function Home() {    
    const { t, i18n } = useTranslation();
    const { language } = useLanguage();

    const updateLanguage = useCallback(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);
    

    useEffect(() => {
        updateLanguage();
    }, [updateLanguage]);

    // Console logs only in development
    if (process.env.NODE_ENV === 'development') {
        console.log("Rendering Home page");
        console.log("Current language in useTranslation:", i18n.language);
    }


  return (              
        <main className={styles.main}>
            <div className={styles.seccion} id="home">
                
                <section className={styles.seccion} id="home">
                    <h2 className={styles.h2}>Silvina Palaoro</h2>
                    <h3 className={styles.h3}>Backend Developer</h3>
                </section>
            </div>
              
            <section className={styles.projects} id="projects">
                <h2 className={styles.h2}>{t("tituloProjects")}</h2>
              
                <div className={styles.grid}>

                <article className={styles.article}>
                        {/* "Aplicación fullstack de Blog social - React, Next.js y Firebase" */}

                        <Link href="https://react-blog-silvipalaoro.web.app/" 
                        title={t("project13")} target="_blank">
                          <Image 
                                src="/Blog-app.jpg"
                                fill={true}
                                alt={t("project13")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project13")}</h4>
                        </Link>
                        

                </article>


                <article className={styles.article}>
                        {/* "Página web e implementación formulario y botón de Whatsapp - React", */}

                        <Link href="https://parterasmayeutica.com/doulas" 
                        title={t("project12")} target="_blank">
                          <Image 
                                src="/pag-doulas.jpg"
                                fill={true}
                                alt={t("project12")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project12")}</h4>
                        </Link>
                        

                    </article>

                    <article className={styles.article}>
                        {/*"Aplicación fullstack de Alquiler de Estacionamientos - React, Django y Vercel", */}

                        <Link href="https://pareaqui.vercel.app/" 
                        title={t("project11")} target="_blank">
                          <Image 
                                src="/pare-aqui-app.jpg"
                                fill={true}
                                alt={t("project11")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project11")}</h4>
                        </Link>
                        

                    </article>

                    <article className={styles.article}>
                        {/*"Desarrollo de API de mensajería interna en app Inmobiliaria - Django REST Framework y PostgreSQL" */}

                        <Link href="https://github.com/mikelm2020/rentopia/tree/main/apps/messaging" 
                        title={t("project10")} target="_blank">
                          <Image 
                                src="/mensajeria-rentopia.jpg"
                                fill={true}
                                alt={t("project10")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project10")}</h4>
                        </Link>
                        

                    </article>

                    <article className={styles.article}>
                        {/*"Página web - Portafolio personal - React, NextJS, CSS y Vercel", */}

                        <Link href="https://sil-palaoro-sdyw.vercel.app/" title={t("project9")} target="_blank">
                          <Image 
                                src="/portfolio.jpg"
                                fill={true}
                                alt={t("project9")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project9")}</h4>
                        </Link>
                        

                    </article>


                    <article className={styles.article}>
                        {/*"Aplicación fullstack de Tareas - NextJS, Django y SQLite", */}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/app-tareas" title={t("project8")} target="_blank">
                          <Image 
                                src="/home-app-tareas.jpg"
                                fill={true}
                                alt={t("project8")}
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>{t("project8")}</h4>
                        </Link>
                        

                    </article>

                    <article className={styles.article}>
                        {/*"Simulador web películas y series - Kotlin"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/sim-movies" title={t("project7")} target="_blank">                        
                          <Image 
                                  src="/simulador-movies-kotlin.jpg"
                                  fill={true}
                                  alt={t("project7")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project7")}</h4>
                        </Link>

                    </article>

                    <article className={styles.article}>
                        {/*"Turnero de Farmacia - Python"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/turnero-farmacia" title={t("project6")} target="_blank">                        
                          <Image 
                                  src="/turnero-python.jpg"
                                  fill={true}
                                  alt={t("project6")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project6")}</h4>
                        </Link>

                    </article>

                    <article className={styles.article}>
                        {/*"Ahorcado - Python"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/ahorcado" 
                        title={t("project5")}>                        
                          <Image 
                                  src="/ahorcado.jpg"
                                  fill={true}
                                  alt={t("project5")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project5")}</h4>
                        </Link>                        
                    </article>

                    <article className={styles.article}>
                        {/*"Adivina el número - Python"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/adivinador" 
                        title={t("project4")}>                        
                          <Image 
                                  src="/adivina-numero.jpg"
                                  fill={true}
                                  alt={t("project4")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project4")}</h4>
                        </Link>                        
                    </article>

                    <article className={styles.article}>
                        {/*"Catalogo de productos - HTML5, Javascript y CSS", */}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/catalogo" title={t("project3")}>                        
                          <Image 
                                  src="/catalogo.jpg"
                                  fill={true}
                                  alt={t("project3")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project3")}</h4>
                        </Link>

                    </article>

                    <article className={styles.article}>
                        {/*"Formulario y tabla - HTML5, Javascript y CSS"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/formularioJS" title={t("project2")} target="_blank">                        
                          <Image 
                                  src="/formulario.jpg"
                                  fill={true}
                                  alt={t("project2")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project2")}</h4>
                        </Link>

                    </article>

                    <article className={styles.article}>
                        {/* "Calculadora - HTML5, Javascript y CSS"*/}

                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/calculadora-js" title={t("project1")} target="_blank">                        
                          <Image 
                                  src="/calculadora.jpg"
                                  fill={true}
                                  alt={t("project1")}
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>{t("project1")}</h4>
                        </Link>

                    </article>
                    
                </div>
            </section>
            <section className={styles.languajes} id="skills">
                <h2 className={styles.h2}>{t("tituloSkills")}</h2>
                <p className={styles.p}><strong>
                    Backend</strong> 
                </p> 
                <p className={styles.p}>
                    Python - Django REST Framework Django Channels and Websockets - Node.js - SQL (SQLite y PostgreSQL) 
                    - Postman - DBeaver - Firebase (Cloud Firestore) - Vercel - Firebase (Hosting)
                </p> 
                <p className={styles.p}><strong>                    
                    Frontend                                      
                </strong> 
                </p> 
                <p className={styles.p}>
                React.js - Next.js - JavaScript - HTML5 - CSS                 
                </p>       

                <p className={styles.p}><strong>                    
                    {t("tituloOthers")}                                     
                </strong> 
                </p> 
                <p className={styles.p}>
                    Git (GitHub y GitLab) - Trello                  
                </p>  
                
                <p className={styles.p}><strong>                    
                    {t("tituloLanguages")}                                    
                </strong> 
                </p> 
                <p className={styles.p}>
                    {t("languages_description")}                   
                </p>  
            </section>


              
            <section className={styles.about} id="about">
                <h2 className={styles.h2}>{t("tituloAbout")}</h2>
                
                 <p className={styles.p}>
                    <Trans i18nKey="about1" components={{ strong: <strong /> }} />
                </p>

                <p className={styles.p}>
                    <Trans i18nKey="about2" components={{ strong: <strong /> }} />
                </p>                
                                    
                <p className={styles.p}>
                    <Trans i18nKey="about3" components={{ strong: <strong /> }} />
                </p>  
                   
                <p className={styles.p}>
                    <Trans i18nKey="about4" components={{ strong: <strong /> }} />
                </p>  
                      
                <p className={styles.p}>
                    <Trans i18nKey="about5" components={{ strong: <strong /> }} />
                </p>  
                
                <p className={styles.p}>
                <Trans
                    i18nKey="about6"
                    components={{
                        strong: <strong />,
                        a: <a href="http://www.parterasmayeutica.com" className={styles.sobremi} title="Escuela Mayéutica" target="_blank" />
                    }} />
                </p>                
                
                <p className={styles.p}>
                    <Trans i18nKey="about7" components={{ strong: <strong /> }} />
                </p>  
                
                <p className={styles.p}>
                    <Trans i18nKey="about8" components={{ strong: <strong /> }} />
                </p>  
                <br/>
                <br/>
                <br/>
                    
                <ul className={styles.rrss}>
                    <li className={styles.li}>
                        <Link href="https://www.linkedin.com/in/silvina-palaoro" className={styles.a} title="linkedin" target="_blank" rel="noopener noreferrer">                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="svg" viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro" className={styles.a} title="github" target="_blank" rel="noopener noreferrer">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
                                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>                    
            </section>                    
        </main> 
  );
}

// import { useLanguage } from '../../../context/LanguageContext';
// import en from '../../../public/locales (quitar)/en';
// import es from '../../../public/locales (quitar)/es';


// const { locale } = useRouter(); // Get the current locale
    // const pathname = usePathname(); // Get the current path
    // const { language } = useLanguage();
    // const t = language === 'en' ? en : es;

        // const [language, setLanguage] = useState('es');


//</p>
                //   {/* <p className={styles.p}>Soy <strong>idealista y curiosa</strong>. 
                //   Quiero hacer del mundo un lugar mejor a través de aplicaciones 
                //   prácticas que faciliten y mejoren la calidad de vida, la gestión 
                //   del tiempo y aporten soluciones 
                //                       a problemas cotidianos.
                //   </p> */}
                                        
                //   <p className={styles.p}>Me gusta trabajar con <strong>claridad y 
                //     honestidad</strong> como pilar fundamental, siempre tratando de 
                //     mantener una actitud 
                //     positiva y pensar en <strong>soluciones</strong>, en lugar de 
                //     problemas. Me gusta hacer muchas preguntas 
                //      y estoy abierta a críticas constructivas para evolucionar y crecer. 
                //    </p>                
                                    
                //    <p className={styles.p}>Soy <strong>
                //    dedicada y rápida para aprender
                //     </strong> con gran <strong> capacidad de 
                //     investigación autónoma</strong>. Soy curiosa 
                //     y me gusta investigar y entender con profundidad cada nuevo 
                //     tema que me encuentro, lo que me ha 
                //     llevado a explorar distintas áreas en mi vida.
                //    </p>
                   
                //     <p className={styles.p}>    
                //     En el desarrollo de aplicaciones me gusta crear <strong>
                //         código que sea
                //         claro, eficiente y reutilizable
                //     </strong>, para <strong>optimizar tiempos y minimizar errores</strong>, 
                //     intentando usar <strong>buenas prácticas</strong>, 
                //     como el uso de comentarios que faciliten el uso a otros 
                //     programadores, y trabajar con mis compañeros para buscar las mejores 
                //     soluciones consultando diversas fuentes.
                // </p>
                      
                // <p className={styles.p}>    

                //     El campo de la tecnología siempre me atrajo y creo que tengo 
                //     habilidad para crecer en el ámbito del desarrollo,   
                //     <strong> 
                //          disfrutando de los desafíos que se presentan en cada
                //         proyecto
                //     </strong>.
                //   </p>
                
                //   <p className={styles.p}>
                //     Si bien como estoy haciendo un cambio de carrera vengo de otra 
                //     rama de trabajo, tengo mucha experiencia laboral en <strong>
                //         trabajo de grupos y comunicación
                //     </strong> en un <strong>ambiente virtual</strong> mediante 
                //     la co-creación, dirección, administración y docencia de 
                //     una escuela <strong>online</strong> de partería 
                //     (<a href="http://www.parterasmayeutica.com" 
                //     className={styles.sobremi} title="Escuela Mayeutica">
                //     www.parterasmayeutica.com</a> 2017 – actualidad). 
                //     Una parte de mis tareas aquí también ha sido la 
                //     <strong> orientación y resolución de problemas técnicos</strong>.
                //     </p>
                
                //     <p className={styles.p}>Durante mí recorrido laboral, también
                //     he tenido experiencia en 
                //     investigación en ciencias (durante mis 4 años de estudio 
                //     en licenciatura en Química (UBA. Promedio: 8.94) y 
                //     trabajo de docencia e investigación en el área. 2001 – 
                //     2006), lo que me ha proporcionado las herramientas para 
                //     el <strong>pensamiento lógico y resolución de problemas</strong>.
                //     </p>
                
                //     <p className={styles.p}>Sumado a esto, mis 12 años como partera autónoma 
                //     (2011 -2023), de <strong>formación autodidacta</strong>, me ha dado un 
                //     amor por el crecimiento propio y la búsqueda independiente 
                //     de información, a su vez que aprendí que <strong>
                //         trabajar en
                //         equipo y pedir ayuda oportunamente
                //     </strong> es fundamental 
                //     para mantener una mente abierta a nuevas y mejores 
                //     soluciones. 
                // </p>

                // <p className={styles.p}>
                //     Si bien como estoy haciendo un cambio de carrera vengo de otra 
                //     rama de trabajo, tengo mucha experiencia laboral en <strong>
                //         trabajo de grupos y comunicación
                //     </strong> en un <strong>ambiente virtual</strong> mediante 
                //     la co-creación, dirección, administración y docencia de 
                //     una escuela <strong>online</strong> de partería 
                //     (<a href="http://www.parterasmayeutica.com" 
                //     className={styles.sobremi} title="Escuela Mayeutica">
                //     www.parterasmayeutica.com</a> 2017 – actualidad). 
                //     Una parte de mis tareas aquí también ha sido la 
                //     <strong> orientación y resolución de problemas técnicos</strong>.
                //     </p>
