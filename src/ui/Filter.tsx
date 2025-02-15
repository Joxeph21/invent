import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type OptionsType = {
  value: string;
  label: string;
};

interface FilterProps {
  options: OptionsType[];
}

const Filter = ({ options }: FilterProps) => {
  const [searchParams, setSearchparams] = useSearchParams("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const filteredValue = searchParams.get("filterBy") || "all";
    setActiveFilter(filteredValue);
  }, [searchParams]);

  const handleClick = (value: string) => {
    setActiveFilter(value);
    if (value === "all") {
      searchParams.delete("filterBy");
      setSearchparams(searchParams);
    } else {
      searchParams.set("filterBy", value);
      setSearchparams(searchParams);
    }
  };

  return (
    <div className="flex gap-3 items-center rounded-md shadow-md border-[1px] p-2 border-gray-100 bg-gray-50">
      {options.map((item, i) => (
        <button
          onClick={() => handleClick(item.value)}
          disabled={activeFilter === item.value}
          className={`${
            activeFilter === item.value && `bg-brandGreen  text-white`
          } rounded-md capitalize p-2 py-1 text-sm transition-colors ease-in duration-150 font-semibold text-[#212121]`}
          key={i}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
