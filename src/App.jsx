import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Testimonials />
      <ToastContainer />
      <Contact />
      <Footer />
    </>
  )
}

export default App