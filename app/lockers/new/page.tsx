"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Keyboard from "@components/Keyboard";
import Label from "@components/Label";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import { useBookingContext } from "@context/BookingContext";
import Spinner from "../../assets/images/spinner.svg";
import { apiHeaders } from "@utils/apiHeaders";

interface Props {
  searchParams: { doorNumber: string };
}

const GetLockers = () => {
  const router = useRouter();

  const [focusedInput, setFocusedInput] = useState<"booking" | "contact">(
    "booking"
  );
  const { bookingNumber, setBookingNumber, mobileNumber, setMobileNumber } =
    useBookingContext();
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setSecretKey } = useBookingContext();

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
          lockerId: "4000",
        },
        {
          headers: apiHeaders(),
        }
      );

      if (response.status === 201) {
        const getKey = response.data.data.pinSecret;
        setSecretKey(getKey);

        const url = `/lockers/new/verify-otp?lockerId=4000`;
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
    router.back();
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

  const handleDeleteClick = () => {
    const prefixLength = focusedInput === "booking" ? 4 : 3;

    if (focusedInput === "booking") {
      setBookingNumber((prevPin) => {
        const numericPart = prevPin.slice(prefixLength, -1);
        return numericPart.length > 0
          ? `KMC-${numericPart.slice(0, -1)}`
          : "KMC-";
      });
    } else if (focusedInput === "contact") {
      setMobileNumber((prevPin) =>
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
                    className={`input text-xl w-full bg-white text-black text-start
                    
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
                    <div className={`font-medium mb-2 flex justify-start`}>
                      <span className={`text-left text-primary`}>
                        Booking number/Contact number didn&apos;t match
                      </span>
                    </div>
                  )}

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
                    value={mobileNumber}
                    onFocus={() => setFocusedInput("contact")}
                    readOnly
                  />
                </div>
                {error && (
                  <div className={`font-medium  flex justify-start`}>
                    <span className={`text-left text-primary`}>
                      Booking number/Contact number didn&apos;t match
                    </span>
                  </div>
                )}
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
                    className={`btn btn-primary  rounded-sm w-full text-white font-500 ${
                      isLoading && "opacity-70 pointer-events-none"
                    }`}
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
