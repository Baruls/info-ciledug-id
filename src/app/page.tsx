import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KabarTerkiniSection from "@/components/KabarTerkiniSection";
import KulinerSection from "@/components/KulinerSection";
import EksplorasiSection from "@/components/EksplorasiSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <KabarTerkiniSection />
      <KulinerSection />
      <EksplorasiSection />
      <Footer />
    </main>
  );
}
