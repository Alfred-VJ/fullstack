import React, { useState } from "react";

const AumentarCon = () => {
  const [aumet, setAumet] = useState(0);

  const count = (e) => {
    if (e === true) {
      setAumet(aumet + 1);
    } else if (e === false) {
      setAumet(aumet - 1);
    } else {
      setAumet(aumet === 0);
    }
  };

  return (
    <>
      <h2>{aumet}</h2>
      <button onClick={count(true)}>Aumentar</button>
      <button onClick={count(false)}>Decrementar</button>
      <button onClick={count}>Reiniciar</button>
    </>
  );
};

export default AumentarCon;
