"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import Keyboard from "@/app/components/Keyboard";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { bookingNum: string; mobileNumber: string; secretKey: string };
}

const VerifyOTP = ({ searchParams }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const bookingNum = searchParams.bookingNum;
  const mobileNumber = searchParams.mobileNumber;
  const secretKey = searchParams.secretKey;

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        (process.env.NEXT_PUBLIC_VERIFY_OTP as string) + `${secretKey}`,
        {
          bookingNumber: "KMC-0000-XXXX",
          otp: pinCode,
          mobileNumber: mobileNumber,
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
      if (response.status === 200) {
        const url = `/lockers/new/locker-qty?bookingNum=${bookingNum}&lockerId=3009`;
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

  const handleKeyClick = (value: string) => {
    if (pinCode.length < 6) {
      setPinCode((prevPin) => prevPin + value);
    }
  };

  useEffect(() => {
    setIsContinueDisabled(pinCode.length < 6);
  }, [pinCode]);

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
                    {error && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-primary`}>
                          Verification code didn&apos;t match
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
        handleDeleteClick={handleDeleteClick}
        handleKeyClick={handleKeyClick}
      />
    </div>
  );
};

export default VerifyOTP;
