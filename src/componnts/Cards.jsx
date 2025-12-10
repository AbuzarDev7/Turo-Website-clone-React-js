import React from "react";
import carsData from "../cars";

const sectionTitles = [
  "Car rentals in London",
  "SUV rental at King’s Cross",
  "Affordable car rental in Edinburgh",
  "Car rentals at London (LHR) airport",
];

const Cards = () => {
  const carGroups = [];

  for (let i = 0; i < carsData.length; i += 10) {
    carGroups.push(carsData.slice(i, i + 10));
  }

  return (
    // ✅ Screen padding (left/right gap)
    <div className="px-4 md:px-10 bg-gray-50">
      {/* ✅ Width control (Turo style) */}
      <div className="max-w-[1040px] mx-auto py-12 space-y-16">

        {carGroups.map((group, index) => (
          <div key={index} className="space-y-4">

            <h2 className="text-2xl font-semibold">
              {sectionTitles[index] || "Car rentals near you"}
            </h2>

            {/* Horizontal scroll */}
            <div className="overflow-x-auto">
              <div className="flex gap-4 w-max pb-2">

                {group.map((car) => {
                  const totalPrice = car.pricePerDay * 3;

                  return (
                    <div
                      key={car.id}
                      className="w-[260px] flex-shrink-0 bg-white rounded-xl
                      shadow-sm hover:shadow-md transition"
                    >
                      {/* Image */}
                      <div className="h-[160px] rounded-t-xl overflow-hidden">
                        <img
                          src={car.imageUrl}
                          alt={car.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h4 className="font-semibold leading-tight">
                          {car.title}
                        </h4>

                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <span className="text-blue-600 font-semibold mr-1">
                            {car.rating}★
                          </span>
                          ({car.trips} trips)
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          {car.discountPercentage > 0 && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              Save {car.discountPercentage}%
                            </span>
                          )}

                          <span className="text-sm font-semibold">
                            ${totalPrice} for 3 days
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Cards;
