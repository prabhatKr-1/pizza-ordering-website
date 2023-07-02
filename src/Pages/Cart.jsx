import React from "react";
import { toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import PizzaMenu from "../PizzaMenu";

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];

    // Check if the item already exists in the cart
    const existingItem = updatedCartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // If the item exists, increase the quantity
      existingItem.quantity += 1;
    }

    setCartItems(updatedCartItems);
  };




  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const auth = getAuth();

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    const subTotal = calculateSubTotal();
    return subTotal * 0.18;
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const tax = calculateTax();
    return (subTotal + tax).toFixed(2);
  };

  async function updateDatabase(amt) {
    const docRef = doc(db, "customers", auth.currentUser.uid);
    await updateDoc(docRef, {
      amount: amt,
    });
  }

  function placeOrder() {
    const AuthenticUser = auth.currentUser;
    if (AuthenticUser === null) {
      toast.warning("Please Login first To Place a order !");
    }
    else {
      const amt = calculateTotal();
      toast.success("Your order is successfully placed!");
      toast.success("Order Amount is ₹" + amt + " and will be delivered soon! Thanks");
      setCartItems([]);
      updateDatabase(amt);
    }

  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center my-4 font-bold mb-6">Cart</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          {cartItems.length === 0 ? (
            <p className="text-center my-8">Your cart is empty. Start shopping now!</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item, index) => {
                const pizza = PizzaMenu.find((pizza) => pizza.name === item.name);
                return (
                  <div key={index} className="flex items-center justify-between border-b border-gray-200 p-4">
                    <div className="flex items-center space-x-4">
                      <img src={pizza.image} alt={item.name} className="w-16 h-16 rounded-md" />
                      <div>
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity} | Price: ₹{item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mx-2 space-x-2">
                      <button
                        className="text-3xl mx-2 text-red-500 focus:outline-none"
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span className="item-center text-center justify-center text-2xl">{item.quantity}</span>
                      <button
                        className="mx-2 text-bold text-3xl text-green-500 focus:outline-none"
                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        +
                      </button>
                      <button
                        className="text-red-500 focus:outline-none"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="lg:w-1/4 lg:ml-6 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p className="font-medium">Subtotal:</p>
                <p>₹{calculateSubTotal()}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="font-medium">Tax (18%):</p>
                <p>₹{calculateTax().toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Total:</p>
                <p className="font-semibold">₹{calculateTotal()}</p>
              </div>
              <button
                onClick={placeOrder}
                className="w-full bg-blue-500 text-white rounded-lg py-2 font-semibold"
              >
                Place Order
              </button>
              <button
                onClick={() => setCartItems([])}
                className="w-full mt-4 bg-gray-200 text-gray-800 rounded-lg py-2 font-semibold"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
