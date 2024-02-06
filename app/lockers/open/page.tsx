"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import Keyboard from "@components/Keyboard";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import axios from "axios";
import Image from "next/image";
import Spinner from "../../assets/images/spinner.svg";

const OpenLockers = () => {
  const router = useRouter();
  const [doorNumber, setDoorNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { allDoors, setAllDoors } = useBookingContext();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  useEffect(() => {
    if (!doorNumber) {
      setIsContinueDisabled(true);
    } else {
      setIsContinueDisabled(false);
    }
  }, [doorNumber]);

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        process.env.NEXT_PUBLIC_GET_ALL_DOORS as string,
        {
          headers: apiHeaders(),
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
    if (/^\d*$/.test(value) && doorNumber.length < 2) {
      setDoorNumber((prevPin) => prevPin + value);
    }
  };

  const handleDeleteClick = () => {
    setDoorNumber((prevPin) => prevPin.slice(0, -1));
  };

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <div className="px-5 my-4 absolute w-full">
        <div className="flex justify-between">
          <ButtonBack />
          <ButtonHome />
        </div>
      </div>
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
                      className={`input input-bordered text-2xl input-secondary w-20 text-center bg-white text-black
                      ${error === true ? "text-error border-error" : ""}
                      `}
                      value={doorNumber}
                      readOnly
                    />

                    {error && (
                      <div className={`font-medium  flex justify-center mt-2`}>
                        <span className={`text-left text-error`}>
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
                  <button
                    className={`btn btn-outline  rounded-sm w-full text-white font-500 ${
                      isLoading && "opacity-70 pointer-events-none"
                    }`}
                    onClick={onNavigateBack}
                  >
                    Back
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className={`btn btn-primary rounded-sm w-full text-white font-500 ${
                      isLoading || isContinueDisabled
                        ? "opacity-30 pointer-events-none"
                        : ""
                    }`}
                    onClick={onNavigate}
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

export default OpenLockers;
