import Goerge from "../assets/Goerge.png";
import Beardy from "../assets/Beardy.png";
import Amanda from "../assets/Amanda.png";
import { CheckCircle, Users, Trophy } from "lucide-react";
import { useInView } from "../hooks/useInView";

const teamMembers = [
  { id: 1, name: "George Johnson", role: "CEO", image: Goerge },
  { id: 2, name: "Michael Lee", role: "CTO", image: Beardy },
  { id: 3, name: "Sophia Brown", role: "Designer", image: Amanda },
];

export const About = () => {
  const [missionRef, missionVisible] = useInView({ threshold: 0.2 });
  const [teamRef, teamVisible] = useInView({ threshold: 0.2 });
  const [statsRef, statsVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="px-5 py-16 bg-background">

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-brand max-w-3xl">
          We are a passionate team dedicated to helping users boost productivity
          with Biccas Dashboard. Our goal is to make your work smarter, faster,
          and more organized.
        </p>
      </div>


      <div
        ref={missionRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-700 ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {[
          {
            icon: <CheckCircle size={36} className="text-primary" />,
            title: "Our Mission",
            desc: "Empower teams to organize, track, and accomplish tasks efficiently.",
          },
          {
            icon: <Users size={36} className="text-secondary" />,
            title: "Our Vision",
            desc: "To be the go-to platform for productivity worldwide.",
          },
          {
            icon: <Trophy size={36} className="text-brand" />,
            title: "Our Values",
            desc: "Innovation, collaboration, and user-first design.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-6 rounded-3xl flex flex-col items-center text-center gap-3 border border-primary/20 hover:scale-105 transition-transform duration-500"
          >
            <div>{item.icon}</div>
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
            <p className="text-brand text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div
        ref={teamRef}
        className={`max-w-6xl mx-auto text-center mb-16 transition-all duration-700 ${
          teamVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="text-4xl font-bold text-foreground mb-8">Meet the Team</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/70 backdrop-blur-md rounded-3xl p-4 flex flex-col items-center gap-3 border border-secondary/30 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-primary"
              />
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-brand text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={statsRef}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center transition-all duration-700 ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "120K", label: "Active Users" },
          { number: "15", label: "Awards Won" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-500 border border-primary/20"
          >
            <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</p>
            <p className="text-brand mt-1 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
