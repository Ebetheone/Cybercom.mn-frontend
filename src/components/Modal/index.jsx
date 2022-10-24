{
  /* eslint-disable @next/next/no-img-element */
}
import React, { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

const Modal = ({ show }) => {
  const ctx = useContext(OrderContext);
  const number = ctx.state.count;
  var sum = Math.imul(ctx.price, ctx.state.number);
  var sumOfsum = sum * number;
  const Data = ctx.state.data[0];
  const lessCount = () => {
    ctx.lessCount();
  };
  const Empty = () => {
    ctx.empty();
  };
  return (
    <>
      {show && (
        <div className="w-full bg-white h-[300px]">
          <div className="flex bg-black justify-between items-center py-3 px-4">
            <div className="text-white text-[13px]">
              Таны сагс ( {number} бүтээгдэхүүн )
            </div>
            <button className="text-white text-[13px]" onClick={Empty}>
              Хоослох
            </button>
          </div>
          <div className="flex flex-col items-center py-3 px-2 h-[70%] overflow-y-scroll scroll-smooth">
            {Data.slice(0, number).map((item, index) => (
              <div
                className="flex border-b-[1px] border-b-solid border-b-slate-200 w-full py-1"
                key={index}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="w-[54px] h-[54px] object-cover py-2.5 px-3"
                />
                <div className="block">
                  <div className="flex justify-between">
                    <p className="text-black text-[13px] font-medium mb-[3px]">
                      {item.name}
                    </p>
                    <button
                      className="bg-[url('https://cybercom.mn/e0a84b0befdc3d4caa11d77a7b1de48f.svg')] w-[15px] h-[12px] bg-contain mt-[3px]"
                      onClick={lessCount}
                    ></button>
                  </div>
                  <div className="flex gap-3 text-left items-center">
                    <p className="text-text text-xs font-semibold">
                      {item.price}
                    </p>
                    <p className="text-little-gray text-[13px] font-normal">
                      Тоо ширхэг: {number}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between w-full pt-3 px-2">
            <p className="text-little-gray text-[13px] text-left m-0">
              Нийт дүн:{" "}
              <strong className="text-black font-bold text-[13px]">
                {sumOfsum} ₮
              </strong>
            </p>
            <button className="bg-black text-white flex items-center justify-center text-[13px] py-1 px-2">
              Худалдан авах
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
