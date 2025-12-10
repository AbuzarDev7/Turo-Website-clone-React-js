import React, { useState } from "react";
import footerSecLinks from "../footerSecLinks";

const FooterSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

       
        <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide border-b border-gray-400 mb-6">
          {footerSecLinks.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`whitespace-nowrap pb-3 text-xs sm:text-sm font-semibold uppercase transition ${
                activeIndex === i
                  ? "border-b-2 border-black text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 text-sm text-gray-800">
          {footerSecLinks[activeIndex].links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="hover:underline break-words"
            >
              {link}
            </a>
          ))}
        </div>

   
        <div className="mt-8 border-b border-gray-400"></div>

      </div>
    </div>
  );
};

export default FooterSec;
