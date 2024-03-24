/*Trabajo Final - Argentina Programa 4.0 - Grupo Code Hunters*/

"use client"
import styles from '../styles/HomePpal.module.css';
import Link from 'next/link';
import Image from 'next/image';

/*Página principal*/

export default function Home() {
  return (
    <body className="body">    
        
        <main className={styles.main}>
            <div className={styles.seccion} id="home">
                
                <section className={styles.seccion} id="home">
                    <h2 className={styles.h2}>Silvina Palaoro</h2>
                    <h3 className={styles.h3}>Backend Developer</h3>
                </section>
            </div>
              
            <section className={styles.projects} id="projects">
                <h2 className={styles.h2}>Proyectos</h2>
              
                <div className={styles.grid}>

                    <article className={styles.article}>
                        
                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/app-tareas" title="Aplicación fullstack de Tareas - con NextJS y Django" target="_blank">
                          <Image 
                                src="/home-app-tareas.jpg"
                                fill={true}
                                alt="Aplicación fullstack de Tareas - con NextJS y Django"
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>Aplicación fullstack de Tareas - con NextJS y Django</h4>
                        </Link>
                        

                    </article>

                    <article className={styles.article}>
                        <a href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/sim-movies" title="Simulador web películas y series - Kotlin" target="_blank">                        
                          <Image 
                                  src="/simulador-movies-kotlin.jpg"
                                  fill={true}
                                  alt="Simulador web películas y series - Kotlin"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Simulador web películas y series - Kotlin</h4>
                        </a>

                    </article>

                    <article className={styles.article}>
                        <a href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/turnero-farmacia" title="Turnero de Farmacia - Python" target="_blank">                        
                          <Image 
                                  src="/turnero-python.jpg"
                                  fill={true}
                                  alt="Turnero de Farmacia - Python"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Turnero de Farmacia - Python</h4>
                        </a>

                    </article>

                    <article className={styles.article}>
                        <a href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/ahorcado" 
                        title="Ahorcado - Python">                        
                          <Image 
                                  src="/ahorcado.jpg"
                                  fill={true}
                                  alt="Ahorcado - Python"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Ahorcado - Python</h4>
                        </a>                        
                    </article>

                    <article className={styles.article}>
                        <a href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/adivinador" 
                        title="Adivina el número - Python">                        
                          <Image 
                                  src="/adivina-numero.jpg"
                                  fill={true}
                                  alt="Adivina el número - Python"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Adivina el número - Python</h4>
                        </a>                        
                    </article>

                    <article className={styles.article}>
                        <a href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/catalogo" title="Catalogo celulares - HTML5, Javascript y CSS">                        
                          <Image 
                                  src="/catalogo.jpg"
                                  fill={true}
                                  alt="Catalogo celulares - HTML5, Javascript y CSS"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Catalogo celulares - HTML5, Javascript y CSS</h4>
                        </a>

                    </article>

                    <article className={styles.article}>
                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/formularioJS" title="Formulario y tabla - HTML5, Javascript y CSS" target="_blank">                        
                          <Image 
                                  src="/formulario.jpg"
                                  fill={true}
                                  alt="Formulario y tabla- HTML5, Javascript y CSS"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Formulario y tabla - HTML5, Javascript y CSS</h4>
                        </Link>

                    </article>

                    <article className={styles.article}>
                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro/tree/main/src/app/calculadora-js" title="Calculadora - HTML5, Javascript y CSS" target="_blank">                        
                          <Image 
                                  src="/calculadora.jpg"
                                  fill={true}
                                  alt="Calculadora - HTML5, Javascript y CSS"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Calculadora - HTML5, Javascript y CSS</h4>
                        </Link>

                    </article>
                    
                </div>
            </section>
            <section className={styles.languajes} id="skills">
                <h2 className={styles.h2}>Lenguajes, tecnologías y librerías</h2>
                <p className={styles.p}><strong>
                    Backend</strong> 
                </p> 
                <p className={styles.p}>
                    Kotlin - Python - Django REST Framework - Node.js - SQL
                </p> 
                <p className={styles.p}><strong>                    
                    Front End                                      
                </strong> 
                </p> 
                <p className={styles.p}>
                    Next.js - React.js - JavaScript - HTML5 - CSS                 
                </p>                   
            </section>


              
            <section className={styles.about} id="about">
                <h2 className={styles.h2}>Sobre mi</h2>
                <p className={styles.p}>Soy <strong>
                   dedicada y rápida para aprender
                </strong> con gran <strong> capacidad de 
                    investigación autónoma</strong>. Soy curiosa 
                    y me gusta investigar y entender con profundidad cada nuevo 
                    tema que me encuentro, lo que me ha 
                    llevado a explorar distintas áreas en mi vida.
                </p>
                <p className={styles.p}>    
                    En el desarrollo de aplicaciones me gusta crear <strong>
                        código que sea
                        claro, eficiente y reutilizable
                    </strong>, para <strong>optimizar tiempos y minimizar errores</strong>, 
                    intentando usar <strong>buenas prácticas</strong>, 
                    como el uso de comentarios que faciliten el uso a otros 
                    programadores, y trabajar con mis compañeros para buscar las mejores 
                    soluciones consultando diversas fuentes.
                </p>
                <p className={styles.p}>    

                    El campo de la tecnología siempre me atrajo y creo que tengo 
                    habilidad para crecer en el ámbito del desarrollo,   
                    <strong> 
                         disfrutando de los desafíos que se presentan en cada
                        proyecto
                    </strong>.</p>
                <p className={styles.p}>
                    Si bien como estoy haciendo un cambio de carrera vengo de otra 
                    rama de trabajo, tengo mucha experiencia laboral en <strong>
                        trabajo de grupos y comunicación
                    </strong> en un <strong>ambiente virtual</strong> mediante 
                    la co-creación, dirección, administración y docencia de 
                    una escuela <strong>online</strong> de partería 
                    (<a href="http://www.parterasmayeutica.com" 
                    className={styles.sobremi} title="Escuela Mayeutica">
                    www.parterasmayeutica.com</a> 2017 – actualidad). 
                    Una parte de mis tareas aquí también ha sido la 
                    <strong> orientación y resolución de problemas técnicos</strong>.
                    </p>
                <p className={styles.p}>Durante mí recorrido laboral, también
                    he tenido experiencia en 
                    investigación en ciencias (durante mis 4 años de estudio 
                    en licenciatura en Química (UBA. Promedio: 8.94) y 
                    trabajo de docencia e investigación en el área. 2001 – 
                    2006), lo que me ha proporcionado las herramientas para 
                    el <strong>pensamiento lógico y resolución de problemas</strong>.
                    </p>
                <p className={styles.p}>Sumado a esto, mis 12 años como partera autónoma 
                    (2011 -2023), de <strong>formación autodidacta</strong>, me ha dado un 
                    amor por el crecimiento propio y la búsqueda independiente 
                    de información, a su vez que aprendí que <strong>
                        trabajar en
                        equipo y pedir ayuda oportunamente
                    </strong> es fundamental 
                    para mantener una mente abierta a nuevas y mejores 
                    soluciones. 
                </p>
                    
                <ul className={styles.rrss}>
                    <li className={styles.li}>
                        <Link href="https://www.linkedin.com/in/silvina-palaoro" className={styles.a} title="linkedin" target="_blank" rel="noopener noreferrer">                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="svg" viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="https://github.com/Sil-Palaoro/sil-palaoro" className={styles.a} title="github" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="svg" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
                    
            </section>
                    
        </main>
                           
                    
    </body>
  );
}


{/*<header className={styles.header}>
            <h1 className={styles.h1}><a href="#home" title="Silvina Palaoro" className={styles.a}>Silvina Palaoro</a></h1>
            <nav className="nav">
                <ul className="ul">
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

        {/* <!-- <div className="circulos">
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                </div> --> */}

