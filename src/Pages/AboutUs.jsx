import React from "react";
import aditya from "../assets/aditya.png";
import prabhat from "../assets/prabhat.jpg";
import keshav from "../assets/keshav.png";
import shubham from "../assets/shubham.jpg";
import harshita from "../assets/harshita.jpg";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8 italic font-serif">About Us</h1>
      <p className="item-center text-center my-2 mx-4 py-3 px-4 italic font-serif">
        Welcome to Pizza Paradiso! We're a haven for pizza lovers, dedicated to
        crafting mouthwatering pies with love and the finest ingredients. Our
        menu offers a delightful array of flavors, from classic margherita to
        creative gourmet combinations. With a commitment to quality and
        exceptional service, we strive to create an unforgettable dining
        experience. Join us and indulge in the true essence of authentic,
        handcrafted pizzas.
      </p>
      <p className="text-center font-semibold text-4xl italic font-serif">
        Our Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 text-black mt-8">
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={aditya}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 1"
            />
            <h2 className="text-xl font-bold mb-2 text-center">
              Aditya Shrivastav
            </h2>
            <p className="text-gray-700 text-center">Back-End Developer</p>
          </div>
        </div>
        
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src= {harshita}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 5"
            />
            <h2 className="text-xl text-center font-bold mb-2">
              Harshita Dhingra
            </h2>
            <p className="text-gray-700 text-center">Back-End Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src= {shubham}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 4"
            />
            <h2 className="text-xl font-bold text-center mb-2">
              Shubham Choudhary
            </h2>
            <p className="text-gray-700 text-center">Front-End Developer</p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={keshav}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 3"
            />
            <h2 className="text-xl font-bold mb-2 text-center">
              Keshav Sharma
            </h2>
            <p className="text-gray-700 text-center">Front-End Developer</p>
          </div>
        </div>
       
        <div className="p-4 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={prabhat}
              className="w-full h-48 object-cover mb-4 rounded-lg"
              alt="Developer 2"
            />
            <h2 className="text-xl font-bold mb-2 text-center">
              Prabhat Kumar
            </h2>
            <p className="text-gray-700 text-center">
              Project Leader & React Developer
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
