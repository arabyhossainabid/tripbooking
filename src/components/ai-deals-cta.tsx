import Image from "next/image";

export default function AiDealsCTA() {
  return (
    <section className="py-6 bg-white select-none">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="rounded-2xl overflow-hidden relative bg-linear-to-br from-brand-blue via-[#2548D4] to-brand-blue min-h-[320px]">
          <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-white/6 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute right-20 bottom-0 w-48 h-48 rounded-full bg-white/4 translate-y-1/3"></div>

          <div className="relative z-10 p-8 md:p-16 max-w-3xl">
            <h2 className="text-3xl md:text-[44px] font-bold text-white leading-tight mb-4 font-poppins">
              Find The Best Travel<br />Deals Instantly With AI!
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-xl opacity-80">
              No more endless searching! Our AI scans thousands of travel packages to find you the best deals - Whether it&apos;s a budget getaway or a luxury escape, we&apos;ll match you with the best deal — instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-white text-gray-900 font-medium px-8 py-3.5 rounded-2xl hover:bg-gray-100 transition-all active:scale-95 shadow-lg group">
                <Image src="/logo/apple.svg" alt="App Store" width={24} height={24} className="w-6 h-6 transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase leading-tight tracking-wider">Download on the</div>
                  <div className="font-bold text-base leading-tight">Apple Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-white text-gray-900 font-medium px-8 py-3.5 rounded-2xl hover:bg-gray-100 transition-all active:scale-95 shadow-lg group">
                <Image src="/logo/play-store.svg" alt="Google Play" width={24} height={24} className="w-6 h-6 transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase leading-tight tracking-wider">Get in on</div>
                  <div className="font-bold text-base leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
