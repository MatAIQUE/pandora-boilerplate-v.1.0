import React from "react";
import Button from "./Button";

const CardControls = () => {
  return (
    <>
      <div className="card-actions justify-center mt-3">
        <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
          <div className="w-full">
            <Button
              label="Get a Locker"
              bgColor="btn-outline bg-light "
              color="gray-800"
              weight="500"
              outline="btn-outline"
            />
          </div>
          <div className="w-full">
            <Button
              label="Open Locker"
              bgColor="primary"
              color="white"
              weight="500"
              outline=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardControls;
