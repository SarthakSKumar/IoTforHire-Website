export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-14 pb-8 mx-auto lg:pb-16">
        <h2 className="text-4xl py-2 font-bold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400">
          Reach out to us for{" "}
          <span className="text-emerald-400 font-semibold">Bookings</span> and{" "}
          <span className="text-emerald-400 font-semibold">Orders</span>
        </p>
        <div className="flex  my-10 md:flex-row flex-col justify-around items-center">
          <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 mx-2 my-3 flex-wrap justify-center w-[24rem] md:w-[30rem]">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 px-5 md:py-6 py-6 text-center">
              Be it even a single component that you can provide us
              <br />
              Become a vendor for IoT
              <span className="text-emerald-500">for</span>Hire
            </h3>
            <button className=" w-max text-lg font-semibold text-white p-3 my-4 lg:my-7 bg-emerald-500 rounded-md">
              Click Here to Apply <i className="uil uil-favorite"></i>
            </button>
          </div>
          <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-4 mx-2 flex-wrap flex-col justify-evenly  w-[24rem] md:w-[30rem]">
            <div className="flex my-2">
              <i className="md:text-5xl text-3xl pr-3 text-emerald-600 dark:text-emerald-400 uil uil-location-point"></i>
              <span className=" text-gray-600 text-md font-semibold">
                <span className="text-lg dark:text-gray-300 text-gray-700">
                  Classroom 306
                  <br />
                  PES University Electronic City Campus
                </span>
                <br />
                Konappana Agrahara, Electronic City, Bangalore - 560100
              </span>
            </div>
            <div className="flex">
              <i className="md:text-4xl md:px-1 md:pb-1 text-3xl md:pr-3 sm:pr-1 text-emerald-600 dark:text-emerald-400 uil uil-envelope-check"></i>

              <span className="text-md mx-2 font-semibold text-gray-700 dark:text-gray-300">
                sskworld9742@gmail.com
              </span>
            </div>
            <div className="flex">
              <i className="md:text-4xl  md:px-1 md:pt-1 text-3xl md:pr-2 sm:pr-1 text-emerald-600 dark:text-emerald-400 uil uil-phone"></i>
              <span className="text-md mx-2 font-semibold text-gray-700 dark:text-gray-300">
                +91 97429 13699 <br /> +91 96639 28924
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
