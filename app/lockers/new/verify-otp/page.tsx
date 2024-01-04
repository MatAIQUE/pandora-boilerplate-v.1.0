"use client";
import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import Keypad from "@/app/components/Keypad";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

const VerifyOTP = () => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const onNavigate = () => {
    router.push("/lockers/new/locker-qty");
  };

  const onNavigateBack = () => {
    router.back();
  };

  const handleKeyClick = (value: string) => {
    if (pinCode.length < 6) {
      setPinCode((prevPin) => prevPin + value);
    }
  };

  const handleDeleteClick = () => {
    setPinCode((prevPin) => prevPin.slice(0, -1));
  };

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
                  <LabelTitle label="We've sent you an OTP" />
                  <LabelDesc
                    label="Enter the 6-digit OTP sent to your number"
                    position="justify-start"
                  />
                  <LabelDesc
                    label="+63 *** *** **27"
                    position="justify-start"
                  />
                  <div className="text-danger font-medium flex justify-start">
                    <button className="btn btn-ghost pl-0">
                      <span className="text-primary text-lg">Resend Code</span>
                    </button>
                  </div>
                  <div className="w-full text-center items-center mt-10">
                    <DoorInputOTP pinCode={pinCode} />
                    <Keypad
                      handleDeleteClick={handleDeleteClick}
                      handleKeyClick={handleKeyClick}
                    />
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
    </div>
  );
};

export default VerifyOTP;
