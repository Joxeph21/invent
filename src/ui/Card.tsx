import { FaMoneyBill } from "react-icons/fa6";
import { FiBarChart, FiTrendingUp } from "react-icons/fi";
import { formatAmount, formatPrice } from "../utils/helper";
import { salesAndExpensesType } from "../pages/Analytics";
import { GrMoney } from "react-icons/gr";
import { MdOutlineTrendingFlat } from "react-icons/md";
import { LuTrendingDown } from "react-icons/lu";
import { ChartNoAxesCombined } from "lucide-react";

const Card = ({ info }: { info: salesAndExpensesType }) => {
  const isProfit = info.outcome === "profit";
  const isKPI = info.type === "kpi";

  const getIcon = () => {
    switch (info.type) {
      case "sales":
        return <FaMoneyBill size={22} />;
      case "expenses":
        return <GrMoney size={22} />;
      case "profit":
        return <ChartNoAxesCombined />;
      case "kpi":
        return <FiBarChart size={22} />;
      default:
        return null;
    }
  };

  const getTypeStyles = () => {
    switch (info.type) {
      case "sales":
        return "bg-green-100 text-green-600";
      case "expenses":
        return "bg-red-100 text-red-600";
      case "profit":
        return "bg-green-100 text-green-600";
      case "kpi":
        return "bg-gray-100 text-gray-600";
      default:
        return "";
    }
  };

  const getTrend = () => {
    switch (info.trend) {
      case "upward":
        return <FiTrendingUp size={14} />;
      case "downward":
        return <LuTrendingDown size={14} />;

      case "neutral":
        return <MdOutlineTrendingFlat size={14} />;

      default:
        return <MdOutlineTrendingFlat size={14} />;
    }
  };

  return (
    <li className="w-60 shadow-sm rounded-lg p-4 bg-white h-36 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${getTypeStyles()}`}
        >
          {getIcon()}
        </div>
        {!isKPI && (
          <span
            className={`flex items-center gap-1 py-[2px] px-2 rounded-full text-[11px] font-medium ${
              isProfit
                ? "bg-green-100 text-green-700"
                : info.outcome === "neutral"
                ? "bg-gray-200 text-gray-600"
                : "bg-red-100 text-red-700"
            }`}
          >
            {getTrend()}
            {info.percentage}
          </span>
        )}
      </div>

      <div>
        <h2 className="text-sm capitalize font-medium text-gray-600">
          {info.title}
        </h2>
        <span className="text-xl font-bold text-gray-800">
          {!isKPI
            ? info.amount !== 0
              ? info.type === "profit"
                ? formatPrice(info.amount)
                : formatAmount(info.amount)
              : 0
            : info.amount + "%"}
        </span>
      </div>
    </li>
  );
};

export default Card;
