import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { HERO_IMAGE, STATS } from "@/data/site";
import { scrollToId } from "@/lib/useLenis";
import { CountUp } from "@/components/CountUp";

const line = {
    hidden: { y: "110%" },
    show: (i) => ({
        y: "0%",
        transition: { duration: 0.85, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
};

const fade = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
};

const HEADLINE = ["Your trusted partner", "for advanced diagnostic", "and laboratory solutions"];

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    // Foreground text moves faster than the background image = parallax
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="grain relative overflow-hidden bg-[#f8f9fa] pt-32 sm:pt-40 pb-0"
        >
            <motion.div style={{ y: textY }} className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
                <motion.p
                    variants={fade}
                    custom={0}
                    initial="hidden"
                    animate="show"
                    className="overline mb-6"
                >
                Committed to Quality, Focused on Innovation, Dedicated to Healthcare.
                </motion.p>

                <h1 className="hero-headline font-display font-black text-[#0a0a0a]">
                    {HEADLINE.map((l, i) => (
                        <span key={i} className="reveal-mask">
                            <motion.span
                                variants={line}
                                custom={i}
                                initial="hidden"
                                animate="show"
                                className="block"
                            >
                                {i === 2 ? (
                                    <>
                                        {"and laboratory "}
                                        <span className="text-[#0f4c81]">solutions.</span>
                                    </>
                                ) : (
                                    l
                                )}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-8 items-end border-t border-[#e4e4e7] pt-8">
                    <motion.p
                        variants={fade}
                        custom={1}
                        initial="hidden"
                        animate="show"
                        className="max-w-xl text-[#52525b] text-base sm:text-lg leading-relaxed"
                    >
                        A trusted partner supplying molecular diagnostics, RT-PCR
                        systems, clinical laboratory equipment, point-of-care solutions
                        and everyday consumables — installed, calibrated and supported
                        with a 48-hour service SLA across India.
                    </motion.p>

                    <motion.div
                        variants={fade}
                        custom={2}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap items-center gap-3"
                    >
                        <button
                            data-testid="hero-cta-catalog"
                            onClick={() => scrollToId("catalog")}
                            className="group flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#0f4c81] transition-colors text-white text-sm font-semibold px-6 py-4 rounded-full"
                        >
                            Explore the catalog
                            <ArrowUpRight
                                size={17}
                                weight="bold"
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </button>
                        <button
                            data-testid="hero-cta-services"
                            onClick={() => scrollToId("services")}
                            className="text-sm font-semibold px-6 py-4 rounded-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
                        >
                            Our services
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Clipped hero image window with parallax */}
            <motion.div
                variants={fade}
                custom={3}
                initial="hidden"
                animate="show"
                className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 mt-14"
            >
                <div className="relative overflow-hidden rounded-t-[2px] h-[46vh] sm:h-[62vh] border border-[#e4e4e7] border-b-0">
                    <motion.img
                        src={HERO_IMAGE}
                        alt="Modern laboratory interior"
                        loading="eager"
                        style={{ y: imgY, scale: imgScale }}
                        className="absolute inset-0 w-full h-[130%] object-cover"
                    />
                    <div className="absolute top-4 left-4 z-10 overline bg-white/80 backdrop-blur px-3 py-1.5 rounded-full">
                        Fig. 01 — Turnkey Molecular Biology Wing
                    </div>
                    <button
                        onClick={() => scrollToId("marquee")}
                        className="absolute bottom-4 right-4 z-10 grid place-items-center w-12 h-12 rounded-full bg-[#0a0a0a] text-white animate-bounce"
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={18} weight="bold" />
                    </button>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 bg-white border-l border-t border-[#e4e4e7]">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                            className="p-6 sm:p-8 border-r border-b border-[#e4e4e7]"
                            data-testid={`stat-${i}`}
                        >
                            <div className="font-display font-black text-4xl sm:text-5xl tracking-tighter text-[#0a0a0a]">
                                <CountUp value={s.value} />
                            </div>
                            <div className="overline mt-2">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
