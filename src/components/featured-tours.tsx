"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const TOURS_DATA = [
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    duration: "2 days 3 nights",
    guests: "4-6 guest",
    price: "$48.25",
    badge: { text: "Top Rated", color: "text-orange-400" },
    image: "/images/tours/california-sunset.svg",
  },
  {
    title: "NYC: Food Tastings and Culture Tour",
    location: "Manchester, England",
    duration: "3 days 3 nights",
    guests: "4-6 guest",
    price: "$17.32",
    badge: { text: "Best Sale", color: "text-green-500" },
    image: "/images/tours/nyc-food.svg",
  },
  {
    title: "Grand Canyon Horseshoe Bend 2 days",
    location: "Manchester, England",
    duration: "7 days 6 nights",
    guests: "4-6 guest",
    price: "$15.63",
    badge: { text: "25% Off", color: "text-orange-500" },
    image: "/images/tours/grand-canyon.svg",
  },
  {
    title: "California Sunset/Twilight Boat Cruise",
    location: "Manchester, England",
    duration: "2 days 3 nights",
    guests: "4-6 guest",
    price: "$48.25",
    badge: { text: "Top Rated", color: "text-orange-400" },
    image: "/images/tours/california-sunset.svg",
  }
];

const ITEMS = [...TOURS_DATA, ...TOURS_DATA, ...TOURS_DATA];

export default function FeaturedTours() {
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
    <section className="py-24 bg-white overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="mb-12 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">Our Featured Tours</h2>
              <p className="text-gray-500 mt-3 text-lg">Favorite destinations based on customer reviews</p>
            </div>
            <div className="hidden sm:flex gap-4">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-[#EFEFEF] flex items-center justify-center hover:bg-gray-200 transition-all active:scale-90"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-[#EFEFEF] flex items-center justify-center hover:bg-gray-200 transition-all active:scale-90"
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
            {ITEMS.map((tour, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[300px] md:w-[400px] snap-start bg-white rounded-2xl overflow-hidden"
              >
                  <div className="relative h-64 md:h-[380px] w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover pointer-events-none"
                  />
                  {tour.badge && (
                    <div className="absolute top-6 left-6 bg-white px-5 py-2 rounded-full shadow-sm z-20">
                      <span className={`text-[13px] font-bold ${tour.badge.color}`}>{tour.badge.text}</span>
                    </div>
                  )}
                </div>

                  <div className="bg-white rounded-2xl -mt-12 relative z-10 p-7 pt-8 border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-xl md:text-[24px] leading-tight mb-4 pr-4">
                    {tour.title}
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400 text-sm md:text-base">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {tour.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a7 7 0 00-7 7v1h11v-1a7 7 0 00-7-7z" />
                        </svg>
                        {tour.guests}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl md:text-[26px] font-bold text-gray-900">{tour.price}</span>
                      <span className="text-sm text-gray-400 font-medium"> / person</span>
                    </div>
                    <button className="bg-[#0046D5] text-white text-[13px] font-bold px-7 py-2.5 rounded-full hover:bg-blue-700 transition-all active:scale-95">
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
