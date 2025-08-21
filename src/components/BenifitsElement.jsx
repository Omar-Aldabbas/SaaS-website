import { Check } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { cn } from "../lib/utils";

export const BenifitsElement = ({ desc, className = "" }) => {
  const [ref, isVisible] = useInView({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        " flex gap-2 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      )}
    >
      <Check size={30} className="rounded-full p-2 bg-primary text-white" />
      <p className={`${className}`}>{desc}</p>
      
    </div>
  );
};
