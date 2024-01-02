"use client";
import { Button } from "@/app/components";
import DoorInput from "@/app/components/DoorInput";
import LabelTitle from "@/app/components/LabelTitle";
import Logo from "@/app/components/Logo";
import Menu from "@/app/components/Menu";
import { useRouter } from "next/navigation";

const OpenLockers = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/open/verify-pin");
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
            <div className="">
              <div className="py-10 h-full w-full">
                <div className="w-full text-center items-center">
                  <div className="mb-10">
                    <LabelTitle label="Locker Number" />
                  </div>
                  <DoorInput />
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
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">q</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">w</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">e</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">r</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">t</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">y</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">u</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">i</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">o</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">p</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">a</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">s</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">d</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">f</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">g</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">h</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">j</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">k</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">l</kbd>
        </div> 
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">z</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">x</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">c</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">v</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">b</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">n</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">m</kbd>
          <kbd className="kbd m-4 bg-neutral text-white scale-150 btn-lg">/</kbd>
        </div>
      </div>
    </div>
  );
};

export default OpenLockers;
