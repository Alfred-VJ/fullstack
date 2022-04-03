import React from "react";
import ReactDOM from "react-dom";
import Curso from "./components/Course";
import ParrafoDos from "./components/ParrafoDos";
import ParrafoTres from "./components/ParrafoTres";
import ParrafoUno from "./components/ParrafoUno";
import Suma from "./components/Suma";
import ContadorAndDecrementadorAndMultiplicador from "./components/Aumentar";
import JuntarDosEstados from "./components/JuntarDosEstados";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Curso course={course} />
      <div />
      <ParrafoUno part1={part1} />
      <div />
      <ParrafoDos part2={part2} />
      <div />
      <ParrafoTres part3={part3} />
      <div />
      <Suma
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <div />
      <ContadorAndDecrementadorAndMultiplicador />
      <div />
      <JuntarDosEstados />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
