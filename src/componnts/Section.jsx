import React from 'react'

const Section = () => {
  return (
    /* ✅ Screen padding */
    <div className="px-4 md:px-10">
      {/* ✅ Width control (Turo style) */}
      <div className="max-w-[1090px] mx-auto">

        <div
          className="h-[340px] rounded-2xl
          bg-[url('https://turo.com/_next/static/images/7a4aa6568584bb8235de575684908460.webp')]
          bg-cover bg-center"
        >
          <div className="h-full flex flex-col items-center justify-center gap-3 px-4">

            <h2 className="text-4xl font-bold text-white text-center">
              Skip the rental car counter
            </h2>

            <p className="text-xl text-white text-center">
              Rent just about any car, just about anywhere
            </p>

            {/* SEARCH */}
            <div className="w-full mt-3">
              <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-md px-4 py-3">

                <div className="flex flex-col md:flex-row md:items-center gap-4">

                  <div className="flex-1 md:px-3">
                    <p className="text-xs text-gray-500 mb-1">Where</p>
                    <input
                      className="w-full text-sm outline-none"
                      placeholder="City, airport, address or hotel"
                    />
                  </div>

                  <div className="hidden md:block h-10 w-px bg-gray-200" />

                  <div className="flex flex-1 gap-4 md:px-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">From</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add dates</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs invisible mb-1">Time</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add time</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block h-10 w-px bg-gray-200" />

                  <div className="flex flex-1 gap-4 md:px-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Until</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add dates</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs invisible mb-1">Time</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add time</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                  </div>

                  <button className="w-full md:w-12 h-12 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white flex items-center justify-center">
                    <i className="ri-search-line text-lg"></i>
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Section
