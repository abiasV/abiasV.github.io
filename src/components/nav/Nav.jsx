import "./nav.css";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { RiBookLine, RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const items = [
    ["#home", <AiOutlineHome />],
    ["#about", <AiOutlineUser />],
    ["#work", <RiBookLine />],
    ["#portfolio", <AiOutlineProject />],
    ["#skills", <RiServiceLine />],
    ["#contact", <BiMessageSquareDetail />],
  ];

  return (
    <nav>
      {items.map(([href, icon]) => (
        <a
          href={href}
          key={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? "active" : ""}
          aria-label={href.replace("#", "")}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
