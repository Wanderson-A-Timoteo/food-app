import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/BlogStyle.css";

function Blog() {
  return (
    <Layout>
      <section className="blog_page_section pt-5 pb-5">
        <Container>
          <Row className="justify-content-center text-center mt-5 mb-5">
            <Col md={8}>
              <h2 className="title_blog mt-5">Blog do Tasty</h2>
              <p className="subtitle_blog mb-4">
                Fique ligado! Em breve postaremos dicas de receitas, bastidores da nossa cozinha e novidades deliciosas.
              </p>
              <i className="bi bi-journal-text text-danger" style={{ fontSize: "5rem" }}></i>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;
