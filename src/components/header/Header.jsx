import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/Profile.jpeg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header id="home">
			<section className="container header__container">
				<h3>Hi, I'm</h3>
				<h1>Abbas Vaziri</h1>
				<h2>Full Stack | MERN Stack | Frontend | Backend Developer</h2>
				<h3 className="text-light">
					Skilled in Node.js, Next.js React.js, Express.js, MongoDB, MySQL, REST and GraphQL API, JavaScript,
					CSS(TailwindCSS, Bootstrap), and PHP(Laravel).<br />
				</h3>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</section>
		</header>
	);
};

export default Header;
