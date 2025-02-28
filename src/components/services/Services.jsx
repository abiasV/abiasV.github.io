import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
             <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement design into code for user interface.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon" />
              <p>Ensure website responsiveness across device.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize performance for speed and scalability.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement user interraction with JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintain code and fix bugs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrate APIs and databases for dynamic content.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Test functionality across browsers, trobleshoot issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborate with designers and backend developers.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
             <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Understand user needs, behaviors, creating intuitive, engaging user experiences.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Read, build from wireframes, prototypes for accurate frontend implementation using Figma.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Utilize design systems, style guides for visual consistency, cohesion.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement responsive, adaptive designs for cross-device compatibility, fluidity.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Know UI elements, their use for effective user interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implement interaction design for enhanced usability, engaging elements.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {<article className="service">
          <div className="service__head">
             <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design, management, implementing efficient data storage solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create, maintain robust server-side logic, core application functionality.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop APIs for database interaction, enforcing RESTful services principles.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Handle CRUD operations to enable data creation, retrieval, update, deletion.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure application scalability, manage growing data, traffic demands.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Debug, troubleshoot to maintain smooth application performance, reliability.</p>
            </li>
          </ul>
        </article> }
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services