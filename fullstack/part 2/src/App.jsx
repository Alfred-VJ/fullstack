import React, { useState } from "react";
import { Notes } from "./Notes";

const Agregar = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNotes, setNewNotes] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNotes(event.target.value);
  };
  const handleClick = () => {
    console.log("agregar");
    const newNoteAdd = {
      id: notes.length + 1,
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    /* id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,*/
    setNotes(notes.concat(newNoteAdd));
    setNewNotes("");
  };
  return (
    <>
      <h1>Notas</h1>
      <ol>
        {notes.map((e) => (
          <Notes
            key={e.id}
            content={e.content}
            date={e.date}
            important={e.important}
          />
        ))}
      </ol>
      <div />
      <input type="text" onChange={handleChange} value={newNotes} />
      <button onClick={handleClick}>Agrega</button>
    </>
  );
};

export default Agregar;
