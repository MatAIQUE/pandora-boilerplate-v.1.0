import React from "react";

interface Props {
  subtitle: string;
}

const CardSubTitle = ({ subtitle }: Props) => {
  return <p className="text-xs text-secondary font-normal mb-10">{subtitle}</p>;
};

export default CardSubTitle;
