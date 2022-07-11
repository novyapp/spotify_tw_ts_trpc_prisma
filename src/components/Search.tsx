import React from "react";
import { MdOutlineShortText } from "react-icons/md";

interface Search {
  search: string;
  setSearch: any;
}

function Search({ search, setSearch }: Search) {
  return (
    <div className="max-w-full bg-[#1a1a1a] p-1.5 rounded-full overflow-hidden border-2 border-[#333333] px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1a1a1a] text-white border-none w-full focus:ring-0 outline-none placeholder-[#fafafa] text-sm"
        placeholder="Search..."
      />
      <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto">
        <div className="flex space-x-2 pr-5">
          <button className="tag">Minimal</button>
          <button className="tag">Chillpop</button>
          <button className="tag">Chill</button>
        </div>
        <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="font-medium text-sm">Filters</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
