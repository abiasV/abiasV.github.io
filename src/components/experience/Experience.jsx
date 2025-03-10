import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Bootstrapp</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>TailwindCss</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Webpack</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Next.Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>GraphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              {<BsPatchCheckFill className="experience__details-icon" />}
              <div>
                <h4>ASP.net MVC, C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
