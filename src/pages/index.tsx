import Navigation from "../components/portfolio/Navigation";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
