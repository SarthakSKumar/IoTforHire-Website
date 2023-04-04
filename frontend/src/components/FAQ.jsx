export default function FAQ() {
  return (
    <section id="faqs" className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-14 pb-8 mx-auto lg:pb-16">
        <h2 className="text-4xl py-2 font-bold text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400">
          Got a question? Get your answer.
        </p>
        <div className="flex my-10 items-center justify-around flex-wrap">
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              What is IoT?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              IoT stands for Internet of Things. It refers to a network of
              physical objects that are connected to the internet, allowing them
              to exchange data and communicate with each other.
            </p>
          </div>

          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              How much does it cost to rent an IoT device?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              The cost of renting an IoT device varies depending on the type of
              device and the length of the rental period. Please contact us for
              a quote.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              How do I set up the IoT device?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              Each device comes with instructions for set up and use. If you
              have any questions or need assistance, our customer service
              team(”us”) is available to help.
            </p>
          </div>

          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              What if the IoT device is damaged or malfunctions during my rental
              period?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              If the device or the any component is damaged by you you need to
              pay for the same or you can buy a new one yourself and return us
              back.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              What kind of IoT devices can I rent?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              We offer a variety of IoT devices for rent, including all the
              necessary components to built or modify a project.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              What happens to my data once I return the IoT device?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              We take data privacy very seriously. All data collected by the
              device is securely erased before it is rented out again.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              Can I extend my rental period?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              Yes, you can extend your rental period. Please contact us to make
              arrangements.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              Can I customize the behavior of IoT devices?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              In many cases, yes. Many IoT devices offer settings and
              customization options that allow you to tailor their behavior to
              your specific needs. Some devices also offer APIs or SDKs that
              allow developers to create custom software to interact with the
              devices.
            </p>
          </div>
          <div className="border-2 my-4 w-80 h-50 p-4 border-emerald-400 rounded-md">
            <h3 className="text-md text-gray-700 dark:text-gray-200 font-bold">
              How do I return the IoT device?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              Please follow the instructions provided with the device to
              properly pack it for return. Get back to us after your final
              review of the MPCA project is over and your refund will be
              generated after we check the device and component condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
