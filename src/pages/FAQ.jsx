import { useInView } from "../hooks/useInView";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "What is Biccas Analytics?",
    answer:
      "Biccas Analytics is a cloud-based platform that helps teams monitor, track, and optimize workflows using real-time data and actionable insights. Our system integrates seamlessly with popular tools to provide a unified dashboard.",
  },
  {
    question: "How secure is my data on the cloud?",
    answer:
      "We use enterprise-grade encryption and multiple layers of security to ensure your data remains private and protected. All analytics and files are stored securely on our cloud servers, fully compliant with industry standards.",
  },
  {
    question: "Can I customize my dashboards?",
    answer:
      "Yes! You can create multiple dashboards tailored to your team’s needs. Choose from a variety of widgets, graphs, and charts to visualize the data that matters most to your organization.",
  },
  {
    question: "Does Biccas support real-time collaboration?",
    answer:
      "Absolutely. Teams can collaborate on reports, share insights, and make real-time decisions. Changes are reflected instantly across all users and devices, ensuring everyone stays up-to-date.",
  },
  {
    question: "Is there an API for developers?",
    answer:
      "Yes, Biccas provides a robust API for developers to integrate analytics with your existing tools and workflows. You can fetch data, automate reporting, and extend functionalities as needed.",
  },
  {
    question: "What kind of analytics does Biccas provide?",
    answer:
      "Biccas offers a wide range of analytics including user engagement, task completion rates, team performance metrics, cloud storage usage, and predictive insights powered by AI algorithms.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 py-16 ">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
          Frequently Asked Questions
        </h1>
        <p className="text-xl md:text-2xl text-brand max-w-3xl">
          Find answers to common questions about Biccas Analytics, our cloud
          platform, and how it can transform your team’s productivity.
        </p>
      </div>

      <div
        ref={ref}
        className={`max-w-4xl mx-auto flex flex-col gap-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-primary/20 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            onClick={() => toggleIndex(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {item.question}
              </h3>
              <ChevronDown
                size={24}
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                } text-primary`}
              />
            </div>
            <div
              className={`mt-2 text-brand text-sm md:text-base transition-all duration-500 overflow-hidden ${
                openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center mt-16">
        <p className="text-brand text-lg">
          Didn't find the answer you were looking for? Reach out to our support
          team anytime and we’ll help you get started with Biccas Analytics.
        </p>
        <button className="button-gr mt-6 py-3 px-8 rounded-full">
          Contact Support
        </button>
      </div>
    </section>
  );
};
