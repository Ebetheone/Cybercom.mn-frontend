/* eslint-disable @next/next/no-img-element */
import Footer from "../src/components/Footer/index.jsx";
import Header from "../src/components/Header/index.jsx";
import Carousel from "../src/components/Carousel/index.jsx";
import DetailRight from "../src/components/DetailRightSide/index.jsx";
import DetailBottom from "../src/components/DetailBottomSide/index.jsx";
import OrderContext from "../context/OrderContext.js";
import React, { useContext } from "react";
const Detail = () => {
  const ctx = useContext(OrderContext);
  const Data = ctx.state.data[0];
  return (
    <>
      <Header />
      <div className="w-full h-full bg-slate-200 flex justify-center items-center">
        <div className="w-9/12 bg-white h-full mx-auto flex gap-1">
          <div className="w-3/5 pt-24 block pl-2.5">
            <img
              src={Data.slice(0, 1)[0].image}
              alt="image"
              className="w-10/12 mx-auto flex justify-center items-center object-cover"
            />
            <Carousel />
            <p className="mt-5 text-black pl-5">Бүтээгдэхүүний мэдээлэл</p>
            <p className="w-full text-left text-text text-xs pl-5 mt-5 mb-5">
              {Data.slice(0, 1)[0].info}
            </p>
          </div>
          <div className="w-2/5 pt-24 flex flex-col pr-2.5">
            <DetailRight />
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-full h-10"></div>
      <div className="bg-slate-200 w-full">
        <div className="bg-white w-9/12 mx-auto block px-6 pt-6 pb-5">
          <div className="flex justify-between items-center pb-5 mb-5 border-b border-b-solid border-b-slate-200">
            <div className="text-black text-lg font-medium text-center">
              Үнэлгээ
            </div>
            <div className="text-text font-medium mb-1 text-left text-base">
              {Data.slice(0, 1)[0].review}
            </div>
          </div>
          <div className="flex box-border text-left w-full">
            <div className="text-black font-bold basis-7/12 text-sm mb-4 px-2">
              Та нэвтэрч орж байж үнэлгээ өгнө үү
            </div>
            <div className="text-text font-normal basis-5/12 text-sm mb-4 px-2">
              Одоогоор үнэлгээ байхгүй байна
            </div>
          </div>
        </div>
        <DetailBottom />
      </div>
      <Footer />
    </>
  );
};
export default Detail;
