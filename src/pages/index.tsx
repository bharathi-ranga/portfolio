import Navigation from "../components/portfolio/Navigation";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 md:px-6">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
};

export default Index;
