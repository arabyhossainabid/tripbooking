"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const HOTELS_DATA = [
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: "$48.25",
    rating: 5,
    image: "/images/hotels/luxury-room.svg",
  },
  {
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    price: "$17.32",
    rating: 5,
    image: "/images/hotels/city-view.svg",
  },
  {
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    price: "$15.63",
    rating: 5,
    image: "/images/hotels/beach-resort.svg",
  },
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    price: "$48.25",
    rating: 5,
    image: "/images/hotels/luxury-room.svg",
  }
];

const ITEMS = [...HOTELS_DATA, ...HOTELS_DATA, ...HOTELS_DATA];

export default function TopRatedHotels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-24 relative overflow-hidden select-none bg-[#E0F4F9]">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/hero-side.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="mb-12 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">Top Rated Hotels</h2>
              <p className="text-gray-500 mt-3 text-lg">Quality as judged by customers. Book at the ideal price!</p>
            </div>
            <div className="hidden sm:flex gap-4">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-all active:scale-90"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-all active:scale-90"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full relative z-10 overflow-visible">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className={`flex gap-10 overflow-x-auto no-scrollbar pb-10 ${isDragging ? 'cursor-grabbing scroll-auto' : 'cursor-grab scroll-smooth snap-x snap-mandatory'}`}
            style={{ scrollbarWidth: 'none' }}
          >
            {ITEMS.map((hotel, idx) => (
              <div
                key={idx}
                className="shrink-0 w-full lg:w-[calc((100%-80px)/3)] snap-start bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 md:h-[350px] w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover pointer-events-none"
                  />
                </div>

                <div className="bg-white rounded-2xl -mt-12 relative z-10 p-6 pt-8 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-xl md:text-[22px] leading-tight mb-4 pr-4">
                    {hotel.title}
                  </h3>

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="font-medium">{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFB72C]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl md:text-[28px] font-bold text-gray-900">{hotel.price}</span>
                      <span className="text-sm text-gray-400 font-medium"> / person</span>
                    </div>
                    <button className="bg-[#0046D5] text-white text-sm font-bold px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
