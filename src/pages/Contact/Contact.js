import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/ContactStyle.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função disparada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem enviada com sucesso:", formData);
    setIsSubmitted(true);
    
    // Limpa o formulário
    setFormData({ name: "", email: "", message: "" });
    
    // Esconde a mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      <section className="contact_page_section pt-5 pb-5">
        <Container>
          <Row className="justify-content-center mt-5 mb-5">
            <Col md={8} lg={6} className="text-center">
              <h2 className="title_contact">Fale Conosco</h2>
              <p className="subtitle_contact">
                Dúvidas, elogios ou sugestões? Mande uma mensagem para a nossa equipe!
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="contact_form_wrapper p-4 p-md-5 rounded shadow">
                {isSubmitted ? (
                  <div className="alert alert-success text-center" role="alert">
                    <h4 className="alert-heading">Mensagem Enviada!</h4>
                    <p>Obrigado por entrar em contato, {formData.name}. Nossa equipe retornará em breve.</p>
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicName">
                      <Form.Label>Seu Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Digite seu nome completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicMessage">
                      <Form.Label>Mensagem</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Como podemos te ajudar?"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button variant="danger" type="submit" className="btn_red w-100 mt-3">
                        Enviar Mensagem
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Contact;
