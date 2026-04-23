"use client";

import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    { src: "/images/logos/casa.svg", alt: "CASA" },
    { src: "/images/logos/egypt-air.svg", alt: "EgyptAir" },
    { src: "/images/logos/abx.svg", alt: "ABX" },
    { src: "/images/logos/delta.svg", alt: "DELTA" },
    { src: "/images/logos/ata.svg", alt: "ATA Airlines" },
    { src: "/images/logos/west-jet.svg", alt: "WestJet" },
  ];

  return (
    <section className="bg-[#E8ECF9] pt-48 pb-20 select-none border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
          <div className="lg:w-[320px] shrink-0">
            <h3 className="text-2xl font-bold text-[#0F172A] font-poppins tracking-tight">Trusted by</h3>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed font-medium">
              We are a trusted partner of airlines, payment gateways, and travel services around the world.
            </p>
          </div>

          <div className="flex-1 flex flex-wrap gap-5 items-center justify-center lg:justify-start">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg px-2 flex items-center justify-center w-22 h-17"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
