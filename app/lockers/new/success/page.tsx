"use client";
import { Button } from "@/app/components";
import DoorInputOTP from "@/app/components/DoorInputOTP";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";

const SuccessPaymentPage = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/new/locker-qty");
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
                  <LabelTitle label="Locker Booked" />
                  <LabelTitle label="Locker 22 and 23" />
                  <LabelDesc label="Locker 22 and 23 has been successfully booked" />
                  <LabelDesc label="to your account! The billing will reflect in your" />
                  <LabelDesc label="next invoice" />

                  <div className="w-full text-center justify-center items-center mt-10">
                    <LabelDesc label="Returning to homepage in 5" />
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
