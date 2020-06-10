import React, { useState, FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./form";

const ContactSection: React.FC = () => (
  <Container className="py-3">
    <h2 className="text-center py-3">Contact Us</h2>
    <ContactForm />
  </Container>
);

export default ContactSection;
