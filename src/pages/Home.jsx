import { BenifitSection } from "../components/BenifitSection";
import { CollabsSection } from "../components/CollabsSection";
import { Contact } from "../components/Contact";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { PlansSection } from "../components/PlansSection";
import { ProductsSection } from "../components/ProductsSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CollabsSection />
      <ProductsSection />
      <FeaturesSection />
      <BenifitSection />
      <PlansSection />
      <Contact/>
    </div>
  );
};
