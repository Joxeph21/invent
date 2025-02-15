import React from "react";

import Button from "./Button";
import { type OrderType } from "@/utils/Types";

const RecentSaleList = ({ sale }: { sale: OrderType }) => {
  return (
    <div className="flex items-center gap-3  text-[#212121] font-semibold text-sm justify-between px-2">
      <div className="flex items-center gap-5">
        <p>1x</p>
        <h2 className="truncate">Berkin Bag</h2>
      </div>
      <Button size="small" type="primary">
        View
      </Button>
    </div>
  );
};

export default RecentSaleList;
