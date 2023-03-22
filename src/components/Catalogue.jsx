import ProductCard from "./ProductCard.jsx";

export default function Catalogue(props) {
  const renderProductCard = () => {
    if (props.productData) {
      return props.productData.map((product) => {
        return (
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
        );
      });
    }
  };
  return (
    <section id="catalogue" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-14 pb-8 mx-auto lg:pb-16">
        <h2 className="text-4xl py-2 font-bold text-center text-gray-900 dark:text-white">
          Product Catalogue
        </h2>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400">
          Why wait when you can{" "}
          <strong className="text-emerald-500">rent?</strong> Browse our wide
          selection of IoT components and start your project with us today!
        </p>
        <div className="flex my-10 justify-around flex-wrap">
          {renderProductCard()}
        </div>
      </div>
    </section>
  );
}
