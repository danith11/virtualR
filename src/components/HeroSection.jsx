import React from "react";
import video2 from "../assets/video2.mp4";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR ap ideas to life with our
        intuitive development tools.Get started today and turn your imagination
        into immersive reality.
      </p>
      <div className="flex justify-center py-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 border rounded-md mx-4">
          Documentation{" "}
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          muted
          autoPlay
          loop
          src={video1}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          type="video/mp4"
        >
          Your Browser does not support video tag
        </video>
        <video
          muted
          autoPlay
          loop
          src={video2}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        ></video>
      </div>
    </div>
  );
};

export default HeroSection;
