import React from "react";
import ReactDOM from "react-dom";
import Renderizado from "./components/Renderizar";

const App = () => {
  return (
    <div>
      <Renderizado />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
