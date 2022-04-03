import React from "react";

const RenderLista = ({ content, date }) => {
  return (
    <>
      <li>{content}</li>
      <p>{date}</p>
      <hr />
    </>
  );
};

export default RenderLista;
