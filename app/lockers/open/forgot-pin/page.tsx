"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@components";
import Keypad from "@components/Keypad";
import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import Spinner from "../../../assets/images/spinner.svg";
import { useBookingContext } from "@context/BookingContext";
import { apiHeaders } from "@utils/apiHeaders";

interface Props {
  searchParams: { doorNumber: string };
}

const ForgotPIN = ({ searchParams }: Props) => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { mobileNumber, setMobileNumber } = useBookingContext();
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
        process.env.NEXT_PUBLIC_FORGOT_PIN + "4000",
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
      setIsLoading(true);
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleKeyClick = (value: string) => {
    const maxLength = 13;

    if (mobileNumber.length < maxLength) {
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
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
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
                      className={`input text-xl w-full bg-white text-black text-start mb-2`}
                      value={mobileNumber}
                      readOnly
                    />

                    {error && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-primary`}>
                          Incorrect PIN code ({error})
                        </span>
                      </div>
                    )}

                    <Keypad
                      handleDeleteClick={handleDeleteClick}
                      handleKeyClick={handleKeyClick}
                    />
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
    </div>
  );
};

export default ForgotPIN;
