import React from "react";

const InputErr = () => {
  return (
    <div className="text-danger font-medium mt-5 flex justify-start">
      <button className="btn btn-ghost">
        <span className="text-error text-lg">Label here</span>
      </button>
    </div>
  );
};

export default InputErr;
