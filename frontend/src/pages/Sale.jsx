import React, { useState, useEffect } from "react";

export default function Sale() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("March 20, 2024 15:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-5xl font-bold text-center mb-6 text-slate-800">
            🚀 IoTforHire Flash Sale! 🚀
          </h1>
          <p className="text-2xl text-center text-gray-700 mb-8 font-semibold">
            This time with a <span className="text-yellow-700">FLASH SALE</span>{" "}
            - <span className="text-green-700">35% off on Arduino Unos</span> 🥳
          </p>
          <p className="text-2xl text-center text-gray-700 mb-6 font-bold">
            How to buy? 🤔
          </p>
          <ol className="list-decimal pl-6 mb-6 font-medium text-lg">
            <li className="text-gray-800">
              Fill the form to order, pay via cash/ UPI on delivery 💰
            </li>
            <li className="text-gray-800">
              Pick up your Unos on the next day - CIE room in the short break 👍
            </li>
          </ol>
          <p className="text-2xl font-bold text-center text-gray-700 mb-8">
            It's that simple!
            <br />
            Get started with your MPCA project today with IoTforHire! 🥳
          </p>

          <p className="text-3xl font-bold text-center text-gray-700 mb-4">
            Countdown to Sale:
          </p>
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center bg-gray-200 rounded-lg p-4">
              <div className="text-4xl sm:text-5xl font-bold mr-2">
                {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </div>
            </div>
          </div>

          <p className="text-3xl font-bold text-center text-gray-700 mb-8">
            When:{" "}
            <span className="text-red-600">
              3PM-4PM Wednesday, 20th March 2024 only
            </span>{" "}
            🗓️
          </p>
          <p className="text-lg font-semibold text-center text-gray-700 mb-8">
            <br />
            Only <span className="text-green-600">
              Arduino Unos and cables
            </span>{" "}
            are available for sale (not rent). All components are{" "}
            <span className="text-green-600">100% tested</span>, no-questions
            replacement offered.{" "}
            <span className="text-red-600">Limited stock only</span> 🙏
          </p>
        </div>
      </div>
    </div>
  );
}
