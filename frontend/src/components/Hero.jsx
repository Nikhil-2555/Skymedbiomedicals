import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { HERO_IMAGE, STATS } from "@/data/site";
import { scrollToId } from "@/lib/useLenis";

const line = {
    hidden: { y: "110%" },
    show: (i) => ({
        y: "0%",
        transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
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

const HEADLINE = ["Precision in", "every variable", "of medicine."];

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="grain relative overflow-hidden bg-[#f8f9fa] pt-32 sm:pt-40 pb-0"
        >
            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
                <motion.p
                    variants={fade}
                    custom={0}
                    initial="hidden"
                    animate="show"
                    className="overline mb-6"
                >
                    Biomedical Retail · Laboratory Setup · Est. 2013
                </motion.p>

                <h1 className="font-display font-black tracking-tighter leading-[0.92] text-[#0a0a0a] text-[13.5vw] sm:text-[11vw] lg:text-[8.6vw]">
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
                                        {"of "}
                                        <span className="text-[#0f4c81]">medicine.</span>
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
                        A curated catalog of laboratory equipment and sterile surgical
                        consumables — supplied, installed and maintained for research
                        institutions and hospital procurement teams that can&apos;t afford
                        downtime.
                    </motion.p>

                    <motion.div
                        variants={fade}
                        custom={2}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-3"
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
            </div>

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

                {/* Stats bar — exposed grid skeleton */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#e4e4e7] bg-white">
                    {STATS.map((s, i) => (
                        <div
                            key={s.label}
                            className={`p-6 sm:p-8 ${
                                i < STATS.length - 1 ? "border-r border-[#e4e4e7]" : ""
                            } ${i < 2 ? "border-b lg:border-b-0 border-[#e4e4e7]" : ""} ${
                                i === 1 ? "border-r-0 lg:border-r" : ""
                            }`}
                        >
                            <div className="font-display font-black text-4xl sm:text-5xl tracking-tighter text-[#0a0a0a]">
                                {s.value}
                            </div>
                            <div className="overline mt-2">{s.label}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
