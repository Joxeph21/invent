import { ChangeEvent, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type InputProps = {
  name: string;
  label: string;
  error?: boolean;
  errorMessage?: string;
  type: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  value?: string;
  placeholder: string;
};

export default function CustomInput({
  name,
  label,
  error,
  errorMessage,
  type = "text",
  disabled = false,
  onBlur,
  onChange,
  readonly = false,
  value,
  placeholder,
}: InputProps) {
  const [show, setShow] = useState(false);
  if (type === "password") {
    return (
      <div className="flex flex-col text-xs gap-3 w-full">
        <div className="w-full flex items-center justify-between">
          <label className="font-bold text-brandBlack" htmlFor={name}>
            {label}
          </label>
          {error && <p className=" text-xs text-red-600">{errorMessage}</p>}
        </div>
        <div
          className={`flex disabled:cursor-not-allowed pr-3 items-center ${
            error ? "ring-1 ring-red-500" : "ring-1 ring-brandBlack"
          } rounded-md justify-between`}
        >
          <input
            readOnly={readonly}
            className="w-full py-3 pl-3 rounded-l-md focus:outline-none "
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={show ? "text" : "password"}
            disabled={disabled}
          />
          <button className="px-1" type="button" onClick={() => setShow(!show)}>
            {show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-xs gap-3 w-full">
      <div className="w-full flex items-center justify-between">
        <label className={`font-bold ${disabled ? "text-gray-400 cursor-not-allowed" : "text-brandBlack"}`} htmlFor={name}>
          {label}
        </label>
        {error && <p className=" text-xs text-red-600">{errorMessage}</p>}
      </div>
      <input
        className={`w-full p-3 disabled:cursor-not-allowed focus:outline-none ${
          error ? "ring-1 ring-red-500" : disabled ? "ring-1 ring-gray-300" : "ring-1 ring-brandBlack"
        } rounded-md`}
        readOnly={readonly}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        type={type}
        disabled={disabled}
      />
    </div>
  );
}
