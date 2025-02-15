import { ProductType } from "./ProductItem";
import { formatPrice } from "../utils/helper";
import { GoKebabHorizontal } from "react-icons/go";

export type CustomerType = {
  id: string;
  full_name: string;
  email: string;
  phoneNumber?: string;
  avatar: string;
  address: {
    state: string;
    street: string;
    country: string;
    city?: string;
    postalCode?: string;
  };
  orders: number;
  totalSpent: number;
  createdAt: string;
  lastOrderDate: string;
  OrderHistory: ProductType[];
  notes?: string;
  isFeatured: boolean;
  isSubscribed: boolean;
};

const Customer = ({ user, index }: { user: CustomerType; index: number }) => {
  return (
    <div className="shadow-md text-sm rounded-lg hover:cursor-pointer hover:shadow-lg p-4 flex items-center bg-white transition-shadow duration-300 w-full gap-4">
      <p className="w-5 text-sm text-center">{index}</p>
      <div className=" flex gap-3 w-1/2 items-center">
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
          <img
            src={user.avatar}
            className="object-cover w-full h-full"
            alt={`${user.full_name}'s avatar`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-base truncate font-semibold capitalize text-[#212121]">
            {user.full_name}
          </h2>
          <p className="text-xs font-semibold text-gray-600">{user.email}</p>
          <p className="text-xs text-gray-500">
            Total Orders: <span className="font-medium">{user.orders}</span> |
            Total Spent:{" "}
            <span className="font-medium">{formatPrice(user.totalSpent)}</span>
          </p>
        </div>
      </div>

      <div className="flex text-xs font-semibold items-center  w-1/2 justify-between">
      <p className="w-1/4  text-center">{user.address.state}, {user.address.country}</p>
      <p className="w-1/4 text-center">{user.isFeatured ? 'Yes' : 'No'}</p>
        <div className="w-1/4  flex justify-center ">
          <GoKebabHorizontal className=" text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
