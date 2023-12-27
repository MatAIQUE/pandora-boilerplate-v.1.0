"use client";
import { Button } from "@/app/components";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const LockerQTY = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/new/payment");
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



            {/* <div className="py-10">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <LabelTitle label="Locker quantity" />
                  <div className="flex items-start gap-5">
                    <button className="btn btn-circle btn-outline  btn-sm">
                      <FaMinus />
                    </button>
                    <div className="font-medium text-2xl">2</div>
                    <button className="btn btn-circle btn-primary btn-sm">
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="py-10">
              <LabelTitle label="Locker quantity" />
            </div>

            <div className="w-full flex pb-10">
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-center items-center">
                    <div className="flex items-start gap-5">
                      <button className="btn btn-circle btn-outline  btn-sm">
                        <FaMinus />
                      </button>
                      <div className="font-medium text-2xl">2</div>
                      <button className="btn btn-circle btn-primary btn-sm">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="h-full w-full">
                  <div className="w-full text-right">
                    <div className="flex items-end justify-end text-end">
                      <div className="font-bold text-4xl">
                        P 1,400
                      </div>
                      <span><p className="ms-2">/mo</p></span>
                    </div>
                    <span><p>P 700 each</p></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pb-5">
              <p className="text-white text-xl">[10] <span className="opacity-60">Available lockers</span></p>
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

export default LockerQTY;
