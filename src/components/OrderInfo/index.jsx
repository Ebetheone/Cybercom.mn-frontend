import React, { useContext } from "react";
import { useRouter } from "next/router";
import OrderContext from "../../../context/OrderContext";

const OrderInfo = ({ number, sumOfsum }) => {
  const location = useRouter();
  const ctx = useContext(OrderContext);
  const slice = ctx.state.count;
  const Data = ctx.state.data[0];
  const SetOpacity = () => {
    ctx.setOpacity(true);
  };
  return (
    <>
      <div className="w-full text-ellipsis text-black text-[18px] font-medium pb-1">
        Захиалгын мэдээлэл
      </div>
      <div className="w-full flex flex-col items-center gap-4 bg-white pt-[15px] rounded-t">
        {Data.slice(0, slice).map((item, index) => (
          <div
            className="flex items-center justify-between w-11/12 mx-auto"
            key={index}
          >
            <p className="text-black text-[13px] font-normal w-2/3 m-0">
              {item.name}
            </p>
            <div className="flex items-center justify-between w-1/3">
              <div className="text-little-gray py-1 px-2 bg-[rgb(241,241,241)] rounded text-[11px] font-normal">
                x{number}
              </div>
              <p className="text-black text-sm font-normal text-right m-0">
                {item.price}₮
              </p>
            </div>
          </div>
        ))}
        <div className="w-full bg-[rgb(241,241,241)] border-t-[1px] border-t-solid  border-t-slate-200 rounded-b">
          <div className="flex items-center justify-between w-11/12 mx-auto py-[10px]">
            <p className="text-little-gray text-base font-normal m-0">Нийт</p>
            <p className="text-black text-base font-bold m-0">{sumOfsum}₮</p>
          </div>
        </div>
      </div>
      <button
        className="w-full bg-black text-white h-[52px] rounded-[6px] hover:bg-red duration-300"
        onClick={() => {
          location.push("/address");
          SetOpacity();
        }}
      >
        Худалдан авах
      </button>
      <button className="w-full bg-sea text-white h-[52px] rounded-[6px] hover:bg-red duration-300">
        Зээлээр худалдан авах
      </button>
    </>
  );
};

export default OrderInfo;
