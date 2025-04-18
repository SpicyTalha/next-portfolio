import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ⬅️ import this!
import GlowCard from '../components/GlowCard';
import { projects } from '../constants';
import TitleHeader from '../components/TitleHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger); // ⬅️ register the plugin

const ProjectSection = () => {
    const [expanded, setExpanded] = useState(false);
    const isMobile = useIsMobile();
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.to(containerRef.current, {
            height: 'auto',
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                // Recalculate ScrollTrigger positions after expanding/collapsing
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 100); // small delay for smoother results
            },
        });

        gsap.fromTo(
            itemsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: 'power2.out',
            }
        );
    }, [expanded]);

    const getVisibleProjects = () => {
        if (expanded) return projects;
        return isMobile ? projects.slice(0, 1) : projects.slice(0, 3);
    };

    const toggleExpanded = () => setExpanded((prev) => !prev);

    const visibleProjects = getVisibleProjects();

    return (
        <section id="projects" className="w-full padding-x-lg">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Projects I’ve Built"
                    sub="⚙️ Bringing ideas to life."
                />

                <div
                    ref={containerRef}
                    className="grid-3-cols mt-16 overflow-hidden transition-all duration-500"
                >
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <GlowCard
                                showStars={false}
                                index={index}
                                card={{ review: '' }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="rounded-lg mb-4 object-cover w-full h-56"
                                />
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white-50 mb-4">
                                    {project.description}
                                </p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline"
                                >
                                    View on GitHub →
                                </a>
                            </GlowCard>
                        </div>
                    ))}
                </div>

                {/* Toggle Button */}
                {projects.length > (isMobile ? 1 : 3) && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={toggleExpanded}
                            className="flex items-center gap-2 text-white-80 hover:text-white-100 transition"
                        >
                            {expanded ? (
                                <>
                                    Show Less <ChevronUp size={18} />
                                </>
                            ) : (
                                <>
                                    Show More <ChevronDown size={18} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
