import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import VirtualHackathon from "../components/VirtualHackathon";
import Partners from "@/components/Partner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <VirtualHackathon />
        <Partners />
      </main>
    </div>
  );
}
