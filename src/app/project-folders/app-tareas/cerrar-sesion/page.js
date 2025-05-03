import LogOut from "@/app/[locale]/components/LogOut";
import styles from "../../../styles/page.module.css";

const CerrarSesion = () => {
  return (
    <>
      <body className={styles.container}>  
        <br /><br /> <br /> 
        <div className={styles.contenedor}>             
          <LogOut />  
        </div>
      </body>  
    </>
  );
};

export default CerrarSesion;

