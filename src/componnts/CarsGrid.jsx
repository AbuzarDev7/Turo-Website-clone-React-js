import Cards from "./Cards";
import carsData from "../data/cars";

const CarsGrid = () => {
  const rows = [];
  for (let i = 0; i < carsData.length; i += 10) {
    rows.push(carsData.slice(i, i + 10));
  }

  return (
    <div className="space-y-8 p-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 overflow-x-auto">
          {row.map((car) => (
            <Cards key={car.id} car={car} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarsGrid;
