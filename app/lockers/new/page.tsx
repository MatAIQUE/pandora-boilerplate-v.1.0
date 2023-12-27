"use client";
import Menu from "@/app/components/Menu";
import Card from "../_components/Card";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import LabelTitle from "@/app/components/LabelTitle";
import Label from "@/app/components/Label";
import Input from "@/app/components/Input";
import { Button } from "@/app/components";

const GetLockers = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push("/lockers/new/verify-otp");
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
                  <LabelTitle label="" />
                  <Label label="Booking Number*" />
                  <Input placeholder="Enter booking number" />
                  <Label label="Contact Number*" />
                  <Input placeholder="Enter contact number" />
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

export default GetLockers;
