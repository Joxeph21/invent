import { format } from "date-fns";

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
