import Navbar from "../components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

const Portfolio = () => {
  return (
    <>
      <header className="w-full h-20 bg-[#020618] flex justify-center items-center  ">
        <Navbar />
      </header>
      <main className="w-full h-auto">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="w-full ">
        <Footer />
      </footer>
    </>
  );
};

export default Portfolio;
