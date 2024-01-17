'use client' 
import React, { useState } from 'react';

 
const Despejar = () => {
  const [parrafoExistente, setParrafoExistente] = useState(true);

  const handleDespejarClick = () => {
    if (parrafoExistente) {
      setParrafoExistente(false);
    }
  };

  return (
    <>
      <button onClick={handleDespejarClick}>Despejar</button>
      {parrafoExistente && <p id="parrafo">Contenido del párrafo</p>}
    </>
  );
};

export default Despejar;
