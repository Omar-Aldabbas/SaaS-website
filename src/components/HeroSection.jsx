import { cn } from "../lib/utils";
import HeroArc from "../assets/arc.png";
import Hero from "../assets/Hero.png";
import Creadit from "../assets/Creadit.png";
import {
  Check,
  Database,
  KanbanSquareDashedIcon,
  MessageSquare,
  PlayCircle,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

export const HeroSection = () => {
  const [heroRef, heroVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative min-h-screen flex items-center justify-center p-2 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full max-w-6xl px-6 items-center mx-auto">
        <div className="flex flex-col gap-6 justify-center w-full">
          <h1 className="text-6xl md:text-6xl font-bold text-foreground leading-tight">
            We’re here to Increase your Productivity
          </h1>

          <img
            src={HeroArc}
            alt="small arc"
            className="w-[90%] md:w-[65%] h-auto object-cover rounded-lg"
          />

          <p className="w-[80%] text-foreground font-medium text-xl md:text-md">
            Let's make your work more organized and easy using the Taskio
            Dashboard with all the latest features for managing work every day.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="button-gr rounded-full py-4">
              Try Free Trial
            </button>
            <button className="button-no rounded-full font-thin flex items-center gap-2 py-4">
              <PlayCircle size={24} /> View Demo
            </button>
          </div>
        </div>

        <div
          ref={heroRef}
          className="relative flex justify-center items-center w-full h-[500px]"
        >
          <img
            src={Hero}
            alt="Man picture"
            className="w-[90%] h-auto rounded-lg"
          />

          <div className="absolute w-full h-full">
            <Database
              className={cn(
                "absolute bg-filler p-3 rounded-lg transition-all duration-700",
                heroVisible
                  ? "opacity-100 translate-x-95 translate-y-10  md:translate-x-120 md:-translate-y-5 rotate-30"
                  : "opacity-0 translate-x-70 translate-y-20 md:translate-x-80 md:translate-y-2"
              )}
              size={50}
            />

            <Check
              className={cn(
                "absolute bg-shape p-3 rounded-lg transition-all duration-700",
                heroVisible
                  ? "opacity-100 md:-translate-x-15 md:translate-y-25 -rotate-30"
                  : "opacity-0 md:translate-x-10 ms:translate-y-50"
              )}
              size={50}
            />

            <MessageSquare
              className={cn(
                "absolute bg-pink-400 p-3 rounded-lg transition-all duration-700",
                heroVisible
                  ? "opacity-100 translate-x-70 translate-y-115 md:translate-x-90 md:translate-y-135 rotate-30"
                  : "opacity-0 translate-x-60 translate-y-100"
              )}
              size={50}
            />

            <img
              src={Creadit}
              alt="Credit"
              className={cn(
                "absolute transition-all duration-700 hover:scale-105 h-auto max-w-[30vw]",
                heroVisible
                  ? "opacity-100 translate-x-75 translate-y-65 md:translate-x-100 md:translate-y-75 "
                  : "opacity-0 translate-x-60 translate-y-50"
              )}
            />

            <div
              className={cn(
                "hidden lg:block absolute bg-white rounded-lg max-w-[60%] p-2 transition-all duration-700",
                heroVisible
                  ? "opacity-100 -translate-x-30 -translate-y-5"
                  : "opacity-0 -translate-x-15 -translate-y-0"
              )}
            >
              <form className="flex flex-row p-2 justify-center items-center">
                <div className="flex flex-col gap-2">
                  <label className="text-brand text-md">Enter Amount</label>
                  <input
                    type="text"
                    className="text-black focus:outline-none focus:ring-0 text-lg font-semibold placeholder-black placeholder:font-semibold"
                    placeholder="$450..00"
                  />
                  <div className="w-[120%] bg-brand h-0.5 rounded-full"></div>
                </div>
                <button className="button-gr rounded-xl w-18">Send</button>
              </form>
            </div>

            <div
              className={cn(
                "absolute rounded-lg bg-white p-3 flex gap-3 transition-all duration-700 max-w-[35vw] h-auto",
                heroVisible
                  ? "opacity-100 -translate-x-5 translate-y-80 md:-translate-x-20 md:translate-y-105"
                  : "opacity-0 -translate-x-10 translate-y-80"
              )}
            >
              <div className="flex flex-col gap-2">
                <p className="text-brand text-md">Total income</p>
                <p className="text-black text-md font-semibold">243.50</p>
              </div>
              <KanbanSquareDashedIcon className="text-primary p-2" size={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
