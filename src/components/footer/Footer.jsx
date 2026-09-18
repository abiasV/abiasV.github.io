import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Abbas Vaziri
      </a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#skills">Tech Stack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/abiasV" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/abbasvaziri/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href="mailto:vaziri.as@gmail.com" aria-label="Email">
          <MdOutlineEmail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Abbas Vaziri. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
