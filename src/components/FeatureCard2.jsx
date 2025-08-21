import Graph from "../assets/Graph.png";
import { Cloud, LucideChartNoAxesColumn } from "lucide-react";

export const FeatureCard2 = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col justify-center gap-8 p-6 rounded-2xl h-[85vh]">
        {/* shapes */}
        <div className="bg-primary/10 p-3 rounded-xl h-[90%]">

          <div className="flex gap-4 bg-brand/10 p-3 rounded-3xl relative">
            <div className="flex flex-col p-3 bg-gradient-to-br from-muted to-primary/20 rounded-3xl relative">
              <div className="ml-4 mt-4 mb-4">
                <LucideChartNoAxesColumn
                  size={18}
                  className="text-white p-1 outline-8 outline-yellow-400 rounded"
                />
              </div>

              <div>
                <h3 className="mt-1 text-xl text-white font-semibold">
                  Document File
                </h3>
                <h4 className="mt-1 text-lg text-white font-semibold">
                  456 GB | 1056 Items         
                </h4>
                <div className="flex items-center justify-center absolute -top-5 -right-5">
                  <Cloud
                    size={50}
                    fill="currentColor"
                    className="text-primary p-1 bg-white rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right block */}


              <div className="bg-shape w-7 h-25 rounded-full relative top-20 -right-6"></div>

          </div>
          <img src={Graph} alt="Graph img" className="relative p-6 mt-1" />
        </div>

        {/* content */}
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-semibold text-foreground">
            Cloud Storage
          </h4>
          <p className="text-brand text-lg">
            No nedd to worry about storage! we provide storage up to 2 TB
          </p>
        </div>
      </div>
    </div>
  );
};
