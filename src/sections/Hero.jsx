import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '../components/Button';
import { words } from '../constants';
import HeroExperience from '../components/models/hero_models/HeroExperience';

const Hero = () => {
    const textRef = useRef([]);

    useGSAP(() => {
        const animate = () => {
            gsap.fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power2.inOut',
                }
            );
        };

        if ('requestIdleCallback' in window) {
            requestIdleCallback(animate);
        } else {
            setTimeout(animate, 300);
        }
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img
                    src="/images/bg.png"
                    alt="Background"
                    width="1280"
                    height="720"
                />
            </div>

            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1 ref={(el) => (textRef.current[0] = el)}>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    width="40"
                                                    height="40"
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1 ref={(el) => (textRef.current[1] = el)}>
                                into Real Projects
                            </h1>
                            <h1 ref={(el) => (textRef.current[2] = el)}>
                                that Deliver Results
                            </h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Talha, a developer based in Pakistan with a
                            passion for code.
                        </p>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <Button
                                text="See My Work"
                                className="md:w-70 md:h-16 w-60 h-10"
                                id="projects"
                            />
                            <Button
                                text="Download CV"
                                className="md:w-70 md:h-16 w-60 h-10"
                                download="/Resume.pdf"
                            />
                        </div>
                    </div>
                </header>

                <figure>
                    <div className="hero-3d-layout pointer-events-none">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
