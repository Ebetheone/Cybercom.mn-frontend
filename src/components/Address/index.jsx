/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import LocationData from "../../../data/LocationDummy.json";
import OrderSteps from "../OrderSteps";
import Data from "../../../data/Main.json";

const AddressOrder = () => {
  const [selected, setSelected] = useState("one");
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [chosenParent, setChosenParent] = useState(0);
  const [child, setChild] = useState(0);
  return (
    <div className="w-full h-full pt-[88px] bg-[#f3f3f3]">
      <div className="w-5/12 mx-auto grid grid-cols-4 pt-10 bg-[#f3f3f3] mb-5">
        <OrderSteps />
      </div>
      <div className="flex mx-10">
        <div className="w-4/6">
          <h4 className="pl-2.5 mb-5 text-[18px]">Хүргэлтийн хаяг</h4>
          <div>
            <div className="flex mb-5">
              <button
                className={
                  selected === "one"
                    ? "border-[rgb(42, 42, 42)] w-full h-[75px] border-solid border bg-white p-2.5 flex items-center mx-2 rounded"
                    : "border-[#ebebeb] w-full h-[75px] border-solid border bg-white p-2.5 flex items-center mx-2 rounded"
                }
                onClick={() => {
                  setSelected("one");
                }}
              >
                <div className="border-[#333333] w-6 h-6 p-1 leading-4 rounded-[50%] border-[3px] border-solid ">
                  <div
                    className={
                      selected === "one"
                        ? "w-full h-full ease-in-out duration-300 scale-125  rounded-[50%] bg-[#ff0002]"
                        : "scale-0"
                    }
                  ></div>
                </div>
                <div className="flex-[5] flex justify-center">
                  <span
                    className={
                      selected === "one"
                        ? "bg-[url('https://cybercom.mn/13263a7dd4585aba35506f25e94d1588.svg')] w-5 h-5 bg-contain bg-no-repeat mr-2.5"
                        : "bg-[url('https://cybercom.mn/2fafaae45fcbe2d112b5013c042a82f5.svg')] w-5 h-5 bg-contain bg-no-repeat mr-2.5"
                    }
                  ></span>
                  <h5 className="">Хувь хүн</h5>
                </div>
              </button>

              <button
                className={
                  selected === "two"
                    ? "border-[rgb(42,42,42)] w-full h-[75px] border-solid border bg-white p-2.5 flex items-center mx-2 rounded"
                    : "border-[#ebebeb] w-full h-[75px] border-solid border bg-white p-2.5 flex items-center mx-2 rounded"
                }
                onClick={() => {
                  setSelected("two");
                }}
              >
                <div className="border-[#333333] w-6 h-6 p-1 leading-4 rounded-[50%] border-[3px] border-solid ">
                  <div
                    className={
                      selected === "two"
                        ? "w-full h-full ease-in-out duration-300 scale-125 rounded-[50%] bg-[#ff0002]"
                        : "scale-0"
                    }
                  ></div>
                </div>
                <div className="flex-[5] flex justify-center items-end">
                  <span
                    className={
                      selected === "two"
                        ? "bg-[url('https://cybercom.mn/964ea4f42a63701002566bd88b2542e7.svg')] w-5 h-5 bg-contain bg-no-repeat mr-2.5"
                        : "bg-[url('https://cybercom.mn/3ac7a1151165dd8f9c5c1c41514cdd38.svg')] w-5 h-5 bg-contain bg-no-repeat mr-2.5"
                    }
                  ></span>
                  <h5 className="">Албан байгууллага</h5>
                </div>
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">
                {selected ? "Нэр" : "Байгууллагын нэр"}
              </p>
              <input
                type="text"
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px] rounded border border-solid border-[rgb(206,206,206)] bg-white w-full outline-[#C1D7F9] focus:outline focus:outline-[2.5px]"
              ></input>
            </div>
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">
                {selected ? "Овог" : "Байгууллагын регистр"}
              </p>
              <input
                type="text"
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px] rounded border border-solid border-[rgb(206,206,206)] bg-white w-full outline-[#C1D7F9] focus:outline focus:outline-[2.5px]"
              ></input>
            </div>
          </div>
          <div className="flex">
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">Имэйл</p>
              <input
                type="text"
                placeholder="Email"
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px] rounded border border-solid border-[rgb(206,206,206)] bg-white w-full outline-[#C1D7F9] focus:outline focus:outline-[2.5px]"
              ></input>
            </div>
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">Утасны дугаар</p>
              <input
                type="text"
                placeholder="Утасны дугаараа оруулна уу"
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px] rounded border border-solid border-[rgb(206,206,206)] bg-white w-full outline-[#C1D7F9] focus:outline focus:outline-[2.5px]"
              ></input>
            </div>
          </div>
          <div className="px-2 mb-5 w-1/2">
            <p className="ml-2.5 mb-[5px] text-[13px]">Нэмэлт утасны дугаар</p>
            <input
              type="text"
              placeholder="Нэмэлт утасны дугаараа оруулна уу"
              className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px] rounded border border-solid border-[rgb(206,206,206)] bg-white w-full outline-[#C1D7F9] focus:outline focus:outline-[2.5px]"
            ></input>
          </div>
          <div className="py-5 px-[5px]">
            <div className="h-[50px] flex items-center">
              <div className="border border-r-0 border-solid border-[rgb(226,226,226)] rounded-tl rounded-bl h-full bg-white flex items-center justify-center">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20240%20240%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23e11f26%3B%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset%202%3C/title%3E%3Cg%20id%3D%22Layer_2%22%20data-name%3D%22Layer%202%22%3E%3Cg%20id%3D%22Layer_1-2%22%20data-name%3D%22Layer%201%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M0%2C0V240H240V0ZM63.08%2C170.91a8.31%2C8.31%2C0%2C0%2C1-7.8-11.15l31-85.21a8.31%2C8.31%2C0%2C1%2C1%2C15.61%2C5.68l-31%2C85.21A8.33%2C8.33%2C0%2C0%2C1%2C63.08%2C170.91Zm41.42%2C0a8.31%2C8.31%2C0%2C0%2C1-7.8-11.15l31-85.21a8.31%2C8.31%2C0%2C1%2C1%2C15.61%2C5.68l-31%2C85.21A8.33%2C8.33%2C0%2C0%2C1%2C104.49%2C170.91Zm80.24-90.68-31%2C85.21a8.31%2C8.31%2C0%2C0%2C1-15.61-5.68l31-85.21a8.31%2C8.31%2C0%2C1%2C1%2C15.61%2C5.68Z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
                  className="w-[30px] h-full m-2 rounded"
                />
              </div>
              <input
                placeholder="хүргэх.газрын.хаяг (Заавал бус)"
                className="w-full h-full border-[rgb(228,228,228)] border px-[15px] text-[14px] text-[rgb(101,101,101)] focus:outline focus:outline-[#C1D7F9] focus:outline-[2.5px]"
              />
              <div className="h-full ">
                <button
                  className="px-[26px] py-3 bg-center bg-no-repeat h-full w-full bg-[length:22px] rounded-tr rounded-br bg-[rgb(255,0,2)] focus:outline focus:outline-[#BCC0C3] focus:outline-[2.5px] active:bg-[#6c757d]

                  bg-[url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIiIHdpZHRoPSIyNTZweCI+PHBhdGggZD0ibTI1NS44NjMyODEgMTY4LjY5OTIxOWMtNDguMDQ2ODc1IDAtODcuMTQwNjI1IDM5LjA5Mzc1LTg3LjE0MDYyNSA4Ny4xNDQ1MzEgMCA0OC4wNDY4NzUgMzkuMDkzNzUgODcuMTQwNjI1IDg3LjE0MDYyNSA4Ny4xNDA2MjUgNDguMDUwNzgxIDAgODcuMTQ0NTMxLTM5LjA5Mzc1IDg3LjE0NDUzMS04Ny4xNDA2MjUgMC00OC4wNTA3ODEtMzkuMDkzNzUtODcuMTQ0NTMxLTg3LjE0NDUzMS04Ny4xNDQ1MzF6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im00OTcuMDAzOTA2IDI0MC44NDM3NWgtNTUuMDU0Njg3Yy03LjI2OTUzMS05MS4wMDM5MDYtODAuMDgyMDMxLTE2My44MjAzMTItMTcxLjA4OTg0NC0xNzEuMDg1OTM4di01NC43NjE3MThjMC04LjI4MTI1LTYuNzE0ODQ0LTE0Ljk5NjA5NC0xNC45OTYwOTQtMTQuOTk2MDk0cy0xNC45OTYwOTMgNi43MTQ4NDQtMTQuOTk2MDkzIDE0Ljk5NjA5NHY1NC43NjE3MThjLTkxLjAwNzgxMyA3LjI2NTYyNi0xNjMuODIwMzEzIDgwLjA4MjAzMi0xNzEuMDg5ODQ0IDE3MS4wODU5MzhoLTU0Ljc4MTI1Yy04LjI4MTI1IDAtMTQuOTk2MDk0IDYuNzE0ODQ0LTE0Ljk5NjA5NCAxNSAwIDguMjgxMjUgNi43MTQ4NDQgMTQuOTk2MDk0IDE0Ljk5NjA5NCAxNC45OTYwOTRoNTQuNzgxMjVjNy4yNjk1MzEgOTEuMDAzOTA2IDgwLjA4MjAzMSAxNjMuODIwMzEyIDE3MS4wODk4NDQgMTcxLjA4OTg0NHY1NC43NTc4MTJjMCA4LjI4MTI1IDYuNzE0ODQzIDE0Ljk5NjA5NCAxNC45OTYwOTMgMTQuOTk2MDk0IDguMjg1MTU3IDAgMTQuOTk2MDk0LTYuNzE0ODQ0IDE0Ljk5NjA5NC0xNC45OTYwOTR2LTU0Ljc1NzgxMmM5MS4wMDc4MTMtNy4yNjk1MzIgMTYzLjgyNDIxOS04MC4wODU5MzggMTcxLjA4OTg0NC0xNzEuMDg5ODQ0aDU1LjA1NDY4N2M4LjI4MTI1IDAgMTQuOTk2MDk0LTYuNzE0ODQ0IDE0Ljk5NjA5NC0xNC45OTYwOTQgMC04LjI4NTE1Ni02LjcxNDg0NC0xNS0xNC45OTYwOTQtMTV6bS0yNDEuMTQwNjI1IDE3MS42OTUzMTJjLTg2LjQwMjM0MyAwLTE1Ni42OTUzMTItNzAuMjk2ODc0LTE1Ni42OTUzMTItMTU2LjY5NTMxMiAwLTg2LjQwMjM0NCA3MC4yOTI5NjktMTU2LjY5OTIxOSAxNTYuNjk1MzEyLTE1Ni42OTkyMTkgODYuNDAyMzQ0IDAgMTU2LjY5NTMxMyA3MC4yOTY4NzUgMTU2LjY5NTMxMyAxNTYuNjk5MjE5IDAgODYuMzk4NDM4LTcwLjI5Mjk2OSAxNTYuNjk1MzEyLTE1Ni42OTUzMTMgMTU2LjY5NTMxMnptMCAwIiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+Cg==')]"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">Хот/Аймаг</p>
              <select
                defaultValue={"DEFAULT"}
                onChange={(dat) => setChosenParent(dat.target.value)}
                type="text"
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px]
                 rounded border border-solid border-[rgb(206,206,206)] bg-white w-full 
                 outline-[#C1D7F9] focus:outline focus:outline-[2.5px] appearance-none bg-[url('https://cybercom.mn/4103a888b03169526375a31a9a45b836.svg')] 
                 bg-no-repeat bg-[left_calc(100%_-_10px)_center] bg-[length:13px] "
              >
                {LocationData.map((item, i) => (
                  <option value={i} key={i}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="px-2 mb-5 w-full">
              <p className="ml-2.5 mb-[5px] text-[13px]">Дүүрэг/Сум</p>
              <select
                type="text"
                onChange={(dat) => setChild(dat.target.value)}
                className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px]
                 rounded border border-solid border-[rgb(206,206,206)] bg-white w-full 
                 outline-[#C1D7F9] focus:outline focus:outline-[2.5px] appearance-none bg-[url('https://cybercom.mn/4103a888b03169526375a31a9a45b836.svg')] 
                 bg-no-repeat bg-[left_calc(100%_-_10px)_center] bg-[length:13px] "
              >
                {LocationData[chosenParent].submenu.map((item, i) => (
                  <option value={i} key={i}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-2 mb-5 w-1/2">
            <p className="ml-2.5 mb-[5px] text-[13px]">Хороо/Баг</p>
            <select
              type="text"
              className="text-[rgb(101,101,101)] text-[14px] py-3 px-[15px]
                 rounded border border-solid border-[rgb(206,206,206)] bg-white w-full 
                 outline-[#C1D7F9] focus:outline focus:outline-[2.5px] appearance-none bg-[url('https://cybercom.mn/4103a888b03169526375a31a9a45b836.svg')] 
                  bg-no-repeat bg-[left_calc(100%_-_10px)_center] bg-[length:13px] "
            >
              {LocationData[chosenParent].submenu[child].child.map(
                (item, i) => (
                  <option value="" key={i}>
                    {item.title}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="px-2 mb-5 w-full">
            <p className="ml-2.5 mb-[5px] text-[13px]">Дэлгэрэнгүй хаяг</p>
            <textarea className="w-full h-auto text-[rgb(101,101,101)] text-[14px] border border-solid py-3 px-[15px] rounded border-[rgb(206,206,206)] outline-[#C1D7F9] focus:outline focus:outline-[2.5px] bg-white"></textarea>
            <small className="text-[13px] text-[#6c757d]">
              Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт
              удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу
            </small>
          </div>
          <div className="px-2 mb-5 w-full">
            <p className="px-2 text-[rgb(36,36,36)] text-[13px] mb-2">
              Нэмэлт Анхааруулга
            </p>
            <div className="flex text-[13px] w-full">
              <button
                type="button"
                onClick={() => {
                  setClicked(!clicked);
                }}
                className={
                  clicked
                    ? "mr-4 flex-[1] p-2.5 flex items-center rounded bg-[rgb(42,42,42)]  ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-white cursor-pointer"
                    : "mr-4 flex-[1] p-2.5 flex items-center rounded bg-white ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-[rgb(36,36,36)] cursor-pointer "
                }
              >
                <img
                  className="w-3 float-left"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjYgMjYiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtLjMsMTRjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC43czAuMS0wLjUgMC4zLTAuN2wxLjQtMS40YzAuNC0wLjQgMS0wLjQgMS40LDBsLjEsLjEgNS41LDUuOWMwLjIsMC4yIDAuNSwwLjIgMC43LDBsMTMuNC0xMy45aDAuMXYtOC44ODE3OGUtMTZjMC40LTAuNCAxLTAuNCAxLjQsMGwxLjQsMS40YzAuNCwwLjQgMC40LDEgMCwxLjRsMCwwLTE2LDE2LjZjLTAuMiwwLjItMC40LDAuMy0wLjcsMC4zLTAuMywwLTAuNS0wLjEtMC43LTAuM2wtNy44LTguNC0uMi0uM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0Y4RjdGNyIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg=="
                ></img>
                <p className="float-right w-full">Нялх хүүхэдтэй</p>
              </button>
              <button
                type="button"
                onClick={() => {
                  setClicked1(!clicked1);
                }}
                className={
                  clicked1
                    ? "mr-4 flex-[1] p-2.5 flex items-center rounded bg-[rgb(42,42,42)]  ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-white cursor-pointer"
                    : "mr-4 flex-[1] p-2.5 flex items-center rounded bg-white ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-[rgb(36,36,36)] cursor-pointer "
                }
              >
                <img
                  className="w-3 float-left"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjYgMjYiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtLjMsMTRjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC43czAuMS0wLjUgMC4zLTAuN2wxLjQtMS40YzAuNC0wLjQgMS0wLjQgMS40LDBsLjEsLjEgNS41LDUuOWMwLjIsMC4yIDAuNSwwLjIgMC43LDBsMTMuNC0xMy45aDAuMXYtOC44ODE3OGUtMTZjMC40LTAuNCAxLTAuNCAxLjQsMGwxLjQsMS40YzAuNCwwLjQgMC40LDEgMCwxLjRsMCwwLTE2LDE2LjZjLTAuMiwwLjItMC40LDAuMy0wLjcsMC4zLTAuMywwLTAuNS0wLjEtMC43LTAuM2wtNy44LTguNC0uMi0uM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0Y4RjdGNyIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg=="
                ></img>
                <p className="float-right w-full">
                  Хүргэхийн өмнө заавал залгах
                </p>
              </button>
              <button
                type="button"
                onClick={() => {
                  setClicked2(!clicked2);
                }}
                className={
                  clicked2
                    ? "mr-4 flex-[1] p-2.5 flex items-center rounded bg-[rgb(42,42,42)]  ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-white cursor-pointer"
                    : "mr-4 flex-[1] p-2.5 flex items-center rounded bg-white ease-in-out duration-200 border border-solid border-[rgb(42,42,42)]  text-[rgb(36,36,36)] cursor-pointer "
                }
              >
                <img
                  className="w-3 float-left"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjYgMjYiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtLjMsMTRjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC43czAuMS0wLjUgMC4zLTAuN2wxLjQtMS40YzAuNC0wLjQgMS0wLjQgMS40LDBsLjEsLjEgNS41LDUuOWMwLjIsMC4yIDAuNSwwLjIgMC43LDBsMTMuNC0xMy45aDAuMXYtOC44ODE3OGUtMTZjMC40LTAuNCAxLTAuNCAxLjQsMGwxLjQsMS40YzAuNCwwLjQgMC40LDEgMCwxLjRsMCwwLTE2LDE2LjZjLTAuMiwwLjItMC40LDAuMy0wLjcsMC4zLTAuMywwLTAuNS0wLjEtMC43LTAuM2wtNy44LTguNC0uMi0uM3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0Y4RjdGNyIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD48L2c+IDwvc3ZnPg=="
                ></img>
                <p className="float-right w-full">Зөвхөн оройн цагаар хүргэх</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/6 ml-5">
          <h4 className="pl-2.5 mb-5 text-[18px]">Захиалгын мэдээлэл</h4>
          <div className="w-full flex flex-col items-center gap-4 bg-white pt-[15px] rounded-t">
            {Data.slice(0, 3).map((item, index) => (
              <div
                className="flex items-center justify-between w-11/12 mx-auto"
                key={index}
              >
                <p className="text-black text-[13px] font-normal w-2/3 m-0">
                  Name
                </p>
                <div className="flex items-center justify-between w-1/3">
                  <div className="text-little-gray py-1 px-2 bg-[rgb(241,241,241)] rounded text-[11px] font-normal">
                    x Number
                  </div>
                  <p className="text-black text-sm font-normal text-right m-0">
                    Price ₮
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full bg-[rgb(241,241,241)] border-t-[1px] border-t-solid  border-t-slate-200 rounded">
              <div className="flex items-center justify-between full mx-auto py-[10px] bg-[rgb(249,249,249)] px-4 mb-5">
                <p className=" text-little-gray text-base font-normal m-0">
                  Нийт
                </p>
                <p className="text-black text-base font-bold m-0">Sum ₮</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-black text-white h-[52px] rounded-[6px] hover:bg-red duration-300 text-[16px]">
            Төлбөрийн нөхцөл сонгох
          </button>
          <button className="w-full mt-5 bg-white text-[rgb(22,22,22)] h-[52px] rounded-[6px] hover:bg-red duration-300 hover:border-none text-[16px] border-2 border-solid border-[rgb(22,22,22)]">
            <div className="flex items-center py-[13px] px-2.5">
              <img
                src="https://cybercom.mn/f6791a023a05123f3f0a58a3f2386f6c.svg"
                className="h-3"
              ></img>
              <p className="w-full">Өмнөх алхам руу буцах</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressOrder;
