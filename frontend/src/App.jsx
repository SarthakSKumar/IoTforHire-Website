import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogue from "./components/Catalogue.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Order from "./components/Order.jsx";
import "./App.css";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
function App() {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://iotforhire-backend-exp.vercel.app/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Order />
      <Header />
      <Hero />
      <About />
      {<Catalogue productData={products} loading={loading} />}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
