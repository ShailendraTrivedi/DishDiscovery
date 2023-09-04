import React from "react";

import Home_Side_BG from "../../assets/Home/Home_Side_BG.jpg";
import { headerHomeData } from "../data/HomeData";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="relative">
          <img
            src={Home_Side_BG}
            alt=""
            className="object-cover h-screen w-full"
          />
          <div className="absolute w-[30rem] h-[15rem] bg-white top-[15rem] left-[8%] p-5 opacity-90">
            <div className="border-2 border-orange-500 flex flex-col w-full h-full items-center gap-5 p-10">
              <span className="text-2xl font-bold">
                Welcome to DishDiscovery,
              </span>
              <p className="text-center">
                where culinary adventures await! Explore a world of
                mouthwatering recipes, cooking tips, and food inspiration from
                around the globe.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 p-10 overflow-y-scroll h-screen w-full">
          {headerHomeData.map((item, i) => (
            <div key={i} className="border-2 border-orange-500 p-1 h-[12rem]">
              <div className="border-2 border-orange-500 w-full h-full flex flex-col gap-2 justify-around py-5 px-2 items-center">
                <span className="font-bold">{item.recipeName}</span>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>asdmfnk</div>
    </>
  );
};

export default Home;
