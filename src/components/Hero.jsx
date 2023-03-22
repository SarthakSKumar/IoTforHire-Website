export default function Hero() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7 my-12">
          <h1 class="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-7xl dark:text-white">
            Building digital <br />
            products & brands.
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg my-10 lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            impedit? Quas neque alias quasi maiores est. Velit totam sint
            voluptates. Totam et accusantium consequuntur modi perferendis
            aperiam possimus, enim blanditiis. .
          </p>
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/themesberg/landwind"
              class="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              View on GitHub
            </a>
            <a
              href="https://www.figma.com/community/file/1125744163617429490"
              class="inline-flex items-center justify-center w-full px-6 py-4 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Get Figma file
            </a>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./images/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
