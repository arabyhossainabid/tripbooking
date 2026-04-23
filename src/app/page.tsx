import AiDealsCTA from "@/components/ai-deals-cta";
import FeaturedTours from "@/components/featured-tours";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import OffersCarousel from "@/components/offers-carousel";
import PaymentLogos from "@/components/payment-logos";
import PopularDestinations from "@/components/popular-destinations";
import TopRatedHotels from "@/components/top-rated-hotels";
import TrustedBy from "@/components/trusted-by";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <PopularDestinations />
      <FeaturedTours />
      <OffersCarousel />
      <TopRatedHotels />
      <AiDealsCTA />
      <PaymentLogos />
      <Footer />
    </main>
  );
}
