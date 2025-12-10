import React from "react";

const cars = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Car ${i + 1}`,
  price: 80 + i,
}));

const Cards = () => {
  // cars ko 10-10 ke groups me divide kar rahe hain
  const carGroups = [];
  for (let i = 0; i < cars.length; i += 10) {
    carGroups.push(cars.slice(i, i + 10));
  }

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-semibold">
        SUV rental in Oxford
      </h2>

      {carGroups.map((group, index) => (
        <div key={index}>
          <h3 className="font-medium mb-3">
            Cars {index * 10 + 1} – {index * 10 + 10}
          </h3>

          {/* Scrollable row */}
          <div className="overflow-x-auto">
            <div className="flex gap-4 w-max">
              {group.map((car) => (
                <div
                  key={car.id}
                  className="w-[220px] flex-shrink-0 bg-white rounded-xl shadow p-4"
                >
                  <div className="h-[120px] bg-gray-200 rounded mb-3" />

                  <h4 className="font-medium">{car.title}</h4>
                  <p className="text-gray-500">
                    £{car.price} / day
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
