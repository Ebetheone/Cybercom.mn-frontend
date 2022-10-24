/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Items from "../Items";
import Product from "../Product";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] pt-24 flex pb-5">
        <Product />
        <Items />
      </div>
      <div className="bg-[#f3f3f3] h-20 px-11">
        <div className="flex justify-evenly items-center h-full border-2 border-[#ffffff] ">
          <div className="flex items-center">
            <img src="https://cybercom.mn/ab6b1bebb71b0030a5dd48ac782e6f97.svg" />
            <div className="pl-2">
              <p className="text-xs text-[#000000]">ҮНЭГҮЙ ХҮРГЭЛТ</p>
              <p className="text-xs text-[#000000]">300,000₮ -с дээш бараанд</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://cybercom.mn/7a29181d3025d5dcc059cb172631ab04.svg" />
            <div className="pl-2">
              <p className="text-xs text-[#000000]">24/7 ОНЛАЙН ТУСЛАМЖ</p>
              <p className="text-xs text-[#000000]">99999020</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://cybercom.mn/5ad2c0416ad7e0405cb5b56f9a3c1305.svg" />
            <div className="pl-2">
              <p className="text-xs text-[#000000]">ОНЛАЙН ЛИЗИНГ</p>
              <p className="text-xs text-[#000000]">Урьдчилгаа төлбөргүй</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
