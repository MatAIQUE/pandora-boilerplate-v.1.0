import Menu from "@/app/components/Menu";
import React from "react";
import Card from "../../_components/Card";
import Logo from "@/app/components/Logo";
import LabelTitle from "@/app/components/LabelTitle";
import DoorInput from "@/app/components/DoorInput";
import { Button } from "@/app/components";
import LabelDesc from "@/app/components/LabelDesc";
import DoorAlert from "@/app/components/DoorAlert";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const lockerQTY = () => {
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <LabelTitle label="Locker quantity" />
                  <div className="flex items-start gap-5">
                    <button className="btn btn-circle btn-outline  btn-sm">
                      <FaMinus />
                    </button>
                    <div className="font-medium text-2xl">2</div>
                    <button className="btn btn-circle btn-primary btn-sm">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions justify-center mt-3">
              <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
                <div className="w-full">
                  <Button
                    label="Back"
                    bgColor="btn-outline"
                    color="gray-800"
                    weight="500"
                    outline="btn-outline"
                  />
                </div>
                <div className="w-full">
                  <Button
                    label="Continue"
                    bgColor="btn-primary"
                    color="white"
                    weight="500"
                    outline=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lockerQTY;
