import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import WhyMeSection from "./components/WhyMeSection";
import SocialMediaSection from "./components/SocialMediaSection";
import PricingSection from "./components/PricingSection";
import HowToSubscribeSection from "./components/HowToSubscribeSection";
import ReviewsSection from "./components/ReviewsSection";
import FinalCtaSection from "./components/FinalCtaSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <HeroSection />
      <StatsSection />
      <WhyMeSection />
      <SocialMediaSection />
      <PricingSection />
      <HowToSubscribeSection />
     
      <FinalCtaSection />
    </main>
  );
}
