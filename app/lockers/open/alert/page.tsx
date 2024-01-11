"use client";
import { Button } from "@/app/components";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBellSlash } from "react-icons/fa";

const AlertPage = () => {
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
    }, 2000);

    return () => clearInterval(countdownInterval); // Cleanup on component unmount
  }, [count, timer]);
  const router = useRouter();
  const onNavigate = () => {
    router.push("/");
  };
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      {/* <Menu /> */}
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <div className="card w-1/2 bg-secondary text-secondary-content drop-shadow-lg p-5">
          <div className="card-body text-left">
            <Logo />
            <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center mb-10">
                  <div className="flex gap-4">
                    <FaBellSlash className="text-primary" size={35} />
                    <LabelTitle label="Please try again later" />
                  </div>
                  <div className="text-center w-full">
                    <div className="w-full">
                      <div className="w-full my-2 justify-center text-left flex pb-5">
                        <p className="text-xl text-white">Incorrect PIN</p>
                      </div>
                      <div className="w-full justify-center text-left flex pb-5">
                        <p className="text-white">
                          Sorry we&apos;ve locked your Locker for 5 Minutes. If you
                          forgot you&apos;re PIN Code you can reset it below or talk
                          to our Admin on Site
                        </p>
                      </div>
                      <p className="text-primary mt-10">Forgot PIN Code?</p>
                    </div>
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

export default AlertPage;