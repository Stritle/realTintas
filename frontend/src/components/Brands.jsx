import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import tvipLogo from "../images/tvipLogo.webp";
import capotto from "../images/capotto.webp";
import basikos from "../images/basikos.png";
import hammerite from "../images/hammerite.png";
import cuprinol from "../images/cuprinol.png";
import robbialac from "../images/robbialac.webp";
import viero from "../images/viero.webp";

const Brands = () => {
  return (
    <>
      <h1 className="text-center my-5">
        <strong>As nossas Marcas</strong>
      </h1>
      <Container>
        <Row className="">
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={tvipLogo}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={capotto}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={robbialac}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={basikos}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={hammerite}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={viero}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={cuprinol}></img>
          </Col>
          <Col md={3} className="my-3 text-center">
            <img className="img-large-animation" src={viero}></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Brands;
