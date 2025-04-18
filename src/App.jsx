import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import ProjectSection from "./sections/ProjectSection";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ProjectSection />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
