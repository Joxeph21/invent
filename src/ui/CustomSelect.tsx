import React from "react";
import { OptionsType } from "./Filter";



const CustomSelect = ({options}: {options: OptionsType[]}) => {
  return (
    <select className="w-44 border-[1px] focus:outline-none focus:ring-1 text-sm ring-brandGreen rounded-md cursor-pointer p-2">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
