import descript from "../assets/descript.png";
import Grammarly from "../assets/Grammarly.png";
import Intercom from "../assets/Intercom.png";
import Notion from "../assets/Notion.png";
import Unsplash from "../assets/Unsplash.png";

const Logo = ({ name, src }) => (
  <div className="flex gap-2 text-5xl text-brand px-4 items-center">
    <img src={src} alt={`${name} icon`} className="h-10 w-auto" />
    <h3>{name}</h3>
  </div>
);

export const CollabsSection = () => {
  return (
    <section className="flex flex-col p-6 gap-8 mx-auto items-center overflow-hidden">
      <h2 className="my-2 text-foreground text-3xl md:text-5xl font-semibold mb-4">
        More than 25,000 teams use Collabs
      </h2>

      <div className="w-full overflow-hidden mb-4">
        <div className="flex w-max animate-scroll-x gap-8 md:gap-16 hover:[animation-play-state:paused]">
          <Logo name="descript" src={descript} />
          <Logo name="Grammarly" src={Grammarly} />
          <Logo name="Intercom" src={Intercom} />
          <Logo name="Notion" src={Notion} />
          <Logo name="Unsplash" src={Unsplash} />

          <Logo name="descript" src={descript} />
          <Logo name="Grammarly" src={Grammarly} />
          <Logo name="Intercom" src={Intercom} />
          <Logo name="Notion" src={Notion} />
          <Logo name="Unsplash" src={Unsplash} />

        </div>
      </div>
    </section>
  );
};
