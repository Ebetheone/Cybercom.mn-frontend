import React, { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

const OrderSteps = () => {
  const ctx = useContext(OrderContext);
  return (
    <>
      <div className="bg-transparent flex items-center gap-5">
        <div className="rounded-full bg-white flex items-center justify-center w-9 h-9 border-text border-[1px] border-solid">
          1
        </div>
        <div className="block">
          <p className="text-black text-xs font-normal m-0">алхам 1</p>
          <p className="text-black text-sm font-normal m-0">Сагс</p>
        </div>
      </div>
      <div
        className={
          ctx.opacity
            ? "bg-transparent flex items-center gap-5 opacity-[1]"
            : "bg-transparent flex items-center gap-5 opacity-[0.3]"
        }
      >
        <div className="rounded-full bg-white flex items-center justify-center w-9 h-9 border-text border-[1px] border-solid">
          2
        </div>
        <div className="block">
          <p className="text-black text-xs font-normal m-0">алхам 2</p>
          <p className="text-black text-sm font-normal m-0">Хаяг</p>
        </div>
      </div>
      <div className="bg-transparent flex items-center gap-5 opacity-[0.3]">
        <div className="rounded-full bg-white flex items-center justify-center w-9 h-9 border-text border-[1px] border-solid">
          3
        </div>
        <div className="block">
          <p className="text-black text-xs font-normal m-0">алхам 3</p>
          <p className="text-black text-sm font-normal m-0">Төлбөр</p>
        </div>
      </div>
      <div className="bg-transparent flex items-center gap-5 opacity-[0.3]">
        <div className="rounded-full bg-white flex items-center justify-center w-9 h-9 border-text border-[1px] border-solid">
          4
        </div>
        <div className="block">
          <p className="text-black text-xs font-normal m-0">алхам 4</p>
          <p className="text-black text-sm font-normal m-0">Дуусгах</p>
        </div>
      </div>
    </>
  );
};

export default OrderSteps;
