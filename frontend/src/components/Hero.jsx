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
            className="grain relative overflow-hidden bg-[#f8f9fa] pb-0 min-h-screen flex flex-col"
        >
            {/* Top content — headline + CTAs */}
            <motion.div style={{ y: textY }} className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 pt-32 sm:pt-36">
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

            {/* Full-bleed glassmorphism hero banner */}
            <motion.div
                variants={fade}
                custom={3}
                initial="hidden"
                animate="show"
                className="relative z-10 flex-1 mt-12"
            >
                <div className="relative w-full min-h-[70vw] sm:min-h-0 sm:h-[65vh] lg:h-[72vh] flex items-center justify-center overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #050a14 0%, #0a1628 40%, #0d1f3c 70%, #071120 100%)"
                    }}
                >
                    {/* Animated noise grain */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Multi-layer radial glows */}
                    <div className="absolute top-[-10%] left-[10%] w-[480px] h-[480px] rounded-full opacity-20 blur-[80px]"
                        style={{ background: "radial-gradient(circle, #0f4c81, transparent 70%)" }} />
                    <div className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[70px]"
                        style={{ background: "radial-gradient(circle, #1a6fbf, transparent 70%)" }} />
                    <div className="absolute top-[30%] left-[45%] w-[320px] h-[320px] rounded-full opacity-10 blur-[60px]"
                        style={{ background: "radial-gradient(circle, #4a90d9, transparent 70%)" }} />

                    {/* Full-width content layout */}
                    <motion.div
                        style={{ y: textY }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-10 lg:gap-16 px-6 sm:px-12 lg:px-24 py-16 sm:py-0"
                    >
                        {/* Logo */}
                        <div className="relative shrink-0 flex items-center justify-center">
                            <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full blur-3xl opacity-40"
                                style={{ background: "radial-gradient(circle, rgba(74,144,217,0.5), transparent)" }} />
                            <div className="relative p-4 sm:p-5 lg:p-7 rounded-2xl sm:rounded-3xl bg-white"
                                style={{
                                    boxShadow: "0 12px 50px rgba(0,0,0,0.4), 0 0 60px rgba(74,144,217,0.25)",
                                }}
                            >
                                <img
                                    src="/sky_logo.webp"
                                    alt="Skymed Biomedical"
                                    loading="eager"
                                    className="h-20 sm:h-28 lg:h-40 w-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="text-white text-center sm:text-left flex-1">
                            <p className="mb-2 sm:mb-4 text-[#4a90d9] font-mono text-[0.55rem] sm:text-[0.65rem] tracking-[0.3em] sm:tracking-[0.35em] uppercase">
                                Est. 2021 · Ahmedabad, India
                            </p>
                            <h2
                                className="font-display font-black leading-[0.93] tracking-tighter"
                                style={{
                                    fontSize: "clamp(2.4rem, 11vw, 11rem)",
                                    background: "linear-gradient(135deg, #ffffff 30%, #a8c8f0 60%, #4a90d9 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    filter: "drop-shadow(0 0 40px rgba(74,144,217,0.4))",
                                }}
                            >
                                Skymed<br />Biomedical
                            </h2>
                            <div className="mt-3 sm:mt-5 w-14 sm:w-20 h-[2px] mx-auto sm:mx-0"
                                style={{ background: "linear-gradient(90deg, #4a90d9, transparent)" }} />
                            <p className="mt-2 sm:mt-4 font-mono text-white/40 text-[0.6rem] sm:text-[0.75rem] tracking-[0.18em] sm:tracking-[0.22em] uppercase leading-relaxed">
                                Delivering Precision<br />Empowering Healthcare
                            </p>
                            <p className="mt-4 text-white/25 text-sm leading-relaxed max-w-md hidden lg:block">
                                Your trusted partner for molecular diagnostics, clinical laboratory equipment, RT-PCR systems and point-of-care solutions across India.
                            </p>
                        </div>
                    </motion.div>

                    {/* Corner label */}
                    <div className="hidden sm:block absolute top-4 left-4 z-10 font-mono text-[0.6rem] tracking-[0.25em] uppercase text-white/30 px-3 py-1.5"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "2px",
                        }}
                    >
                        Fig. 01 — Skymed Biomedical
                    </div>

                    {/* Scroll down button */}
                    <button
                        onClick={() => scrollToId("marquee")}
                        className="absolute bottom-4 right-4 z-10 grid place-items-center w-11 h-11 text-white animate-bounce transition-colors"
                        style={{
                            background: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "50%",
                            boxShadow: "0 0 20px rgba(74,144,217,0.2)",
                        }}
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={16} weight="bold" />
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
