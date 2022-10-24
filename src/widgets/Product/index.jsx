import { useState } from "react";
import { useProduct } from "./useProduct";
export const ProductsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  const { Data } = useProduct();
  return (
    <div className="px-5 py-4">
      {Data.map((item, index) => (
        <div key={index}>
          <p
            className="text-xs py-1.5 cursor-pointer hover:text-[#ff0002]"
            onClick={() => {
              setClickedIndex(index);
              setIsOpen(!isOpen);
            }}
          >
            {item.title}
          </p>
          <div>
            {clickedIndex === index &&
              item.subMenu.map((item, index) => (
                <p
                  className="text-xs py-1.5 pl-2.5 hover:text-[#ff0002] cursor-pointer"
                  key={index}
                >
                  {item.title}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
