import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AboutStyle.css";

function About() {
  return (
    <Layout>
      <section className="about_page_section pt-5 pb-5">
        <Container>
          <Row className="mb-5 text-center mt-5">
            <Col>
              <h2 className="title_about">A História do Tasty Burger</h2>
              <p className="subtitle_about">Mais que um hambúrguer, uma paixão de família.</p>
            </Col>
          </Row>

          {/* Seção da História e Imagem do Local */}
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Local da Hamburgueria" 
                className="img-fluid rounded shadow" 
              />
            </Col>
            <Col lg={6} className="px-lg-5">
              <h3 className="mb-3">Como tudo começou</h3>
              <p>
                Em 2010, em uma pequena garagem na esquina do bairro, o <strong>Tasty Burger </strong> 
                nasceu de um sonho simples: criar o hambúrguer perfeito para os amigos e familiares do bairro. O que era apenas um hobby de fim de semana, com receitas passadas de geração em geração, 
                logo atraiu filas na calçada.
              </p>
              <p>
                Hoje, mantemos a mesma essência: ingredientes frescos comprados diariamente de produtores locais, pão artesanal assado na hora e uma chapa sempre quente esperando por você. Nosso objetivo não é 
                apenas matar sua fome, mas proporcionar uma experiência gastronômica inesquecível.
              </p>
            </Col>
          </Row>

          {/* Seção da Equipe */}
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6} className="px-lg-5 mb-4 mb-lg-0 mt-4 mt-lg-0">
              <h3 className="mb-3">Conheça nossa Equipe</h3>
              <p>
                O segredo do nosso sabor está nas mãos de pessoas incríveis. Nossa equipe de chapeiros, atendentes e chefs trabalha incansavelmente para garantir que cada mordida seja perfeita.
              </p>
              <p>
                Cada colaborador do Tasty Burger é treinado para tratar nosso cliente como uma visita em nossa própria casa. Afinal, as melhores memórias são construídas em volta de uma mesa, com boa comida 
                e excelentes companhias.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1717756896292-3201089585f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                
                alt="Equipe Tasty Burger" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default About;
