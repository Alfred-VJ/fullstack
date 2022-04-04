import React, { useState, useEffect } from "react";
import { Render } from "./components/Render";
import { geetData } from "./servicios/getData/getData";
import creatNotes from "./servicios/getData/creatNotes";

const App = () => {
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    geetData().then((data) => {
      setData(data);
    });
    setLoading(false);
  }, []);

  const newInfAdd = (event) => {
    console.log(event.target.value);
    setAddData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let add = {
      userId: data.length + 2,
      title: addData,
      body: addData,
    };
    creatNotes(add)
      .then((addData) => {
        setData((prevData) => prevData.concat(addData));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>Informacion</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {data.map((e) => (
          <Render key={e.id} title={e.title} body={e.body} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={newInfAdd} value={addData} />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default App;
