import { useEffect } from "react";
import Lenis from "lenis";

// Smooth momentum scrolling, wired to requestAnimationFrame.
export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        let frame;
        function raf(time) {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        }
        frame = requestAnimationFrame(raf);

        // Expose for anchor scrolling
        window.__lenis = lenis;

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);
}

export function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
    } else {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
