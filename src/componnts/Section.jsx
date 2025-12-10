import React from 'react'

const Section = () => {
  return (
    <div className="px-4 md:px-10 mt-4">
      <div className="max-w-[1100px] mx-auto">

        {/* IMAGE BACKGROUND */}
        <div
          className="
          min-h-[260px] md:h-[360px]
          rounded-2xl
          bg-[url('https://turo.com/_next/static/images/7a4aa6568584bb8235de575684908460.webp')]
          bg-cover bg-center
          flex items-center
          "
        >
          <div className="w-full flex flex-col items-center gap-4 px-3">

            {/* ✅ TEXT (responsive) */}
            <div className="text-center max-w-[700px]">
              <h2 className="
                text-xl sm:text-2xl md:text-4xl
                font-bold text-white
              ">
                Skip the rental car counter
              </h2>

              <p className="
                text-sm sm:text-base md:text-xl
                text-white mt-2
              ">
                Rent just about any car, just about anywhere
              </p>
            </div>

            {/* ✅ FORM (responsive & safe) */}
            <div className="w-full mt-1">
              <div
                className="
                max-w-[900px] mx-auto
                bg-white rounded-2xl
                shadow-md
                px-3 py-3 md:px-4 md:py-4
              "
              >
                <div
                  className="
                  flex flex-col
                  md:flex-row md:items-center
                  gap-3 md:gap-4
                "
                >

                  {/* WHERE */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Where</p>
                    <input
                      className="w-full text-sm outline-none"
                      placeholder="City, airport, address or hotel"
                    />
                  </div>

                  <div className="hidden md:block h-10 w-px bg-gray-200" />

                  {/* FROM */}
                  <div className="flex flex-1 gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">From</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add dates</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block">
                      <p className="text-xs invisible mb-1">Time</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add time</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block h-10 w-px bg-gray-200" />

                  {/* UNTIL */}
                  <div className="flex flex-1 gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Until</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add dates</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block">
                      <p className="text-xs invisible mb-1">Time</p>
                      <div className="text-sm text-gray-600 flex justify-between">
                        <span>Add time</span>
                        <i className="ri-arrow-down-s-line" />
                      </div>
                    </div>
                  </div>

                  {/* SEARCH */}
                  <button
                    className="
                    w-full md:w-12
                    h-11 md:h-12
                    bg-indigo-600 hover:bg-indigo-700
                    rounded-xl
                    text-white
                    flex items-center justify-center
                  "
                  >
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
