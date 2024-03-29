"use client";
import { Button } from "@components";
import Input from "@components/Input";
import InputErr from "@components/InputErr";
import Label from "@components/Label";
import LabelDesc from "@components/LabelDesc";
import LabelTitle from "@components/LabelTitle";
import Logo from "@components/Logo";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  subtitle: string;
}

const Card = ({ title, subtitle }: Props) => {
  const router = useRouter();

  const onNavigateBack = () => {
    router.back();
  };
  return (
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
