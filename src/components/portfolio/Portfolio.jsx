import "./portfolio.css";
import LIGHTHOUSE from "../../assets/lighthouse-project.png";
import CODELANCE from "../../assets/codelance-project.png";
import BLOGCMS from "../../assets/blogcms-thumb.svg";
import EXPENSE from "../../assets/portfolio1.jpg";
import RICKMORTY from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: LIGHTHOUSE,
    title: "Lighthouse Agent",
    description:
      "A full-stack AI product for Etsy sellers that turns shop signals into prioritized growth actions with approval, verification, and outcome tracking.",
    stack: ["React", "Node.js", "Express", "AI Workflows", "Etsy API"],
    demo: "https://lighthouse-agent.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    image: CODELANCE,
    title: "CodeLance — Full-Stack Freelancing Platform",
    description:
      "A MERN capstone with employer, freelancer, and admin roles, OTP authentication, proposals, dashboards, and role-based workflows.",
    stack: ["React", "Node.js", "MongoDB", "React Query", "Tailwind"],
    github: "https://github.com/abiasV/CodeLance",
  },
  {
    id: 3,
    image: EXPENSE,
    title: "Expense Tracker — GraphQL",
    description:
      "A MERN expense tracker built with Apollo GraphQL, authentication, mutations, relational data, and deployment on Render.",
    stack: ["React", "Node.js", "MongoDB", "Apollo GraphQL"],
    github: "https://github.com/abiasV/Expense-graphql",
    demo: "https://expense-graphql.onrender.com/",
  },
  {
    id: 4,
    image: BLOGCMS,
    title: "Blog CMS",
    description:
      "A role-based blog administration system for managing content, users, permissions, and CRUD workflows.",
    stack: ["PHP", "MySQL", "Authentication", "CRUD"],
    github: "https://github.com/abiasV/Blog-CMS",
  },
  {
    id: 5,
    image: RICKMORTY,
    title: "Rick and Morty SPA",
    description:
      "A React single-page application focused on API integration, async data fetching, responsive UI, and reusable components.",
    stack: ["React", "Vite", "REST API", "CSS"],
    github: "https://github.com/abiasV/Rick-and-Morty",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Selected work</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, stack, github, demo, featured }) => (
          <article
            key={id}
            className={`portfolio__item ${featured ? "portfolio__item--featured" : ""}`}
          >
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>

            <div className="portfolio__body">
              {featured && <span className="portfolio__featured-label">Current Product</span>}
              <h3>{title}</h3>
              <p>{description}</p>

              <div className="portfolio__stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="portfolio__item-cta">
                {github && (
                  <a href={github} className="btn" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
