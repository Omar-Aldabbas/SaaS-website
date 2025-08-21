import { useState } from "react";
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

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => setActive(card.id)}
          className={cn(
            "snap-center shrink-0 w-[65%] md:w-[380px] " +
              "cursor-pointer flex flex-col justify-between p-5 rounded-2xl shadow-md transition-all duration-300 " +
              "min-h-[80vh] md:min-h-[500px] mx-auto",
            active === card.id
              ? "bg-gradient-to-t from-brand to-primary/90  md:scale-108"
              : "shadow-primary"
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

          <div className="flex flex-col gap-6 bg-white/80 backdrop-blur-md p-4 rounded-xl">
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
                active === card.id ? "button-gr" : "button-no text-primary"
              )}
            >
              {card.btnText}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

