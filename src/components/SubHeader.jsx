export default function SubHeader() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-6 mx-auto lg:pb-14">
        <div className="w-full text-center">
          <h1 className="lg:text-2xl md:text-xl text-lg text-gray-500 dark:text-gray-400 font-bold">
            <span className="dark:text-emerald-400 text-emerald-500">
              IoT Components
            </span>{" "}
            Rentals for Students of{" "}
            <span className="dark:text-orange-300 text-orange-400">
              PES University
            </span>{" "}
            |{" "}
            <span className="dark:text-purple-300 text-purple-500">
              100% Working
            </span>{" "}
            and Trusted Components
          </h1>
        </div>
        <div className="max-w-screen-xl px-4 flex justify-center flex-wrap text-center">
          <span className="text-emerald-500 dark:text-emerald-300 lg:w-1/2 my-2 text-md md:text-xl font-bold">
            <i class="uil uil-star text-2xl text-yellow-300"></i> Book Today,
            Get it Tomorrow
          </span>
          <span className="text-emerald-500 dark:text-emerald-300 lg:w-1/2 my-2 text-md md:text-xl font-bold">
            <i class="uil uil-star text-2xl text-yellow-300"></i> No Deposits
            and Hidden Charges
          </span>
          <span className="text-emerald-500 dark:text-emerald-300 lg:w-1/2 my-2 text-md md:text-xl font-bold">
            <i class="uil uil-star text-2xl text-yellow-300"></i> First time
            buying? Avail{" "}
            <span className="dark:text-orange-300 text-orange-400">
              Special Discounts
            </span>
          </span>
          <span className="text-emerald-500 dark:text-emerald-300 lg:w-1/2 my-2 text-md md:text-xl font-bold">
            <i class="uil uil-star text-2xl text-yellow-300"></i> Don't get
            cheated in SP Road
          </span>
        </div>
      </div>
    </section>
  );
}
