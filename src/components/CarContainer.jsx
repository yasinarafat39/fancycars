import CarRow from "./CarRow";
import cars from "../../public/cars.json";

function CarContainer() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {cars.map((car) => (
        <li key={car.id}>
          <CarRow totalCar={car} />
        </li>
      ))}
    </ul>
  );
}

export default CarContainer;
