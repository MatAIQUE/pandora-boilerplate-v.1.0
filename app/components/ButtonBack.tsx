import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const ButtonBack = () => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.back();
  };

  return (
    <button onClick={onNavigateBack} className="btn btn-accent">
      <FaAngleLeft color="white" size={30} />
    </button>
  );
};

export default ButtonBack;
