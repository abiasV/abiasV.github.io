import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const groups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "PHP / Laravel",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Testing & Delivery",
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "TDD",
      "Git",
      "Docker",
      "CI/CD",
      "Agile / Scrum",
    ],
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
