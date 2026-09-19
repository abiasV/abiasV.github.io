import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header__socials" aria-label="Professional links">
      <a
        href="https://www.linkedin.com/in/abbasvaziri/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/abiasV"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a href="mailto:vaziri.as@gmail.com" aria-label="Email">
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
