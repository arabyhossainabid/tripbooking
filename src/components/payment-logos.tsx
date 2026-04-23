import Image from "next/image";

export default function PaymentLogos() {
  const logos = [
    { src: '/logo/paypal.svg', alt: 'PayPal', width: 100 },
    { src: '/logo/stripe.svg', alt: 'Stripe', width: 80 },
    { src: '/logo/payoneer.svg', alt: 'Payoneer', width: 100 },
    { src: '/logo/visa.svg', alt: 'VISA', width: 110 },
    { src: '/logo/cash-app.svg', alt: 'Cash App', width: 90 },
    { src: '/logo/bitcoin.svg', alt: 'Bitcoin', width: 90 },
    { src: '/logo/discover.svg', alt: 'Discover', width: 100 },
  ];

  return (
    <section className="py-10 md:py-20 bg-white border-t border-gray-100 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <div className="flex flex-wrap items-center justify-center gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={32}
                className="h-6 md:h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
