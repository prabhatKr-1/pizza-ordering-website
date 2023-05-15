import React from 'react';
// import image1 from '../images/photo1.jpg';
// import image2 from '../images/photo2.jpg';
// import image3 from '../images/photo3.jpg';
// import image4 from '../images/photo4.jpg';
// import image5 from '../images/photo5.jpg';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-10">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero suscipit repellat est maiores, illum aut totam nemo deserunt labore error, culpa officiis beatae quidem veritatis in quam? Praesentium accusantium eius nobis provident expedita sed consequuntur ab quibusdam vero et, obcaecati odio est fugit error ea libero esse soluta facilis pariatur.</p>


      <div className="flex flex-wrap justify-center text-black">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover mb-4 rounded-lg"  alt="Developer 1" />
            <h2 className="text-xl font-bold mb-2">Shubham Choudhary</h2>
            <p className="text-gray-700">Description of Developer 1.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover mb-4 rounded-lg"  alt="Developer 2" />
            <h2 className="text-xl font-bold mb-2">Keshav Sharma</h2>
            <p className="text-gray-700">Description of Developer 2.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover mb-4 rounded-lg" alt="Developer 3" />
            <h2 className="text-xl font-bold mb-2">Prabhat Kumar</h2>
            <p className="text-gray-700">Description of Developer 3.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover mb-4 rounded-lg"  alt="Developer 4" />
            <h2 className="text-xl font-bold mb-2">Adity Shrivastav</h2>
            <p className="text-gray-700">Description of Developer 4.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-48 object-cover mb-4 rounded-lg"  alt="Developer 5" />
            <h2 className="text-xl font-bold mb-2">Harshita Dhingra</h2>
            <p className="text-gray-700">Description of Developer 5.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
