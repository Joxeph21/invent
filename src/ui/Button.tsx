import { ReactElement } from "react";
import { IconType } from "react-icons";
import MiniLoader from "./MiniLoader";

export type ButtonType = {
  type: "primary" | "secondary" | "danger" | "dangerOutlined" | "google";
  buttonType?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  size: "small" | "regular" | "large" | "medium" | "google";
  icon?: IconType;
};

interface Styles {
  primary: string;
  secondary: string;
  danger: string;
  dangerOutlined: string;
  google: string;
}

export default function Button({
  children,
  type,
  onClick,
  isLoading = false,
  size = "regular",
  buttonType = "button",
  icon: Icon,
  disabled = false,
}: ButtonType): ReactElement {
  const sizes = {
    small: `w-20 rounded-md p-2`,
    regular: `w-40 rounded-md p-2`,
    medium: `w-80`,
    large: `w-full p-3 rounded-lg`,
    google: `w-full rounded-lg p-3`,
  };
  const base =
    sizes[size] +
    ` disabled:opacity-60 disabled:cursor-not-allowed gap-3 cursor-pointer transition-all ease-in duration-300 flex items-center justify-center text-xs font-semibold `;
  const styles: Styles = {
    primary: base + ` bg-brandGreen text-white hover:bg-[#2dac5cd7] `,
    secondary: base + ` bg-brandBlack text-white hover:opacity-90`,
    google: base + ` bg-white ring-1 ring-gray-500 text-brandBlack`,
    danger: base + ` bg-red-500 text-white`,
    dangerOutlined: base + ` border-2 text-white border-red-500 text-red-400`,
  };

  return (
    <button
      className={styles[type]}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <MiniLoader color={type === "google" ? "black" : "white"} />
      ) : (
        <>
          {Icon && <Icon size={21} />}
          {children}
        </>
      )}
    </button>
  );
}
