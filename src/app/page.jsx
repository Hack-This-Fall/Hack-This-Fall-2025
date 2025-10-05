import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BuildStation from "../components/BuildStation";
import HackerHouse from "@/components/HackerHouse";
import AwardCeremony from "@/components/AwardCeremony";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <BuildStation />
        <HackerHouse />
        <AwardCeremony />
      </main>
    </div>
  );
}
