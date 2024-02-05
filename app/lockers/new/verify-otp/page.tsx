"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@components";
import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import DoorInputOTP from "@components/DoorInputOTP";
import Keyboard from "@components/Keyboard";
import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import { formatPhoneNumber } from "@utils/maskMobileNumber";
import Spinner from "../../../assets/images/spinner.svg";

const VerifyOTP = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isLoadingOTP, setIsLoadingOTP] = useState(false);
  const { bookingNumber, secretKey, setSecretKey, mobileNumber } =
    useBookingContext();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup on component unmount
  }, [timer]);

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        (process.env.NEXT_PUBLIC_VERIFY_OTP as string) + `${secretKey}`,
        {
          bookingNumber: bookingNumber,
          otp: pinCode,
          mobileNumber: mobileNumber,
        },
        {
          headers: apiHeaders(),
        }
      );

      setIsLoading(false);
      if (response.status === 200) {
        const url = `/lockers/new/locker-qty?&lockerId=4000}`;
        router.push(url);
      }
    } catch (error) {
      setIsLoading(true);
      console.error(error);
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data.message;
        setPinCode("");
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

  const resendCode = async () => {
    try {
      setIsLoadingOTP(true);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_OTP as string,
        {
          bookingNumber: bookingNumber,
          mobileNumber: mobileNumber,
          lockerId: "4000",
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
            "x-api-secret": process.env.NEXT_PUBLIC_X_API_SECRET,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setTimer(59);
        const getKey = response.data.data.pinSecret;
        setSecretKey(getKey);
      }
      setIsLoadingOTP(false);
    } catch (error) {
      setIsLoadingOTP(true);
      console.error(error);
      setIsLoadingOTP(false);
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
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <LabelTitle label="We've sent you an OTP" />
                  <LabelDesc
                    label="Enter the 6-digit OTP sent to your number"
                    position="justify-start"
                  />
                  <LabelDesc
                    label={formatPhoneNumber(mobileNumber)}
                    position="justify-start"
                  />
                  <div className="text-danger font-medium flex justify-start">
                    <button
                      onClick={() => resendCode()}
                      className="btn btn-ghost pl-0"
                      disabled={timer > 0 ? true : false}
                    >
                      <span className="text-primary text-lg">
                        Resend Code {timer > 0 && <span>({timer})</span>}
                      </span>
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
                    className={`btn btn-primary rounded-sm w-full text-white font-500 ${
                      isLoading || isContinueDisabled
                        ? "opacity-70 pointer-events-none"
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
        handleDeleteClick={handleDeleteClick}
        handleKeyClick={handleKeyClick}
      />
    </div>
  );
};

export default VerifyOTP;
