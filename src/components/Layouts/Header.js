import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  // Scroll Navbar
  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        /* Se nav for true, recebe 'sticky'. Se a rota não for '/', recebe 'text-dark-nav' */
        className={`${nav === true ? "sticky" : ""} ${location.pathname !== "/" ? "text-dark-nav" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Sobre
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Nosso Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Compras
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contato
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
