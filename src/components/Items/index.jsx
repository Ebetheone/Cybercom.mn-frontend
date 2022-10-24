/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import OrderContext from "../../../context/OrderContext";

const Items = () => {
  const ctx = useContext(OrderContext);
  const Data = ctx.state.data[0];
  const location = useRouter();
  const [haveId, setHaveId] = useState();
  return (
    <div className="w-3/4 mt-2 mb-10">
      <div className="grid grid-cols-4">
        {Data.map((item, index) => (
          <div
            className="bg-[#ffffff] mb-5 mx-3 px-4 h-auto"
            key={index}
            onClick={() => {
              location.push("/detail");
              setHaveId(item.id);
            }}
          >
            <img className="cursor-pointer" src={item.image}></img>
            <div className="mt-2">
              <h2 className="cursor-pointer text-sm text-[#111111]">
                {item.title}
              </h2>
              <h4 className="cursor-pointer text-xs py-1.5 text-[#666666] font-normal">
                {item.description}
              </h4>
              <span className="cursor-pointer text-sm text-[#333333]">
                {item.price} ₮
              </span>
              <div className="">
                <button className="float-right px-2.5 py-1.5 mb-2 bg-[#4c4c4c] text-[13px] text-[#ffffff] hover:bg-[#383838]">
                  ORDER
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
