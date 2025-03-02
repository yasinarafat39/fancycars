import React from "react";
import PropTypes from "prop-types"

function SearchBar({searchTerm, setSearchTerm, isChecked, setIsChecked}) {
  return (
    <form className="flex items-center gap-8">
      <input 
        type="text"
        name="" 
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        id=""
        placeholder="Search..."
        className="border-2 border-gray-200 p-2 rounded-md w-[50%]"
      />

      <p className="space-x-2 font-semibold cursor-pointer"> 
        <input 
        type="checkbox"
        name=""
        id="premium"
        className="scale-150"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        />  
        <label htmlFor="premium" className="cursor-pointer text-xl">Show Premium Only</label>
      </p>

    </form>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchBar;
