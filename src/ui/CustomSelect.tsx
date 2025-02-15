import { OptionTypes } from "@/utils/Types";
import { Option, Select } from "@material-tailwind/react";
import { FormEvent } from "react";

type customSelectProps = {
  id?: string;
  name?: string;
  label?: string,
  errorMessage?: string,
  error?: boolean;
  onChange?: (value: string | undefined) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  value?: string;
  options: OptionTypes[];
  placeholder?: string;
};

const CustomSelect = ({
  options,
  id,
  label,
  errorMessage,
  name,
  placeholder,
  error,
  onChange,
  onBlur,
  value,
}: customSelectProps) => {
  return (
    <div className="flex flex-col text-xs w-full gap-3">
      <div className="w-full flex items-center justify-between">
        <label className="font-bold text-brandBlack" htmlFor={name}>
          {label}
        </label>
        {error && <p className=" text-xs text-red-600">{errorMessage}</p>}
      </div>
      <Select
        id={id}
        name={name}
        value={value || options[0].label}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        placeholder={placeholder}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="focus:ring-brandBlack  focus:border-brandBlack"
      >
        {options.map((option, i) => (
          <Option key={i} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
