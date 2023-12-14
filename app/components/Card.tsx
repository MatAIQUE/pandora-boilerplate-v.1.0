import React from "react";
import Button from "./Button";
import Image from "next/image";
import kmcLogo from "../assets/images/kmc-logo.png";
const Card = () => {
  return (
    <>
      <div className="card w-1/2 bg-neutral text-neutral-content drop-shadow-lg">
        <div className="card-body text-left">
            {/* Card Icon */}
            <h2 className="card-title">
                <Image src={kmcLogo} alt="KMC Logo" width={100} height={100} />
            </h2>
            {/* End of Card Icon */}

            {/* Card body */}
            <div className="py-10">
                {/* Card Title */}
                <p className="text-3xl text-white font-medium mb-3">Card title</p>
                {/* End of Card Title */}

                {/* Card Subtitle */}
                <p className="text-xs text-secondary font-normal mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis earum laboriosam omnis? Error autem modi minima asperiores praesentium.</p>
                {/* End of Card Subtitle */}

                {/* Card Dynamic Body */}
                <div className="py-20 h-full w-full">
                    <div className="w-full text-center items-center">asd</div>
                    <div className="w-full text-center items-center">asd</div>
                    <div className="w-full text-center items-center">asd</div>
                </div>
                {/* Card Dynamic Body */}

            </div>
            {/* End of Card body */}

            {/* Card Controls */}
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
            {/* Card Controls */}
        </div>
      </div>
    </>
  );
};

export default Card;
