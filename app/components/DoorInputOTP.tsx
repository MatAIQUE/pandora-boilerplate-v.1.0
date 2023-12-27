import React from "react";
import InputErr from "./InputErr";

const DoorInputOTP = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="0 0 0 0 0 0"
        className="input input-bordered text-2xl input-secondary w-full text-center bg-white text-black"
      />
      <InputErr />
    </div>
  );
};

export default DoorInputOTP;
