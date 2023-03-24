export default function SubHeader() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-6 mx-auto lg:pb-16">
        <div className="w-full text-center">
          <h1 className="lg:text-2xl md:text-xl text-lg text-gray-500 font-bold">
            <span className="dark:text-emerald-400 text-emerald-500">
              IoT Components
            </span>{" "}
            Rentals for Students of{" "}
            <span className="dark:text-orange-300 text-orange-400">
              PES University
            </span>{" "}
            |{" "}
            <span className="dark:text-purple-300 text-purple-400">
              100% Working
            </span>{" "}
            and Trusted Components
          </h1>
        </div>
        <div className="w-full text-center">
          <h1 className="lg:text-xl md:text-xl text-lg text-gray-500 font-bold">
            <span className="dark:text-gray-400 text-gray-600">
              Book Today, Get it Tomorrow | No Deposit and Hidden Charges
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
