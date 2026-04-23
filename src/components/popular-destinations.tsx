"use client";

import Image from "next/image";

const destinations = [
  { name: "Venice", tours: 356, image: "/images/destinations/venice.svg" },
  { name: "Amsterdam", tours: 356, image: "/images/destinations/amsterdam.svg" },
  { name: "Budapest", tours: 356, image: "/images/destinations/budapest.svg" },
  { name: "Lisbon", tours: 356, image: "/images/destinations/lisbon.svg" },
  { name: "London", tours: 356, image: "/images/destinations/london.svg" },
  { name: "Ottawa", tours: 356, image: "/images/destinations/ottawa.svg" },
  { name: "Paris", tours: 356, image: "/images/destinations/venice.svg" }, // Assuming Paris uses Venice image placeholder for now
];

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-white select-none">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">Popular Destinations</h2>
          <p className="text-gray-500 mt-3 text-lg">Favorite destinations based on customer reviews</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="p-3">
                <div className="relative h-56 w-full rounded-2xl overflow-hidden">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{dest.name}</h3>
                  <p className="text-sm text-gray-400">{dest.tours} Tours</p>
                </div>
                <button className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center transition-all hover:bg-gray-200 active:scale-90">
                  <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="bg-[#0046D5] rounded-2xl p-8 flex flex-col justify-between shadow-lg min-h-[300px]">
            <h3 className="text-2xl md:text-[28px] font-bold text-white leading-tight font-poppins mt-2">
              Crafting Your Perfect Travel Experience
            </h3>

            <button className="flex items-center justify-between bg-[#FFB72C] text-white font-bold text-sm pl-8 pr-3 py-3 rounded-2xl hover:bg-orange-400 transition-all active:scale-95 group">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">Browse</span>
                <span className="text-base leading-tight">All destinations</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-[#FFB72C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
