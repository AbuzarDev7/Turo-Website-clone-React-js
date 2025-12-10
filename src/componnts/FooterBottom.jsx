import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";


const FooterBottom = () => {
  return (
    <footer className="bg-gray-300">
      {/* ✅ NARROW WIDTH + SMALL SIDE MARGIN */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* ✅ COMPACT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-8">

          {/* Turo */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Turo</h4>
            <ul className="space-y-2 text-xs">
              <li>About</li>
              <li>Team</li>
              <li>Policies</li>
              <li>Careers</li>
              <li>Press</li>
              <li>OpenRoad</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Locations</h4>
            <ul className="space-y-2 text-xs">
              <li>USA (EN)</li>
              <li>Australia (EN)</li>
              <li>Canada (EN)</li>
              <li>Canada (FR)</li>
              <li>France (FR)</li>
              <li>UK (EN)</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>Why choose Turo</li>
              <li>Pitch a trip</li>
              <li>Trust & safety</li>
              <li>Get help</li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Hosting</h4>
            <ul className="space-y-2 text-xs">
              <li>List your car</li>
              <li>Calculator</li>
              <li>All-Star Hosts</li>
              <li>Host tools</li>
              <li>Insurance & protection</li>
              <li>Host learning hub</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Social */}
            <div className="flex items-center gap-3 text-sm">
              <span><a href="https://web.facebook.com/Turo/" target="blank"><Facebook color="#000000" strokeWidth={2.25} absoluteStrokeWidth /></a></span>
              <span><a href="https://www.instagram.com/turo/ " target="blank"><Instagram color="#000000" strokeWidth={2.5} absoluteStrokeWidth /></a></span>
              <span className=" text-2xl "><a href="https://www.tiktok.com/@turo" target="blank"><i class="ri-tiktok-line"></i></a></span>
              <span> <a href="https://www.youtube.com/turo" target="blank"><Youtube size={28} strokeWidth={2.25} /></a></span>
              <span className="text-[10px] border px-5 rounded py-2">
                BLOG
              </span>
            </div>

            {/* Store buttons – SMALL */}
            <div className="flex gap-2">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="w-28"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="w-28"
                alt=""
              />
            </div>

            {/* Language */}
            <div className="flex items-center gap-2 text-xs">
              <img
                src="https://flagcdn.com/w20/gb.png"
                className="w-4 h-3"
                alt=""
              />
              <span>English</span>
            </div>
          </div>
        </div>

      
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-[11px]">
          <span>©2025 Turo</span>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookie preferences</span>
          <span>Do not sell or share my personal information</span>
        </div>

      </div>
    </footer>
  );
};

export default FooterBottom;
