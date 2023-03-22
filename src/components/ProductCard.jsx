export default function ProductCard(props) {
  let available, availableClass;
  props.available ? (available = true) : (available = false);
  available
    ? (availableClass = "bg-green-50 p-0.5 border-green-500 text-green-700")
    : (availableClass = "bg-red-50 p-0.5 border-red-500 text-red-700");
  console.log(props.productPrice);
  return (
    <div className="w-60 my-6 mx-4 bg-white border-2 border-emerald-400 shadow rounded-md">
      <div
        className="h-32 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-t-md"
        style={{
          backgroundImage: `url(${props.productImage})`,
          filter: `grayscale(${available ? 0 : 1})`,
        }}
      >
        <div className="flex justify-between"></div>
        <div className="text-center">
          <span
            className={`uppercase text-xs mx-2 border rounded font-medium select-none ${availableClass}`}
          >
            {available ? "Available" : "Unavailable"}
          </span>
          <span className="uppercase text-xs mx-2 bg-green-200 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
            Rs. {props.productPrice}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col items-start">
        <h1 className="text-gray-800 text-md text-center mt-1 font-semibold">
          {props.productName}
        </h1>
        <p className="text-sm text-gray-700">{props.productDetails}</p>
        <p className="text-center text-sm text-red-800 mt-1">
          Market Price{" "}
          <strike>
            <strong>Rs.{props.marketPrice}</strong>
          </strike>
        </p>
        <div className="inline-flex items-center mt-2"></div>
      </div>
    </div>
  );
}
