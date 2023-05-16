import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateSubTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = () => {
    const subTotal = calculateSubTotal();
    return subTotal * 0.18;
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const tax = calculateTax();
    return subTotal + tax;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity} | Price: ₹{item.price}
                </p>
              </div>
              <button
                className="text-red-500"
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col items-end mt-8">
            <div>
              <p className="font-bold">Subtotal: ₹{calculateSubTotal()}</p>
              <p className="font-bold">Tax (18%): ₹{calculateTax()}</p>
              <h2 className="text-2xl font-semibold">Total: ₹{calculateTotal()}</h2>
            </div>
            <button
              className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
              onClick={() => setCartItems([])}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
