import React from "react";

export const Render = ({ title, body }) => {
  return (
    <>
      <li>{title}</li>
      <p>{body}</p>
    </>
  );
};
