"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import Keyboard from "@components/Keyboard";
import Label from "@components/Label";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";
import { FaExclamationCircle } from "react-icons/fa";
import Spinner from "../../assets/images/spinner.svg";
import whatshot from "./assets/whatshot.svg";
import newReleases from "./assets/new-releases.svg";

interface Props {
  searchParams: { doorNumber: string };
}

const GetLockers = () => {
  const router = useRouter();

  const [focusedInput, setFocusedInput] = useState<"booking" | "contact">(
    "booking"
  );
  const [ showInput, setShowInput ] = useState(false);

  const handleShowInput = () => {
    setShowInput(true)
  }

  const { bookingNumber, setBookingNumber, mobileNumber, setMobileNumber } =
    useBookingContext();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setSecretKey, setHasRecurringInvoice, location, setOtpCreationTime } =
    useBookingContext();

  // Separate variable for display without prefix
  const tranMobileNum = mobileNumber.replace("+63", "0");

  useEffect(() => {
    setIsContinueDisabled(
      !(bookingNumber.length === 8 && mobileNumber.length === 13)
    );
  }, [bookingNumber, mobileNumber]);

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_OTP as string,
        {
          bookingNumber: bookingNumber,
          mobileNumber: tranMobileNum,
          lockerId: location,
        },
        {
          headers: apiHeaders(),
        }
      );

      if (response.status === 201) {
        const { pinSecret, hasRecurringInvoice, creationTime } =
          response.data.data;
        setSecretKey(pinSecret);
        setHasRecurringInvoice(hasRecurringInvoice);
        setOtpCreationTime(creationTime);
        const url = `/lockers/new/verify-otp?lockerId=${location}`;
        router.push(url);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      setError(error);
      setIsLoading(false);
    }
  };

  const onNavigateBack = () => {
    router.push("/");
  };

  const handleKeyClick = (value: string) => {
    const maxLength = focusedInput === "booking" ? 8 : 13;

    if (focusedInput === "booking" && bookingNumber.length < maxLength) {
      setBookingNumber((prev) => `${prev}${value}`);
    } else if (
      focusedInput === "contact" &&
      /^\d+$/.test(value) &&
      mobileNumber.length < 13
    ) {
      setMobileNumber((prevPin) => `${prevPin}${value}`);
    }
  };

  const handleDeleteClick = (clear: boolean) => {
    const prefixLength = focusedInput === "booking" ? 4 : 3;

    if (focusedInput === "booking") {
      setBookingNumber((prevPin) => {
        return prevPin.length > prefixLength
          ? prevPin.slice(0, -(clear ? prevPin.length - prefixLength : 1))
          : "KMC";
      });
    } else if (focusedInput === "contact") {
      setMobileNumber((prevPin) => {
        return prevPin.length > prefixLength
          ? prevPin.slice(0, -(clear ? prevPin.length - prefixLength : 1))
          : "+63";
      });
    }
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
                <div className="w-full items-center">
                  <LabelTitle label="Select Plan" />
                  <div className="pt-10 w-full gap-3 grid grid-cols-2">
                    <div className={`rounded border  px-5 py-4 justify-center flex flex-col
                    ${showInput ? "border-primary" : "border-white"}
                    `} onClick={handleShowInput}>
                      <div className="flex items-center gap-2 w-full text-xs">
                        <Image
                          src={whatshot}
                          alt="whats hot"
                          width={18}
                          height={18}
                        />
                        <p className="text-primary">Popular!</p>
                      </div>
                      <div className="py-2 gap-2 flex justify-start items-end text-white">
                        <p className="text-2xl font-medium ms-2">Daily</p>
                        <p className=" text-xs w-full mb-1">P50/Day</p>
                      </div>
                    </div>
                    <div className={`rounded border  px-5 py-4 justify-center flex flex-col
                    ${showInput ? "border-primary" : "border-white"}
                    `} onClick={handleShowInput}>
                      <div className="flex items-center gap-2 w-full text-xs">
                        <Image
                          src={newReleases}
                          alt="whats hot"
                          width={18}
                          height={18}
                        />
                        <p className="">Recommended</p>
                      </div>
                      <div className="py-2 gap-2 flex justify-start items-end text-white">
                        <p className="text-2xl font-medium ms-2">Monthly</p>
                        <p className=" text-xs w-full mb-1">P300/Day</p>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div className={`font-medium my-2 flex justify-start`}>
                      <span className={`text-left text-error`}>
                        Booking number/Contact number did not match.
                      </span>
                    </div>
                  )}
                  <div className={` gap-4 pt-10
                  ${showInput? "grid":"hidden"}
                  `}>
                    <div>
                      <Label label="Name*" />
                      <div className="relative">
                        <input
                          maxLength={4}
                          type="text"
                          placeholder=""
                          className={`input text-xl w-full bg-white text-black text-start
                        ${error ? "text-error border-error border-2" : ""}
                        ${
                          focusedInput === "booking"
                            ? "input-bordered input-primary"
                            : "input-bordered input-neutral"
                        }
                        
                        `}
                          value={bookingNumber}
                          onFocus={() => setFocusedInput("booking")}
                          readOnly
                        />
                        {error && (
                          <div className="absolute right-[10px] top-[10px] text-error">
                            <FaExclamationCircle className="w-[25px] h-[25px]" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <Label label="Contact Number*" />
                      <div className="relative">
                        <input
                          maxLength={12}
                          type="text"
                          placeholder=""
                          className={`input text-xl w-full bg-white text-black text-start mb-2
                      ${error ? "text-error border-error border-2" : ""}
                      ${
                        focusedInput === "contact"
                          ? "input-bordered input-primary"
                          : "input-bordered input-neutral"
                      }
                      
                      `}
                          value={mobileNumber}
                          onFocus={() => setFocusedInput("contact")}
                          readOnly
                        />
                        {error && (
                          <div className="absolute right-[10px] top-[10px] text-error">
                            <FaExclamationCircle className="w-[25px] h-[25px]" />
                          </div>
                        )}
                      </div>
                    </div>
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
        handleKeyClick={handleKeyClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default GetLockers;
