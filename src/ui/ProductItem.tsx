import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { formatPrice } from "../utils/helper";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaEdit, FaEye } from "react-icons/fa";
import { HiDocumentDuplicate, HiTrash } from "react-icons/hi2";
import MenuOptions from "./MenuOptions";

export type ProductType = {
  id: number | string;
  name: string;
  images: string[];
  quantity: number;
  category: string;
  hasDiscount: boolean;
  discountPrice?: number;
  price: number;
  created_at: string;
};

interface Props {
  product: ProductType;
  index: number;
}

const handleStatus = (amount: number) => {
  if (amount === 0) {
    return " text-red-500";
  }
  return " text-green-500";
};

const ProductItem = ({ product, index }: Props) => {
  return (
    <div className="flex font-semibold gap-4  text-xs items-center justify-between py-2 border-b p-4">
      <p className="w-5 text-center">{index}</p>
      <div className="flex gap-2 pl-2 w-1/2">
        <div className="w-20 bg-gray-50">
          <img
            src={product.images[0]}
            className="object-fit mix-blend-multiply aspect-auto"
            alt={`${product.name}_thumbnail`}
          />
        </div>
        <div className="flex max-w-40 justify-center flex-col gap-2">
          <h2 className="font-semibold capitalize truncate text-sm">
            {product.name}
          </h2>
          <p className="text-xs text-gray-600">{product.category}</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-between items-center">
        <p className="w-10 text-center">{product.quantity}</p>
        <div className="w-1/4 flex items-center justify-center text-center">
          <p
            className={`${handleStatus(
              product.quantity
            )} w-24 text-xs p-2  capitalize`}
          >
            {Boolean(product.quantity > 0) ? "In stock" : "Out of stock"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {product.hasDiscount && product.discountPrice && (
            <p>{formatPrice(product.discountPrice)}</p>
          )}
          <p
            className={`${
              product.discountPrice && product.hasDiscount
                ? "line-through text-gray-400"
                : ""
            }`}
          >
            {formatPrice(product.price)}
          </p>
        </div>

        <Menubar className="border-none   shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer bg-none focus:bg-none">
              <GoKebabHorizontal className=" text-xl cursor-pointer" />
            </MenubarTrigger>

            <MenubarContent
              align="center"
              className="w-fit p-1 overflow-hidden"
            >
              <MenubarItem className="w-32 cursor-pointer">
                <span className="flex items-center gap-2">
                  <FaEye /> View
                </span>
              </MenubarItem>
              <MenubarItem className="w-32">
                <span className="flex items-center gap-2">
                  <FaEdit />
                  Update
                </span>
              </MenubarItem>
              <MenubarItem className="w-32">
                <span className="flex items-center gap-2">
                  <HiDocumentDuplicate />
                  Duplicate
                </span>
              </MenubarItem>
              <MenubarItem className="w-32">
                <span className="flex items-center gap-2">
                  <HiTrash />
                  Delete
                </span>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default ProductItem;
