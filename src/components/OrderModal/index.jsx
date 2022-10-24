/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

const OrderModal = ({ visible, setVisible }) => {
  return (
    <>
      <Modal
        title={null}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <div className="block w-96 bg-white p-[15px]">
          <div className="flex items-center gap-5">
            <img
              src="https://cybercom.mn/f4f00f48b010ed0daee15db82830fa41.svg"
              alt="modal"
              className="rounded-full h-[50px] w-50px object-cover"
            />
            <div className="flex flex-col items-center m-0 p-0 justify-center">
              <p className="text-black text-[16px] font-medium mb-1 text-left w-full">
                Хүргэлтийн нөхцөл
              </p>
              <p className="text-little-gray text-[14px] font-normal mb-[13px] text-left w-full">
                30 хоногт хүргэгдэнэ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="https://cybercom.mn/cd1ea582b4732fd7b511e6a6b5dad149.svg"
              alt="modal"
              className="rounded-full h-[50px] w-50px object-cover"
            />
            <div className="block">
              <p className="text-black text-[16px] font-medium mb-1 text-left w-full">
                Барааг буцаах
              </p>
              <p className="text-little-gray text-[14px] font-normal mb-[13px] text-left w-full">
                Хэрэглэгч худалдан авсан барааг буцаах тохиолдолд барааг хүлээн
                авсан цагаас хойш 24 цагийн дотор буцаах боломжтой
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderModal;
