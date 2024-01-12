"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components";
import Keyboard from "@/app/components/Keyboard";
import Label from "@/app/components/Label";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";

const GetLockers = () => {
  const router = useRouter();

  const [focusedInput, setFocusedInput] = useState<"booking" | "contact">(
    "booking"
  );
  const [bookingNum, setBookingNum] = useState("KMC-");
  const [contactNum, setContactNum] = useState("+63");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const onNavigate = () => {
    console.log(bookingNum, contactNum);
    router.push("/lockers/new/verify-otp");
  };

  const onNavigateBack = () => {
    router.back();
  };

  useEffect(() => {
    setIsContinueDisabled(
      !(bookingNum.length === 8 && contactNum.length === 13)
    );
  }, [bookingNum, contactNum]);

  const handleKeyClick = (value: string) => {
    const maxLength = focusedInput === "booking" ? 8 : 13;

    if (focusedInput === "booking" && bookingNum.length < maxLength) {
      setBookingNum((prev) => `${prev}${value}`);
    } else if (
      focusedInput === "contact" &&
      /^\d+$/.test(value) &&
      contactNum.length < 13
    ) {
      setContactNum((prevPin) => `${prevPin}${value}`);
    }
  };

  const handleDeleteClick = () => {
    const prefixLength = focusedInput === "booking" ? 4 : 3;

    if (focusedInput === "booking") {
      setBookingNum((prevPin) => {
        const numericPart = prevPin.slice(prefixLength, -1);
        return numericPart.length > 0
          ? `KMC-${numericPart.slice(0, -1)}`
          : "KMC-";
      });
    } else if (focusedInput === "contact") {
      setContactNum((prevPin) =>
        prevPin.length > prefixLength ? prevPin.slice(0, -1) : "+63"
      );
    }
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
                  <LabelTitle label="" />
                  <Label label="Booking Number*" />

                  <input
                    maxLength={4}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-xl input-secondary w-full bg-white text-black text-start mb-2"
                    value={bookingNum}
                    onFocus={() => setFocusedInput("booking")}
                  />

                  <Label label="Contact Number*" />
                  <input
                    maxLength={12}
                    type="text"
                    placeholder=""
                    className="input input-bordered text-xl input-secondary w-full bg-white text-black text-start mb-2"
                    value={contactNum}
                    onFocus={() => setFocusedInput("contact")}
                  />
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
                    disabled={isContinueDisabled}
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

export default GetLockers;
