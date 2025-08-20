import { useInView } from "../hooks/useInView";

 export const ProductsCard = ({ imgSrc, title, desc }) => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex gap-3 items-start p-2 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={imgSrc}
        alt={`${title} icon`}
        className="w-16 h-16 p-4 rounded-lg shadow-xl bg-muted-foreground"
      />
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-4xl">{title}</h3>
        <p className="text-brand text-xl">{desc}</p>
      </div>
    </div>
  );
};
