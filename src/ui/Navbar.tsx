import React from "react";
import CustomNavLink from "./CustomNavLink";
import { AiFillProduct } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosAnalytics, IoMdAnalytics } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { HiMiniNewspaper } from "react-icons/hi2";

const Navbar: React.FC = () => {
  return (
    <nav className=" my-2 py-1">
      <ul className="flex flex-col gap-1">
        <CustomNavLink icon={IoIosAnalytics} to="/">
          Overview
        </CustomNavLink>
        <CustomNavLink icon={IoMdAnalytics} to="/analytics">
          Analytics
        </CustomNavLink>
        <CustomNavLink icon={AiFillProduct} to="/products">
          Products
        </CustomNavLink>
        <CustomNavLink icon={BsPeopleFill} to="/customers">
          Customers
        </CustomNavLink>
        <CustomNavLink icon={FaShippingFast} to="/orders">Orders</CustomNavLink>
        <CustomNavLink icon={HiMiniNewspaper} to="/newsletter">
          Newsletter
        </CustomNavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
