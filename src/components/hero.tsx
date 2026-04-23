"use client";

import Image from "next/image";
import SearchCard from "./search-card";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[550px] md:min-h-[650px] flex flex-col items-center justify-center pt-24 pb-48 overflow-visible">
      <div className="absolute inset-0 z-0 h-full w-full">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/background.svg')" }}
        />
        <div className="absolute inset-0 bg-black/35 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2.5 bg-[#FFC107] px-6 py-2.5 rounded-full shadow-lg mb-8">
          <span className="text-lg"><Image src="/logo/earth.svg" alt="tour" width={20} height={20} /></span>
          <span className="text-white font-bold text-base">Explore the world</span>
        </div>

        <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight max-w-6xl mx-auto mb-6">
          Your Gateway to Extraordinary Adventures
        </h1>

        <p className="text-white text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
          Pack your bags and let Travila redefine your travel experience. Where<br className="hidden md:block" />
          every journey is a story waiting to be told
        </p>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-[1280px] px-6 z-40">
        <SearchCard />
      </div>
    </section>
  );
}
