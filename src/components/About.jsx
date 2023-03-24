export default function About() {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-12 lg:space-y-20 lg:py-16 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight text-gray-900 font-semibold dark:text-white">
              Who are we?
            </h2>
            <p className="mb-8 lg:text-lg">
              We are a group of students at{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                PES University
              </span>{" "}
              who want to make the process of acquiring IoT components, easy and
              affordable.
              <br />
              <br />
              We have experienced the challenges acquiring the right materials
              and know that it can be quite exhausting.
              <br />
              Our mission is to make this process easier for everyone else out
              there so that students can focus on creating innovative projects
              without going through the background hassle.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className=" text-md font-medium leading-tight text-gray-900 dark:text-white">
                  Save time. Don't go to SP Road! Rent components directly from
                  us, on campus.
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                  100% Working components. Tried, Tested and Trusted!
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-md font-medium leading-tight text-gray-900 dark:text-white">
                  Don't waste money buying IoT stuff you'll use only once!
                </span>
              </li>
            </ul>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./assets/img/about.svg"
            alt="dashboard feature image"
          />
        </div>
      </div>
    </section>
  );
}
