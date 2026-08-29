import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { SERVICES, SERVICES_IMAGE } from "@/data/site";

// Clip-path reveal for the image
const ClipReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 40%"],
    });
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
    );

    return (
        <motion.div ref={ref} style={{ clipPath }}>
            {children}
        </motion.div>
    );
};

// Parallax wrapper for the services image
const ParallaxImage = ({ src, alt }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

    return (
        <div ref={ref} className="relative overflow-hidden rounded-sm border border-[#e4e4e7] aspect-[4/3]">
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                style={{ y, scale: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 overline bg-white/85 backdrop-blur px-3 py-1.5 rounded-full z-10">
                On-site calibration
            </div>
        </div>
    );
};

export const Services = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="bg-white py-20 sm:py-28 border-t border-[#e4e4e7] scroll-mt-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
                    {/* Left: sticky intro + image with parallax */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:sticky lg:top-28"
                    >
                        <p className="overline mb-4">03 — Capabilities</p>
                        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Six solution areas.
                            <br />
                            <span className="text-[#0f4c81]">One trusted partner.</span>
                        </h2>
                        <p className="mt-6 max-w-md text-[#52525b] leading-relaxed">
                            From molecular diagnostics to point-of-care and everyday
                            consumables — Skymed covers the full arc of what a modern
                            clinical or research laboratory needs, plus the service to keep
                            it running.
                        </p>
                        <div className="mt-10">
                            <ClipReveal delay={0.1}>
                                <ParallaxImage
                                    src={SERVICES_IMAGE}
                                    alt="Scientist working in laboratory"
                                />
                            </ClipReveal>
                        </div>
                    </motion.div>

                    {/* Right: numbered chapters with staggered spring reveals */}
                    <div className="border-t border-[#e4e4e7]">
                        {SERVICES.map((s, i) => (
                            <motion.div
                                key={s.no}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 18,
                                }}
                                className="group py-9 border-b border-[#e4e4e7]"
                            >
                                <div>
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <span className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-none text-[#e4e4e7] group-hover:text-[#0f4c81] transition-colors duration-300 shrink-0">
                                            {s.no}
                                        </span>
                                        <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#0a0a0a] flex items-center gap-2">
                                            {s.title}
                                            <ArrowRight
                                                size={20}
                                                weight="bold"
                                                className="text-[#0f4c81] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                                            />
                                        </h3>
                                    </div>
                                    <div className="mt-4 sm:mt-2 sm:pl-[84px]">
                                        <p className="text-[#52525b] leading-relaxed">
                                            {s.summary}
                                        </p>
                                        <ul className="mt-5 flex flex-col gap-2">
                                            {s.points.map((p, pi) => (
                                                <motion.li
                                                    key={p}
                                                    initial={{ opacity: 0, x: -12 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: i * 0.06 + pi * 0.08,
                                                        ease: "easeOut",
                                                    }}
                                                    className="flex items-center gap-3 text-sm text-[#0a0a0a]"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] shrink-0" />
                                                    {p}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
