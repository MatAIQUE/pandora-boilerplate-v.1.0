import React from "react";

interface Props {
  pinCode?: string;
}

const DoorInputOTP = ({ pinCode }: Props) => {
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
