"use client";
import React from "react";
import Image from "next/image";
const HomeSection = () => {
  return (
    <section className="p-12">
      <div className="flex items-center justify-center p-4 gap-6 flex-wrap">
        <Image
          src="/Icon/01.png"
          width={50}
          height={50}
          alt="logo"
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="ml-2 text-4xl font-bold text-center">Weather App</h1>
      </div>

      <div className="relative flex flex-col md:flex-row">
        <input
          type="text"
          className="w-full p-2 bg-slate-800 text-white rounded-lg sm:rounded-tl-lg sm:rounded-bl-lg"
          placeholder="Enter a City"
        />
        <button className="relative sm:absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 sm:mt-0">
          Add City
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
