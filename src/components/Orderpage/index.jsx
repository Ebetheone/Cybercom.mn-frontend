import React, { useState, useEffect, useContext } from "react";
import OrderInfo from "../OrderInfo";
import OrderNull from "../OrderNull";
import OrderModal from "../OrderModal";
import OrderSteps from "../OrderSteps";
import Orders from "../Orders";
import OrderContext from "../../../context/OrderContext";

const Orderpage = () => {
  const ctx = useContext(OrderContext);
  const count = ctx.state.count;
  const number = ctx.state.number;
  const addNumber = () => {
    ctx.addNumber();
  };
  const removeNumber = () => {
    ctx.removeNumber();
  };
  const [check, setCheck] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (count > 0) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [count]);
  var sum = Math.imul(ctx.price, number);
  var sumOfsum = sum * count;
  return (
    <>
      <OrderModal visible={visible} setVisible={setVisible} />
      <div className="bg-slate-200 w-full h-full pt-20">
        {check ? (
          <>
            <div className="w-1/3 mx-auto grid grid-cols-4 pt-10 bg-slate-200">
              <OrderSteps />
            </div>
            <div className="w-9/12 mx-auto flex items-center gap-[20px] pt-4">
              <div className="basis-2/3 pb-10">
                <Orders
                  number={number}
                  sum={sum}
                  addNumber={addNumber}
                  removeNumber={removeNumber}
                  setVisible={setVisible}
                />
              </div>
              <div className="basis-1/3 flex flex-col items-center gap-2.5 pb-10">
                <OrderInfo number={number} sumOfsum={sumOfsum} />
              </div>
            </div>
          </>
        ) : (
          <div className="w-9/12 mx-auto py-10">
            <OrderNull />
          </div>
        )}
      </div>
    </>
  );
};

export default Orderpage;
