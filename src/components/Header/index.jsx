{
  /* eslint-disable @next/next/no-img-element */
}
{
  /* eslint-disable jsx-a11y/alt-text */
}

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
} from "react";
import Data from "../../../data/Search.json";
import { useRouter } from "next/router";
import Modal from "../Modal";
import { useSearchHistory } from "../../hooks/useSearchHistory.js";
import OrderContext from "../../../context/OrderContext";

const Header = () => {
  const ctx = useContext(OrderContext);
  const location = useRouter();
  const { addToHistory, data } = useSearchHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const number = ctx.state.count;
  useEffect(() => {
    if (number > 0) {
      setCheck(true);
      setShow(true);
    } else if (number === 0) {
      setCheck(false);
      setShow(false);
    } else {
      setShow(false);
    }
  }, [number]);
  let dropdownRef = useRef();
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);
  const HistoryHandle = (event) => {
    event.preventDefault();
    const history = event.target[0].value;
    addToHistory({ history });
  };
  const MappedData = Data.map((item, i) => {
    const searchTerm = value.toLowerCase();
    const name = item.full_name.toLowerCase();
    return value !== "" && !name.startsWith(searchTerm);
  });
  const filterData = useCallback(() => {
    return Data.filter((item) => {
      const searchTerm = value.toLocaleLowerCase();
      const name = item.full_name.toLowerCase();
      return name.startsWith(searchTerm);
    });
  }, [value]);

  const MemoData = useMemo(() => {
    const MappedData = filterData();
    if (MappedData.length === 0) {
      return false;
    } else {
      return true;
    }
  }, [filterData]);
  return (
    <div className="bg-yellow-500 flex justify-between px-11 py-7 fixed w-full bg-[#ffffff] z-10">
      <div className="flex flex-[4] ">
        <div className="flex flex-[1] w-1/5 justify-center">
          <img
            className="w-full h-8 cursor-pointer"
            src="https://cybercom.mn/a2517f8d4edc696b86136fc1d8566e37.svg"
            onClick={() => location.push("/")}
          />
        </div>
        <div className="w-full h-full flex-[3]" ref={dropdownRef}>
          <form
            className="flex"
            onClick={() => setIsOpen(!isOpen)}
            onSubmit={HistoryHandle}
          >
            <input
              className={
                isOpen
                  ? "w-full ease-in duration-150 rounded-sm bg-[#F6F6F6] text-xs  pl-4 h-8  outline-none"
                  : "w-4/12 ease-in duration-150 rounded-sm bg-[#F6F6F6] text-xs pl-4 h-8  outline-none "
              }
              type="text"
              placeholder="Хайх утга"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <button
              className="bg-[#F6F6F6] rounded-sm px-4 bg-[url('https://cybercom.mn/57b8d66b9275ce0d97a0586efc71b679.svg')] bg-no-repeat bg-center"
              type="submit"
            />
          </form>
          {isOpen && (
            <div
              className={
                value.length !== 0
                  ? MemoData
                    ? "bg-[#ffffff] z-10 pt-10 px-5 flex justify-between w-[46.8%] pb-5 absolute h-[300px]"
                    : "bg-[#ffffff] z-10 pt-10 px-5 flex justify-between  w-[46.8%] pb-5 absolute h-auto"
                  : "bg-[#ffffff] z-10 pt-10 px-5 flex justify-between  w-[46.8%] pb-5 absolute h-auto"
              }
            >
              <div className="flex flex-col w-7/12 h-full">
                <div className="pb-5">
                  <p className="text-[13px] text-[#666666]">ХАЙЛТЫН ИЛЭРЦ</p>
                </div>
                <div
                  className={
                    value.length !== 0
                      ? MemoData
                        ? "grid-cols-2 grid gap-6 scroll-smooth overflow-y-auto h-full"
                        : null
                      : null
                  }
                >
                  {value.length !== 0 ? (
                    MemoData ? (
                      Data.filter((item, index) => {
                        const searchTerm = value.toLowerCase();
                        const name = item.full_name.toLowerCase();
                        return searchTerm && name.startsWith(searchTerm);
                      }).map((item, index) => (
                        <div
                          className="cursor-pointer flex flex-col items-center"
                          key={index}
                          onClick={() => location.push("/detail")}
                        >
                          <img
                            className="w-full object-cover"
                            src={item.image}
                          />
                          <p className="text-[14px] text-[#242424]">
                            {item.full_name}
                          </p>
                          <span className="text-xs text-[#666666]">
                            {item.price} ₮
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-[13px] text-[#2a2a2a] bg-[#f3f3f3] py-[30px] px-[20px]">
                        Хайлтад тохирох илэрц алга
                      </p>
                    )
                  ) : (
                    <p className="text-[13px] text-[#2a2a2a] bg-[#f3f3f3] py-[30px] px-[20px]">
                      Та хайх түлхүүр үгээ оруулна уу
                    </p>
                  )}
                </div>
              </div>
              <div className="flex w-4/12 flex-col">
                <div className="pb-5">
                  <p className="text-[13px] text-[#666666]"> ТАНЫ ХАЙЛТУУД</p>
                </div>
                {data.length === 0 && (
                  <div className="py-[30px] px-[20px] bg-[#f3f3f3]">
                    <p className="text-[13px] text-[#2a2a2a]">
                      {" "}
                      Та өмнө нь хайлт хийгээгүй байна
                    </p>
                  </div>
                )}
                {data.length !== 0 && (
                  <div className="text-[13px] h-full last:border-none">
                    {data?.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-[#eeeeee] last-of-type:border-none"
                      >
                        <p
                          className="text-[#2a2a2a] px-2 py-0.5 cursor-pointer hover:text-[#da0018]"
                          onClick={() => {
                            setValue(item);
                            setIsOpen(false);
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-[2] h-8 items-center justify-end">
        <div
          className="relative cursor-pointer"
          onClick={() => location.push("/order")}
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          <img
            className="mx-3 cursor-pointer"
            src="https://cybercom.mn/69a5a0022c6e1b0921bd1594891121fb.svg"
          />
          {check && (
            <div className="w-4 h-4 bg-red rounded-full text-white flex items-center justify-center text-xs font-bold absolute -top-1.5 right-1">
              {number}
            </div>
          )}
          {modal && (
            <div className="absolute w-96 h-[200px] -right-5 pt-8 top-0">
              <Modal show={show} />
            </div>
          )}
        </div>
        <img
          className="mx-3 cursor-pointer relative"
          src="https://cybercom.mn/55a51d3d85ce14514e2815e1f9de328a.svg"
          onClick={() => location.push("/login")}
        />
      </div>
    </div>
  );
};

export default Header;
