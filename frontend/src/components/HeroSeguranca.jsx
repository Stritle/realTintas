import React from "react";
import entrega from "../images/entrega.webp";
import cadeado from "../images/cadeado.webp";
import equipa from "../images/equipa.webp";

const HeroSeguranca = () => {
  return (
    <div className="heroSeguranca ">
      <div>
        <img src={entrega} alt="entrega Imagem"></img>
        <h1>Entregas Gratuitas</h1>
        <p>
          Portes grátis em encomendas superiores a 200€ para Portugal
          Continental
        </p>
      </div>
      <div>
        <img src={cadeado} alt="cadeado Imagem"></img>
        <h1>Segurança</h1>
        <p>Compre online com a máxima segurança.</p>
      </div>
      <div>
        <img src={equipa} alt="equipa Imagem"></img>
        <h1>Apoio ao Cliente</h1>
        <p>Conte com a ajuda dos nossos especialistas. </p>
      </div>
    </div>
  );
};

export default HeroSeguranca;
