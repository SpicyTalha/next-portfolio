import { useRef, useEffect } from 'react';
import { techLogos } from '../constants';
import TitleHeader from '../components/TitleHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechSection = () => {
    const iconsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            iconsRef.current,
            {
                opacity: 0,
                y: 30,
                scale: 0.8,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out',
                stagger: {
                    each: 0.05,
                    from: 'center',
                },
                scrollTrigger: {
                    trigger: iconsRef.current[0]?.parentNode,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    }, []);

    return (
        <section className="section-padding text-center" id='techlogos'>
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Teknologia I Use"
                    sub="💎 Core values that shape every project."
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
