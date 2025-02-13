import React from "react";
import SearchSvg from "../assets/svgs/search.svg"
const EmptySearch = () => {
  return (
    <div className="flex justify-center border flex-col p-5 items-center">
      <img src={SearchSvg} alt="empty_search" />
      <h2 className=" text-center justify-center w-full text-sm p-4 ">
        Sorry, we couldn't find any results matching your search. <br/> Try adjusting
        your keywords or Filters.
      </h2>
    </div>
  );
};

export default EmptySearch;
