import React from "react";
import { Link } from "react-router-dom";

const HotLinks = () => {
  return (
    <div className="hotLinks">
      <div className="itemsLinks-flex">
        <h1>Tintas e Acessórios</h1>
        <Link to="#">Interior e Tetos</Link>
        <Link to="#">Exterior e Fachadas</Link>
        <Link to="#">Madeira e Metais</Link>
        <Link to="#">Pavimentos</Link>
        <Link to="#">Primários</Link>
        <Link to="#">Efeitos Decorativos</Link>
        <Link to="#">Diluentes</Link>
        <Link to="#">Impermeabilização</Link>
        <Link to="#">Linha Náutica</Link>
        <Link to="#">Acessórios</Link>
      </div>
      <div className="itemsLinks">
        <div className="itemsLinks-flex">
          {" "}
          <h1>Máquinas e Ferramentas</h1>
          <Link to="#">Interior e Tetos</Link>
          <Link to="#">Exterior e Fachadas</Link>
          <Link to="#">Madeira e Metais</Link>
          <Link to="#">Pavimentos</Link>
          <Link to="#">Primários</Link>
          <Link to="#">Efeitos Decorativos</Link>
          <Link to="#">Diluentes</Link>
          <Link to="#">Impermeabilização</Link>
        </div>{" "}
        <div className="itemsLinks-flex">
          {" "}
          <br />
          <Link to="#">Interior e Tetos</Link>
          <Link to="#">Exterior e Fachadas</Link>
          <Link to="#">Madeira e Metais</Link>
          <Link to="#">Pavimentos</Link>
          <Link to="#">Primários</Link>
          <Link to="#">Efeitos Decorativos</Link>
          <Link to="#">Diluentes</Link>
        </div>
      </div>
      <div>
        <div className="itemsLinks">
          <div className="itemsLinks-flex">
            {" "}
            <h1>Marcas</h1>
            <Link to="#">Robbialac</Link>
            <Link to="#">Capotto</Link>
            <Link to="#">Viero</Link>
            <Link to="#">Pavimentos</Link>
            <Link to="#">Robbialac</Link>
            <Link to="#">Capotto</Link>
            <Link to="#">Viero</Link>
          </div>{" "}
          <div className="itemsLinks-flex">
            {" "}
            <br />
            <Link to="#">Robbialac</Link>
            <Link to="#">Capotto</Link>
            <Link to="#">Viero</Link>
            <Link to="#">Pavimentos</Link>
            <Link to="#">Robbialac</Link>
            <Link to="#">Capotto</Link>
            <Link to="#">Viero</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotLinks;
