"use client";
import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import Keypad from "@/app/components/Keypad";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../../../assets/images/spinner.svg";

interface Props {
  searchParams: { doorNumber: string };
}

const VerifyPIN = ({ searchParams }: Props) => {
  const router = useRouter();
  const [pinCode, setPinCode] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const doorNumber = searchParams.doorNumber;

  const onNavigate = async () => {
    try {
      setIsLoading(true);
      await axios
        .post(
          "https://pandora-v3.onrender.com/transactions/door/open/0003/kmc/3009",
          {
            pin: pinCode,
            doorNumber: doorNumber,
          },
          {
            headers: {
              "x-api-key": "pk-79ccd394-0be5-40ea-a527-8f27098db549",
              "x-api-secret": "sk-fcb71bfd-7712-4969-a46b-6b78f8a47bd2",
              "Content-Type": "application/json",
            },
          }
        )

        .then(() => {
          router.push("/lockers/open/success");
          axios.get("http://localhost:9090/api/lockercontroller/door/1/open");
        });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data;

        console.error("Errors:", error);

        // Check if the message is "Incorrect PIN code"
        if (responseData.message === "Incorrect PIN code") {
          setError(responseData.errors);
          // Add your logic for handling incorrect PIN code
        }

        if (responseData.message === "Account locked out") {
          router.push("lockers/open/alert");
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
      <Menu />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <LabelTitle label="Enter your Locker PIN code" />
                  <LabelDesc
                    label="Enter the 6-digit credential code sent to your"
                    position="justify-start"
                  />
                  <LabelDesc label="mobile number." position="justify-start" />
                  <div className="w-full text-center items-center mt-10">
                    <DoorInputOTP pinCode={pinCode} />

                    {error && (
                      <div className={`font-medium my-2 flex justify-start`}>
                        <span className={`text-left text-primary`}>
                          Incorrect PIN code ({error})
                        </span>
                      </div>
                    )}

                    <div className="text-danger font-medium flex justify-start">
                      <button className="btn btn-ghost pl-0">
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

export default VerifyPIN;
