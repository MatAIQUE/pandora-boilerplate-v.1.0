import React from "react";
import { FaHome, FaAngleLeft } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="my-4 absolute w-full">
      <div className="px-5 flex justify-between">
        <button className="btn btn-accent">
          <FaAngleLeft color="white" size={30} />
        </button>
        <button className="btn btn-accent">
          <FaHome color="white" size={30} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
