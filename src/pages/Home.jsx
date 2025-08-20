import { CollabsSection } from "../components/CollabsSection";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CollabsSection />
      <ProductsSection />
    </div>
  );
};
