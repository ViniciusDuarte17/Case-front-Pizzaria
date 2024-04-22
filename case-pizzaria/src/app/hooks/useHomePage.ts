import { useEffect, useState } from "react";


export const useHomePage = () => {
    const [screen, setScreen] = useState<number>(0)

    function handleResize(entries: ResizeObserverEntry[]) {
        for (let entry of entries) {
            const cr = entry.contentRect;
            setScreen(cr.width);
        }
    }

    useEffect(() => {
        const observer = new ResizeObserver(handleResize);
        observer.observe(document.body);
        return () => {
            observer.unobserve(document.body);
        };
    }, []);

    return {screen}
}