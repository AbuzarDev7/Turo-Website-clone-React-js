import React from 'react'

const Section = () => {
    return (
        <div className=' w-full h-[400px]'>
            <div className="h-[420px] rounded-2xl bg-[url('https://turo.com/_next/static/images/7a4aa6568584bb8235de575684908460.webp')] bg-cover bg-center">
                <div className=' h-full flex justify-center items-center flex-col gap-3'>
                    <h2 className=' text-4xl text-white font-bold'>Skip the rental car counter</h2>
                    <p className=' text-xl  text-white'>Rent just about any car, just about anywhere</p>
                    <div className="w-full px-3">
                        <div
                            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md
               px-4 py-4 md:py-3"
                        >
                            <div
                                className="flex flex-col md:flex-row
                 md:items-center gap-4 md:gap-0"
                            >


                                <div className="flex-1 md:px-3">
                                    <p className="text-xs text-gray-500 font-medium mb-1">Where</p>
                                    <input
                                        type="text"
                                        placeholder="City, airport, address or hotel"
                                        className="w-full text-sm outline-none"
                                    />
                                </div>


                                <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                                {/* FROM */}
                                <div className="flex flex-1 gap-4 md:px-3">
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 font-medium mb-1">From</p>
                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            <span>Add dates</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 font-medium mb-1 invisible">
                                            Time
                                        </p>
                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            <span>Add time</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>
                                </div>


                                <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                                <div className="flex flex-1 gap-4 md:px-3">
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 font-medium mb-1">Until</p>
                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            <span>Add dates</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 font-medium mb-1 invisible">
                                            Time
                                        </p>
                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            <span>Add time</span>
                                            <i className="ri-arrow-down-s-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto md:pl-3">
                                    <button
                                        className="w-full md:w-12 h-12
                     bg-indigo-600 hover:bg-indigo-700
                     rounded-xl flex items-center justify-center
                     text-white"
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