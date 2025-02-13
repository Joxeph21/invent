 import React from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type NavlinkProps = {
  to: string;
  icon?: IconType;
  children: React.ReactNode;
};

// text-[#0d2f1f]
//bg-[#e1f8ed]

const CustomNavLink = ({ to, children, icon: Icon }: NavlinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive && " text-white hover:bg-brandGreen bg-brandGreen"
        } ${
          isActive ? "text-[#05130c]" : "text-[#5D5D5D]"
        } flex rounded-md hover:bg-[#e1f8ed] font-semibold text-sm gap-3  items-center p-3`
      }
      to={to}
    >
      {Icon && <Icon size={16} />}
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
