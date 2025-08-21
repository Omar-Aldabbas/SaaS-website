export const Gauge = ({ value = Math.floor(Math.random() * 30 + 50) }) => {
  return (
    <div className="relative w-30 h-30 rounded-full bg-brand/50 overflow-hidden">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(var(--shape) ${value * 3.6}deg, var(--filler) ${value * 3.6}deg)`
        }}
      ></div>

      <div className="absolute inset-4 bg-gradient-to-tl from-shape via-background to-filler rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-foreground">{value}%</span>
      </div>
    </div>
  );
};
