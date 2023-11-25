"use client";
import React from "react";
import Image from "next/image";
const HomeSection = () => {
  return (
    <section className=" homeSection">
      <div className="logo">
        <Image
          src="/Icon/01.png"
          width={50}
          height={50}
          alt="logo"
        />
        <h1 className="appName ">Weather App</h1>
      </div>

      <div className=" searchBox ">
        <input
          type="text"
          className="city-input"
          placeholder="Enter a City"
        />
        <button className="add-button">
          Add City
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
