import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { SERVICES, SERVICES_IMAGE } from "@/data/site";

export const Services = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="bg-white py-20 sm:py-28 border-t border-[#e4e4e7] scroll-mt-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
                    {/* Left: sticky intro + image */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
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
                        <div className="relative mt-10 overflow-hidden border border-[#e4e4e7] aspect-[4/3]">
                            <img
                                src={SERVICES_IMAGE}
                                alt="Scientist working in laboratory"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 overline bg-white/85 backdrop-blur px-3 py-1.5 rounded-full">
                                On-site calibration
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: numbered chapters */}
                    <div className="border-t border-[#e4e4e7]">
                        {SERVICES.map((s, i) => (
                            <motion.div
                                key={s.no}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="group py-9 border-b border-[#e4e4e7]"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="font-display font-black text-5xl sm:text-6xl tracking-tighter leading-none text-[#e4e4e7] group-hover:text-[#0f4c81] transition-colors duration-300">
                                        {s.no}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-display font-bold text-2xl tracking-tight text-[#0a0a0a] flex items-center gap-2">
                                            {s.title}
                                            <ArrowRight
                                                size={20}
                                                weight="bold"
                                                className="text-[#0f4c81] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                            />
                                        </h3>
                                        <p className="mt-3 text-[#52525b] leading-relaxed">
                                            {s.summary}
                                        </p>
                                        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                                            {s.points.map((p) => (
                                                <li
                                                    key={p}
                                                    className="flex items-center gap-2 text-sm text-[#0a0a0a]"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f4c81]" />
                                                    {p}
                                                </li>
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
