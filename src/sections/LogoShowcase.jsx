import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { logoIconsList } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

const LogoShowcase = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        // Animation for fade in on scroll down and fade out on scroll up
        const fadeIn = gsap.fromTo(
            el,
            { autoAlpha: 0, y: 50 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom-=100',
                    end: 'bottom top+=100',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );

        return () => {
            fadeIn.scrollTrigger?.kill();
            fadeIn.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={index + logoIconsList.length}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoShowcase;
