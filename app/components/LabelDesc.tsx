import React from "react";

interface Props {
  label: string;
  position: string;
}

const LabelDesc = ({ label, position }: Props) => {
  return (
    <div className={`font-medium mb-2 flex ${position}`}>
      <span className="text-left">{label}</span>
    </div>
  );
};

export default LabelDesc;
