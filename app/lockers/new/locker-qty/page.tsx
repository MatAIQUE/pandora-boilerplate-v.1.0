"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { Button } from "@/app/components";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { bookingNum: string; mobileNumber: string };
}
const LockerQTY = ({ searchParams }: Props) => {
  const router = useRouter();
  const [doorCount, setDoorCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const availableDoorsCount = 10;
  const price = 700;

  const bookingNum = searchParams.bookingNum;
  const mobileNumber = searchParams.mobileNumber;

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_RESERVE_DOOR as string,
        {
          bookingNumber: bookingNum,
          lockerId: "3009",
          doorCount: doorCount,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "x-api-secret": process.env.NEXT_PUBLIC_X_API_SECRET,
            "Content-Type": "application/json",
          },
        }
      );

      setIsLoading(false);
      if (response.status === 201) {
        const url = `/lockers/new/payment?bookingNum=${bookingNum}&doorCount=${doorCount}&mobileNumber=${mobileNumber}`;
        router.push(url);
      }
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data.message;
        setError(responseData);
        setIsLoading(false);
      }
    }
  };

  const onNavigateBack = () => {
    router.back();
  };

  const addCart = () => {
    if (doorCount < availableDoorsCount) setDoorCount((prev) => prev + 1);
  };

  const subtractCart = () => {
    if (doorCount > 1) {
      setDoorCount((prev) => prev - 1);
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
              <LabelTitle label="Locker quantity" />
            </div>

            <div className="w-full flex pb-10">
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-center items-center">
                    <div className="flex items-start gap-5">
                      <button
                        onClick={subtractCart}
                        className={
                          doorCount > 1
                            ? `btn btn-circle btn-primary btn-sm`
                            : `btn btn-circle btn-outline btn-sm`
                        }
                      >
                        <FaMinus />
                      </button>
                      <div className="font-medium text-3xl">{doorCount}</div>
                      <button
                        onClick={addCart}
                        className={
                          doorCount >= availableDoorsCount
                            ? `btn btn-circle btn-outline btn-sm`
                            : `btn btn-circle btn-primary btn-sm`
                        }

                        // disabled={quantity >= availableDoorsCount}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-right">
                    <div className="flex items-end justify-end text-end">
                      <div className="font-bold text-4xl">
                        P {(Number(doorCount) * Number(price)).toLocaleString()}
                      </div>
                      <span>
                        <p className="ms-2">/mo</p>
                      </span>
                    </div>
                    <span>
                      <p>P 700 each</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pb-5">
              <p className="text-white text-xl">
                [10] <span className="opacity-60">Available lockers</span>
              </p>
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
    </div>
  );
};

export default LockerQTY;
