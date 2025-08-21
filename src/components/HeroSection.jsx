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

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-2">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 w-full max-w-6xl px-12 items-center mx-auto">
        {/* Left Side */}
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-6xl md:text-6xl font-bold text-foreground leading-tight">
            We’re here to Increase your Productivity
          </h1>

          <img
            src={HeroArc}
            alt="small arc"
            className="w-[65%] h-auto object-cover rounded-lg"
          />

          <p className="w-[80%] text-foreground font-medium text-xl md:text-md">
            Let's make your work more organized and easy using the Taskio
            Dashboard with all the latest features for managing work every day.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="button-gr rounded-full py-4">Try Free Trial</button>
            <button className="button-no rounded-full font-thin flex items-center gap-2 py-4">
              <PlayCircle size={24} /> View Demo
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center px-14 md:px-0">
          <img
            src={Hero}
            alt="Man picture"
            className="w-[90%] max-w-md h-auto rounded-lg"
          />

          {/* Floating Icons */}
          <Database
            className="absolute animate-fade-in-top-right-responsive lg:animate-fade-in-top-right bg-filler p-3 rounded-lg shadow-primary "
            size={50}
          />
          <Check
            className="absolute animate-fade-in-top-left-responsive lg:animate-fade-in-top-left bg-shape p-3 rounded-lg shadow-primary"
            size={50}
          />
          <MessageSquare
            className="absolute animate-fade-in-bottom-right-2-responsive lg:animate-fade-in-bottom-right-2 bg-pink-400 p-3 rounded-lg shadow-primary"
            size={50}
          />
          {/* Credit Image */}
          <img
            src={Creadit}
            alt="Credit"
            className="absolute animate-fade-in-bottom-right-responsive lg:animate-fade-in-bottom-right hover:scale-105 transition-all duration-400"
          />
          <div className="hidden lg:block absolute rounded-lg bg-white animate-fade-in-top-left-2-responsive lg:animate-fade-in-top-left-2 max-w-[60%] p-2">
            <form
              action=""
              className="flex flex-row p-2 justify-center items-center"
            >
              <div className="flex flex-col gap-2">
                <label className="text-brand text-md ">Enter Amount</label>
                <input
                  type="text"
                  className="text-black focus:outline-none focus:ring-0 text-lg font-semibold placeholder-black placeholder:font-semibold "
                  placeholder="$450..00"
                />
                <div className="w-[120%] bg-brand h-0.5 rounded-full"></div>
              </div>
              <button className="button-gr rounded-xl w-18">Send</button>
            </form>
          </div>

          <div className="absolute rounded-lg bg-white p-3 flex gap-3 animate-fade-in-bottom-left-responsive lg:animate-fade-in-bottom-left">
            <div className="flex flex-col gap-2">
              <p className="text-brand text-md ">Total income</p>
              <p className="text-black text-md font-semibold">243.50</p>
            </div>
            <KanbanSquareDashedIcon className="text-primary p-2" size={50} />
          </div>
        </div>
      </div>
    </section>
  );
};
