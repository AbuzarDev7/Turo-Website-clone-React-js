import React from 'react'

import cars from '../../cars'
const Cards = () => {
  return (
    <div>
      <h2>SUV rental in Oxford
</h2>
    <div className="max-w-[1300px] mx-auto px-4 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {cars.map((car) => (
      <div
        key={car.id}
        className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
      >
        <img
          src={car.imageUrl}
          alt={car.title}
          className="w-full h-[180px] object-cover"
        />

        <div className="p-4 space-y-2">
          <h3 className="font-medium text-[15px]">{car.title}</h3>

          <div className="flex items-center gap-1 text-sm text-gray-600">
            ⭐ {car.rating}
            <span className="text-gray-400">({car.trips} trips)</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-[15px] font-semibold">
              £{car.pricePerDay} <span className="text-gray-400">/ day</span>
            </p>

            {car.discountPercentage > 0 && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                {car.discountPercentage}% off
              </span>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Cards