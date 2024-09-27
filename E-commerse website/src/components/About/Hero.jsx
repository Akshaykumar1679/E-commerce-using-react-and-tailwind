import React from "react";
import hero from "../../assets/Banner/about.jpeg";

function Hero() {
  return (
    <div
      className="w-screen h-[60vh]   flex items-center justify-center bg-cover bg-no-repeat  "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className=" md:ml-16 ml-3">
        <h1 className="text-6xl font-bold my-3 text-white text-center  ">
          #KnowUs{" "}
        </h1>

        <p className="my-3 text-2xl text-white">
          Thankyou For Choosing For Us Enjoy Your Day
        </p>
      </div>
    </div>
  );
}

export default Hero;
