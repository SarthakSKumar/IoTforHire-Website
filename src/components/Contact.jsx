export default function Contact() {
  return (
    <section id="catalogue" className="bg-white dark:bg-gray-900">
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
          <div className="flex rounded-lg bg-gray-800 flex-col mx-2 my-3 flex-wrap justify-evenly items-center h-[12rem] w-[24rem] md:h-[15rem] md:w-[30rem]">
            <h3 className="text-xl font-semibold text-gray-200 px-5 md:py-8 py-6 text-center">
              Bookings Open. Get your components now!
            </h3>
            <button className=" w-max text-lg font-semibold text-gray-800 p-3 my-4 lg:my-7 bg-emerald-500 rounded-md">
              Order Now <i className="uil uil-favorite"></i>
            </button>
          </div>
          <div className="flex rounded-lg bg-gray-800 p-4 mx-2 flex-wrap flex-col justify-evenly h-[15rem] w-[24rem] md:h-[15rem] md:w-[30rem]">
            <div className="flex">
              <i className="md:text-5xl text-3xl pr-3 text-emerald-400 uil uil-location-point"></i>
              <span className=" text-gray-400 text-md font-semibold">
                <span className="text-lg text-gray-300">
                  PES University Electronic City Campus
                </span>
                <br />
                Konappana Agrahara, Electronic City, Bangalore - 560100
              </span>
            </div>
            <div className="flex">
              <i className="md:text-4xl text-3xl pr-3  text-emerald-400 uil uil-envelope-check"></i>

              <span className="text-md font-semibold text-gray-300">
                sskworld9742@gmail.com
              </span>
            </div>
            <div className="flex">
              <i className="md:text-4xl text-3xl pr-2 text-emerald-400 uil uil-phone"></i>
              <span className="text-md mx-2 font-semibold text-gray-300">
                +91 97429 13699 <br /> +91 96639 28924
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
