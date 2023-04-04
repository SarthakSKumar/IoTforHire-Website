import React, { useState } from "react";

const BookingForm = ({ productData, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState({
    fullName: "",
    SRN: "",
    email: "",
    semester: "",
    phoneNumber: "",
    dateOfReturn: "",
    selectedItems: [],
  });

  const handleSearch = (e) => setSearchText(e.target.value);

  const handleNameChange = (e) =>
    setUserData({ ...userData, fullName: e.target.value });
  const handleSRNChange = (e) =>
    setUserData({ ...userData, SRN: e.target.value });
  const handleEmailChange = (e) =>
    setUserData({ ...userData, email: e.target.value });
  const handlePhoneChange = (e) =>
    setUserData({ ...userData, phoneNumber: e.target.value });
  const handleSectionChange = (e) =>
    setUserData({ ...userData, section: e.target.value });
  const handleDateChange = (e) =>
    setUserData({ ...userData, dateOfReturn: e.target.value });

  const handleQuantityChange = (index, quantity) => {
    const newItems = [...userData.selectedItems];
    newItems[index].quantity = quantity;
    setUserData({ ...userData, selectedItems: newItems });
  };

  const handleSelect = (item) => {
    setUserData({
      ...userData,
      selectedItems: [...userData.selectedItems, { ...item, quantity: 1 }],
    });
  };

  const handleDelete = (index) => {
    const newItems = userData.selectedItems.filter((_, i) => i !== index);
    setUserData({ ...userData, selectedItems: newItems });
  };

  const filteredItems = productData.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  const incrementQuantity = (index) => {
    handleQuantityChange(index, userData.selectedItems[index].quantity + 1);
  };

  const decrementQuantity = (index) => {
    if (userData.selectedItems[index].quantity > 1) {
      handleQuantityChange(index, userData.selectedItems[index].quantity - 1);
    }
  };

  return (
    <div className="text-center p-4 bg-white dark:bg-gray-900 border-2 border-emerald-500 rounded-lg h-4/5 w-6/7 mx-6">
      <button
        onClick={onClose}
        className="text-sm text-gray-300 bg-red-600 px-2 py-1 rounded-sm font-semibold"
      >
        Go Back
      </button>
      <span className="text-gray-300 text-xl font-semibold">Booking Form</span>
      <div className="flex flex-wrap w-full justify-center md:justify-around">
        <input
          type="text"
          placeholder="Full Name"
          value={userData.fullName}
          onChange={handleNameChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="SRN"
          value={userData.SRN}
          onChange={handleSRNChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={handleEmailChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Section"
          value={userData.section}
          onChange={handleSectionChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={userData.phoneNumber}
          onChange={handlePhoneChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />

        <input
          type="text"
          placeholder="Date of Return"
          value={userData.dateOfReturn}
          onChange={handleDateChange}
          className="md:w-1/3 w-full px-4 py-2 mx-3 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="w-3/4 my-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-500"
        />
      </div>

      <div className="w-3/4 bg-gray-800 rounded-lg inline-block overflow-y-scroll h-1/2">
        <ul className="">
          {filteredItems.map((item) => (
            <li
              key={item.productName}
              className="flex justify-between my-2 text-gray-300 py-2 px-2"
            >
              <img
                src={item.productImage}
                className="h-inherit w-10 rounded-sm inline-block"
              />
              <span className="w-full text-start inline-block mx-2">
                <h6 className="text-md  font-semibold">
                  {item.productName} - {item.productPrice}
                </h6>
                <h6 className="text-sm text-start">{item.productDetails}</h6>
              </span>
              <button
                onClick={() => handleSelect(item)}
                className="bg-blue-500 text-white px-2 py-1"
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3 block border-2 border-white overflow-y-scroll h-1/4">
        <ul>
          <h3 className="text-lg font-bold mb-2">Selected Items:</h3>
          {userData.selectedItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>
                {item.productName} - ${item.productPrice} x {item.quantity}
              </span>
              <div>
                <button
                  onClick={() => decrementQuantity(index)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  -
                </button>
                <button
                  onClick={() => incrementQuantity(index)}
                  className="bg-green-500 text-white px-2 py-1"
                >
                  +
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-gray-500 text-white px-2 py-1 ml-2"
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingForm;
