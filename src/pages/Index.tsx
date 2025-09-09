import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Gallery from "@/components/landing/Gallery";
import PricingPlans from "@/components/landing/PricingPlans";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <Gallery />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
