/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Carousel from "better-react-carousel";
import OrderContext from "../../../context/OrderContext";

const CarouselItem = () => {
  const ctx = useContext(OrderContext);
  const Data = ctx.state.data[0];
  return (
    <div className="box-border w-full h-40">
      <Carousel cols={4} rows={1} gap={10} loop>
        {Data.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              src={item.image}
              alt="bla"
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItem;
