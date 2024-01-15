"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components";
import Keyboard from "@/app/components/Keyboard";
import Label from "@/app/components/Label";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import axios from "axios";
import Image from "next/image";
import Spinner from "../../assets/images/spinner.svg";

interface Props {
  searchParams: { doorNumber: string };
}

const GetLockers = () => {
  const router = useRouter();

  const [focusedInput, setFocusedInput] = useState<"booking" | "contact">(
    "booking"
  );
  const [bookingNum, setBookingNum] = useState("KMC-");
  const [contactNum, setContactNum] = useState("+63");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Separate variable for display without prefix
  const mobileNumber = contactNum.replace("+63", "0");

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://pandora-v3.onrender.com/otp/kmc",
        {
          bookingNumber: "KMC-0000-XXXX",
          mobileNumber: mobileNumber,
          lockerId: "3009",
        },
        {
          headers: {
            "x-api-key": "pk-79ccd394-0be5-40ea-a527-8f27098db549",
            "x-api-secret": "sk-fcb71bfd-7712-4969-a46b-6b78f8a47bd2",
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoading(false);
      if (response.status === 201) {
        const secretKey = response.data.data.secret;
        const url = `/lockers/new/verify-otp?bookingNum=${bookingNum}&lockerId=3009&secretKey=${secretKey}&mobileNumber=${mobileNumber}`;
        router.push(url);
      }
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      setIsLoading(false);
    }
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
                    className={`input text-xl w-full bg-white text-black text-start mb-2
                    
                    ${
                      focusedInput === "booking"
                        ? "input-bordered input-primary"
                        : "input-bordered input-neutral"
                    }
                    
                    `}
                    value={bookingNum}
                    onFocus={() => setFocusedInput("booking")}
                    readOnly
                  />

                  <Label label="Contact Number*" />
                  <input
                    maxLength={12}
                    type="text"
                    placeholder=""
                    className={`input text-xl w-full bg-white text-black text-start mb-2
                    
                    ${
                      focusedInput === "contact"
                        ? "input-bordered input-primary"
                        : "input-bordered input-neutral"
                    }
                    
                    `}
                    value={contactNum}
                    onFocus={() => setFocusedInput("contact")}
                    readOnly
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
                  <button
                    className={`btn btn-primary  rounded-sm w-full text-white font-500`}
                    onClick={onNavigate}
                    disabled={isContinueDisabled}
                  >
                    Continue
                    {isLoading && (
                      <span className="animate-spin text-white">
                        <Image
                          src={Spinner}
                          height={30}
                          width={30}
                          alt="spinner loading"
                        />
                      </span>
                    )}
                  </button>
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
