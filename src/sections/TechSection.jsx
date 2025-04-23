import { useRef, useEffect } from 'react';
import { techLogos } from '../constants';
import TitleHeader from '../components/TitleHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechSection = () => {
    const iconsRef = useRef([]);

    useEffect(() => {
        const animate = () => {
            iconsRef.current.forEach((icon, index) => {
                gsap.fromTo(
                    icon,
                    { opacity: 0, y: 30, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: 'power2.out',
                        delay: index * 0.05,
                        scrollTrigger: {
                            trigger: icon,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        };

        if ('requestIdleCallback' in window) {
            requestIdleCallback(animate);
        } else {
            setTimeout(animate, 300);
        }
    }, []);

    return (
        <section className="section-padding text-center" id="techlogos">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="My Tech Stack"
                    sub="🛠️ The frameworks and tools behind the magic."
                />
                <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-10 justify-items-center mt-16">
                    {techLogos.map((tech, idx) => (
                        <i
                            key={idx}
                            ref={(el) => (iconsRef.current[idx] = el)}
                            className={`${tech.class} text-5xl md:text-6xl hover:text-white transition-transform duration-300 transform hover:scale-110 hover-glow`}
                            title={tech.name}
                        ></i>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSection;
