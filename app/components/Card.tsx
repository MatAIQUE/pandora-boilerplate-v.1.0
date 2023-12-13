import React from "react";
import Button from "./Button";
import Image from "next/image";
import kmcLogo from "../assets/images/kmc-logo.png";
const Card = () => {
  return (
    <>
      <div className="card w-1/2 bg-neutral text-neutral-content drop-shadow-lg">
        <div className="card-body text-left">
          <h2 className="card-title">
            <Image src={kmcLogo} alt="KMC Logo" width={100} height={100} />
          </h2>
          <div className="items-center text-center py-20">
            <p>We are using cookies for no reason.</p>
            <p>We are using cookies for no reason.</p>
          </div>
          <div className="card-actions justify-center mt-3">
            <div className="grid grid-cols-2 gap-4 w-full items-center text-center">
              <div className="w-full">
                <Button
                  label="Label"
                  bgColor="outline"
                  color="gray-600"
                  weight="500"/>
              </div>
              <div className="w-full">
                <Button
                    label="Label"
                    bgColor="primary"
                    color="white"
                    weight="500"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
