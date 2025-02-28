
import Header from "./Header"
import SearchBar from "./SearchBar"
import CarContainer from "./CarContainer"
 

function FancyCars() {
  return (
    <div className=" border-2 border-gray-200 shadow p-4 min-w-[1440px] space-y-6">
      <Header />
      <SearchBar />
      <CarContainer />
    </div>
  )
}

export default FancyCars