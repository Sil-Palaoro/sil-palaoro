/*Trabajo Final - Argentina Programa 4.0 - Grupo Code Hunters*/

"use client"
import styles from '../styles/HomePpal.module.css';
import Link from 'next/link';
import Image from 'next/image';

/*Página principal*/

export default function Home() {
  return (
    <body classname="body">    
        <header className={styles.header}>
            <h1 className={styles.h1}><a href="#home" title="Silvina Palaoro" className={styles.a}>Silvina Palaoro</a></h1>
            <nav className="nav">
                <ul className="ul">
                    <li className={styles.li}>
                    <Link title="Home" className={styles.a} href="#home">Home</Link>
                    {/* <a href="#home" title="Home" className={styles.a}>Home</a> */}
                    </li>
                    <li className={styles.li}>
                    <Link href="#projects" title="Projects" className={styles.a}>Projects</Link>
                      {/* <a href="#projects" title="Projects" className={styles.a}>Projects</a> */}
                    </li>
                    <li className={styles.li}>
                    <Link href="#about" title="About" className={styles.a}>About</Link>
                      {/* <a href="#about" title="About" className={styles.a}>About</a> */}
                    </li>
                </ul>
            </nav>
        </header>

        <main className={styles.main}>
            <div className={styles.seccion} id="home">
                {/* <!-- <div className="circulos">
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                </div> --> */}
                <section className={styles.seccion} id="home">
                    <h2 className={styles.h2}>Silvina Palaoro</h2>
                    <h3 className={styles.h3}>Backend Developer</h3>
                </section>
            </div>
              
            <section className={styles.seccion} id="projects">
                <h2 className={styles.h2}>Proyectos</h2>
                {/* <!-- <p className="p">Aquí están los proyectos realizados mientras estudiaba y otros personales</p> --> */}
              
                <div className={styles.grid}>
                    <article className={styles.article}>
                        
                        <Link href="/app-tareas" title="Aplicación de Tareas">
                          <Image 
                                src="/home-app-tareas.jpg"
                                fill={true}
                                alt="Proyecto 1"
                                className={styles.img} 
                                loading="lazy"
                          />                                                                               
                          <h4 className={styles.h4}>Aplicación de Tareas</h4>
                        </Link>
                        

                    </article>
                    <article className={styles.article}>
                        <a href="#" title="Proyecto2">                        
                          <Image 
                                  src="/code2.jpeg"
                                  fill={true}
                                  alt="Proyecto 2"
                                  className={styles.img} 
                                  loading="lazy"
                          />                        
                          <h4 className={styles.h4}>Nombre proyecto2</h4>
                        </a>

                    </article>
                </div>
            </section>
              
            <section className={styles.about} id="about">
                <h2 className={styles.h2}>Sobre mi</h2>
                <p className={styles.p}>Soy una persona con capacidad de <strong>
                    investigación
                        autónoma, dedicada y rápida para aprender
                </strong>,  lo que me ha 
                    llevado a explorar distintas áreas en mi vida. El campo 
                    de la tecnología siempre me atrajo y creo que tengo 
                    habilidad para crecer en el ámbito del desarrollo, 
                    <strong>
                        disfrutando de los desafíos que se presentan en cada
                        proyecto
                    </strong>.</p>
                <p className={styles.p}>No poseo experiencia laboral en IT, pero sí 
                    tengo mucha experiencia laboral en <strong>
                        trabajo de grupos y
                        comunicación
                    </strong> en un ambiente virtual, adquirida mediante 
                    la co-creación, dirección, administración y docencia de 
                    una escuela <strong>online</strong> de partería 
                    (<a href="http://www.parterasmayeutica.com" 
                    className={styles.sobremi} title="Escuela Mayeutica">
                    www.parterasmayeutica.com</a> 2017 – actualidad). 
                    Una parte de mis tareas aquí también ha sido la 
                    <strong>orientación y resolución de problemas técnicos</strong>.
                    </p>
                <p className={styles.p}>También en mi vida he tenido experiencia en 
                    investigación en ciencias (durante mis 4 años de estudio 
                    en licenciatura en Química (UBA. Promedio: 8.94) y 
                    trabajo de docencia e investigación en el área. 2001 – 
                    2006), lo que me ha proporcionado las herramientas para 
                    el <strong>pensamiento lógico y resolución de problemas</strong>.
                    </p>
                <p className={styles.p}>Además, mis 12 años como partera autónoma 
                    (2011 -2023), de <strong>formación autodidacta</strong>, me ha dado un 
                    amor por el crecimiento propio y la búsqueda independiente 
                    de información, a su vez que aprendí que <strong>
                        trabajar en
                        equipo y pedir ayuda cuando es necesario
                    </strong> es fundamental 
                    para mantener una mente abierta a nuevas y mejores 
                    soluciones. 
                </p>
                    
                <ul className={styles.rrss}>
                    <li className={styles.li}>
                        <a href="@" className={styles.a} title="linkedin" target="_blank" rel="noopener noreferrer">
                            <svg className={styles.svg}></svg>
                        </a>
                    </li>
                    <li className={styles.li}>
                        <a href="@" className={styles.a} title="github" target="_blank" rel="noopener noreferrer">
                            <svg className={styles.svg}></svg>
                        </a>
                    </li>
                </ul>
                    
            </section>
                    
        </main>
                           
                    
    </body>
  );
}

