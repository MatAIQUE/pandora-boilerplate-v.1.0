"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@components";
import Keyboard from "@components/Keyboard";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import axios, { all } from "axios";
import { useBookingContext } from "@context/BookingContext";

const OpenLockers = () => {
  const router = useRouter();
  const [doorNumber, setDoorNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { allDoors, setAllDoors } = useBookingContext();

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        process.env.NEXT_PUBLIC_GET_ALL_DOORS as string,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "x-api-secret": process.env.NEXT_PUBLIC_X_API_SECRET,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const allDoorsCount = response.data.data.count;
        setAllDoors(response.data.data.count);

        // Check if doorNumber is within the available door count range
        if (
          doorNumber &&
          parseInt(doorNumber) > 0 &&
          parseInt(doorNumber) <= allDoorsCount
        ) {
          const url = `/lockers/open/verify-pin?doorNumber=${doorNumber}`;
          router.push(url);
        } else {
          setError(true);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      setIsLoading(false);
    }
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

                    {error && (
                      <div className={`font-medium  flex justify-center mt-2`}>
                        <span className={`text-left text-primary`}>
                          Invalid Locker Number
                        </span>
                      </div>
                    )}
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
                    disabled={!doorNumber}
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
