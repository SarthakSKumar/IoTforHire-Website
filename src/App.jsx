import { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
import SubHeader from "./components/SubHeader.jsx";
import Catalogue from "./components/Catalogue.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Order from "./components/Order.jsx";
import BookingForm from "./components/BookingForm.jsx";
import "./index.css";
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
function App() {
  const [products, setProducts] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
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
    if (isModalVisible) {
      document.body.style.overflow = "hidden"; // disable scrolling on html element
    } else {
      document.body.style.overflow = null; // re-enable scrolling on html element
    }
  }, [isModalVisible]);
  return (
    <div className="App">
      <Order />
      <Header />
      <Hero />
      <SubHeader />
      <div>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Open Modal
        </button>
        {isModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <BookingForm productData={products} onClose={handleCloseModal} />
          </div>
        )}
      </div>
      <About />
      {products && <Catalogue productData={products} />}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
