import React from "react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import CustomNavLink from "../ui/CustomNavLink";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

const SideBar: React.FC = () => {
  return (
    <aside className="p-8 bg-white   py-2 flex flex-col justify-between pb-0 w-[17em] shadow-2xl   pr-0">
 

      <Navbar />

      <div className="w-full  border-t mb-2  space-y-2 ">
        <CustomNavLink icon={IoIosSettings} to="/settings">
          Settings
        </CustomNavLink>
        <button className="flex hover:bg-[#e1f8ed] w-full font-semibold text-sm gap-3 text-[#5D5D5D] items-center justify-between p-3">
          Log out
          <span>
            <MdOutlineLogout size={18} />
          </span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
