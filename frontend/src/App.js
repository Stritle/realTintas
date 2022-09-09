import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Store } from "./store";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignUpScreen from "./screens/SignUpScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Button from "react-bootstrap/Button";
import axios from "axios";
import getError from "./util";
import { FaAlignJustify } from "react-icons/fa";
// import { BsSearch } from "react-icons/bs";
// import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import logo from "./realTintasLogo.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import pagamentosImg from "../src/images/pagamentosImg.webp";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import reclamacoes from "../src/images/reclamacoes.webp";
import HotLinks from "./components/HotLinks";
import HeroSeguranca from "./components/HeroSeguranca";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              {" "}
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i>
                  <FaAlignJustify />
                </i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src={logo}
                    width="130"
                    height="70"
                    className="d-inline-block align-top"
                    alt="RealTintas Logo"
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" />
              {/* <SearchBox BsSearch={BsSearch} /> */}
              <Nav className="me-auto">
                <NavDropdown
                  title="Tintas e Acessórios"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Máquinas e Ferramentas"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Marcas" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Contactos</Nav.Link>
              </Nav>
              <Nav className="me-auto w-100 justify-content-end">
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Perfil Utilizador</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    <FiUser className="icon-size" />
                    Entrar
                  </Link>
                )}
                <Link to="/cart" className="nav-link">
                  <IoBagHandleOutline className="icon-size" />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column "
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container fluid className="m-0-i">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SignInScreen />} />
              <Route path="/signup" element={<SignUpScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/orderhistory" element={<OrderHistoryScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/search" element={<SearchScreen />} />
            </Routes>
          </Container>
          <HeroSeguranca />
          <HotLinks />
        </main>
        <footer>
          <div className="footer-produtos">
            <h1>
              <strong>Produtos</strong>
            </h1>
            <Link to="#">Tintas para Exterior</Link>
            <Link to="#">Marcas</Link>
            <Link to="#">Máquinas</Link>
          </div>
          <div className="footer-links">
            <h1>
              <strong>Links Úteis</strong>
            </h1>
            <Link to="#">Sobre Nós</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Politica de Privacidade</Link>
            <Link to="#">Termos e Condições</Link>
            <Link to="#">Contactos</Link>
          </div>
          <div className="footer-pagamentos">
            <h1>
              <strong>Pagamentos e Segurança</strong>
            </h1>
            <img src={pagamentosImg} alt="pagamentos"></img>
            <h1 className="siga-nos">
              {" "}
              <strong>Siga-nos</strong>
            </h1>
            <div className="socialmedia">
              {" "}
              <a href="google.pt">
                <FiInstagram />
              </a>
              <a href="google.pt">
                <FaFacebookF />
              </a>
              <a href="google.pt">
                <FaWhatsapp />
              </a>
              <a href="google.pt">
                <FiMail />
              </a>
            </div>
          </div>
          <div className="reclamacoes">
            <h1></h1>
            <img src={reclamacoes} alt="reclamações"></img>
            <span>
              <p>
                © 2022 RealTintas <br />
                Desenvolvido por Nuno Alves
              </p>
            </span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
