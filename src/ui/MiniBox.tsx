import { FaArrowRightLong } from "react-icons/fa6";
import RecentSaleList from "./RecentSaleList";

const MiniBox = ({ title }: { title: string }) => {
  return (
    <ul className="flex w-80 bg-white gap-4 rounded-md h-72 shadow-md flex-col p-3">
      <div className="flex text-sm font-semibold items-center pb-2 border-b justify-between">
        <h2 className="text-[#212121]">{title}</h2>
        <p
          role="button"
          className="flex hover:text-green-500 duration-200 ease-in transition-colors items-center gap-2 text-brandGreen"
        >
          View all <FaArrowRightLong />
        </p>
      </div>
      <RecentSaleList />
    </ul>
  );
};

export default MiniBox;
