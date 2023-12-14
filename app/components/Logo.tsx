import React from "react";
import kmcLogo from "../assets/images/kmc-logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <h2 className="card-title">
      <Image src={kmcLogo} alt="KMC Logo" width={200} height={200} />
    </h2>
  );
};

export default Logo;
