import Hero from "../components/Hero";
import InteractiveServices from "../components/InteractiveServices";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <InteractiveServices />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default Home;