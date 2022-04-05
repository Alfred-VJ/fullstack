import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Anuncios } from "./Pages/Anuncios";
import { Articulos } from "./Pages/Articulos";
import { Contacto } from "./Pages/Contacto";
import { Direccion } from "./Pages/Direccion";
import { Formatos } from "./Pages/Formatos";
import { Manifiesto } from "./Pages/Manifiesto";
import { Medios } from "./Pages/Medios";

function App() {
  return (
    <>
      <header>
        <h1>Pagina</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/direccion">Direccion</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/formatos">Formatos</Link>
            </li>
            <li>
              <Link to="/manifiesto">Manifiesto</Link>
            </li>
            <li>
              <Link to="/anuncios">Anuncios</Link>
            </li>
            <li>
              <Link to="/medios">Medios</Link>
            </li>
            <li>
              <Link to="/articulos">Articulos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direccion" element={<Direccion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/formatos" element={<Formatos />} />
        <Route path="/manifiesto" element={<Manifiesto />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/articulos" element={<Articulos />} />
      </Routes>
    </>
  );
}

export default App;
