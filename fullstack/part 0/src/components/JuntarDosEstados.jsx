import React, { useState } from "react";
import HUno from "./HUno";

const JuntarDosEstados = () => {
  const [estados, setEstados] = useState({
    derecha: 0,
    izquierda: 0,
    clicks: 0,
  });

  const handelClickDerecha = () => {
    setEstados({
      derecha: estados.derecha + 1,
      izquierda: estados.izquierda,
      clicks: estados.clicks + 1,
    });
  };
  const handelClickIzquierda = () => {
    setEstados({
      derecha: estados.derecha,
      izquierda: estados.izquierda + 1,
      clicks: estados.clicks + 1,
    });
  };

  const decrementaroD = () => {
    setEstados({
      derecha: estados.derecha - 1,
      izquierda: estados.izquierda,
      clicks: estados.clicks + 1,
    });
  };
  const decrementaroI = () => {
    setEstados({
      derecha: estados.derecha,
      izquierda: estados.izquierda - 1,
      clicks: estados.clicks + 1,
    });
  };

  const restar = () => {
    setEstados({
      derecha: estados.derecha === 0,
      izquierda: estados.izquierda === 0,
      clicks: estados.clicks + 1,
    });
  };

  const restarClicks = () => {
    setEstados({
      derecha: estados.derecha,
      izquierda: estados.izquierda,
      clicks: estados.clicks === 0,
    });
  };

  return (
    <>
      <HUno count={estados.derecha} />
      <button onClick={handelClickDerecha}>Mas Derecha</button>
      <button onClick={decrementaroD}>Menos Derecha</button>
      <br />
      <HUno count={estados.izquierda} />
      <button onClick={handelClickIzquierda}>Mas Izquierda</button>
      <button onClick={decrementaroI}>Menos Izquierda</button>
      <div />
      <HUno count={estados.izquierda.derecha} />
      <button onClick={restar}>Restar</button>
      <div />
      <HUno count={estados.clicks} />
      <button onClick={restarClicks}>Reiniciar clicks</button>
    </>
  );
};

export default JuntarDosEstados;
