import React, { useEffect, useMemo, useState } from "react";
import Empty from "../ui/Empty";
import BoxBanner from "../ui/BoxBanner";
import SearchBox from "../ui/SearchBox";
import Filter from "../ui/Filter";
import OrderItem from "../ui/OrderItem";
import { useSearchParams } from "react-router-dom";
import EmptySearch from "../ui/EmptySearch";
import { type OrderType } from "@/utils/Types";

const options = [
  { value: "all", label: "all" },
  { value: "delivered", label: "delivered" },
  { value: "processing", label: "processing" },
  { value: "shipped", label: "shipped" },
  { value: "failed", label: "failed" },
];

export const orders: OrderType[] = [
  {
    id: 1234567,
    customer_id: "2893e82",
    customer_name: "James Weller",
    customer_state: "Lagos",
    customer_country: "Nigeria",
    status: "delivered",
    items_ordered: [
      {
        product_id: 567890,
        product_image: "image/url",
        quantity: 2,
        price: 230000
      },
    ],
    created_at: "2024-11-20T14:00:00Z",
    settled_at: "2024-11-23T14:00:00Z",
  },
  {
    id: 1234778,
    customer_id: "2893e82",
    customer_name: "Joy Akagbowa",
    customer_state: "Kano",
    customer_country: "Nigeria",
    status: "processing",
    items_ordered: [
      {
        product_id: 567891,
        product_image: "image/url",
        quantity: 1,
        price: 120000

      },
    ],
    created_at: "2024-11-22T10:00:00Z",
    settled_at: "",
  },
  {
    id: 12567,
    customer_id: "2893e82",
    customer_name: "John James",
    customer_state: "Ogun",
    customer_country: "Nigeria",
    status: "failed",
    items_ordered: [
      {
        product_id: 567892,
        product_image: "image/url",
        quantity: 3,
        price: 256000

      },
    ],
    created_at: "2024-11-12T14:00:00Z",
    settled_at: "2024-11-12T18:00:00Z",
  },
  {
    id: 14567,
    customer_id: "2893e82",
    customer_name: "Johannes Schethdmann",
    customer_state: "Edo",
    customer_country: "Nigeria",
    status: "shipped",
    items_ordered: [
      {
        product_id: 567893,
        product_image: "image/url",
        quantity: 2,
        price: 230200

      },
    ],
    created_at: "2024-11-19T14:00:00Z",
    settled_at: "",
  },
  {
    id: 16789,
    customer_id: "2893e83",
    customer_name: "Alice Johnson",
    customer_state: "Abuja",
    customer_country: "Nigeria",
    status: "delivered",
    items_ordered: [
      {
        product_id: 567894,
        product_image: "image/url",
        quantity: 4,
        price: 2300110

      },
    ],
    created_at: "2024-11-05T09:00:00Z",
    settled_at: "2024-11-07T11:00:00Z",
  },
  {
    id: 14568,
    customer_id: "2893e85",
    customer_name: "Chris Opara",
    customer_state: "Rivers",
    customer_country: "Nigeria",
    status: "failed",
    items_ordered: [
      {
        product_id: 567895,
        product_image: "image/url",
        quantity: 1,
        price: 2300210

      },
    ],
    created_at: "2024-11-10T16:00:00Z",
    settled_at: "2024-11-10T16:30:00Z",
  },
  {
    id: 17659,
    customer_id: "2893e86",
    customer_name: "Martha Ade",
    customer_state: "Delta",
    customer_country: "Nigeria",
    status: "shipped",
    items_ordered: [
      {
        product_id: 567896,
        product_image: "image/url",
        quantity: 5,
        price: 230030

      },
    ],
    created_at: "2024-11-25T14:30:00Z",
    settled_at: "",
  },
  {
    id: 19876,
    customer_id: "2893e87",
    customer_name: "Paul Igwe",
    customer_state: "Enugu",
    customer_country: "Nigeria",
    status: "delivered",
    items_ordered: [
      {
        product_id: 567897,
        product_image: "image/url",
        quantity: 3,
        price: 232000

      },
    ],
    created_at: "2024-10-30T08:00:00Z",
    settled_at: "2024-11-01T10:00:00Z",
  },
  {
    id: 12233,
    customer_id: "2893e88",
    customer_name: "Victoria Chike",
    customer_state: "Anambra",
    customer_country: "Nigeria",
    status: "processing",
    items_ordered: [
      {
        product_id: 567898,
        product_image: "image/url",
        quantity: 2,
        price: 230100

      },
    ],
    created_at: "2024-11-26T09:00:00Z",
    settled_at: "",
  },
  {
    id: 18765,
    customer_id: "2893e89",
    customer_name: "Samuel Peters",
    customer_state: "Oyo",
    customer_country: "Nigeria",
    status: "delivered",
    items_ordered: [
      {
        product_id: 567899,
        product_image: "image/url",
        quantity: 1,
        price: 230400

      },
    ],
    created_at: "2024-11-01T14:00:00Z",
    settled_at: "2024-11-04T14:00:00Z",
  },
];


export default function Orders() {
  const [searchParams] = useSearchParams("");
  const query = searchParams.get("query");
  const filterBy = searchParams.get("filterBy") || "";

  const filteredOrders = useMemo(() => {
    function filterOrders() {
      if (filterBy.trim()) {
        return orders.filter((order) => order.status === filterBy);
      }

      return orders;
    }

    const filteredOrders = filterOrders();

    function searchOrders(orderstoFilter: OrderType[]) {
      if (!query) return orderstoFilter;
      if (query.includes("#")) {
        const queryId = query.split("#")[1];
        return orderstoFilter.filter(
          (order) =>
            order.id.toString().includes(queryId) ||
            order.customer_name.includes(queryId)
        );
      } else {
        return orderstoFilter.filter(
          (order) =>
            order.id.toString().includes(query) ||
            order.customer_name.toLowerCase().includes(query)
        );
      }
    }
    const searchedOrders = searchOrders(filteredOrders);

    return searchedOrders;
  }, [filterBy, query]);

  return (
    <BoxBanner>
      <div className="flex items-center shadow-sm bg-white p-3 rounded-md justify-between">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <Filter options={options} />
        <SearchBox placeholder="Search by order #ID, Customer Name" />
      </div>
      {/* <Empty name="Orders" /> */}

      <div className="flex flex-col gap-3 border-[1px] bg-white rounded-lg">
        <div className="flex gap-4 bg-stone-100 border-b text-center capitalize p-4 text-sm font-bold items-center justify-between">
          <p className="w-5"></p>
          <p className="w-1/4">Order ID</p>
          <p className="w-1/4">Customer Name</p>
          <p className="w-1/4">Delivering to</p>
          <p className="w-1/4">status</p>
          <p className="w-1/4">Created at</p>
          <p className="w-1/6"></p>
        </div>

        {filteredOrders.length === 0 ? (
        <EmptySearch />
        ) : (
          filteredOrders.map((item, index) => <OrderItem key={item.id} index={index + 1} order={item} />)
        )}
      </div>
    </BoxBanner>
  );
}
