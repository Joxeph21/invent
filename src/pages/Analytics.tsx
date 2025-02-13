import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegendContent,
  ChartLegend,
} from "@/components/ui/chart";
import BoxBanner from "../ui/BoxBanner";
import type { OptionsType } from "../ui/Filter";
import SortBy from "../ui/SortBy";
import Card from "../ui/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { orders } from "./Orders";
import { ExpenseType } from "../utils/Types";
import { useSearchParams } from "react-router-dom";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfYear,
  format,
  parseISO,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subMonths,
  subWeeks,
  subYears,
} from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MiniBox from "../ui/MiniBox";
import { useMemo } from "react";
import { formartPercentage } from "@/utils/helper";

export type salesAndExpensesType = {
  id: number | string;
  title: string;
  amount: number;
  outcome: "profit" | "loss" | "neutral";
  percentage: string;
  type: "sales" | "expenses" | "profit" | "kpi";
  trend: "upward" | "downward" | "neutral";
};

const sortOptions: OptionsType[] = [
  { value: "all", label: "This Month" },
  { value: "ytd", label: "Year to Date (YTD)" },
  { value: "last-year", label: "Last Year" },
  { value: "this-week", label: "This Week" },
  { value: "last-week", label: "Last Week" },
  { value: "last-month", label: "Last Month" },
  { value: "all-time", label: "All time" },
];

// const sales = useMemo(
//   () => orders.filter((item) => item.status === "delivered"),
//   [orders]
// );

const sales = orders.filter((item) => item.status === "delivered");

const expenses: ExpenseType[] = [
  {
    product_id: 101,
    product_name: "Wireless Headphones",
    quantity: 2,
    totalPrice: 80000,
    date: "2024-11-01T10:30:00Z",
  },
  {
    product_id: 102,
    product_name: "Gaming Mouse",
    quantity: 1,
    totalPrice: 23000,
    date: "2024-11-05T12:00:00Z",
  },
  {
    product_id: 103,
    product_name: "Laptop Stand",
    quantity: 3,
    totalPrice: 35000,
    date: "2024-11-10T09:15:00Z",
  },
  {
    product_id: 104,
    product_name: "External Hard Drive",
    quantity: 1,
    totalPrice: 70000,
    date: "2024-11-15T14:45:00Z",
  },
  {
    product_id: 105,
    product_name: "Smartphone Case",
    quantity: 5,
    totalPrice: 3500,
    date: "2024-11-20T11:20:00Z",
  },
  {
    product_id: 106,
    product_name: "Keyboard",
    quantity: 2,
    totalPrice: 12000,
    date: "2024-11-22T13:35:00Z",
  },
  {
    product_id: 107,
    product_name: "Monitor",
    quantity: 2,
    totalPrice: 300000,
    date: "2024-11-25T16:00:00Z",
  },
];

console.log(sales);
console.log(expenses);

export default function Analytics() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "this-month";

  function GetChartRange() {
    const now = new Date();
    switch (sortBy) {
      case "ytd": {
        const start = startOfYear(now);
        return `${format(start, "MMM yyyy")} - ${format(now, "MMM yyyy")}`;
      }
      case "last-year": {
        const start = startOfYear(subYears(now, 1));
        const end = endOfYear(subYears(now, 1));
        return `${format(start, "MMM yyyy")} - ${format(end, "MMM yyyy")}`;
      }
      case "this-week": {
        const start = startOfWeek(now, { weekStartsOn: 1 });
        return `${format(start, "MMMM d, yyyy")} - ${format(
          now,
          "MMMM d, yyyy"
        )}`;
      }
      case "last-week": {
        const start = startOfWeek(subWeeks(now, 1), { weekStartsOn: 1 });
        const end = subWeeks(now, 1);
        return `${format(start, "MMMM d, yyyy")} - ${format(
          end,
          "MMMM d, yyyy"
        )}`;
      }
      case "this-month": {
        const start = startOfMonth(now);
        return `${format(start, "MMMM d, yyyy")} - ${format(
          now,
          "MMMM d, yyyy"
        )}`;
      }

      case "last-month": {
        const start = startOfMonth(subMonths(now, 1));
        const end = endOfMonth(subMonths(now, 1));
        return `${format(start, "MMMM d, yyyy")} - ${format(
          end,
          "MMMM d, yyyy"
        )}`;
      }
      case "all-time":
        return "All time";
      default:
        return "24 hours Ago";
    }
  }

  function GetDateRange() {
    const now = new Date();
    switch (sortBy) {
      case "ytd":
        return { start: startOfYear(now), end: now };
      case "last-year":
        return {
          start: startOfYear(subYears(now, 1)),
          end: endOfYear(subYears(now, 1)),
        };
      case "this-week":
        return { start: startOfWeek(now, { weekStartsOn: 1 }), end: now };
      case "last-week":
        return {
          start: startOfWeek(subWeeks(now, 1), { weekStartsOn: 1 }),
          end: subWeeks(now, 1),
        };
      case "this-month":
        return { start: startOfMonth(now), end: now };
      case "last-month":
        return {
          start: startOfMonth(subMonths(now, 1)),
          end: endOfMonth(subMonths(now, 1)),
        };
      case "all-time":
        return { start: new Date("2000-01-01"), end: now };
      default:
        return { start: now, end: now };
    }
  }

  const dateRange = GetDateRange();

  const filteredSales = useMemo(
    () =>
      sales.filter(
        (sale) =>
          parseISO(sale.created_at) >= dateRange.start &&
          parseISO(sale.created_at) <= dateRange.end
      ),
    [sales, dateRange]
  );

  const filteredExpenses = useMemo(
    () =>
      expenses.filter(
        (expense) =>
          parseISO(expense.date) >= dateRange.start &&
          parseISO(expense.date) <= dateRange.end
      ),
    [expenses, dateRange]
  );

  const totalSales = filteredSales.reduce((acc, sale) => {
    const itemTotal =
      sale.items_ordered?.reduce((itemAcc, item) => {
        return itemAcc + (item.price || 0);
      }, 0) || 0;
    return acc + itemTotal;
  }, 0);
  const totalExpenses = filteredExpenses.reduce(
    (acc, expense) => acc + expense.totalPrice,
    0
  );
  const netProfit = totalSales - totalExpenses;

  const data = eachDayOfInterval({
    start: dateRange.start,
    end: dateRange.end,
  }).map((date) => {
    const dateStr = format(date, "MMM d");

    const dailySales = filteredSales
      .filter((sale) => {
        const saleDate = sale.created_at
          ? format(parseISO(sale.created_at), "MMM d")
          : null;
        return saleDate === dateStr;
      })
      .reduce((acc, sale) => {
        const itemTotal =
          sale.items_ordered?.reduce(
            (itemAcc, item) => itemAcc + (item.price || 0),
            0
          ) || 0;
        return acc + itemTotal;
      }, 0);

    const dailyExpenses = filteredExpenses
      .filter((expense) => {
        const expenseDate = expense.date
          ? format(parseISO(expense.date), "MMM d")
          : null;
        return expenseDate === dateStr;
      })
      .reduce((acc, expense) => acc + (expense.totalPrice || 0), 0);

    return {
      label: dateStr,
      totalSales: dailySales || 0,
      totalExpenses: dailyExpenses || 0,
    };
  });

  const chartConfig = {
    totalSales: {
      label: "total Sales",
      color: "#25ea49",
    },
    totalExpenses: {
      label: "total Expenses",
      color: "#e91f1f",
    },
  } satisfies ChartConfig;

  const kpi =
    totalSales && totalExpenses
      ? Number((((totalSales - totalExpenses) / totalSales) * 100).toFixed(0))
      : 0;

  const salesAndExpenses: salesAndExpensesType[] = [
    {
      id: 1,
      title: "Total Sales",
      amount: totalSales,
      outcome: Number(totalSales == 0) ? "neutral" : "profit",
      percentage:
        totalSales === 0 ? "0%" : formartPercentage(totalSales, totalExpenses),
      type: "sales",
      trend:
        totalSales > 0 ? "upward" : totalSales < 0 ? "downward" : "neutral",
    },
    {
      id: 2,
      title: "Total Expenses",
      amount: totalExpenses,
      type: "expenses",
      outcome: Number(totalExpenses == 0) ? "neutral" : "profit",
      percentage:
        totalExpenses === 0
          ? "0%"
          : formartPercentage(totalExpenses, totalSales),
      trend:
        totalExpenses > 0 ? "upward" : totalSales < 0 ? "downward" : "neutral",
    },
    {
      id: 3,
      title: "Net Profit",
      amount: netProfit,
      type: "profit",
      outcome: netProfit > 0 ? "profit" : netProfit === 0 ? "neutral" : "loss",
      percentage:
        netProfit === 0 ? "0" : formartPercentage(netProfit, totalSales),
      trend:
        netProfit > 0 ? "upward" : netProfit === 0 ? "neutral" : "downward",
    },
    {
      id: 4,
      title: "Key Performance Indicator",
      amount: kpi,
      type: "kpi",
      outcome: "neutral",
      percentage: "N/A",
      trend: "neutral",
    },
  ];

  return (
    <BoxBanner>
      <div className="w-full flex bg-white p-3 rounded-md items-center justify-between">
        <h1 className="text-2xl font-semibold ">Analytics</h1>
        <SortBy options={sortOptions} />
      </div>

      <ul className="flex items-center gap-10">
        {salesAndExpenses.map((el) => (
          <Card info={el} key={el.id} />
        ))}
      </ul>
      {/*Chart */}
      <div className="bg-white px-3 w-full relative py-6 flex flex-col gap-6 h-full min-h-96 rounded-md shadow-md">
        <h1 className="text-[#212121] text-base font-bold ">
          Sales and Expense Chart from {GetChartRange()}
        </h1>
        <div className="w-full h-full ">
          <ChartContainer
            config={chartConfig}
            className="h-full max-h-80 w-full"
          >
            <AreaChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="label"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis />
              <Tooltip />
              <ChartLegend content={<ChartLegendContent />} />
              <Area dataKey="totalSales" fill="#059920" radius={4} />
              <Area dataKey="totalExpenses" fill="#9e0101" radius={4} />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      <div className="flex w-full gap-8">
        <MiniBox title="Recent Sales"  />
        <MiniBox title="Recent Expenses" />
        <MiniBox title="Stock Count" />
      </div>
    </BoxBanner>
  );
}
