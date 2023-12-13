import React from "react";

interface Props {
  primary: string;
  primaryBorder: string;
  primaryHover: string;
}

const Button = ({ primary, primaryBorder, primaryHover }: Props) => {
  return (
    <button
      className={`${primary} hover:${primaryHover} text-white font-bold py-2 px-4 border ${primaryBorder} rounded`}
    >
      Button
    </button>
  );
};

export default Button;
