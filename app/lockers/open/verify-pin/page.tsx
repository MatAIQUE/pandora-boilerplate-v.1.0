"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@components";
import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";
import DoorInputOTP from "@components/DoorInputOTP";
import Keypad from "@components/Keypad";
import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { apiHeaders } from "@utils/apiHeaders";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { doorNumber: string };
}

const VerifyPIN = ({ searchParams }: Props) => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState(null);
  const [errorDoor, setErrorDoor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const doorNumber = searchParams.doorNumber;

  useEffect(() => {
    if (pinCode.length < 6) {
      setIsContinueDisabled(true);
    } else {
      setIsContinueDisabled(false);
    }
  }, [pinCode]);

  const onNavigate = async () => {
    try {
      setErrorDoor(false);
      setIsLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_VERIFY_DOOR_API + "4000",
        {
          pin: pinCode,
          doorNumber: doorNumber,
        },
        {
          headers: apiHeaders(),
        }
      );
      setIsLoading(false);
      if (response.status === 200) {
        router.push("/lockers/open/success");
        axios.get(
          process.env.NEXT_PUBLIC_LOCKER_OPEN_DOOR + `${doorNumber}/open`
        );
      }
    } catch (error) {
      setIsLoading(true);
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data;
        setPinCode("");
        const numAttempt = responseData.errors[0];
        const timeLeft = responseData.errors[1];

        if (error.response.status === 500) {
          setErrorDoor(true);
        }

        if (numAttempt === "0") {
          // Only include timeLeft parameter if it's a valid number
          const queryParams =
            timeLeft !== undefined ? `?timeLeft=${timeLeft}` : "";
          router.push(`/lockers/open/alert${queryParams}`);
        } else {
          setError(numAttempt);
        }
      } else {
        console.error("An unknown error occurred.");
      }
      setIsLoading(false);
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
                <div className="w-full items-center">
                  <LabelTitle label="Enter your Locker PIN code" />
                  <LabelDesc
                    label="Enter the 6-digit credential code sent to your"
                    position="justify-start"
                  />
                  <LabelDesc label="mobile number." position="justify-start" />
                  <div className="w-full text-center items-center mt-10">
                  <div className="">
                    <input
                      maxLength={6}
                      type="password"
                      placeholder="0 0 0 0 0 0"
                      className={`
                      input input-bordered text-2xl input-secondary w-full text-center bg-white text-black
                      ${error ? "border-error border-2" : ""}
                      `}
                      value={pinCode}
                      readOnly
                    />
                  </div>

                    {error && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-error`}>
                          Incorrect PIN code ({error} Attempts Left)
                        </span>
                      </div>
                    )}

                    {errorDoor && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-primary`}>
                          Unauthorized
                        </span>
                      </div>
                    )}

                    <div className="text-danger font-medium flex justify-start">
                      <button
                        onClick={() =>
                          router.push(
                            `/lockers/open/forgot-pin?doorNumber=${doorNumber}`
                          )
                        }
                        className="btn btn-ghost pl-0"
                      >
                        <span className="text-primary text-lg">
                          Forgot PIN Code?
                        </span>
                      </button>
                    </div>

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
    </div>
  );
};

export default VerifyPIN;
