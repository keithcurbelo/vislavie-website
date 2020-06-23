import React from "react";
// import { Container } from "react-bootstrap";
import IntroMedia from "./components/Intro";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Nav/Footer";
import "./utils/icons";
import "./sass/App.scss";

const App = () => {
  return (
    <div className="App">
      <IntroMedia />
      <AboutUs />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
};

export default App;
