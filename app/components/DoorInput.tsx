import React from "react";

interface Props {
  pinCode?: string;
}

const DoorInput = ({ pinCode }: Props) => {
  return (
    <div className="">
      <input
        maxLength={2}
        type="text"
        placeholder="0 1"
        className="input input-bordered text-2xl input-secondary w-20 text-center bg-white text-black"
        value={pinCode}
        readOnly
      />
    </div>
  );
};

export default DoorInput;
