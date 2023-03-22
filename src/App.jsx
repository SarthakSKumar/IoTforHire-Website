import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
import SubHeader from "./components/SubHeader.jsx";
import Catalogue from "./components/Catalogue.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState("");
  const fetchData = () => {
    fetch("./assets/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderCatalogue = () => {
    if (products) {
      return Object.entries(products).map((item) => {
        return (
          <Catalogue
            key={item[0]}
            title={item[0]}
            id={item[0]}
            productData={item[1]}
          />
        );
      });
    }
  };
  return (
    <div className="App">
      <Header />
      <Hero />
      <SubHeader />
      <About />
      {renderCatalogue()}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
