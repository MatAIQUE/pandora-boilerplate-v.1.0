import React from "react";

const InputErr = () => {
  return (
    <div className="text-danger font-medium flex justify-start">
      <button className="btn btn-ghost pl-0">
        <span className="text-primary text-lg">Resend Code</span>
      </button>
    </div>
  );
};

export default InputErr;
