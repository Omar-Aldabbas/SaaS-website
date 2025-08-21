import { BadgeCheck, Cloud, Compass, ShoppingBagIcon } from "lucide-react";
import { Gauge } from "./Guage";

export const FeatureCard3 = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col justify-center gap-8 p-6 rounded-2xl h-[85vh]">
        {/* shapes */}
        <div className="space-y-7 bg-primary/10 p-3 rounded-xl h-[90%] relative">
          {/* Arrow*/}
          <Gauge />
          <Compass size={60} className="p-3 absolute top-0 right-0 m-9 rounded-xl bg-filler text-shape -rotate-12 shadow-primary"/>
          <div className=" flex flex-col gap-3 p-2 overflow-hidden bg-brand/10 rounded-xl relative">
            <div className="flex gap-2 bg-white/99 p-3 rounded-xl relative -right-15 animate-fade-in">
              <Cloud
                size={50}
                fill="currentColor"
                className="text-white/80 p-1 bg-shape rounded-lg"
              />
              <div className="flex flex-col gap-2 w-50">
                <div className="w-[90%] bg-brand/60 h-3 rounded"></div>
                <div className="w-[60%] bg-brand/60 h-2 rounded"></div>
                <div className="w-[80%] bg-brand/60 h-2 rounded">
                  <div className="w-[80%] bg-primary h-2 rounded"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 bg-white/99 p-5 rounded-xl relative -right-5 animate-fade-in">
              <ShoppingBagIcon
                size={60}
                fill="currentColor"
                className="text-white/80 p-1 bg-shape rounded-lg shadow shadow-primary"
              />
              <div className="flex flex-col gap-2 w-50">
                <div className="w-[90%] bg-brand/60 h-3 rounded"></div>
                <div className="w-[60%] bg-brand/60 h-1 rounded"></div>
                <div className="w-[80%] bg-brand/60 h-2 rounded">
                  <div className="w-[70%] bg-primary h-2 rounded"></div>
                </div>
                <div className="w-[90%] bg-brand/60 h-1 rounded">
                  <div className="w-[90%] bg-filler/60 h-1 rounded"></div>
                </div>
              </div>
            </div>

            <div className="absolute bg-filler rounded-xl p-2">
              <BadgeCheck className="text-shape " size={40}/>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold text-foreground">
            Daily Analytics
          </h4>
          <p className="text-brand text-lg">
            We provide useful information. making it easier for Everyone day
          </p>
        </div>
      </div>
    </div>
  );
};
