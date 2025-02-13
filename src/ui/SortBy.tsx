import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type sortProps = {
  value: string;
  label: string;
};

interface sortByOptions {
  options: sortProps[];
}

const SortBy = ({ options }: sortByOptions) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [sortedValue, setSortedValue] = useState<string>("name-asc");

  searchParams.set("sortBy", sortedValue);

  useEffect(() => {
    const sortedValue = searchParams.get("sortBy") || "name-asc";
    setSortedValue(sortedValue);
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortedValue(e.target.value);
    if(e.target.value === "name-asc" || e.target.value === "all"){
     searchParams.delete("sortBy") 
     setSearchParams(searchParams)
    }else{
      searchParams.set("sortBy", e.target.value);
      setSearchParams(searchParams);
    }
  };

  return (
    <select
      value={sortedValue}
      onChange={(e) => handleChange(e)}
      className="w-60 cursor-pointer shadow-md focus:ring-1 focus:ring-brandGreen outline-none text-sm font-semibold text-[
rgb(55, 65, 81)] bg-white p-2 rounded-md"
    >
      {options.map((value, i) => (
        <option key={i} value={value.value}>
          {`Sort by ${value.label}`}
        </option>
      ))}
    </select>
  );
};

export default SortBy;
