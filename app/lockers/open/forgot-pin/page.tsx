"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import Keyboard from "@components/Keyboard";
import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { doorNumber: string };
}

const ForgotPIN = ({ searchParams }: Props) => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { mobileNumber, setMobileNumber, location } = useBookingContext();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const doorNumber = searchParams.doorNumber;

  useEffect(() => {
    setIsContinueDisabled(!(mobileNumber.length === 13));
  }, [mobileNumber]);

  const onNavigateBack = () => {
    router.back();
  };

  // Separate variable for display without prefix
  const tranMobileNumber = mobileNumber.replace("+63", "0");

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        process.env.NEXT_PUBLIC_FORGOT_PIN + location,
        {
          mobileNumber: tranMobileNumber,
          doorNumber: doorNumber,
        },
        {
          headers: apiHeaders(),
        }
      );
      setIsLoading(false);
      if (response.status === 200) {
        const url = "/lockers/open/success-forgot-pin";
        router.push(url);
        // console.log("Successful the pin code sent to your" + mobileNumber);
      }
    } catch (error) {
      setMobileNumber("+63");
      const {
        response: {
          data: { message: message, errors: errors },
        },
      } = error;
      const timeLeft = errors[1];
      const numAttempt = errors[0];
      if (message.includes("0") || numAttempt === "0") {
        // Only include timeLeft parameter if it's a valid number
        const queryParams =
          timeLeft !== undefined ? `?timeLeft=${timeLeft}` : "";
        router.push(
          `/lockers/open/alert-forgot-pin${queryParams}?doorNumber=${doorNumber}`
        );
      } else {
        setError(message);
        setMobileNumber("+63");
      }
      // setError(message);
      setIsLoading(true);
      setIsLoading(false);
      // setMobileNumber("+63");
    }
  };

  const handleKeyClick = (value: string) => {
    const maxLength = 13;

    if (/^\d*$/.test(value) && mobileNumber.length < maxLength) {
      setMobileNumber((prevPin) => `${prevPin}${value}`);
    }
  };

  const handleDeleteClick = () => {
    const prefixLength = 3;

    setMobileNumber((prevPin) =>
      prevPin.length > prefixLength ? prevPin.slice(0, -1) : "+63"
    );
  };

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <div className="px-5 my-4 absolute w-full">
        <div className="flex justify-end">
          <ButtonHome />
        </div>
      </div>
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full items-center">
                  <LabelTitle label="Enter your registered number" />
                  <LabelDesc
                    label="To verify enter your registered number"
                    position="justify-start"
                  />
                  <LabelDesc
                    label="And will send you a new credential code."
                    position="justify-start"
                  />
                  <div className="w-full text-center items-center mt-10">
                    <input
                      maxLength={12}
                      type="text"
                      placeholder=""
                      className={`input text-xl w-full bg-white text-black text-start mb-2 ${
                        error ? "border-error border-2" : ""
                      }`}
                      value={mobileNumber}
                      readOnly
                    />

                    {error && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-error`}>{error}</span>
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
                      isLoading && "opacity-30 pointer-events-none"
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
        handleDeleteClick={handleDeleteClick}
        handleKeyClick={handleKeyClick}
      />
    </div>
  );
};

export default ForgotPIN;
