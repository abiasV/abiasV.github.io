import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaFacebook} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/abbasvaziri" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/abiasV" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials