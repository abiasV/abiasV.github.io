import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const groups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "React Query"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs", "GraphQL"],
  },
  {
    title: "Data & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "AWS", "WordPress"],
  },
];

const Experience = () => {
  return (
    <section id="skills">
      <h5>Technologies I work with</h5>
      <h2>Tech Stack</h2>

      <div className="container experience__container">
        {groups.map((group) => (
          <article className="experience__group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="experience__content">
              {group.skills.map((skill) => (
                <div className="experience__details" key={skill}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
