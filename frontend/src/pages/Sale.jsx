import { useState, useEffect } from "react";

export default function Sale() {
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://iotforhire-backend-exp.vercel.app/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
