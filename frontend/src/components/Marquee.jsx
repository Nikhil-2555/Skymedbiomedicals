import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MARQUEE_ITEMS } from "@/data/site";

export const EditorialMarquee = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Speed up marquee based on scroll velocity
    const rawSpeed = useTransform(scrollYProgress, [0, 0.5, 1], [20, 70, 20]);
    const speed = useSpring(rawSpeed, { stiffness: 80, damping: 20 });

    // Use a transform to move a duplicate set of items
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

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
                    duration: 25,
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
