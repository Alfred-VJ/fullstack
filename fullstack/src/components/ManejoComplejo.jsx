import React, { useState } from "react";
import HUno from "./HUno";

const ManejoComplejo = () => {
  const [multiplesEstados, setMultiplesEstados] = useState({
    primero: 0,
    segundo: 0,
    tercero: 0,
    cuarto: 0,
    contador: 0,
  });

  const estadosUno = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      primero: multiplesEstados.primero + 1,
      contador: multiplesEstados.contador + 1,
    });
  };
  const estadosDos = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      segundo: multiplesEstados.segundo + 1,
      contador: multiplesEstados.contador + 1,
    });
  };
  const estadosTres = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      tercero: multiplesEstados.tercero + 1,
      contador: multiplesEstados.contador + 1,
    });
  };
  const estadosCuatro = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      cuarto: multiplesEstados.cuarto + 1,
      contador: multiplesEstados.contador + 1,
    });
  };

  const estadosUnoR = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      primero: multiplesEstados.primero - 1,
      contador: multiplesEstados.contador - 1,
    });
  };
  const estadosDosR = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      segundo: multiplesEstados.segundo - 1,
      contador: multiplesEstados.contador - 1,
    });
  };
  const estadosTresR = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      tercero: multiplesEstados.tercero - 1,
      contador: multiplesEstados.contador - 1,
    });
  };
  const estadosCuatroR = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      cuarto: multiplesEstados.cuarto - 1,
      contador: multiplesEstados.contador - 1,
    });
  };

  const reiniciar = () => {
    setMultiplesEstados({
      ...multiplesEstados,
      contador: multiplesEstados.contador === 0,
    });
  };

  return (
    <>
      <br />
      <HUno count={multiplesEstados.primero} />
      <button onClick={estadosUno}>Amuneta</button>
      <button onClick={estadosUnoR}>Decremetar</button>
      <br />
      <HUno count={multiplesEstados.segundo} />
      <button onClick={estadosDos}>Amuneta</button>
      <button onClick={estadosDosR}>Decremetar</button>
      <br />
      <HUno count={multiplesEstados.tercero} />
      <button onClick={estadosTres}>Amuneta</button>
      <button onClick={estadosTresR}>Decremetar</button>
      <br />
      <HUno count={multiplesEstados.cuarto} />
      <button onClick={estadosCuatro}>Amuneta</button>
      <button onClick={estadosCuatroR}>Decremetar</button>
      <br />
      <HUno count={multiplesEstados.contador} />
      <button onClick={reiniciar}>Reinicio</button>
      <br />
    </>
  );
};

export default ManejoComplejo;
