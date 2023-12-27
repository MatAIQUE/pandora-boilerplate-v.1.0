"use client";
import LabelDesc from "@/app/components/LabelDesc";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPaymentPage = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/");
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
                  <div className="flex gap-4">
                    <FaCheckCircle color="green" size={35} />
                    <LabelTitle label="Locker Opened!" />
                  </div>

                  <div className="w-full text-center justify-center items-center mt-10">
                    <LabelDesc
                      label="Returning to homepage in 5"
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
