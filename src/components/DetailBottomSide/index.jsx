/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import Carousel from "better-react-carousel";
import OrderContext from "../../../context/OrderContext";

const DetailBottom = () => {
  const ctx = useContext(OrderContext);
  const Data = ctx.state.data[0];
  const [active, setActive] = useState(false);
  const [activeIndex, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  return (
    <>
      <div className="text-black text-lg font-medium w-9/12 mx-auto mt-10 pb-2.5 pl-5">
        Төстэй бараанууд
      </div>
      <div className="flex bg-slate-200 items-center w-9/12 mx-auto">
        <Carousel cols={6} rows={1} gap={10} loop>
          {Data.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                className="w-full bg-white"
                onMouseEnter={() => {
                  setActive(true);
                  setIndex(index);
                }}
                onMouseLeave={() => setActive(false)}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-11/12 mx-auto object-cover"
                />
                <div className="text-blacky text-sm font-semibold w-11/12 mx-auto">
                  {item.description}
                </div>
                <div className="text-little-gray mt-1.25 text-xs font-normal w-11/12 mx-auto mt-1">
                  {item.title}
                </div>
                <div className="text-black text-sm font-semibold w-11/12 mx-auto mt-1">
                  {item.price}
                </div>
                <div className="flex mt-2 mb-2 w-full justify-between items-center relative">
                  <div className="flex pb-1 w-11/12 mx-auto">
                    <input
                      type="checkbox"
                      id="check"
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor="check"
                      className="text-little-gray text-xs cursor-pointer pl-4"
                    >
                      Compare
                    </label>
                  </div>
                  {active && activeIndex === index && (
                    <div className="flex absolute -top-0.5 right-1 w-[18px] h-[18px]">
                      <button className="bg-[url('https://cybercom.mn/2d964c5bd9cc65b7c8946ae82f709bc6.svg')] flex items-center flex-col justify-center w-full"></button>
                    </div>
                  )}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="text-black text-lg font-medium w-9/12 mx-auto mt-5 pb-2.5 pl-5">
        Танд санал болгох
      </div>
      <div className="flex bg-slate-200 items-center w-9/12 mx-auto pb-12">
        <Carousel cols={6} rows={1} gap={10} loop>
          {Data.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                className="w-full bg-white"
                onMouseEnter={() => {
                  setShow(true);
                  setShowIndex(index);
                }}
                onMouseLeave={() => setShow(false)}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-11/12 mx-auto object-cover"
                />
                <div className="text-blacky text-sm font-semibold w-11/12 mx-auto">
                  {item.description}
                </div>
                <div className="text-little-gray mt-1.25 text-xs font-normal w-11/12 mx-auto mt-1">
                  {item.title}
                </div>
                <div className="text-black text-sm font-semibold w-11/12 mx-auto mt-1">
                  {item.price}
                </div>
                <div className="flex mt-2 mb-2 w-full justify-between items-center relative">
                  <div className="flex pb-1 w-11/12 mx-auto">
                    <input
                      type="checkbox"
                      id="check"
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor="check"
                      className="text-little-gray text-xs cursor-pointer pl-4"
                    >
                      Compare
                    </label>
                  </div>
                  {show && showIndex === index && (
                    <div className="flex absolute -top-0.5 right-1 w-[18px] h-[18px]">
                      <button className="bg-[url('https://cybercom.mn/2d964c5bd9cc65b7c8946ae82f709bc6.svg')] flex items-center flex-col justify-center w-full"></button>
                    </div>
                  )}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default DetailBottom;
