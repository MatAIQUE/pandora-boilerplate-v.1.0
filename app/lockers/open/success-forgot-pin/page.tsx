"use client";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import ButtonHome from "@components/ButtonHome";

const SuccessForgotPinPage = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/");
  };

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
                <div className="w-full items-center">
                  <div className="flex gap-4 mb-10">
                    <FaCheckCircle className="text-warning" size={35} />
                    <LabelTitle label="Verified!" />
                  </div>

                  <div className="w-full justify-center items-center mb-10">
                    <LabelTitle label="Credential Code has been sent!" />
                    <LabelDesc
                      label="We've sent your new PIN code to your mobile number"
                      position="justify-left"
                    />
                  </div>
                </div>
              </div>
              <div className="card-actions justify-center">
                <div className="grid  w-full items-center text-center">
                  <div className="w-full">
                    <button
                      className={`btn btn-primary  rounded-sm w-full text-white font-500`}
                      onClick={onNavigate}
                    >
                      Continue
                    </button>
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

export default SuccessForgotPinPage;
