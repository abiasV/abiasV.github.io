import "./workExperience.css";
import { BsBriefcase } from "react-icons/bs";

const roles = [
  {
    company: "rCycle",
    role: "Web Developer",
    location: "Toronto, Canada",
    period: "May 2024 — Sep 2024",
    highlights: [
      "Built and maintained WordPress pages, theme features, and plugin-related functionality using PHP, JavaScript, and React.",
      "Improved technical SEO, indexing, metadata, robots.txt, and Search Console readiness.",
      "Supported email and subscriber data workflows, including list cleanup and import quality.",
    ],
  },
  {
    company: "SIRE",
    role: "React Developer",
    location: "Remote",
    period: "Nov 2021 — Jan 2023",
    highlights: [
      "Developed reusable React interfaces and application features for production web experiences.",
      "Worked with component-based architecture, API-driven data, and responsive frontend implementation.",
      "Collaborated on feature delivery, debugging, and ongoing UI improvements.",
    ],
  },
  {
    company: "Digiato",
    role: "React Developer",
    location: "Iran",
    period: "Earlier experience",
    highlights: [
      "Built and maintained React-based user interfaces for a high-content web environment.",
      "Worked on responsive frontend components, JavaScript functionality, and product-facing improvements.",
      "Strengthened practical experience with modern frontend development before moving to Canada.",
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
