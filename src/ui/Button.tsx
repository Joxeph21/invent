import { ReactElement } from "react";
import { IconType } from "react-icons";

type ButtonType = {
  type: "primary" | "secondary" | "danger" | "dangerOutlined";
  buttonType?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  size: "small" | "regular" | "large" | "medium";
  icon?: IconType;
};

interface Styles {
  primary: string;
  secondary: string;
  danger: string;
  dangerOutlined: string;

}

export default function Button({
  children,
  type,
  onClick,
  size = "regular",
  buttonType = "button",
  icon: Icon,
  disabled = false,
}: ButtonType): ReactElement {
  const sizes = {
    small: `w-20 rounded-full p-1`,
    regular: `w-40 rounded-md p-2`,
    medium: `w-80`,
    large: `w-full rounded-sm`,
  };
  const base =
    sizes[size] + ` text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-colors ease-in duration-150 flex items-center justify-center text-xs `;
  const styles: Styles = {
    primary: base + ` bg-brandGreen hover:bg-[#2dac5cd7] `,
    secondary: base + ` `,
    danger: base + ` bg-red-500 text-white`,
    dangerOutlined: base + ` border-2 border-red-500 text-red-400`,
  };

  return (
    <button
      className={styles[type]}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon size={21} />}
      {children}
    </button>
  );
}
