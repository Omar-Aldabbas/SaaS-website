import { StarIcon } from "lucide-react";

// Helper to generate stars
const getStars = (rank, total = 5) => {
  const fullStars = Math.round(rank);
  const emptyStars = total - fullStars;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <StarIcon key={`full-${i}`} size={25} className="text-filler"  fill="currentColor"/>
      ))}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <StarIcon key={`empty-${i}`} size={25} className="text-brand" fill="currentColor" />
      ))}
    </div>
  );
};

export const RatingList = ({ companies }) => {
  return (
    <div className="flex  gap-8 p-4">
      {companies.map(({ name, rank }) => (
        <div key={name} className="flex flex-col  gap-3">
          {getStars(rank)}
          <div className="text-xl text-foreground">
            <span className="font-bold text-xl">{rank}</span> / 5 rating
          </div>
          <h3 className="text-xl text-brand font-bold ">{name}</h3>
        </div>
      ))}
    </div>
  );
};


