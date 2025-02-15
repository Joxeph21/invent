import React from "react";
import logo from "/favicon.png";

const Logo: React.FC = () => {
  return (
    <figure className="flex items-end gap-3">
      <img src={logo} className="max-w-10" alt="invent_main_logo" />
      <h1 className="text-2xl font-extrabold">INVENT</h1>
    </figure>
  );
};

export default Logo;
