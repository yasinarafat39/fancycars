import Header from "./Header";
import SearchBar from "./SearchBar";
import CarContainer from "./CarContainer";
import { useState } from "react";

function FancyCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className=" border-2 border-gray-200 shadow p-4 min-w-[1440px] space-y-6">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <CarContainer searchTerm={searchTerm} isChecked={isChecked}/>
    </div>
  );
}

export default FancyCars;
