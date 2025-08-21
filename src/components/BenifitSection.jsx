import { BenifitsElement } from "./BenifitsElement";
import Desk from "../assets/Desk.png";
import Amanda from "../assets/Amanda.png";
import {
  Check,
  CheckCircle2,
  Image,
  KanbanSquareDashedIcon,
  MessageCircleHeart,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useInView } from "../hooks/useInView";

const Benifits = [
  "Free Consulting With Experet Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money For The Future",
  "Online Transection",
];

export const BenifitSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.4 });
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-12 p-6 min-h-screen">
      <div className="flex flex-col justify-center items-center md:items-start gap-6 max-w-3xl p-12">
        <h2 className="text-foreground text-5xl md:text-6xl font-semibold text-center md:text-left">
          What Benifit Will You Get
        </h2>

        <div className="flex flex-col gap-4 w-full">
          {Benifits.map((el, i) => (
            <BenifitsElement key={i} desc={el} className="text-brand"/>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full">
        <img
          src={Desk}
          alt="Desk and laptop"
          className=" max-w-md lg:max-w-lg h-auto p-1"
        />

        <div
          ref={ref}
          className={cn(
            "absolute  bg-white/90 p-2 rounded-xl shadow-lg transition-all duration-900",
            isVisible
              ? "opacity-100 top-1/8 -left-1/20 md:-left-1/10"
              : "opacity-0"
          )}
        >
          <div className="flex gap-3 items-center">
            <img src={Amanda} alt="Amanda" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold text-black">Amanda Yound</h5>
              <p className="text-brand text-sm">Expert in Money Saving</p>
            </div>
            <MessageCircleHeart
              className="text-white bg-primary p-2 rounded-full"
              size={30}
            />
          </div>
        </div>

        <div
          ref={ref}
          className={cn(
            "absolute opacity-0 rounded-lg bg-white p-3 flex gap-3 transition-all duration-900",
            isVisible
              ? "opacity-100 top-3/4 left-1/8"
              : "opacity-0"
          )}
        >
          <div className="flex flex-col gap-2">
            <p className="text-brand text-md ">Total income</p>
            <p className="text-black text-md font-semibold">243.50</p>
          </div>
          <KanbanSquareDashedIcon className="text-primary p-2" size={50} />
        </div>

        <div className="absolute">
          <div
            ref={ref}
            className={cn(
              "relative  bg-white/90 p-2 rounded-xl shadow-lg transition-all duration-900 flex gap-3 items-center",
              isVisible ? "opacity-100 left-2/8 md:left-3/8" : "opacity-0"
            )}
          >
            <CheckCircle2 size={40} className="text-black p-2" />
            <h5 class="text-black w-[200px]">Money Transfer Succesfull</h5>
          </div>
          <Image
            ref={ref}
            size={40}
            className={cn(
              "text-background bg-shape p-2 shadow-primary absolute ",
              "transition-all duration-900",
              isVisible
                ? "-left-1/4 md:-left-5/8 -rotate-45 opacity-100"
                : "opacity-0"
            )}
          />
        </div>
      </div>
    </section>
  );
};
