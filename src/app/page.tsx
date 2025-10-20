// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import Meet3DIMLISection from "@/components/sections/Meet3DIMLISection";
import NewArrivalsSection from "@/components/sections/NewArrivalsSection";
import AllStoresSection from "@/components/sections/AllStoresSection";
import JoinSection from "@/components/sections/JoinSection";
import Header from "@/components/layout/Header";
import MobileHeader from "@/components/layout/MobileHeader";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main id="app-wrapper" className="flex-grow">
        <HeroSection />
        <Meet3DIMLISection />
        <NewArrivalsSection />
        <AllStoresSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
