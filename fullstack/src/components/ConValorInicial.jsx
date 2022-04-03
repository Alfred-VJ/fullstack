import React, { useState } from "react";
import HUno from "./HUno";
import valorinicial from "./Valorinicial";

const ContadorConValorInicial = () => {
  const [valor, setValor] = useState(valorinicial);

  const valoresUno = () => {
    setValor({
      ...valor,
      primer: valor.primer + 1,
    });
  };

  const valoresDos = () => {
    setValor({
      ...valor,
      segundo: valor.segundo + 1,
    });
  };

  const valoresTres = () => {
    setValor({
      ...valor,
      tercero: valor.tercero + 1,
    });
  };
  const restart = () => {
    setValor(valorinicial);
  };
  return (
    <>
      <HUno count={valor.primer} />
      <button onClick={valoresUno}>Mas</button>

      <HUno count={valor.segundo} />
      <button onClick={valoresDos}>Mas</button>

      <HUno count={valor.tercero} />
      <button onClick={valoresTres}>Mas</button>

      <HUno count={valor.restart} />
      <button onClick={restart}>restart</button>
    </>
  );
};

export default ContadorConValorInicial;
