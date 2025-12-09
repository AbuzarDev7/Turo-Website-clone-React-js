import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  return (
 <div className="w-full">
  <div className="max-w-[1400px] mx-auto px-5 md:px-20 py-4">
    
    <div className="flex items-center justify-between">

    
      <div className="flex items-center">
        <img  className='w-[100px]'  src="data:image/png;base64,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" alt="" />
      </div>

   
      <div className="flex items-center gap-4">

   
        <button className="hidden md:flex border border-gray-300 
                           px-4 py-2 rounded-full text-sm font-medium">
          Why choose Turo
        </button>

       
        <i className="ri-menu-line text-xl cursor-pointer"></i>
        <i className="ri-user-line text-xl cursor-pointer"></i>

      </div>

    </div>

  </div>
</div>

  )
}

export default Navbar
