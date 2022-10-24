/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] h-96 pt-12">
      <div className="bg-[#f3f3f3] h-auto">
        <div className="h-auto flex">
          <div className="w-2/5 bg-[#333333] pl-11 pt-5">
            <div className="flex justify-around">
              <div className="text-xs text-[#d5d4d4]">
                <h4 className=" pb-4">Компани</h4>
                <p className="pb-1">Бидний тухай</p>
                <p className="pb-1">Байгууллагын борлуулалт</p>
                <p className="pb-1">Нууцлалын бодлого</p>
                <p className="pb-1">Дэлгүүрийн байршил</p>
                <p className="pb-1">Ажлын байр</p>
              </div>
              <div className="text-xs text-[#d5d4d4]">
                <h4 className=" pb-4">Тусламж</h4>
                <p className="pb-1">Үйлчилгээний нөхцөл </p>
                <p className="pb-1">Баталгаат засварын үйлчилгээ</p>
                <p className="pb-1">Нууцлалын бодлого</p>
                <p className="pb-1">Бүтээгдэхүүн нийлүүлэлт</p>
                <p className="pb-1">Хүргэлт</p>
              </div>
            </div>
          </div>
          <div className="w-3/5 bg-[#ffffff] pr-11 pt-5">
            <div className="flex justify-around pl-5 border-b border-[#d0d0d0]">
              <div className="text-xs text-[#4b4b4b]">
                <div className="flex pb-4 mb-0">
                  <img src="https://cybercom.mn/6091af479a656f744e9787a646352145.svg" />
                  <p className="pl-2.5">Байгууллагын борлуулалт</p>
                </div>
                <div className="flex ">
                  <p className="pb-1">КИБЕРКОМ ХХК - Байгууллага</p>
                </div>
                <div className="flex mb-0">
                  <img src="https://cybercom.mn/c84235ec0d066b7880d7108bb29e6763.svg" />
                  <p className="pb-1 pl-2.5">70008844, 94029020, 99099020</p>
                </div>
                <div className="flex mb-0">
                  <img src="https://cybercom.mn/aa5a242be20c94736f61e3e1dc47241b.svg" />
                  <p className="pb-1 pl-2.5">corporate@cybercom.mn</p>
                </div>
              </div>
              <div className="text-xs text-[#4b4b4b]">
                <div className="flex pb-4 mb-0">
                  <img src="https://cybercom.mn/63a2a42af017a07ee4f25689d76cdfaf.svg" />
                  <p className="pl-2.5">Холбоо барих</p>
                </div>
                <div className="flex ">
                  <p className="pb-1 ">
                    Канон Төв, Оффисын 4-р давхар, 402 тоот
                  </p>
                </div>
                <div className="flex">
                  <p className="pb-1 ">
                    Энхтайвны өргөн чөлөө 29/1, Чингэлтэй Дүүрэг
                  </p>
                </div>
                <div className="flex">
                  <p className="pb-1 ">
                    2-р хороо, Улаанбаатар хот, Монгол Улс
                  </p>
                </div>
                <div className="flex mb-0">
                  <img src="https://cybercom.mn/c84235ec0d066b7880d7108bb29e6763.svg" />
                  <p className="pb-1 pl-2.5">70008844, 94029020, 99099020</p>
                </div>
                <div className="flex mb-0">
                  <img src="https://cybercom.mn/aa5a242be20c94736f61e3e1dc47241b.svg" />
                  <p className="pb-1 pl-2.5">eshop@cybercom.mn</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-[#4b4b4b]">Биднийг дагаарай</p>
                <div className="flex justify-between pt-3 mb-0">
                  <img src="https://cybercom.mn/ee9bcb5302088792c39b580fde721898.svg" />
                  <img src="https://cybercom.mn/6e9b973f15f603bbe031785b451f8959.svg" />
                  <img src="https://cybercom.mn/8b6338e3e49c93b3ad59fc99993ef07d.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 bg-[#ffffff] flex items-center">
        <div className="flex items-center h-full justify-center w-2/12">
          <img
            className="h-6 mb-0"
            src="https://cybercom.mn/33887f9a974ffaae4ca138f9d7209824.svg"
          />
        </div>
        <div className="w-10/12 text-xs text-[#4b4b4b]">
          <p>©2022 Cybercom Inc</p>
          <p className="pt-4">
            Та www.cybercom.mn цахим худалдааны сайтад тавтай морилно уу.{" "}
          </p>
          <p>
            Бид таньд шинэ технологи, шилдэг бүтээгдэхүүнийг санал болгох болно.
            Хурд хүч, чанарыг эндээс мэдэр.{" "}
          </p>
          <p>Бүх эрх хуулиар хамгаалагдсан. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
