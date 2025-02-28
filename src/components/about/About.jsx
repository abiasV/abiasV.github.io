import "./about.css";
import ME from "../../assets/About-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>56 Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>11 Completed</small>
            </article>
          </div>
          <h3 className="about-text">
            Full stack developer with a computer engineering background and over 4 years of experience. Recently completed a Post-Graduate Certificate in Web Development at Humber College. Proficient in JavaScript, MERN stack, PHP, REST and GraphQL API, and advanced front-end and back-end technologies. Developed 5+ scalable, secure applications with a focus on optimal user experience.
            <br /> <br />
            Please take a look at one of my projects, <a href="https://github.com/abiasV/CodeLance">CodeLance</a>
          </h3>
          <a href="#contact" className="btn btn-primary">
            Lets' Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
