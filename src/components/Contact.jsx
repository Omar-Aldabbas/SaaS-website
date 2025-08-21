import { HandCoins, PlayCircle, Quote } from "lucide-react";
import Goerge from "../assets/Goerge.png";
import Beardy from "../assets/Beardy.png";
import Singh from "../assets/Singh.png";

export const Contact = () => {
  return (
    <section className="bg-secondary grid grid-cols-1 md:grid-cols-2 p-8 gap-5 items-start ">
      <div className="flex flex-col gap-4 p-2">
        <h3 className="text-white text-2xl md:text-5xl font-bold">
          What People Are Saying About Biccas
        </h3>
        <p className="text-brand text-sm md:text-base">
          Biccas makes managing your money simple, fast, and secure — anytime, anywhere.
        </p>
        <Quote size={35} fill="currentColor" className="text-brand p-1" />
        <p className="text-brand text-sm md:text-base">
          "This e-wallet app has completely simplified my life. I can send and
          receive payments effortlessly, and it’s been a real lifesaver!"
        </p>
        <p className="text-brand text-sm font-semibold">— Aria Zinanrio</p>
        <div className="flex p-2 gap-2 items-center">
          <img src={Goerge} alt="Old person" className="p-1 rounded-full w-12 h-12 object-cover" />
          <img src={Beardy} alt="Person with beard" className="p-1 rounded-full w-12 h-12 object-cover" />
          <img src={Singh} alt="Canada" className="p-1 rounded-full w-12 h-12 object-cover" />
          <PlayCircle size={50} className="p-1 text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-center items-start">
        <div className="bg-secondary-foreground p-4 md:p-6 rounded-xl w-full max-w-sm flex flex-col gap-3">
          <div className="flex justify-center">
            <div className="bg-primary/80 rounded-full p-3">
              <HandCoins size={35} className="text-white rounded-xl" />
            </div>
          </div>

          <h2 className="text-white text-xl font-semibold text-center mb-2">
            Get Started
          </h2>

          <label className="text-white font-medium text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-lg w-full bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-white font-medium text-sm">Message</label>
          <textarea
            placeholder="What are you say?"
            className="p-2 rounded-lg w-full bg-white text-black text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button className="text-white py-2 rounded-lg mt-2 w-full button-gr text-sm">
            Request Demo
          </button>

          <p className="text-center text-brand mt-1 text-sm">
            or{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Start Free Trial
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
