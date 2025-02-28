
// import PropTypes from "prop-types";

function CarRow({totalCar}) {
  const {title, brand, year, price, isPremium} = totalCar;
  return (
    <div className="p-4 border-2 border-gray-200 rounded-md space-y-1 font-semibold">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p><span className="text-xl">Brand:</span> {brand}</p>
        <p><span className="text-xl">Year:</span> {year}</p>
        <p><span className="text-xl">Price:</span> ${price}</p>
        <p><span className="text-xl">Premium:</span> {isPremium ? "Yes" : "No"}</p>
    </div>
  )
}

// CarRow.propTypes={
//   totalCar: PropTypes.object.isRequired,
// }

export default CarRow