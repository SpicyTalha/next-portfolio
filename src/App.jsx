import React, { lazy, Suspense } from 'react';
import Navbar from './components/NavBar';
import Footer from './sections/Footer';

// Lazy-loaded sections
const Hero = lazy(() => import('./sections/Hero'));
const ProjectSection = lazy(() => import('./sections/ProjectSection'));
const FeatureCards = lazy(() => import('./sections/FeatureCards'));
const Experience = lazy(() => import('./sections/Experience'));
const TechStack = lazy(() => import('./sections/TechStack'));
const TechSection = lazy(() => import('./sections/TechSection'));
const Contact = lazy(() => import('./sections/Contact'));

// Fallback loader
const Loading = () => (
    <div
        style={{
            width: '100%',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
        }}
    >
        Loading section...
    </div>
);

const App = () => (
    <>
        <Navbar />
        <Suspense fallback={<Loading />}>
            <Hero />
            <ProjectSection />
            <FeatureCards />
            <Experience />
            <TechStack />
            <TechSection />
            <Contact />
        </Suspense>
        <Footer />
    </>
);

export default App;
