export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="grid max-w-screen-xl px-4 pb-2 mx-auto xl:gap-0 pt-0 lg:pt-10 lg:pb-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 my-12">
          <h1 className="max-w-2xl mb-4 text-5xl font-bold leading-none tracking-tight md:text-7xl xl:text-7xl dark:text-white">
            IoT<span className="text-emerald-500">for</span>Hire
          </h1>
          <h1 className="max-w-2xl mb-6 text-3xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl  dark:text-gray-300">
            Empowering <span className="text-orange-400">PES</span>ites with
            Tech on Demand
          </h1>
          <p className="max-w-2xl mb-6 text-gray-500 lg:mb-10  text-md md:text-xl my-8 lg:text-xl dark:text-gray-300">
            We have a wide range of{" "}
            <span className="text-emerald-500 font-semibold">IoT</span>{" "}
            components from sensors and Arduino boards to wireless modules and
            actuators required to ensure that your{" "}
            <span className="text-emerald-500 font-semibold">MPCA project</span>{" "}
            is a success. Choose us to get hold of your project materials today
            and take advantage of our steal prices.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://forms.gle/moQ1MxVZfwoHhVrL9"
              target="_blank"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-500 mr-2 text-md font-medium text-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-emerald-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-emerald-700"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="inline-flex text-md items-center justify-center w-full px-6 py-3 font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./assets/img/hero-image.PNG" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
