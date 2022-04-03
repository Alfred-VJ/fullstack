import React from "react";
import data from "./Data";
import Lista from "./Lista";

const Renderizado = () => {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }
  return (
    <ol>
      <h2>Renderizado de data</h2>

      {data.map((e) => (
        <Lista
          key={e.id}
          content={e.content}
          date={e.date}
          important={e.important}
          //{...e} Se puede pero es mala practica, por que no podemos controlar al 100%
        />
      ))}
    </ol>
  );
};

export default Renderizado;
