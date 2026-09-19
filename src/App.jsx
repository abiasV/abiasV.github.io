import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import WorkExperience from "./components/workExperience/WorkExperience";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <WorkExperience />
      <Portfolio />
      <Experience />
      <Services />
      <ToastContainer />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
