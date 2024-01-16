"use client";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBellSlash } from "react-icons/fa";

interface Props {
  searchParams: { timeLeft?: number };
}

const AlertPage = ({ searchParams }: Props) => {
  const initialTimeLeft =
    searchParams.timeLeft !== undefined ? searchParams.timeLeft : 299;
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  const router = useRouter();

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes} minutes ${remainingSeconds} seconds`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease timeLeft by 1 every second

      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));

      if (timeLeft === 0) {
        router.push("/");
      }
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) router.push("/");
  }, [timeLeft]);
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Menu />
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
                          Sorry we&apos;ve locked your Locker for{" "}
                          {formatTime(timeLeft)}. If you forgot your PIN Code,
                          you can reset it below or talk to our Admin on Site.
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
