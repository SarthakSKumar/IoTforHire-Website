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
          available={product.availability}
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
          <strong className="text-emerald-500">rent?</strong> Our inventory is
          continously updated and is consistently expanding, offering you the
          the IoT components available.
        </p>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400"></p>
        <div className="flex my-6 justify-center items-center">
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
        <h6 className="block text-sm text-center text-gray-400">
          Product Catalogue Updated Daily. New Stocks In
          <br />
          *Products may vary from the images shown
        </h6>
        <div
          className={`flex my-10 bg-white border-2 border-emerald-500 dark:bg-gray-800 p-4 rounded-lg justify-around flex-wrap ${
            searchQuery ? "h-fit" : "h-[36rem]"
          } overflow-y-scroll`}
        >
          {renderProductCards()}
        </div>
      </div>
    </section>
  );
}
