
"use client"
import styles from '../../styles/calculadora.css';
import Sumar from '@/components/Sumar';
import Restar from '@/components/Restar';
import Multiplicar from '@/components/Multiplicar';
import Dividir from '@/components/Dividir';
import Despejar from '@/components/Despejar';


export default function Calculadora() {
  return (
    <>
        <div className={styles.calculadora}>
            <h1 className={styles.h1}>Calculadora</h1>
            <form>
                <div className={styles.numero1}>
                    <label for="num1">Número 1:</label>
                    <input type="number" id="num1" required></input>
                </div>
                <div className={styles.numero2}>
                    <label for="num2">Número 2:</label>
                    <input type="number" id="num2" required></input>
                </div>
                <div className={styles.boton}>
                    <button type="button" onclick={<Sumar />}>+</button>
                    <button type="button" onclick={<Restar />}>-</button>
                    <button type="button" onclick={<Multiplicar />}>*</button>
                    <button type="button" onclick={<Dividir />}>/</button>
                    <button type="reset" onClick={<Despejar />} id="despejar">Borrar</button>
                </div>
                <div className={styles.resultado}>
                    <label for="resultado">Resultado:</label>
                    <input type="text" id="resultado" disabled></input>
                </div>
            </form>        
        </div>        
    </>
  );
};