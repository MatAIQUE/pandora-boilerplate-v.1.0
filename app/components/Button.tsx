import React from "react";

interface Props {
  bgColor: string;
  label: string;
  color: string;
  weight: string;
  outline: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  bgColor,
  label,
  color,
  weight,
  outline,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={`btn ${bgColor} ${outline} rounded-sm w-full text-${color} font-${weight}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
