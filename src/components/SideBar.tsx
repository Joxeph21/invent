import React from "react";
// import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import CustomNavLink from "../ui/CustomNavLink";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import Modal from "@/ui/Modal";
import ConfirmAction from "@/ui/ConfirmAction";
import useLogout from "@/features/auth/useLogout";
import LoadingAction from "@/ui/LoadingAction";

const SideBar: React.FC = () => {
  const { loggingOut, logout } = useLogout();
  return (
    <Modal>
      {loggingOut && <LoadingAction />}
      <aside className="p-8 bg-white   py-2 flex flex-col justify-between pb-0 w-[17em] shadow-2xl   pr-0">
        <Navbar />

        <div className="w-full  border-t mb-2  space-y-2 ">
          <CustomNavLink icon={IoIosSettings} to="/settings">
            Settings
          </CustomNavLink>
          <Modal.Open opens="logout">
            <button className="flex hover:bg-[#e1f8ed] w-full font-semibold text-sm gap-3 text-[#5D5D5D] items-center justify-between p-3">
              Log out
              <span>
                <MdOutlineLogout size={18} />
              </span>
            </button>
          </Modal.Open>
        </div>
      </aside>
      <Modal.Window name="logout">
        <ConfirmAction
        onConfirm={() => logout()}
          isLoading={loggingOut}
          title="Log out"
          action="log out"
          buttonText="Log out"
        />
      </Modal.Window>
    </Modal>
  );
};

export default SideBar;
