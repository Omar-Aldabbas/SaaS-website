import { useState, useEffect } from "react";
import { BenifitsElement } from "./BenifitsElement";
import { cn } from "../lib/utils";

const cards = [
  {
    id: 1,
    title: "Basic",
    desc: "Have a go and test your superpowers",
    price: "Free",
    benifits: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    btnText: "Signup for free",
  },
  {
    id: 2,
    title: "Pro",
    desc: "Experiment the power of infinite possibilities",
    price: "10",
    benifits: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    btnText: "Go to pro",
  },
  {
    id: 3,
    title: "Enterprise",
    desc: "Unveil new superpowers and join the Design League",
    price: "25",
    benifits: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration - Soon",
    ],
    btnText: "Go to Business",
  },
];

export const Plans = () => {
  const [active, setActive] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {cards.map((card) => {
        const isOpen = !isMobile || active === card.id;

        return (
          <div
            key={card.id}
            onClick={() =>
              isMobile ? setActive(active === card.id ? null : card.id) : setActive(card.id)
            }
            className={cn(
              "snap-center shrink-0 cursor-pointer flex flex-col justify-between p-5 rounded-2xl shadow-md transition-all duration-300 mx-auto mb-4 md:mb-0",
              isMobile ? "w-full" : "w-[380px] min-h-[500px]",
              active === card.id && !isMobile
                ? "bg-gradient-to-t from-brand to-primary/90 scale-105"
                : "bg-background/10 shadow-primary"
            )}
          >
            <div className="flex flex-col gap-3 p-2 items-center justify-center text-center">
              <h3
                className={cn(
                  "text-3xl font-bold",
                  active === card.id ? "text-background" : "text-foreground"
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  "text-lg font-semibold",
                  active === card.id ? "text-background/90" : "text-brand"
                )}
              >
                {card.desc}
              </p>
              <p
                className={cn(
                  "text-3xl font-bold mt-2 relative",
                  active === card.id ? "text-background/90" : "text-foreground"
                )}
              >
                <span className="absolute text-base -top-2 -left-4 text-brand">
                  $
                </span>
                {card.price}
              </p>
            </div>

            {isMobile && (
              <div className="text-brand text-sm mt-1 text-center">
                {active === card.id ? "Tap to collapse ▲" : "Tap to expand ▼"}
              </div>
            )}

            {isOpen && (
              <div className="flex flex-col gap-6 bg-white/80 backdrop-blur-md p-4 rounded-xl mt-4">
                <div className="flex flex-col gap-2">
                  {card.benifits.map((b, i) => (
                    <BenifitsElement
                      key={i}
                      desc={b}
                      className="text-black text-sm md:text-base"
                    />
                  ))}
                </div>
                <button
                  className={cn(
                    "mt-4 w-full py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg border border-primary text-sm md:text-base",
                    active === card.id && !isMobile
                      ? "button-gr"
                      : "button-no text-primary"
                  )}
                >
                  {card.btnText}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
