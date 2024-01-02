"use client";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import spinner from "../../../assets/images/spinner.svg"
import Image from "next/image"

const SuccessPaymentPage = () => {
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

  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/new/locker-qty");
  };

  const onNavigateBack = () => {
    router.back();
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
                <div className="w-full text-center items-center">
                  <div className="flex gap-4 mb-10">
                    <FaCheckCircle color="green" size={35} />
                    <LabelTitle label="Locker Booked" />
                  </div>
                  <LabelTitle label="Locker 22 and 23" />
                  <LabelDesc
                    label="Locker 22 and 23 has been successfully booked to your account! The billing will reflect in your next invoice"
                    position="justify-start"
                  />

                  {/* <div
                    className="radial-progress"
                    style={{ "--value": count, "--size": "2rem" } as any}
                    role="progressbar"
                  ></div> */}

                  <div className="w-full justify-center flex pt-20">
                    <Image className="animate-spin" src={spinner} alt={spinner} height={30} width={30}/>
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
