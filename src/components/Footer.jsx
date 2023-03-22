export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-3 mx-auto lg:py-8 md:p-8 lg:p-10">
        <div className="w-full flex md:px-24 md:justify-between flex-wrap justify-around">
          <div>
            <a className="mb-2 text-sm font-semibold text-gray-900 lg:text-md mx-4 dark:text-white hover:text-emerald-500">
              Terms and Conditions
            </a>
          </div>
          <div>
            <a className="mb-2 text-sm font-semibold text-gray-900 mx-4 hover:text-emerald-500  dark:text-white">
              Contact
            </a>
          </div>
          <div>
            <a className="mb-2 text-sm font-semibold text-gray-900 mx-4 hover:text-emerald-500  dark:text-white">
              Product Catalogue
            </a>
          </div>
          <div>
            <a className="mb-2 text-sm font-semibold text-gray-900 mx-4 hover:text-emerald-500  dark:text-white">
              Company
            </a>
          </div>
          <div>
            <a className="mb-2 text-sm font-semibold text-gray-900 mx-4 hover:text-emerald-500  dark:text-white">
              Download
            </a>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-4xl font-semibold text-gray-900 dark:text-white"
          >
            IoT<span className="text-emerald-400">for</span>Rent
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
