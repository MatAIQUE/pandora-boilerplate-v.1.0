"use client";
import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";

const VerifyPIN = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/open/success");
  };

  const onNavigateBack = () => {
    router.back();
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
                    <DoorInputOTP />
                    <div className="text-danger font-medium flex justify-start">
                      <button className="btn btn-ghost pl-0">
                        <span className="text-primary text-lg">
                          Forgot PIN Code?
                        </span>
                      </button>
                    </div>
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
                  <Button
                    label="Continue"
                    bgColor="btn-primary"
                    color="white"
                    weight="500"
                    outline=""
                    onClick={onNavigate}
                  />
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