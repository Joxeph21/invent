import { OrderType } from "@/utils/Types";
import { formatDate } from "../utils/helper";
import { GoKebabHorizontal } from "react-icons/go";



interface OrderProps {
  order: OrderType;
  index: number
}

const handleStatus = (status: string): string => {
  switch (status) {
    case "failed":
      return "bg-red-50 text-red-500";
    case "delivered":
      return "bg-green-50 text-green-500";
    case "processing":
      return "bg-yellow-100 text-yellow-700";
    case "shipped":
      return "bg-blue-50 text-blue-500";
    default:
      return "text-black";
  }
};

const OrderItem = ({ order, index }: OrderProps) => {
  return (
    <div className="flex font-semibold gap-4 rounded-md border-b text-xs shadow-sm transition-all duration-150 ease-in items-center justify-between p-3">
      <p className="text-sm w-5 text-center">{index}</p>
      <h2 className="font-semibold w-1/4 text-center underline cursor-pointer  text-blue-500">
        #{order.id}
      </h2>
      <h2 className="w-1/4 truncate text-sm text-center">{order.customer_name}</h2>
      <p className="w-1/4 text-center">
        {order.customer_state}, {order.customer_country}
      </p>
      <div className="w-1/4 flex items-center justify-center text-center">
        <p
          className={`${handleStatus(
            order.status
          )} w-20  p-1 text-xs rounded-full capitalize`}
        >
          {order.status}
        </p>
      </div>
      <p className="w-1/4 text-center">{formatDate(order.created_at)}</p>
      <div className="w-1/6 text-center flex justify-end pr-8">
        <GoKebabHorizontal className=" text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default OrderItem;
