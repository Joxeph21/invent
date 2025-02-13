import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

//bg-[#dedede2d]

const AppLayout: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col fixed">
      <Header />
      <div className="flex overflow-y-hidden h-full   justify-center w-full">
        <SideBar />
        {/* <main className="grid  bg-[#F9FAFB] grid-rows-[auto_1fr]"> */}
        <div
          className="
        bg-[#dedede2d]
        w-full h-full overflow-y-scroll "
        >
          <Outlet />
        </div>
        {/* </main> */}
      </div>
    </div>
  );
};

export default AppLayout;
