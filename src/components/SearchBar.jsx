import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center gap-8">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="border-2 border-gray-200 p-2 rounded-md w-[50%]"
      />

      <p className="space-x-2 font-semibold cursor-pointer">  
        <input type="checkbox" name="" id="premium" className="scale-150" />  
        <label htmlFor="premium" className="cursor-pointer text-xl">Show Premium Only</label>
      </p>

    </div>
  );
}

export default SearchBar;
