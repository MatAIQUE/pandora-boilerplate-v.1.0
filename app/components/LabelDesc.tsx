import React from "react";

interface Props {
  label: string;
}

const LabelDesc = ({ label }: Props) => {
  return (
    <div className="font-medium mb-2 flex justify-start">
      <span className="text-left">{label}</span>
    </div>
  );
};

export default LabelDesc;
