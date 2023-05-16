
import React, { useState } from "react";
import pizzas from "../PizzaMenu";
import PizzaCard from "../components/PizzaCard";

const Menu = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPizzas =
    selectedCategory === "all"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded-full ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-full ${
            selectedCategory === "veg"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleCategoryChange("veg")}
        >
          Veg
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "nonveg"
              ? "bg-red-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => handleCategoryChange("nonveg")}
        >
          Non-Veg
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPizzas.map((pizza, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 flex items-stretch"
          >
            <PizzaCard pizza={pizza} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
