import React from "react";
import Logo from "../ui/Logo";
import useGetUser from "@/features/user/useGetUser";
import MiniLoader from "@/ui/MiniLoader";
import useGetStore from "@/features/store/useGetStore";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { user, isLoading } = useGetUser();
  const { isLoading: gettingStore, data } = useGetStore(user?.id);

  console.log(user)
  return (
    <div
      className="w-full  h-16 
     bg-white flex z-20  items-center shadow-md justify-between p-2 px-8"
    >
      <Logo />

      {isLoading || gettingStore ? (
        <p className="flex text-xs font-semibold items-end gap-3">
          <MiniLoader color="#212121" />
          Getting store Information....
        </p>
      ) : (
        <Link to="/account" className="flex hover:shadow-sm px-4 h-full items-center text-base font-semibold capitalize text-brandBlack gap-3">
          <div
            className="size-8 rounded-full"
            style={{
              backgroundImage: `url(${user?.user_metadata?.avatar_url})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></div>
          <p>{data?.business_name}</p>
        </Link>
      )}
    </div>
  );
};

export default Header;
