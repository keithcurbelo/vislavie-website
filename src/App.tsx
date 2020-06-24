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
    <div id="page-container" className="App">
      <div id="content-wrap">
        <IntroMedia />
        <AboutUs />
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
