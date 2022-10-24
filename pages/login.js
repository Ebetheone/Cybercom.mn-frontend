import { useState } from "react";
import { LoginWidget } from "../src/widgets/login";

const Login = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[370px] h-[500px] bg-white rounded-xl">
        <div className="flex w-full pt-10 justify-center gap-4">
          <button
            className={show ? "text-sm text-black" : "text-red text-sm"}
            onClick={() => {
              setShow(false);
              setOpen(true);
            }}
          >
            НЭВТРЭХ
          </button>
          <button
            className={open ? "text-sm text-black" : "text-red text-sm"}
            onClick={() => {
              setOpen(false);
              setShow(true);
            }}
          >
            БҮРТГҮҮЛЭХ
          </button>
        </div>
        <LoginWidget show={show} />
        <p className="text-black text-xs w-10/12 mx-auto pt-5">
          Үргэлжлүүлэх товчийг дарж, Facebook эрхээрээ нэвтрэх болон бүртгэл
          үүсгэснээр Та манай{" "}
          <strong className="text-strong-blue cursor-pointer">
            Үйлчилгээний нөхцөл
          </strong>{" "}
          болон{" "}
          <strong className="text-strong-blue cursor-pointer">
            Нууцлалын бодлогыг
          </strong>{" "}
          хүлээн зөвшөөрч буй болно.
        </p>
      </div>
    </div>
  );
};

export default Login;
