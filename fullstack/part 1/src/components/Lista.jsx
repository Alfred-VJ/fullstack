import React from "react";

const Lista = ({ id, date, content, important }) => {
  return (
    <>
      <li>
        <p>{content}</p>
        <p>{date}</p>
        <p>{important}</p>
      </li>
    </>
  );
};

export default Lista;
