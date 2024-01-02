import React from "react";

const DoorInputOTP = ({ pinCode }: { pinCode: string }) => {
  return (
    <div className="">
      <input
        maxLength={6}
        type="text"
        placeholder="0 0 0 0 0 0"
        className="input input-bordered text-2xl input-secondary w-full text-center bg-white text-black"
        value={pinCode}
        readOnly
      />
    </div>
  );
};

export default DoorInputOTP;
