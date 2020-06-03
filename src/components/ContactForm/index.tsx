import React from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Input from "./input";

const ContactForm = () => {
  const FullNameInput = () => (
    <Input id="name" placeholder="Full name" name="name" />
  );
  const EmailInput = () => (
    <Input id="email" placeholder="Email" name="email" />
  );
  const SubmitBtn = () => (
    <Form.Row>
      <Col xs={1} sm={4} />
      <Col className="text-right">
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Col>
      <Col xs={1} sm={4} />
    </Form.Row>
  );

  return (
    <Container className="py-3">
      <h2 className="text-center py-3">Contact Us</h2>
      <Form>
        <FullNameInput />
        <EmailInput />
        <SubmitBtn />
      </Form>
    </Container>
  );
};

export default ContactForm;
