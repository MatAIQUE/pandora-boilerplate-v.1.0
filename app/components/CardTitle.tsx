import React from "react";

interface Props {
  title: string;
}

const CardTitle = ({ title }: Props) => {
  return <p className="text-3xl text-white font-medium mb-3">{title}</p>;
};

export default CardTitle;
