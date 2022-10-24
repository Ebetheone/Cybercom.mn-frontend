/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import OrderContext from "../../../context/OrderContext";

const Orders = ({ number, sum, addNumber, removeNumber, setVisible }) => {
  const ctx = useContext(OrderContext);
  const slice = ctx.state.count;
  const Data = ctx.state.data[0];
  const lessCount = () => {
    ctx.lessCount();
  };
  const Empty = () => {
    ctx.empty();
  };
  const [showIndex, setIndex] = useState(0);
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <p className="text-black text-lg pl-2 m-0">Миний сагс</p>
        <div className="flex items-center gap-2 pr-2 opacity-[0.3] hover:opacity-[1]">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQ4Mi40MjggNDgyLjQyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgyLjQyOCA0ODIuNDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgxLjE2Myw1Ny43OTloLTc1LjA5NEMzMDIuMzIzLDI1LjMxNiwyNzQuNjg2LDAsMjQxLjIxNCwwYy0zMy40NzEsMC02MS4xMDQsMjUuMzE1LTY0Ljg1LDU3Ljc5OWgtNzUuMDk4ICAgIGMtMzAuMzksMC01NS4xMTEsMjQuNzI4LTU1LjExMSw1NS4xMTd2Mi44MjhjMCwyMy4yMjMsMTQuNDYsNDMuMSwzNC44Myw1MS4xOTl2MjYwLjM2OWMwLDMwLjM5LDI0LjcyNCw1NS4xMTcsNTUuMTEyLDU1LjExNyAgICBoMjEwLjIzNmMzMC4zODksMCw1NS4xMTEtMjQuNzI5LDU1LjExMS01NS4xMTdWMTY2Ljk0NGMyMC4zNjktOC4xLDM0LjgzLTI3Ljk3NywzNC44My01MS4xOTl2LTIuODI4ICAgIEM0MzYuMjc0LDgyLjUyNyw0MTEuNTUxLDU3Ljc5OSwzODEuMTYzLDU3Ljc5OXogTTI0MS4yMTQsMjYuMTM5YzE5LjAzNywwLDM0LjkyNywxMy42NDUsMzguNDQzLDMxLjY2aC03Ni44NzkgICAgQzIwNi4yOTMsMzkuNzgzLDIyMi4xODQsMjYuMTM5LDI0MS4yMTQsMjYuMTM5eiBNMzc1LjMwNSw0MjcuMzEyYzAsMTUuOTc4LTEzLDI4Ljk3OS0yOC45NzMsMjguOTc5SDEzNi4wOTYgICAgYy0xNS45NzMsMC0yOC45NzMtMTMuMDAyLTI4Ljk3My0yOC45NzlWMTcwLjg2MWgyNjguMTgyVjQyNy4zMTJ6IE00MTAuMTM1LDExNS43NDRjMCwxNS45NzgtMTMsMjguOTc5LTI4Ljk3MywyOC45NzlIMTAxLjI2NiAgICBjLTE1Ljk3MywwLTI4Ljk3My0xMy4wMDEtMjguOTczLTI4Ljk3OXYtMi44MjhjMC0xNS45NzgsMTMtMjguOTc5LDI4Ljk3My0yOC45NzloMjc5Ljg5N2MxNS45NzMsMCwyOC45NzMsMTMuMDAxLDI4Ljk3MywyOC45NzkgICAgVjExNS43NDR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4ODg4ODgiIGRhdGEtb2xkX2NvbG9yPSIjRjY4QjFGIj48L3BhdGg+CgkJPHBhdGggZD0iTTE3MS4xNDQsNDIyLjg2M2M3LjIxOCwwLDEzLjA2OS01Ljg1MywxMy4wNjktMTMuMDY4VjI2Mi42NDFjMC03LjIxNi01Ljg1Mi0xMy4wNy0xMy4wNjktMTMuMDcgICAgYy03LjIxNywwLTEzLjA2OSw1Ljg1NC0xMy4wNjksMTMuMDd2MTQ3LjE1NEMxNTguMDc0LDQxNy4wMTIsMTYzLjkyNiw0MjIuODYzLDE3MS4xNDQsNDIyLjg2M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg4ODg4OCIgZGF0YS1vbGRfY29sb3I9IiNGNjhCMUYiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMjQxLjIxNCw0MjIuODYzYzcuMjE4LDAsMTMuMDctNS44NTMsMTMuMDctMTMuMDY4VjI2Mi42NDFjMC03LjIxNi01Ljg1NC0xMy4wNy0xMy4wNy0xMy4wNyAgICBjLTcuMjE3LDAtMTMuMDY5LDUuODU0LTEzLjA2OSwxMy4wN3YxNDcuMTU0QzIyOC4xNDUsNDE3LjAxMiwyMzMuOTk2LDQyMi44NjMsMjQxLjIxNCw0MjIuODYzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODg4ODg4IiBkYXRhLW9sZF9jb2xvcj0iI0Y2OEIxRiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0zMTEuMjg0LDQyMi44NjNjNy4yMTcsMCwxMy4wNjgtNS44NTMsMTMuMDY4LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTItMTMuMDctMTMuMDY4LTEzLjA3ICAgIGMtNy4yMTksMC0xMy4wNyw1Ljg1NC0xMy4wNywxMy4wN3YxNDcuMTU0QzI5OC4yMTMsNDE3LjAxMiwzMDQuMDY3LDQyMi44NjMsMzExLjI4NCw0MjIuODYzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODg4ODg4IiBkYXRhLW9sZF9jb2xvcj0iI0Y2OEIxRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4"
            alt="image"
            className="w-5 h-5 object-cover"
          />
          <button
            className="text-little-gray text-xs first-letter mr-[10px]"
            onClick={Empty}
          >
            cагс хоослох
          </button>
        </div>
      </div>
      {Data.slice(0, slice).map((item, index) => (
        <div
          className="flex items-center w-full justify-between bg-white p-5 mt-3 rounded"
          key={index}
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt="bla"
              className="w-[90px] h-[90px] object-cover pl-3"
            />
            <div className="block">
              <div className="text-black text-sm font-medium mb-2.5">
                {item.name}
              </div>
              <p className="text-redy text-xs font-normal">
                Боломжит үлдэгдэл : 1
              </p>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setVisible(true)}
              >
                <p className="text-little-gray text-xs font-medium m-0">
                  Хүргэлтийн нөхцөл
                </p>
                <img
                  src="https://cybercom.mn/13c7c54a49079ac8863c30091f01f626.svg"
                  alt="arrow"
                  className="w-3 h-3 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <div className="flex items-center gap-6 pr-3">
              <p className="text-black text-sm mb-0">{item.price}₮</p>
              <div className="flex items-center">
                <button
                  className="flex items-center justify-center border-[1px] border-solid border-slate-200 w-7 h-7"
                  onClick={removeNumber}
                >
                  -
                </button>
                <button className="flex items-center justify-center border-[1px] border-solid border-slate-200 w-7 h-7">
                  {number}
                </button>
                <button
                  className="flex items-center justify-center border-[1px] border-solid border-slate-200 w-7 h-7"
                  onClick={addNumber}
                >
                  +
                </button>
              </div>
              <p className="text-black text-base font-bold mb-0">{sum}₮</p>
            </div>
            <div className="flex items-center justify-end w-full pt-5 pr-2 gap-3">
              <div
                className="flex items-center gap-2 pr-3.5 border-r-[1px] border-r-solid border-r-little-gray cursor-pointer"
                onClick={lessCount}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQ4Mi40MjggNDgyLjQyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgyLjQyOCA0ODIuNDI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzgxLjE2Myw1Ny43OTloLTc1LjA5NEMzMDIuMzIzLDI1LjMxNiwyNzQuNjg2LDAsMjQxLjIxNCwwYy0zMy40NzEsMC02MS4xMDQsMjUuMzE1LTY0Ljg1LDU3Ljc5OWgtNzUuMDk4ICAgIGMtMzAuMzksMC01NS4xMTEsMjQuNzI4LTU1LjExMSw1NS4xMTd2Mi44MjhjMCwyMy4yMjMsMTQuNDYsNDMuMSwzNC44Myw1MS4xOTl2MjYwLjM2OWMwLDMwLjM5LDI0LjcyNCw1NS4xMTcsNTUuMTEyLDU1LjExNyAgICBoMjEwLjIzNmMzMC4zODksMCw1NS4xMTEtMjQuNzI5LDU1LjExMS01NS4xMTdWMTY2Ljk0NGMyMC4zNjktOC4xLDM0LjgzLTI3Ljk3NywzNC44My01MS4xOTl2LTIuODI4ICAgIEM0MzYuMjc0LDgyLjUyNyw0MTEuNTUxLDU3Ljc5OSwzODEuMTYzLDU3Ljc5OXogTTI0MS4yMTQsMjYuMTM5YzE5LjAzNywwLDM0LjkyNywxMy42NDUsMzguNDQzLDMxLjY2aC03Ni44NzkgICAgQzIwNi4yOTMsMzkuNzgzLDIyMi4xODQsMjYuMTM5LDI0MS4yMTQsMjYuMTM5eiBNMzc1LjMwNSw0MjcuMzEyYzAsMTUuOTc4LTEzLDI4Ljk3OS0yOC45NzMsMjguOTc5SDEzNi4wOTYgICAgYy0xNS45NzMsMC0yOC45NzMtMTMuMDAyLTI4Ljk3My0yOC45NzlWMTcwLjg2MWgyNjguMTgyVjQyNy4zMTJ6IE00MTAuMTM1LDExNS43NDRjMCwxNS45NzgtMTMsMjguOTc5LTI4Ljk3MywyOC45NzlIMTAxLjI2NiAgICBjLTE1Ljk3MywwLTI4Ljk3My0xMy4wMDEtMjguOTczLTI4Ljk3OXYtMi44MjhjMC0xNS45NzgsMTMtMjguOTc5LDI4Ljk3My0yOC45NzloMjc5Ljg5N2MxNS45NzMsMCwyOC45NzMsMTMuMDAxLDI4Ljk3MywyOC45NzkgICAgVjExNS43NDR6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM4ODg4ODgiIGRhdGEtb2xkX2NvbG9yPSIjRjY4QjFGIj48L3BhdGg+CgkJPHBhdGggZD0iTTE3MS4xNDQsNDIyLjg2M2M3LjIxOCwwLDEzLjA2OS01Ljg1MywxMy4wNjktMTMuMDY4VjI2Mi42NDFjMC03LjIxNi01Ljg1Mi0xMy4wNy0xMy4wNjktMTMuMDcgICAgYy03LjIxNywwLTEzLjA2OSw1Ljg1NC0xMy4wNjksMTMuMDd2MTQ3LjE1NEMxNTguMDc0LDQxNy4wMTIsMTYzLjkyNiw0MjIuODYzLDE3MS4xNDQsNDIyLjg2M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izg4ODg4OCIgZGF0YS1vbGRfY29sb3I9IiNGNjhCMUYiPjwvcGF0aD4KCQk8cGF0aCBkPSJNMjQxLjIxNCw0MjIuODYzYzcuMjE4LDAsMTMuMDctNS44NTMsMTMuMDctMTMuMDY4VjI2Mi42NDFjMC03LjIxNi01Ljg1NC0xMy4wNy0xMy4wNy0xMy4wNyAgICBjLTcuMjE3LDAtMTMuMDY5LDUuODU0LTEzLjA2OSwxMy4wN3YxNDcuMTU0QzIyOC4xNDUsNDE3LjAxMiwyMzMuOTk2LDQyMi44NjMsMjQxLjIxNCw0MjIuODYzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODg4ODg4IiBkYXRhLW9sZF9jb2xvcj0iI0Y2OEIxRiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0zMTEuMjg0LDQyMi44NjNjNy4yMTcsMCwxMy4wNjgtNS44NTMsMTMuMDY4LTEzLjA2OFYyNjIuNjQxYzAtNy4yMTYtNS44NTItMTMuMDctMTMuMDY4LTEzLjA3ICAgIGMtNy4yMTksMC0xMy4wNyw1Ljg1NC0xMy4wNywxMy4wN3YxNDcuMTU0QzI5OC4yMTMsNDE3LjAxMiwzMDQuMDY3LDQyMi44NjMsMzExLjI4NCw0MjIuODYzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojODg4ODg4IiBkYXRhLW9sZF9jb2xvcj0iI0Y2OEIxRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4"
                  alt="image"
                  className="w-4 h-4 object-cover"
                />
                <button className="text-little-gray text-[11px] first-letter m-0">
                  Устгах
                </button>
              </div>
              <div className="flex items-center gap-2 pr-2 cursor-pointer">
                <img
                  src="https://cybercom.mn/894578c8f26589e0bfcb681798436e94.svg"
                  alt="image"
                  className="w-4 h-4 object-contain"
                />
                <button className="text-little-gray text-[11px] first-letter m-0">
                  Хадгалах
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Orders;
