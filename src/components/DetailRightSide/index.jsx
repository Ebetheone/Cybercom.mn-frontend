/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import OrderContext from "../../../context/OrderContext";

const DetailRight = () => {
  const ctx = useContext(OrderContext);
  const addCount = () => {
    ctx.addCount();
  };
  const Data = ctx.state.data[0];
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-black text-2xl font-bold mb-1.25">
          {Data.slice(0, 1)[0].name}
        </h1>
        <img
          src={Data.slice(0, 1)[0].scndimg}
          alt="company"
          className="w-15 h-12 object-cover"
        />
      </div>
      <div className="flex w-full mx-auto items-center gap-8">
        <p className="text-black text-left text-sm">
          {Data.slice(0, 1)[0].type}
        </p>
        <p className="text-little-gray text-sm">{Data.slice(0, 1)[0].itemId}</p>
      </div>
      <p className="text-left text-little-gray mt-2">
        ({Data.slice(0, 1)[0].reviewstar} үнэлгээтэй)
      </p>
      <div className="text-black text-2xl font-medium text-left border-t border-t-solid border-t-slate-200 border-b border-b-dashed border-b-slate-200 py-2 mt-3">
        {Data.slice(0, 1)[0].price}₮
      </div>
      <div className="flex w-full mt-5 bg-slate-200 items-center justify-between rounded-lg py-3 px-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="rounded bg-white flex items-center justify-center">
            <img
              src="https://cybercom.mn/4e99cdeef851d5807f3122d1ba91be57.png"
              alt="tdb"
              className="w-11 h-11 object-cover"
            />
          </div>
          <div className="block">
            <p className="text-xs text-little-gray text-left w-full m-0">
              Та зээлийн нөхцөлөөр энэхүү барааг авах боломжтой.
            </p>
            <p className="text-text text-left w-full font-bold m-0">
              powered by TDB
            </p>
          </div>
        </div>
        <img
          src="https://cybercom.mn/c32226ff50460f00a7129070853683a9.svg"
          alt="icon"
          className="w-2.5 h-4 object-cover"
        />
      </div>
      <div className="flex w-full mt-2.5 bg-slate-200 items-center justify-between rounded-lg py-3 px-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="rounded bg-white flex items-center justify-center">
            <img
              src="https://cybercom.mn/ceefda89e0025ec929a6d0f4f25b2368.png"
              alt="shit"
              className="w-11 h-11 object-cover"
            />
          </div>
          <div className="block">
            <p className="text-xs text-little-gray text-left w-full m-0">
              Storepay үйлчилгээг ашиглан төлбөрөө 4 хуваан төлөх боломжтой.
            </p>
            <p className="text-text text-left w-full font-bold m-0">
              powered by Storepay
            </p>
          </div>
        </div>
        <img
          src="https://cybercom.mn/c32226ff50460f00a7129070853683a9.svg"
          alt="icon"
          className="w-2.5 h-4 object-cover"
        />
      </div>
      <div className="flex w-full mt-2.5 bg-slate-200 items-center justify-between rounded-lg py-3 px-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="rounded bg-white flex items-center justify-center">
            <img
              src="https://cybercom.mn/63eeff43902d9869583cc9cd3e74936f.png"
              alt="tdb"
              className="w-11 h-11 object-cover"
            />
          </div>
          <div className="block">
            <p className="text-xs text-little-gray text-left w-full m-0">
              Та энэхүү барааг Simple-ийн зээлээр худалдан авах боломжтой.
            </p>
            <p className="text-text text-left w-full font-bold m-0">
              powered by Simple
            </p>
          </div>
        </div>
        <img
          src="https://cybercom.mn/c32226ff50460f00a7129070853683a9.svg"
          alt="icon"
          className="w-2.5 h-4 object-cover"
        />
      </div>
      <div className="flex w-full mt-5 gap-5">
        <button
          className="w-2/5 border-2 border-solid border-black h-14 hover:opacity-[0.5]"
          onClick={addCount}
        >
          Сагсанд хийх
        </button>
        <button className="w-2/5 bg-black text-white h-14 hover:opacity-[0.8]">
          Худалдан авах
        </button>
        <div className="w-1/5 h-14 flex items-center justify-center gap-2 cursor-pointer">
          <div className="bg-[url('https://cybercom.mn/9a309e0dc48340b969b2079049c7d597.svg')] w-6 h-[22px] object-cover hover:scale-110"></div>
          <button className="text-little-gray border-none text-sm">
            Хадгалах
          </button>
        </div>
      </div>
      <div className="flex h-16 w-full gap-5 mt-5">
        <div className="block bg-slate-200 py-2.5 px-7">
          <p className="text-black text-xs text-left pt-1 m-0">
            Хүргэлтийн нөхцөл
          </p>
          <p className="text-little-gray text-xs text-left m-0">
            14-30 хоногийн дотор хүргэгдэнэ
          </p>
        </div>
        <div className="flex h-16 items-center py-2.5 px-7 gap-2">
          <img
            src="https://cybercom.mn/ab6b1bebb71b0030a5dd48ac782e6f97.svg"
            alt="car"
            className="w-14 object-cover"
          />
          <div className="block">
            <p className="text-black text-xs text-left pb-1 m-0">
              ҮНЭГҮЙ ХҮРГЭЛТ
            </p>
            <p className="text-black text-xs text-left m-0">
              300,000₮-с дээш бараанд
            </p>
          </div>
        </div>
      </div>
      <p className="mt-5 w-full text-black text-sm font-bold mb-3">
        Үзүүлэлтүүд
      </p>
      <div className="flex items-center w-full bg-slate-200 h-12 gap-10">
        <p className="text-black font-bold text-xs text-left pl-5 m-0">
          Баталгаат хугацаа:
        </p>
        <p className="text-xs text-little-gray text-left m-0">
          {Data.slice(0, 1)[0].valid}
        </p>
      </div>
      <p className="text-black font-bold mb-4 mt-5 text-left w-full">
        Менежертэй холбогдох
      </p>
      <div className="flex w-full gap-2 items-center">
        <img
          src="https://cybercom.mn/c84235ec0d066b7880d7108bb29e6763.svg"
          alt="logo"
          className="object-cover"
        />
        <p className="text-black text-sm m-0">{Data.slice(0, 1)[0].phone}</p>
      </div>
      <div className="flex w-full gap-2 items-center mt-2">
        <img
          src="https://cybercom.mn/aa5a242be20c94736f61e3e1dc47241b.svg"
          alt="logo"
          className="object-cover"
        />
        <p className="text-black text-sm m-0">{Data.slice(0, 1)[0].email}</p>
      </div>
      <div className="bg-need w-full p-5 text-xs mt-7 mb-5">
        Захиалгаар нийлүүлэх барааны хувьд нийлүүүэх хугацаа болон үнийн дүнд
        өөрчлөлт орж болох тул менежертэй холбогдож захиалга баталгаажуулна уу.
        Хувь хүн: Хэрэглэгчийн нэр болон гар утасны дугаар шаардлагатай.
        Байгууллага: Байгууллагын регистер болон гар утасны дугаар шаардлагатай.
      </div>
    </div>
  );
};

export default DetailRight;
