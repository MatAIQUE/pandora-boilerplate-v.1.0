import React from "react";

interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  return (
    <div className="text-white font-medium mb-2 flex justify-start">
      <span className="text-1xl">{label}</span>
    </div>
  );
};

export default Label;
