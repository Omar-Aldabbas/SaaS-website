import { RatingList } from "./Rating";
import Publishing from "../assets/Publishing.png";
import Analytics from "../assets/Analytics.png";
import Engagement from "../assets/Engagement.png";
import { ProductsCard } from "./ProductsCard";

const companiesData = [
  { name: "databricks", rank: 4.8 },
  { name: "Chainalysis", rank: 4.4 },
];

export const ProductsSection = () => {
  return (
    <section id="product" className="mx-auto px-14 flex items-center m-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto p-4 g-6 min-h-screen justify-center items-center">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How we support our pratner all over the world
          </h2>
          <p className="text-brand text-xl">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RatingList companies={companiesData} />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 p-6 mt-16 md:mt-3">
          <ProductsCard
            imgSrc={Publishing}
            title="Publishing"
            desc="Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand"
          />
          <ProductsCard
            imgSrc={Analytics}
            title="Analytics"
            desc="Analyze your performance and create gorgeous reports"
          />
          <ProductsCard
            imgSrc={Engagement}
            title="Engagement"
            desc="Quickly navigate and engage with your audience"
          />
        </div>
      </div>
    </section>
  );
};
