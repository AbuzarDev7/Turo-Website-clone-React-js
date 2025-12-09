
const Btns = () => {
  return (
<div className="h-[100px] flex justify-center items-center">
  <div
    className="flex gap-4 px-2
               overflow-x-auto md:overflow-visible
               whitespace-nowrap"
  >
    <button className="bg-black text-white rounded-[8px] px-6 py-1 hover:bg-sky-700">
      <i className="ri-car-fill"></i> All
    </button>

    <button className="rounded px-6 py-1 hover:bg-gray-300">
      <i className="ri-flight-land-line"></i> Airports&Stations
    </button>

    <button className="rounded px-6 py-1 hover:bg-gray-300">
      <i className="ri-map-pin-line"></i> Nearby
    </button>

    <button className="rounded px-6 py-1 hover:bg-gray-300">
      <i className="ri-send-plane-2-fill"></i> Delivered
    </button>

    <button className="rounded px-6 py-1 hover:bg-gray-300">
      <i className="ri-building-line"></i> Cites
    </button>
  </div>
</div>

  )
}

export default Btns