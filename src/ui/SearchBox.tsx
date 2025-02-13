import {  useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import { useKey } from "../hooks/useKey.ts";
import { useSearchParams } from "react-router-dom";

type SearchBoxProps = {
  placeholder: string;
};

const SearchBox = ({ placeholder }: SearchBoxProps) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [query, setQuery] = useState<string | "">("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      searchParams.delete("query");
      setSearchParams(searchParams);
    } else {
      searchParams.set("query", query.trim());
      setSearchParams(searchParams);
    }
  };

  // useKey({
  //   key: "Enter",
  //   action: () => {
  //     if (query && document.activeElement === inputRef.current) {
  //       handleSearch();
  //     }
  //   },
  // });

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white border-[1px] shadow-sm focus:bg-stone-50 gap-3 justify-self-center group flex items-center rounded-lg p-2 w-80 focus-within:ring-2 focus-within:ring-brandGreen/20"
    >
      <span
        onClick={handleSearch}
        role="button"
        className="w-fit cursor-pointer h-full"
      >
        <CiSearch size={21} />
      </span>
      <input
      
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputRef}
        type="search"
        className="bg-inherit text-sm font-semibold text-gray-800 w-full border-none outline-none"
        placeholder={placeholder}
      />
    </form>
  );

  return (
    <div className="bg-white border-[1px] shadow-sm focus:bg-stone-50 gap-3 justify-self-center group flex items-center rounded-lg p-2 w-80 focus-within:ring-2 focus-within:ring-brandGreen/20">
      <span
        onClick={handleSearch}
        role="button"
        className="w-fit cursor-pointer h-full"
      >
        <CiSearch size={21} />
      </span>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputRef}
        type="search"
        className="bg-inherit text-sm font-semibold text-gray-800 w-full border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
export default SearchBox;
