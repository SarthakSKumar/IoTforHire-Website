import React, { useState } from "react";

const BookingForm = ({ productData, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [userData, setUserData] = useState({
    fullName: "",
    SRN: "",
    email: "",
    section: "",
    semester: "",
    phoneNumber: "",
    dateOfReturn: "",
    selectedItems: [],
  });

  const handleSearch = (e) => setSearchText(e.target.value);

  const handleNameChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handleSRNChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handleEmailChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handleSectionChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handleSemChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handlePhoneChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);
  const handleDateChange = (e) =>
    setUserData({ ...userData, name: e.target.value });
  console.log(userData);

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
    <div className="p-4 bg-white h-3/4 w-2/3 overflow-scroll">
      <button
        onClick={onClose}
        className="bg-red-500 text-white px-2 py-1 text-lg"
      >
        X
      </button>
      <input
        type="text"
        placeholder="Full Name"
        value={userData.fullName}
        onChange={handleNameChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="SRN"
        value={userData.SRN}
        onChange={handleSRNChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Email"
        value={userData.email}
        onChange={handleEmailChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Section"
        value={userData.section}
        onChange={handleSectionChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Name"
        value={userData.semester}
        onChange={handleSemChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Name"
        value={userData.phoneNumber}
        onChange={handlePhoneChange}
        className="border p-2 mb-4"
      />

      <input
        type="text"
        placeholder="Name"
        value={userData.dateOfReturn}
        onChange={handleDateChange}
        className="border p-2 mb-4"
      />
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleSearch}
        className="border p-2
mb-4"
      />
      <ul className="h-1/2 overflow-scroll">
        {filteredItems.map((item) => (
          <li
            key={item.productName}
            className="flex justify-between items-center mb-2"
          >
            <span>
              {item.productName} - ${item.productPrice}
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
      <h3 className="text-lg font-bold mb-2">Selected Items:</h3>
      <ul>
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
  );
};

export default BookingForm;
