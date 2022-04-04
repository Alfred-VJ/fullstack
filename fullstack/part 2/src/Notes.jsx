import React from "react";

export const Notes = ({ content, date }) => {
  return (
    <>
      <hr />
      <li>{content}</li>
      <p>{date}</p>
    </>
  );
};
