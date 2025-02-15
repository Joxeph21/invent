import { endOfMonth, endOfYear, format, startOfMonth, startOfWeek, startOfYear, subMonths, subWeeks, subYears } from "date-fns";

export const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  return format(parsedDate, "MMM dd yyyy");
};

export function formatPrice(
  price: number,
  rate: number = 1,
  selectedCurrency: string = "NGN"
): string {
  let newPrice = formatAmount(Number((price * rate).toFixed(2)));

  switch (selectedCurrency) {
    case "USD":
      return `$${newPrice}`;
    case "EUR":
      return `€ ${newPrice}`;
    case "NGN":
      return `₦ ${newPrice}`;

    default:
      throw new Error("Unknown action");
  }
}

export function formatAmount(number: number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  return number.toLocaleString();
}

export function formartPercentage(a: number, b: number): string {
  const percentage = (a / (a + b)) * 100;
  const final =  Number.isInteger(percentage) ? percentage : percentage.toFixed(2);
  return `${final}%`;
}

// //Switch statements (Option A) 

// export const handleStatus = (status: string): string => {
//   switch (status) {
//     case "failed":
//       return "bg-red-50 text-red-500";
//     case "delivered":
//       return "bg-green-50 text-green-500";
//     case "processing":
//       return "bg-yellow-100 text-yellow-700";
//     case "shipped":
//       return "bg-blue-50 text-blue-500";
//     default:
//       return "text-black";
//   }
// };

// //(Option B) Object Lookup with Nullish

// type StatusType = "failed" | "delivered" | "processing" | "shipped" 

// const Status: Record<StatusType, string> = {
//   failed : "bg-red-50 text-red-500",
//   delivered: "bg-green-50 text-green-500",
//   processing: "bg-yellow-100 text-yellow-700",
//   shipped: "bg-blue-50 text-blue-500"
// }


// export const getStatus = (status: StatusType) => Status[status] ?? "text-black"

  export function GetDateRange(sortBy: string) {
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

   export function GetChartRange(sortBy: string) {
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