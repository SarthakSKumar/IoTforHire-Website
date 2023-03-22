export default function ProductCard() {
  return (
    <div className="w-60 my-6 mx-4 bg-white border-2 border-emerald-400 shadow rounded-md">
      <div
        className="h-32 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage: "url({props.title})",
        }}
      >
        <div className="flex justify-between"></div>
        <div className="text-center">
          <span className="mr-8 uppercase text-xs  p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            Rs. 1299
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-start">
        <h1 className="text-gray-800 text-md text-center mt-1 font-semibold">
          Arduino Uno R3
        </h1>
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
          fuga maiores dolore, laudantium magnam delectus eligendi aspernatur
          expedita perspiciatis?
        </p>
        <p className="text-center text-sm text-red-800 mt-1">
          Market Price{" "}
          <strike>
            <strong></strong>
          </strike>
        </p>
        <div className="inline-flex items-center mt-2"></div>
      </div>
    </div>
  );
}
