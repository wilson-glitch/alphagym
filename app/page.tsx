import Hero from "@/components/Hero";
import WhyAlpha from "@/components/WhyAlpha";
import EquipmentExplorer from "@/components/EquipmentExplorer";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyAlpha />
      <EquipmentExplorer />
      <Pricing />
      <Trainers />
      <Transformations />
      <Reviews />
      <Location />
    </>
  );
}
