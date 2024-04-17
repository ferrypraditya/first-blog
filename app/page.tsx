import CounterSection from "@/components/dashboard/CounterSection";
import HeroImage from "@/components/dashboard/HeroImage";
import HeroText from "@/components/dashboard/HeroText";
import InfoSection from "@/components/dashboard/InfoSection";
import ServiceSection from "@/components/dashboard/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[100px]">
      <HeroText />
      <HeroImage/>
      <CounterSection />
      <ServiceSection />
      <InfoSection />
    </div>
  );
}
