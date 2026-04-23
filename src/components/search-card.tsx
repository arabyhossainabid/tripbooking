"use client";

import { useState } from "react";
import {
  ToursIcon,
  HotelsIcon,
  LocationIcon,
  CalendarIcon,
  GuestIcon,
  SearchIcon,
  ChevronIcon
} from "./icons";

export default function SearchCard() {
  const [activeTab, setActiveTab] = useState<'hotels' | 'tours'>('hotels');

  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('New York, USA');

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('02 January 2024');

  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState('2 adults, 2 children');

  const locations = ["London, UK", "Paris, France"];
  const dates = ["05 February 2024", "12 March 2024"];
  const guests = ["1 adult", "2 adults, 1 child"];

  const closeAll = () => {
    setIsLocationOpen(false);
    setIsDateOpen(false);
    setIsGuestOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-8 border border-gray-50">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab('tours')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all ${activeTab === 'tours' ? 'bg-[#FFB700] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            <ToursIcon className={activeTab === 'tours' ? 'text-white' : 'text-gray-400'} />
            Tours
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center gap-3 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all ${activeTab === 'hotels' ? 'bg-[#FFB700] text-white shadow-md' : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            <HotelsIcon className={activeTab === 'hotels' ? 'text-white' : 'text-gray-400'} />
            Hotels
          </button>
        </div>

        <button className="hidden sm:block text-[14px] font-medium text-gray-400 hover:text-gray-900 transition-colors">
          Need some help?
        </button>
      </div>

      <div className="border border-gray-100 rounded-2xl p-1.5 bg-white flex flex-col lg:flex-row items-stretch lg:items-center gap-0">
        
        <div 
          className="flex-1 px-6 lg:px-8 py-4 border-b lg:border-b-0 lg:border-r border-gray-50 group cursor-pointer relative"
          onClick={() => {
            const next = !isLocationOpen;
            closeAll();
            setIsLocationOpen(next);
          }}
        >
          <label className="block text-[11px] lg:text-[13px] font-medium text-gray-400 mb-1 lg:mb-2 uppercase tracking-wide">Location</label>
          <div className="flex items-center gap-3">
            <LocationIcon className="text-gray-300" />
            <span className="text-[15px] lg:text-[16px] font-bold text-gray-900">{selectedLocation}</span>
            <ChevronIcon className={`ml-auto transition-transform ${isLocationOpen ? 'rotate-180' : 'text-gray-400'}`} />
          </div>

          {isLocationOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 lg:mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {locations.map((loc) => (
                <div 
                  key={loc}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLocation(loc);
                    setIsLocationOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-50 text-[14px] font-bold text-gray-700 transition-colors"
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        <div 
          className="flex-[1.2] px-6 lg:px-8 py-4 border-b lg:border-b-0 lg:border-r border-gray-50 group cursor-pointer relative"
          onClick={() => {
            const next = !isDateOpen;
            closeAll();
            setIsDateOpen(next);
          }}
        >
          <label className="block text-[11px] lg:text-[13px] font-medium text-gray-400 mb-1 lg:mb-2 uppercase tracking-wide">Check In & Check Out</label>
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-gray-300" />
            <span className="text-[15px] lg:text-[16px] font-bold text-gray-900">{selectedDate}</span>
            <ChevronIcon className={`ml-auto transition-transform ${isDateOpen ? 'rotate-180' : 'text-gray-400'}`} />
          </div>

          {isDateOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 lg:mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-2">
              {dates.map((date) => (
                <div 
                  key={date}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDate(date);
                    setIsDateOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-50 text-[14px] font-bold text-gray-700 transition-colors"
                >
                  {date}
                </div>
              ))}
            </div>
          )}
        </div>

        <div 
          className="flex-1 px-6 lg:px-8 py-4 lg:border-r border-gray-50 lg:border-b-0 border-b group cursor-pointer relative"
          onClick={() => {
            const next = !isGuestOpen;
            closeAll();
            setIsGuestOpen(next);
          }}
        >
          <label className="block text-[11px] lg:text-[13px] font-medium text-gray-400 mb-1 lg:mb-2 uppercase tracking-wide">Guest</label>
          <div className="flex items-center gap-3">
            <GuestIcon className="text-gray-300" />
            <span className="text-[15px] lg:text-[16px] font-bold text-gray-900 whitespace-nowrap">{selectedGuest}</span>
            <ChevronIcon className={`ml-auto transition-transform ${isGuestOpen ? 'rotate-180' : 'text-gray-400'}`} />
          </div>

          {isGuestOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 lg:mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-2">
              {guests.map((g) => (
                <div 
                  key={g}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedGuest(g);
                    setIsGuestOpen(false);
                  }}
                  className="px-6 py-3 hover:bg-gray-50 text-[14px] font-bold text-gray-700 transition-colors"
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-2 lg:p-2">
          <button className="h-14 lg:h-16 w-full lg:px-10 bg-[#0A45D1] hover:bg-[#0838A8] text-white rounded-full shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 font-bold text-base transition-all active:scale-95 group whitespace-nowrap px-8">
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
