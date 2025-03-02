import CarRow from "./CarRow";
import cars from "../../public/cars.json";

import PropTypes from "prop-types";  

function CarContainer({ searchTerm, isChecked }) {
 
  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isChecked ? car.isPremium && matchesSearch : matchesSearch;
  });
   
  return (
    <ul className="grid grid-cols-3 gap-4">
      {filteredCars.map((car) => (
        <li key={car.id}>
          <CarRow totalCar={car} />
        </li>
      ))}
    </ul> 
  );
}

CarContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default CarContainer;
