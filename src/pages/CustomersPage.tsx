import React, { useMemo } from "react";
import Empty from "../ui/Empty";
import BoxBanner from "../ui/BoxBanner";
import Customer, { CustomerType } from "../ui/Customer";
import SearchBox from "../ui/SearchBox";
import SortBy, { sortProps } from "../ui/SortBy";
import { useSearchParams } from "react-router-dom";
import EmptySearch from "../ui/EmptySearch";

const CustomerOptions: sortProps[] = [
  { value: "name-asc", label: "name (A-Z)" },
  { value: "name-desc", label: "name (Z-A)" },
  { value: "featured", label: "featured" },
  { value: "Tspent-high", label: "total spent (highest)" },
  { value: "Tspent-low", label: "total spent (lowest)" },
  { value: "orders-high", label: "total orders (highest)" },
  { value: "orders-low", label: "total orders (lowest)" },
];

export const customers: CustomerType[] = [
  {
    id: "cust001",
    full_name: "James Weller",
    email: "james.weller@example.com",
    phoneNumber: "+2341234567890",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    address: {
      state: "Lagos",
      street: "123 Main St",
      country: "Nigeria",
      city: "Ikeja",
      postalCode: "100001",
    },
    orders: 5,
    totalSpent: 2500,
    createdAt: "2023-01-15T12:00:00Z",
    lastOrderDate: "2024-11-15T15:30:00Z",
    OrderHistory: [
      {
        id: "prod001",
        name: "Wireless Headphones",
        images: ["https://via.placeholder.com/150"],
        quantity: 2,
        category: "Electronics",
        hasDiscount: true,
        discountPrice: 150,
        price: 200,
        created_at: "2024-11-01T10:00:00Z",
      },
    ],
    notes: "Prefers express shipping.",
    isFeatured: true,
    isSubscribed: true,
  },
  {
    id: "cust002",
    full_name: "Joy Akagbowa",
    email: "joy.akagbowa@example.com",
    phoneNumber: "+2349876543210",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    address: {
      state: "Kano",
      street: "45 Peace St",
      country: "Nigeria",
      city: "Kano",
      postalCode: "700241",
    },
    orders: 3,
    totalSpent: 1200,
    createdAt: "2024-01-10T10:30:00Z",
    lastOrderDate: "2024-11-10T14:20:00Z",
    OrderHistory: [
      {
        id: "prod002",
        name: "Gaming Mouse",
        images: ["https://via.placeholder.com/150"],
        quantity: 1,
        category: "Accessories",
        hasDiscount: false,
        price: 50,
        created_at: "2024-10-15T08:00:00Z",
      },
    ],
    notes: "Requested bulk discount for office supplies.",
    isFeatured: false,
    isSubscribed: true,
  },
  {
    id: "cust003",
    full_name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+2345678901234",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    address: {
      state: "Edo",
      street: "78 Market Rd",
      country: "Nigeria",
      city: "Benin City",
    },
    orders: 1,
    totalSpent: 300,
    createdAt: "2024-06-01T09:45:00Z",
    lastOrderDate: "2024-10-15T18:00:00Z",
    OrderHistory: [
      {
        id: "prod003",
        name: "Smartphone",
        images: ["https://via.placeholder.com/150"],
        quantity: 1,
        category: "Electronics",
        hasDiscount: false,
        price: 300,
        created_at: "2024-10-15T18:00:00Z",
      },
    ],
    notes: "Inquired about warranty policy.",
    isFeatured: false,
    isSubscribed: true,
  },
  {
    id: "cust004",
    full_name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phoneNumber: "+2348123456789",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    address: {
      state: "Abuja",
      street: "10 Freedom Way",
      country: "Nigeria",
      city: "Garki",
      postalCode: "900108",
    },
    orders: 4,
    totalSpent: 4500,
    createdAt: "2024-02-11T11:00:00Z",
    lastOrderDate: "2024-10-20T10:00:00Z",
    OrderHistory: [
      {
        id: "prod004",
        name: "Laptop",
        images: ["https://via.placeholder.com/150"],
        quantity: 1,
        category: "Electronics",
        hasDiscount: true,
        discountPrice: 1200,
        price: 1500,
        created_at: "2024-10-10T09:00:00Z",
      },
    ],
    notes: "Needs extra warranty.",
    isFeatured: true,
    isSubscribed: false,
  },
  {
    id: "cust005",
    full_name: "Emily Rose",
    email: "emily.rose@example.com",
    phoneNumber: "+2349876509876",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    address: {
      state: "Enugu",
      street: "12 University Rd",
      country: "Nigeria",
      city: "Nsukka",
      postalCode: "410002",
    },
    orders: 2,
    totalSpent: 900,
    createdAt: "2024-03-15T09:30:00Z",
    lastOrderDate: "2024-09-22T12:00:00Z",
    OrderHistory: [
      {
        id: "prod005",
        name: "Tablet",
        images: ["https://via.placeholder.com/150"],
        quantity: 1,
        category: "Electronics",
        hasDiscount: false,
        price: 900,
        created_at: "2024-09-22T12:00:00Z",
      },
    ],
    notes: "Prefers in-store pickup.",
    isFeatured: false,
    isSubscribed: true,
  },
];


export default function CustomersPage() {
  const [searchParams] = useSearchParams("");
  const query = searchParams.get("query");
  const sortBy = searchParams.get("sortBy") || "";

  const sortedOptions = useMemo(() => {
    function sortCustomers() {
      switch (sortBy) {
        case "":
          return customers.sort((a, b) =>
            a.full_name.localeCompare(b.full_name)
          );
        case "name-desc":
          return customers.sort((a, b) =>
            b.full_name.localeCompare(a.full_name)
          );
        case "featured":
          return customers.sort(
            (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
          );
        case "Tspent-high":
          return customers.sort((a, b) => b.totalSpent - a.totalSpent);
        case "Tspent-low":
          return customers.sort((a, b) => a.totalSpent - b.totalSpent);
        case "orders-high":
          return customers.sort((a, b) => b.orders - a.orders);
        case "orders-low":
          return customers.sort((a, b) => a.orders - b.orders);
        default:
          return customers;
      }
    }
    const sorted = sortCustomers();

    function searchCustomers(customers: CustomerType[]) {
      if (!query) return customers;
      return customers.filter((customer) =>
        customer.full_name.toLowerCase().includes(query.toLowerCase())
      );
    }

    const sortedCustomers = searchCustomers(sorted);

    return sortedCustomers;
  }, [sortBy, query]);

  return (
    <BoxBanner>
      <div className="flex items-center  shadow-sm bg-white p-3 rounded-md justify-between">
        <h1 className="text-2xl  font-semibold">Customers</h1>
        <SearchBox placeholder="Search Customers" />
        <SortBy options={CustomerOptions} />
      </div>
      <div className="flex flex-col gap-3 border-[1px] bg-white rounded-lg">
        <div className="flex bg-stone-100 border-b text-center gap-2 capitalize p-4 text-sm font-bold items-center justify-between">
          <p className="w-5"></p>
          <p className="w-1/2 text-left px-10">Customer Info</p>
          {/* <p className="w-1/2">Full name</p>
          <p className="w-1/2">email</p> */}
          <div className="w-1/2 flex justify-between">
            <p className="w-1/4 ">location</p>
            <p className="w-1/4 ">Featured</p>
            <p className="w-1/4 ">options</p>
          </div>
        </div>
        {sortedOptions.length === 0 ? (
          <EmptySearch />
        ) : (
          sortedOptions.map((user, index) => (
            <Customer key={user.id} user={user} index={index + 1} />
          ))
        )}
      </div>
    </BoxBanner>
  );
}
