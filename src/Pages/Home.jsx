import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Pizza Paradisoo</h1>
      <div className="relative">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          className="carousel"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Banner 1"
              className="object-cover h-48 sm:h-64 w-full"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h2 className="text-2xl font-semibold text-white">
                {" "}
                Join Our Family{" "}
              </h2>
              <p className="mt-2 text-lg text-white">
                And Get Exclusive Offers.
              </p>
              <Link
                href="/offers"
                className="inline-block mt-4 px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
                to="/sign-up"
              >
                Sign UP
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1669895616443-5d21d5acc6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
              alt="Banner 2"
              className="object-cover h-48 sm:h-64 w-full"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h2 className="text-2xl font-semibold text-white">
                Try Our New Pizza Flavors
              </h2>
              <p className="mt-2 text-lg text-white">
                Experience the delight of our latest pizza creations.
              </p>
              <Link
                to="/menu"
                className="inline-block mt-4 px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1634629377376-6c6bae2d8bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt="Banner 3"
              className="object-cover h-48 sm:h-64 w-full"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h2 className="text-2xl font-semibold text-yellow-700">
                Order Online for Fast Delivery
              </h2>
              <p className="mt-2 text-lg text-white">Already a member?.</p>
              <Link
                to="/sign-in"
                className="inline-block mt-4 px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </Carousel>
      </div>

      <p className="item-center text-center my-4 mx-4 py-10 px-4 italic font-serif">
        Welcome to Pizza Paradiso! We are passionate about bringing you the
        absolute best in pizza perfection. Each pizza we create is a
        masterpiece, meticulously crafted with love and care using the freshest,
        high-quality ingredients. From our classic favorites to our innovative
        specialty creations, our menu is designed to satisfy every craving. Our
        commitment to exceptional service ensures that your dining experience is
        nothing short of extraordinary. Join us at Pizza Paradiso and embark on
        a culinary journey filled with delicious flavors, warm ambiance, and
        unparalleled hospitality.
      </p>
      <div className="footer fixed bottom-0 text-center text-white">
        {" "}
        &#169; PizzaParadisoo 2023
      </div>
    </div>
  );
};

export default Home;
