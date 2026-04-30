"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      <div className="bg-[#0D2167] text-white py-2.5 px-4 text-center text-xs md:text-sm font-manrope">
        Autodesigner 2.0 is here. The most popular UI generator just got even better!
      </div>

      <nav className={`transition-all duration-300 w-full ${isScrolled ? "bg-black/40 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.svg"
              alt="tripbooking.ai"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-bold text-yellow-400">Home</Link>
            <Link href="#" className="text-sm font-bold text-white hover:text-yellow-400 transition-colors">Tours</Link>
            <Link href="#" className="text-sm font-bold text-white hover:text-yellow-400 transition-colors">Hotels</Link>
            <Link href="#" className="text-sm font-bold text-white hover:text-yellow-400 transition-colors">Blog</Link>
            <Link href="#" className="text-sm font-bold text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link href="#" className="text-sm font-bold text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-8">
            <button className="hidden lg:flex items-center gap-2 text-sm font-bold text-white hover:text-yellow-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              Search
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-bold px-5 sm:px-8 py-2.5 rounded-full shadow-lg transition-all active:scale-95">
              Sign In
            </button>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
