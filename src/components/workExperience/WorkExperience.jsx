import "./workExperience.css";
import { BsBriefcase } from "react-icons/bs";

const roles = [
  {
    company: "ZeroOne",
    role: "Frontend Developer",
    location: "Toronto, ON",
    period: "Jan 2025 — Present",
    highlights: [
      "Develop user interfaces for 5+ international projects, using lazy loading and performance-focused frontend techniques.",
      "Manage the front-end delivery lifecycle from design through maintenance and support QA for reliable releases.",
      "Collaborate with multidisciplinary teams on scalable technical solutions, documentation, and user training.",
    ],
  },
  {
    company: "rCycle",
    role: "Software Developer (Co-op)",
    location: "Toronto, ON",
    period: "May 2024 — Aug 2024",
    highlights: [
      "Enhanced analytics, recycler, and retailer portals in collaboration with cross-functional teams.",
      "Optimized the company's WordPress site with PHP, HTML5, and CSS3, with a focus on performance and organic visibility.",
      "Developed custom WordPress themes and plugins in a local development environment for project-specific needs.",
    ],
  },
  {
    company: "SIRE",
    role: "React Developer",
    location: "Toronto, ON",
    period: "Nov 2021 — Jan 2023",
    highlights: [
      "Built scalable web applications with React.js and Next.js for startup-focused products.",
      "Integrated REST APIs to support business tools and product workflows.",
      "Collaborated with backend teams on API integration, frontend performance, and user experience.",
    ],
  },
  {
    company: "Digiato",
    role: "Web Developer",
    location: "Remote",
    period: "Jun 2020 — Nov 2021",
    highlights: [
      "Worked on a high-traffic technology news platform using React and REST APIs.",
      "Implemented real-time notification functionality to improve user engagement.",
      "Built responsive, reusable React components to speed up feature iteration and frontend development.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work">
      <h5>Professional background</h5>
      <h2>Work Experience</h2>

      <div className="container work__container">
        {roles.map((item) => (
          <article className="work__item" key={`${item.company}-${item.role}`}>
            <div className="work__icon">
              <BsBriefcase />
            </div>

            <div className="work__content">
              <div className="work__heading">
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <div className="work__meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>

              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
