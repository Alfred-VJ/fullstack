import React from "react";
import ReactDOM from "react-dom";
import { base } from "./components/Base";
import RenderLista from "./components/RenderLista";

const App = () => {
  return (
    <>
      <ol>
        {base.map((e) => (
          <RenderLista
            key={e.id}
            content={e.content}
            date={e.date}
            important={e.important}
          />
        ))}
      </ol>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
