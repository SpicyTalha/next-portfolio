import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const update = () => setIsMobile(mediaQuery.matches);
        update(); // set initial value

        mediaQuery.addEventListener('change', update);
        return () => mediaQuery.removeEventListener('change', update);
    }, [breakpoint]);

    return isMobile;
}
