'use client' 
import React, { useState } from 'react';

const Dividir = () => {
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');

  const handleDividirClick = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (num2 === 0) {
      setError('No se puede dividir entre cero');
      setResultado('');
    } else {
      setResultado(num1 / num2);
      setError('');
    }
  };

  return (
    <>
      <input id="num1" type="number" />
      <input id="num2" type="number" />
      <button onClick={handleDividirClick}>Dividir</button>

      {error && <p id="parrafo">{error}</p>}
      <input id="resultado" type="text" value={resultado} readOnly />
    </>
  );
};

export default Dividir;
