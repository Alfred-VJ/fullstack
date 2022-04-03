import React, { useState } from "react";

const ContadorAndDecrementadorAndMultiplicador = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>Soy un contador</p>
      <h2>{contador}</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          setContador(contador === null);
        }}
      >
        Multiplicar
      </button>
    </>
  );
};
export default ContadorAndDecrementadorAndMultiplicador;
