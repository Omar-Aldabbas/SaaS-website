import { Plans } from "./Plans";

export const PlansSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center p-12">
        <div className="flex flex-col gap-10 items-center ">
          <h2 className="text-foreground text-5xl font-semibold">
            Choose Plan That’s Right For You
          </h2>
          <p className="text-brand text-xl">
            Choose plan that works best for you, feel free to contact us
          </p>
          <div
            className="flex gap-2 px-4 py-2 backdrop-blur-md border border-white/20
            shadow-sm rounded-2xl"
          >
            <button className="button-no py-1 px-6">Monthly</button>
            <button className="button-gr py-1 px-6">Yearly</button>
          </div>
        </div>
        <div
         className="mt-10 flex flex-col gap-6 w-full md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
        >
          <Plans />
        </div>
      </div>
    </section>
  );
};
