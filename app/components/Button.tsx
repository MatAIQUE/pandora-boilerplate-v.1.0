import React from "react";

interface Props {
  bgColor: string;
  label: string;
  color: string;
  weight: string;
  outline: string;
}

const Button = ({ bgColor, label, color, weight, outline }: Props) => {
  return (
    <button
      className={`btn btn-${bgColor} ${outline} rounded-sm w-full text-${color} font-${weight}`}
    >
      {label}
    </button>
  );
};

// const Button = () => {
//   return (
//     <button className="btn btn-primary rounded-sm w-full text-white font-medium">Continue</button>
//   );
// }

export default Button;
