"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import spinner from "../../../assets/images/spinner.svg";
import ButtonBack from "@components/ButtonBack";
import ButtonHome from "@components/ButtonHome";

const SuccessPaymentPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(100);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0 && timer > 0) {
        setCount(count - 20);
        setTimer(timer - 1);
      } else {
        clearInterval(countdownInterval);
        router.push("/");
      }
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup on component unmount
  }, [count, timer]);

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
                <div className="w-full text-center items-center mb-10">
                  <div className="flex gap-4">
                    <FaCheckCircle className="text-warning" size={35} />
                    <LabelTitle label="Locker Opened!" />
                  </div>

                  <div className="w-full justify-center flex pt-20">
                    <Image
                      className="animate-spin"
                      src={spinner}
                      alt={spinner}
                      height={30}
                      width={30}
                    />
                  </div>

                  <div className="w-full text-center justify-center items-center">
                    <LabelDesc
                      label={`Returning to homepage in ${timer}`}
                      position="justify-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPaymentPage;
