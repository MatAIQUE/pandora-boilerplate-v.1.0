"use client";
import { Button } from "@/app/components";
import DoorInput from "@/app/components/DoorInput";
import Keyboard from "@/app/components/Keyboard";
import Keypad from "@/app/components/Keypad";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OpenLockers = () => {
  const router = useRouter();

  const [doorNumber, setDoorNumber] = useState("");

  const onNavigate = () => {
    const url = `/lockers/open/verify-pin?doorNumber=${doorNumber}`;
    router.push(url);
  };

  const onNavigateBack = () => {
    router.back();
  };

  const handleKeyClick = (value: string) => {
    if (doorNumber.length < 2) {
      setDoorNumber((prevPin) => prevPin + value);
    }
  };

  const handleDeleteClick = () => {
    setDoorNumber((prevPin) => prevPin.slice(0, -1));
  };

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <div className="mb-10">
                    <LabelTitle label="Locker Number" />
                  </div>
                  <div className="">
                    <input
                      maxLength={2}
                      type="text"
                      placeholder="0 1"
                      className="input input-bordered text-2xl input-secondary w-20 text-center bg-white text-black"
                      value={doorNumber}
                      readOnly
                    />
                  </div>
                  {/* <Keypad
                    handleDeleteClick={handleDeleteClick}
                    handleKeyClick={handleKeyClick}
                  /> */}
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
                    onClick={onNavigateBack}
                  />
                </div>
                <div className="w-full">
                  <Button
                    label="Continue"
                    bgColor="btn-primary"
                    color="white"
                    weight="500"
                    outline=""
                    onClick={onNavigate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Keyboard
        handleKeyClick={handleKeyClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default OpenLockers;
