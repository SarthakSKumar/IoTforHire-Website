import ProductCard from "./ProductCard";

export default function Catalogue() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Product Catalogue
        </h2>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex my-10 justify-between align-middle flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
