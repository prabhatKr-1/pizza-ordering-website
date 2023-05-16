import React, { useState } from "react";
import {toast} from 'react-toastify'
const PizzaCard = ({ pizza, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(pizza.varients[0]);
  const [quantity, setQuantity] = useState(1);

  const price = pizza.prices[0][selectedSize] * quantity;

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    toast.success("Item Added To Cart")
    const item = {
      name: pizza.name,
      price: pizza.prices[0][selectedSize] * quantity,
      quantity: quantity,
    };
    addToCart(item);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg shadow-lg p-6 mx-4 my-4 max-w-sm">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-48 h-48 object-cover"
      />
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-700">{pizza.name}</h2>
          <p className="text-sm text-gray-500">{pizza.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-bold text-gray-700">₹{price}</span>
            <div className="relative inline-block">
              <select
                className="rounded-full py-1 px-4 border border-gray-400 text-sm font-medium text-gray-600 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {pizza.varients.map((variant, index) => (
                  <option value={variant} key={index}>
                    {variant}
                  </option>
                ))}
              </select>
              <div className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <input
              className="w-16 px-2 py-1 rounded-full border border-gray-400 text-sm text-gray-600 font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-1"
              type="number"
              value={quantity}
              min="1"
              max="10"
              onChange={handleQuantityChange}
            />
          </div>
        </div>
        <div className="text-2xl text-red-500 font-bold">
          {pizza.category === "veg" ? (
            <i className="fas fa-leaf"></i>
          ) : (
            <i className="fas fa-drumstick-bite"></i>
          )}
        </div>
      </div>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
