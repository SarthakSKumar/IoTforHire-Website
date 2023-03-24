import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

export default function Catalogue(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterProductData = () => {
    if (props.productData) {
      return props.productData.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    }
  };

  const renderProductCards = () => {
    const filteredProductData = filterProductData();

    if (filteredProductData.length > 0) {
      return filteredProductData.map((product) => (
        <ProductCard
          key={product.productName}
          available={product.Availability}
          productImage={`${product.productImage}`}
          productName={product.productName}
          productPrice={product.productPrice}
          marketPrice={product.marketPrice}
          productDetails={product.productDetails}
          simpleName={product.simpleName}
        />
      ));
    } else {
      return (
        <p className="text-gray-500 dark:text-gray-400">
          No products found for search query "{searchQuery}".
        </p>
      );
    }
  };

  return (
    <section id="catalogue" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-10 mx-auto">
        <h2 className="text-4xl py-2 font-bold text-center text-gray-900 dark:text-white">
          Product Catalogue
        </h2>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400">
          Why wait when you can{" "}
          <strong className="text-emerald-500">rent?</strong> Browse our wide
          selection of IoT components and start your project with us today!
        </p>
        <div className="flex my-10 justify-center items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-r-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Search
          </button>
        </div>
        <div className="flex my-10 justify-around flex-wrap">
          {renderProductCards()}
        </div>
      </div>
    </section>
  );
}
