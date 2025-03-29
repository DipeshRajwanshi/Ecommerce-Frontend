
import React, { useState, useEffect } from "react";
import Fman from "../../../frontEnd/src/assets/frontend_assets/newItems/Forest_man.jpg"
import Women1 from "../../../frontEnd/src/assets/frontend_assets/newItems/women3.jpg"
import Women2 from "../../../frontEnd/src/assets/frontend_assets/newItems/women2.jpg"
import Women3 from "../../../frontEnd/src/assets/frontend_assets/newItems/women4.jpg"

const SecondH = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const offers = [
      { title: "50% Off on New Arrivals",
        description: "Shop the latest collection at 50% off!",
        imageUrl: Women2 
      },
      { title: "Buy 1 Get 1 Free",
        description: "Get a free item with every purchase!",
        imageUrl: Women3
      },
      { title: "Free Shipping",
        description: "Enjoy free shipping on orders over $50!",
        imageUrl: Women1
      },
      { title: "Exclusive Discount for Members",
        description: "Join now and get 20% off on your first order!",
        imageUrl: Fman
      },
    ];
  
    // Function to handle slide change automatically
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % offers.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }, []);
  
    // Function to go to the next slide
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % offers.length);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? offers.length - 1 : prevSlide - 1
      );
    };

  return (
    <div data-aos="fade-up" className="relative flex items-center justify-center">
    <div className="flex w-full bg-white p-5 rounded-lg">
      {/* Left side: Offers */}
      <div className="w-1/2 flex flex-col justify-center px-5">
        <h2 className="text-4xl font-bold mx-10 text-gray-800">{offers[currentSlide].title}</h2>
        <p className="text-lg text-gray-600 mt-2 mx-10">{offers[currentSlide].description}</p>
      </div>

      {/* Right side: Image */}
      <div data-aos="zoom-in" className="w-1/2 flex justify-center items-center">
        <img
          src={offers[currentSlide].imageUrl}
          alt={offers[currentSlide].title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Navigation buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg"
    >
      &lt;
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg"
    >
      &gt;
    </button>
  </div>
  );
};

export default SecondH