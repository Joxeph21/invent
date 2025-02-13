import React from "react";
import Logo from "../ui/Logo";

const Header: React.FC = () => {
  return (
    <div
      className="w-full  h-16 
     bg-white flex z-20  items-center shadow-md justify-between p-2 px-8"
    >
      {/* <figure className="pb-6 py-2 p-8 mr-1 border-b "> */}
      <div className="h-full w-44">
        <Logo />
      </div>
      {/* </figure> */}
      {/* <div className="w-44 h-auto bg-green-300 float-right"></div> */}
    </div>
  )
};

export default Header;
