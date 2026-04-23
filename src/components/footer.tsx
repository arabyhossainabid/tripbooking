import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#063fc3] text-white pt-16 pb-0 select-none">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div className="col-span-1">
            <div className="text-xl text-white mb-4">
              <Image src="/logo/footer-logo.svg" alt="Logo" width={200} height={50} className="h-auto" />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-xs opacity-80">
              Plan. Compare. Book with AI
            </p>
            <div className="flex items-center gap-2 text-blue-100 text-sm mb-1 opacity-80">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Need help? Call us
            </div>
            <div className="text-white font-bold text-xl">1-800-222-8888</div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-blue-100 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Community Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Jobs & Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Our Awards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-blue-100 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tour Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tour Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Ticket Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Rental Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Newsletter</h4>
            <div className="flex gap-2 bg-white rounded-full p-1.5 mb-6">
              <div className="flex items-center gap-2 px-3 flex-1">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-gray-700 text-sm outline-none flex-1 placeholder:text-gray-400 w-full"
                />
              </div>
              <button className="bg-[#FFB72C] text-white text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#ffa700] transition-all active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <h4 className="font-semibold text-white mb-3">Payments</h4>
            <div className="flex gap-1 flex-wrap">
              {[
                { src: "/logo/paypal.svg", alt: "Paypal", w: 50 },
                { src: "/logo/stripe.svg", alt: "Stripe", w: 40 },
                { src: "/logo/mastercard.svg", alt: "Mastercard", w: 35 },
                { src: "/logo/skrill.svg", alt: "Skrill", w: 40 },
              ].map((pay, i) => (
                <div key={i} className="bg-white rounded-lg h-8 flex items-center p-2">
                  <Image src={pay.src} alt={pay.alt} width={pay.w} height={20} className="object-contain h-full w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-blue-100 text-sm text-center sm:text-left opacity-80 font-medium">
            © 2024 Travila Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-blue-100 text-sm hidden md:inline opacity-80 font-medium">Follow us</span>
            <div className="flex items-center gap-4">
              {[
                { d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 6h-2c-.548 0-1 .452-1 1v2h3l-.5 3H13.5v7h-3v-7H9v-3h1.5V9c0-2.209 1.791-4 4-4H16.5v3z" },
                { d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" },
                { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 0 006.33-6.34V8.19a8.12 8.12 0 004.86 1.6V6.41a4.85 4.85 0 01-1.09-.72z" }
              ].map((social, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-transparent transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
