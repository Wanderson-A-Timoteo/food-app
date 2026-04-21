import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/ShopStyle.css";

function Shop() {
  return (
    <Layout>
      <section className="shop_page_section pt-5 pb-5">
        <Container>
          <Row className="justify-content-center text-center mt-5 mb-5">
            <Col md={8}>
              <h2 className="title_shop mt-5">Nossa Lojinha</h2>
              <p className="subtitle_shop mb-4">
                Em breve você poderá comprar nossos molhos artesanais, bonés e camisetas exclusivas do Tasty Burger!
              </p>
              <i className="bi bi-shop text-warning" style={{ fontSize: "5rem" }}></i>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Shop;
