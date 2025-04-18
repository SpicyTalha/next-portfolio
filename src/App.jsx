import Footer from './sections/Footer';
import Contact from './sections/Contact';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import FeatureCards from './sections/FeatureCards';
import Navbar from './components/NavBar';
import ProjectSection from './sections/ProjectSection';
import TechSection from './sections/TechSection';

const App = () => (
    <>
        <Navbar />
        <Hero />
        <ProjectSection />
        <FeatureCards />
        <Experience />
        <TechStack />
        <TechSection />
        <Contact />
        <Footer />
    </>
);

export default App;
