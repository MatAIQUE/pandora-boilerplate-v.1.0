"use client";
import { Button } from "@/app/components";
import Input from "@/app/components/Input";
import Label from "@/app/components/Label";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";

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
      <div className="mb-20">
        <div className="flex justify-center gap-1 my-1 w-full mb-4">
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">1</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">2</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">3</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">4</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">5</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">6</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">7</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">8</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">9</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-muted text-neutral">0</kbd>
        </div>
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">q</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">w</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">e</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">r</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">t</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">y</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">u</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">i</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">o</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">p</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">a</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">s</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">d</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">f</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">g</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">h</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">j</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">k</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">l</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">z</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">x</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">c</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">v</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">b</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">n</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">m</kbd>
          <kbd className="kbd-lg scale-150 m-4 btn bg-neutral text-white">/</kbd>
        </div>
      </div>
    </div>
  );
};

export default GetLockers;
