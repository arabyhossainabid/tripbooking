"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const DATA = [
  {
    id: 1,
    title: ["We Make Every", "Trips Special"],
    subtitle: "",
    image: "/images/offers/offer-3.svg",
    buttonBg: "bg-[#FFB72C]",
    isWhite: true,
    hasPill: false,
    align: "right"
  },
  {
    id: 2,
    title: ["Buy 1, Get 1 Free", "Attractions"],
    subtitle: "Limited Offers",
    image: "/images/offers/offer-1.svg",
    buttonBg: "bg-[#063FC3]",
    isWhite: false,
    hasPill: false,
    align: "left"
  },
  {
    id: 3,
    title: ["Buy 1, Get 1 Free", "Attractions"],
    subtitle: "Limited Offers",
    image: "/images/offers/offer-2.svg",
    buttonBg: "bg-[#FFB72C]",
    isWhite: false,
    hasPill: true,
    align: "left"
  }
];

const ITEMS = [...DATA, ...DATA, ...DATA, ...DATA];

export default function OffersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = width;
    }
  }, []);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const move = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -move : move,
        behavior: 'smooth'
      });
    }
  };

  const onDragStart = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollPos(scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => setIsDragging(false);

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const dist = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollPos - dist;
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative group select-none px-4 sm:px-0">
        <button
          onClick={() => handleScroll('left')}
          className="hidden sm:flex absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#EFEFEF] items-center justify-center hover:bg-gray-200 transition-all shadow-md active:scale-90"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="hidden sm:flex absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#EFEFEF] items-center justify-center hover:bg-gray-200 transition-all shadow-md active:scale-90"
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onMouseMove={onDragMove}
          className={`flex overflow-x-auto no-scrollbar pb-10 ${isDragging ? 'cursor-grabbing scroll-auto' : 'cursor-grab scroll-smooth snap-x snap-mandatory'}`}
          style={{ scrollbarWidth: 'none' }}
        >
          {ITEMS.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 w-[85%] sm:w-1/2 lg:w-1/3 px-2 sm:px-3 snap-start"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-md group/card">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover pointer-events-none"
                />

                <div className={`absolute inset-0 p-8 flex flex-col z-10 ${item.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className={`space-y-2 ${item.align === 'right' ? 'mt-auto mb-auto max-w-[200px]' : 'mt-2 max-w-[320px]'}`}>
                    {item.subtitle && (
                      <div className={`${item.hasPill ? 'bg-white px-3 py-1 rounded-md w-fit shadow-sm' : ''}`}>
                        <p className={`text-[10px] md:text-xs font-bold uppercase tracking-tight ${item.hasPill ? 'text-gray-800' : (item.isWhite ? 'text-white/90' : 'text-gray-800')}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      {item.title.map((line, i) => (
                        <div key={i} className={`${item.hasPill ? 'bg-white px-4 py-2 rounded-lg w-fit shadow-sm' : ''}`}>
                          <h3 className={`text-xl md:text-2xl font-extrabold leading-tight font-poppins ${item.hasPill ? 'text-gray-800' : (item.isWhite ? 'text-white' : 'text-gray-800')}`}>
                            {line}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button className={`flex items-center gap-2 ${item.buttonBg} text-white font-bold text-[10px] md:text-xs px-6 py-3 rounded-2xl w-fit shadow-md hover:brightness-110 transition-all active:scale-95`}>
                      View More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
