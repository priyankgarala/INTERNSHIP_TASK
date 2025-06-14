import Advantages from "../Advantages/page";
import Destinations from "../Destinations/page";
import HeroSection from "../HeroSection/page";
import Testimonials from "../Testimonials/page";
import TourPackages from "../TourPackages/page";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <HeroSection />
      <Destinations />
      <Advantages />
      <TourPackages />
      <Testimonials />
    </main>
  )
}