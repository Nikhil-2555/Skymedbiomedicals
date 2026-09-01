import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/data/site";

export const EditorialMarquee = () => {
    const ref = useRef(null);

    const [duration, setDuration] = useState(25);

    useEffect(() => {
        const updateSpeed = () => {
            const w = window.innerWidth;
            if (w < 480) setDuration(6);       // Mobile S/M/L - much faster
            else if (w < 768) setDuration(10); // Tablets
            else setDuration(20);              // Desktop
        };
        updateSpeed();
        window.addEventListener("resize", updateSpeed);
        return () => window.removeEventListener("resize", updateSpeed);
    }, []);

    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <section
            id="marquee"
            ref={ref}
            data-testid="marquee-section"
            className="bg-[#0a0a0a] py-6 sm:py-8 border-y border-[#0a0a0a] overflow-hidden"
        >
            <motion.div
                className="flex whitespace-nowrap will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 shrink-0">
                        <span className="marquee-item font-display font-bold text-white text-3xl sm:text-5xl tracking-tight">
                            {item}
                        </span>
                        <span className="text-[#0f4c81] text-3xl sm:text-5xl leading-none">
                            &#10022;
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};
