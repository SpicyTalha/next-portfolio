import GlowCard from '../components/GlowCard';
import { projects } from '../constants';
import TitleHeader from '../components/TitleHeader';

const ProjectSection = () => {
    return (
        <section id="projects" className="w-full padding-x-lg">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Projects I’ve Built"
                    sub="⚙️ Bringing ideas to life."
                />
                <div className="grid-3-cols mt-16">
                    {projects.map((project, index) => (
                        <GlowCard
                            showStars={false}
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
