export default function ProductCard() {
  return (
    <div className="w-60 my-4 dark:bg-white bg-gray-900 shadow rounded-md border-2 border-emerald-500">
      <div
        className="h-36 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center border-emerald-500 rounded-t-md border-b-2"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
        }}
      >
        <div className="flex justify-between"></div>
        <div>
          <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-start">
        <p className="text-gray-400 font-light text-xs text-center">
          Hammond robotics
        </p>
        <h1 className="text-gray-800 text-md text-center mt-1 font-semibold">
          Arduino Uno R3
        </h1>
        <p className="text-center text-sm text-red-800 mt-1">
          Market Price{" "}
          <strike>
            <strong>€1299</strong>
          </strike>
        </p>
        <p className="text-center text--800 mt-1 text-emerald-700">
          Our Price <strong>€1299</strong>
        </p>
        <div className="inline-flex items-center mt-2"></div>
      </div>
    </div>
  );
}
