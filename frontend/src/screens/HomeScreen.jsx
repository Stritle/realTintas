import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Brands from "../components/Brands";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  const carousel = useRef(null);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div>
      <Helmet>
        <title>RealTintas</title>
      </Helmet>
      <div className="hero"></div>
      <div className="promos"></div>
      <h1 className="text-center my-5">Produtos de Destaque</h1>

      <div className="products">
        <button className="btn-carousel" onClick={handleLeftClick}>
          <BsFillArrowLeftCircleFill />
        </button>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="carousel" ref={carousel}>
            {products.map((product) => (
              <div className="carousel-col" key={product.slug}>
                <Product product={product} />
              </div>
            ))}
          </div>
        )}

        <button className="btn-carousel" onClick={handleRightClick}>
          <BsFillArrowRightCircleFill />{" "}
        </button>
      </div>
      <div className="notFind text-center">
        {" "}
        <h1>Não encontra o que procura ? </h1>
        <p>A equipa da RealTintas ajuda-o.</p>
        <Link to="#">Enviar Pedido </Link>
      </div>
      <Brands />
    </div>
  );
};

export default HomeScreen;
