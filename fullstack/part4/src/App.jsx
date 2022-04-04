import React, { useState, useEffect } from "react";
import { Render } from "./components/Render";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let url = "https://jsonplaceholder.typicode.com/posts";
      axios.get(url).then((res) => {
        const { data } = res;
        setData(data);
      });
      setLoading(false);
    }, 1000);
  }, []);

  const newInfAdd = (event) => {
    console.log(event.target.value);
    setAddData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let add = {
      userId: data.length + 2,
      id: data.length + 1,
      title: addData,
      body: addData,
    };
    setData([...data, add]);
    setAddData("");
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
