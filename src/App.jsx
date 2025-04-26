import React, {
    lazy,
    Suspense,
    useEffect,
    useState,
    startTransition,
} from 'react';
import Navbar from './components/NavBar';
import Footer from './sections/Footer';
import SplashScreen from './components/SplashScreen';

// Lazy imports
const Hero = lazy(() => import('./sections/Hero'));
const ProjectSection = lazy(() => import('./sections/ProjectSection'));
const FeatureCards = lazy(() => import('./sections/FeatureCards'));
const Experience = lazy(() => import('./sections/Experience'));
const TechStack = lazy(() => import('./sections/TechStack'));
const TechSection = lazy(() => import('./sections/TechSection'));
const Contact = lazy(() => import('./sections/Contact'));

// Manually preload all components
const preloadAll = () => {
    import('./sections/Hero');
    import('./sections/ProjectSection');
    import('./sections/FeatureCards');
    import('./sections/Experience');
    import('./sections/TechStack');
    import('./sections/TechSection');
    import('./sections/Contact');
    import('./sections/Footer');
};

const App = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Start preloading during splash
        preloadAll();

        const timer = setTimeout(() => {
            // Ensure transition doesn't block rendering
            startTransition(() => {
                setIsReady(true);
            });
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isReady) return <SplashScreen />;

    return (
        <Suspense fallback={null}>
            <Navbar />
            <Hero />
            <ProjectSection />
            <FeatureCards />
            <Experience />
            <TechStack />
            <TechSection />
            <Contact />
            <Footer />
        </Suspense>
    );
};

export default App;
