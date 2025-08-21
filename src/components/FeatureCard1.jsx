import { ArrowBigUp } from "lucide-react";

export const FeatureCard1 = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col justify-center gap-8 p-6 rounded-2xl h-[85vh]">
        {/* shapes */}
        <div className="space-y-7 bg-primary/10 p-3 rounded-xl h-[90%]">
          {/* Arrow*/}
          <div className="relative">
            <div className="flex flex-col items-center gap-2 absolute top-10 left-30 rotate-35">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <div className="w-16 h-16 text-primary p-2">
                <ArrowBigUp size={40} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Rectangle + four pillers */}
          <div className="flex justify-center items-center gap-2">
            {/* rectangle */}
            <div className="w-14 h-20 bg-muted rounded"></div>

            {/* four pillers */}
            <div className="flex flex-col gap-2 w-50">
              <div className="w-[90%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[80%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[70%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[60%] bg-brand/60 h-3 rounded"></div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            {/* rectangle */}
            <div className="w-14 h-20 bg-shape rounded"></div>

            {/* four pillers */}
            <div className="flex flex-col gap-2 w-50">
              <div className="w-[90%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[80%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[70%] bg-brand/60 h-3 rounded"></div>
              <div className="w-[60%] bg-brand/60 h-3 rounded"></div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 md:gap-4 ">
            <div className="w-18 h-18 bg-brand rounded-full"></div>
            <div className="w-18 h-18 bg-shape rounded-full"></div>
            <div className="w-18 h-18 bg-primary rounded-full flex justify-center items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full "></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold text-foreground">
            Collboration Teams
          </h4>
          <p className="text-brand text-lg">
            Here you can handle projects together with team virtually
          </p>
        </div>
      </div>
    </div>
  );
};
