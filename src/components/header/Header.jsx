import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Profile.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="header__content">
          <p className="header__eyebrow">Toronto-based Full-Stack Developer</p>
          <h1>Hi, I'm Abbas Vaziri.</h1>
          <h2>
            I build practical web products with React, Node.js, and modern
            full-stack technologies.
          </h2>
          <p className="header__summary">
            I turn product requirements into responsive interfaces, reliable
            APIs, and production-ready applications — with a focus on clear
            user experiences and maintainable code.
          </p>

          <CTA />
          <HeaderSocials />
        </div>

        <div className="header__visual" aria-label="Portrait of Abbas Vaziri">
          <div className="header__photo-frame">
            <img src={ME} alt="Abbas Vaziri" />
          </div>

          <div className="header__focus-card">
            <span>Currently building</span>
            <strong>Lighthouse Agent</strong>
            <small>AI growth workflows for Etsy sellers</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
