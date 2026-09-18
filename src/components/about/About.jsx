import "./about.css";
import ME from "../../assets/About-me.jpg";
import { FaAward, FaGraduationCap } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Abbas Vaziri" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Professional web development since 2020</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Humber + Software Engineering</small>
            </article>

            <article className="about__card">
              <VscRocket className="about__icon" />
              <h5>Current Build</h5>
              <small>Lighthouse Agent</small>
            </article>
          </div>

          <div className="about-text">
            <p>
              I'm a Toronto-based full-stack developer with a strong frontend focus,
              building user-focused web applications with React, Next.js,
              Node.js, REST APIs, and modern JavaScript.
            </p>
            <p>
              I completed a Postgraduate Certificate in Web Development at
              Humber College and hold a Bachelor's degree in Computer Software
              Engineering from Azad University, evaluated by WES for Canadian
              equivalency.
            </p>
            <p>
              My current focus is Lighthouse Agent, where I'm applying
              full-stack engineering, AI workflows, API integration, deployment,
              and real-user validation to a practical product.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
