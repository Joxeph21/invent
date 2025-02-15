export type ExpenseType = {
  product_id: number;
  product_name: string;
  quantity: number;
  totalPrice: number;
  date: string;
};

export type salesAndExpensesType = {
  id: number | string;
  title: string;
  amount: number;
  outcome: "profit" | "loss" | "neutral";
  percentage: string;
  type: "sales" | "expenses" | "profit" | "kpi";
  trend: "upward" | "downward" | "neutral";
};

type OrderedItems = {
  product_id: number;
  product_image: string;
  quantity: number;
  price: number
};

export type OrderType = {
  id: number | string;
  customer_id: number | string;
  customer_name: string;
  customer_state: string;
  customer_country: string;
  status: "failed" | "processing" | "delivered" | "shipped";
  items_ordered?: OrderedItems[];
  created_at: string;
  settled_at?: string;
};

export interface BusinessFormValues {
  business_name: string;
  business_type: string;
  specify?: string;
  business_address: string;
  business_phone: string;
  business_email: string;
  website?: string;
}

export interface OptionTypes {
  value: string,
  label: string
}