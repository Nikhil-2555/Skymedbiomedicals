import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Animated count-up. Parses trailing suffix (e.g. "+", "h", "%") so we
// animate the numeric portion and re-append the suffix on render.
export function CountUp({ value, duration = 1.2 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const reduced = useReducedMotion();
    const [display, setDisplay] = useState(0);

    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    const target = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : "";

    useEffect(() => {
        if (!inView) return;
        if (reduced) {
            setDisplay(target);
            return;
        }
        let raf;
        const start = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 3);
        const tick = (now) => {
            const p = Math.min(1, (now - start) / (duration * 1000));
            setDisplay(target * ease(p));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target, duration, reduced]);

    const rendered = Number.isInteger(target)
        ? Math.round(display).toLocaleString()
        : display.toFixed(1);

    return (
        <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {rendered}
            {suffix}
        </motion.span>
    );
}
