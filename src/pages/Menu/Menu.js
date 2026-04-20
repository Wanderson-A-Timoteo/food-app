import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Layouts/Cards";
import "../../styles/MenuStyle.css";

// Importação das imagens
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

// Array de Dados
const mockData = [
  { id: "0001", image: Image1, title: "Crispy Chicken", paragraph: "Frango crocante, molho chili, tomates, picles e coleslaw artesanal.", rating: 5, price: 34.90 },
  { id: "0002", image: Image2, title: "Ultimate Bacon", paragraph: "Blend da casa, queijo cheddar, bacon crocante, cebola e mostarda.", rating: 4.5, price: 38.50 },
  { id: "0003", image: Image3, title: "Black Sheep", paragraph: "Queijo prato, relish de tomate, abacate fresh, alface e cebola roxa.", rating: 4.5, price: 42.00 },
  { id: "0004", image: Image4, title: "Vegan Burger", paragraph: "Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e maionese de ervas.", rating: 4, price: 36.90 },
  { id: "0005", image: Image5, title: "Double Burger", paragraph: "Dois blends de 160g, dobro de cheddar, picles e molho especial.", rating: 5, price: 45.90 },
  { id: "0006", image: Image6, title: "Turkey Burger", paragraph: "Hambúrguer de peru suculento, cheddar, cebola caramelizada e alface.", rating: 4, price: 32.00 },
  { id: "0007", image: Image7, title: "Smokey House", paragraph: "Blend defumado, queijo provolone, cebola crispy e molho barbecue.", rating: 4.5, price: 39.90 },
  { id: "0008", image: Image8, title: "Classic Burger", paragraph: "O clássico: carne, queijo, ketchup, mostarda, picles e cebola branca.", rating: 4, price: 28.50 },
];

// Função para renderizar as estrelas
const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Menu() {
  return (
    <Layout>
      <section className="menu_page_section pt-5 pb-5">
        <Container>
          {/* Cabeçalho da Página */}
          <Row className="mb-5 text-center mt-5">
            <Col>
              <h2 className="title_menu">Nosso Menu Completo</h2>
              <p className="subtitle_menu">Escolha o seu burger insano favorito e adicione ao carrinho!</p>
            </Col>
          </Row>

          {/* Listagem de Produtos usando o componente Cards */}
          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Menu;
