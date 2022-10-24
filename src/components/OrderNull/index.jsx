import React from "react";

const OrderNull = () => {
  return (
    <>
      <div className="box-border w-full mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cybercom.mn/b890a2c612de65ae144e04924b6549ef.svg"
          alt="image"
          className="h-96 w-1/3 mx-auto object-cover"
        />
      </div>
      <div className="w-full text-little-gray text-xl font-normal my-1.5 text-center mt-5">
        Таны сагс хоосон байна
      </div>
      <p className="w-3/5 mx-auto text-little-gray text-xs font-normal text-center p-2.5">
        Та хүссэн бараагаа сагсандаа хийн онлайнаар худалдан авалтаа хийж,
        гэртээ хүргүүлэн авах боломжтой, бэлэн бараа 24 цагийн дотор хүргэгдэнэ
      </p>
    </>
  );
};

export default OrderNull;
