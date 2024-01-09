"use client";
import { Button } from "@/app/components";
import Label from "@/app/components/Label";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";
import Image from "next/image"
import kmcLogoRound from "../../../assets/images/kmc-logo-circle.png"
import qrIcon from "../../../assets/images/QR.svg"

const PaymentPage = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push("/lockers/new/qr-page");
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
                  <Label label="How do you want to pay" />
                  <div className="mb-5 mt-5">
                    {/* <Button
                      label="Add to Booking Invoice"
                      bgColor="btn-outline"
                      color="gray-800"
                      weight="500"
                      outline="btn-outline"
                    /> */}
                    <button className="btn-outline btn gray-800 font-weight-500 rounded-sm w-full justify-evenly">
                      <label>Add to Booking Invoice</label>
                      <span><Image src={kmcLogoRound} alt="kmc logo round" height={30} width={30}/></span>
                    </button>
                  </div>
                  <div className="mb-5 mt-5">
                    {/* <Button
                      label="Pay with Maya/Gcash"
                      bgColor="btn-outline"
                      color="gray-800"
                      weight="500"
                      outline="btn-outline"
                    /> */}
                    <button className="btn-outline btn gray-800 font-weight-500 rounded-sm w-full justify-evenly">
                      <label>Pay with Maya/GCash</label>
                      <span><Image src={qrIcon} alt="kmc logo round" height={30} width={30}/></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center">
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

export default PaymentPage;
