import React, { useState, createContext } from "react";
import Data from "../data/Main.json";
import axios from "../api/axios-order";

const OrderContext = createContext();
const initialState = {
  count: 0,
  number: 1,
  price: Data.slice(0, 1)[0].price,
  data: [Data.map((item) => item)],
  chosenId: 0,
};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);
  const [opacity, setOpacity] = useState(false);
  const addCount = () => {
    setState({ ...state, count: state.count + 1 });
  };
  const lessCount = () => {
    setState({ ...state, count: state.count - 1 });
  };
  const price = state.price;
  const addNumber = () => {
    setState({ ...state, number: state.number + 1 });
  };
  const removeNumber = () => {
    setState({ ...state, number: state.number - 1 });
  };
  const number = state.number;
  const haveId = (props) => {
    setState({ ...state, chosenId: state.chosenId + props });
  };
  const empty = () => {
    setState({ ...state, count: (state.count = 0) });
  };

  return (
    <OrderContext.Provider
      value={{
        state,
        addCount,
        price,
        number,
        addNumber,
        removeNumber,
        lessCount,
        haveId,
        opacity,
        setOpacity,
        empty,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
