import { FeatureCard1 } from "./FeatureCard1";
import { FeatureCard2 } from "./FeatureCard2";
import { FeatureCard3 } from "./FeatureCard3";
export const FeaturesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-12 px-8 py-12 mb-4 bg-background/90">

      <div className="max-w-6xl flex gap-8 flex-col justify-center md:flex-row ">
        <h3 className="text-foreground text-6xl font-semibold">
          Features You Can Get
        </h3>

        <div className="flex gap-4 items-start">
          <p className="text-brand text-lg max-w-xl">
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily.
          </p>

          <button className="button-gr rounded-full px-6 py-3 self-start w-60">
            Get Started
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  w-full max-w-5xl">
        {/* First Card */}
        <FeatureCard1 />

        {/* Second Card */}
        <FeatureCard2 />

        {/* Third Card */}
        <FeatureCard3 />
      </div>
    </section>
  );
};
