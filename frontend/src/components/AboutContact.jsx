import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, Clock, Copy, Sparkle } from "@phosphor-icons/react";
import { toast } from "sonner";
import { CONTACT, BRAND, VALUES, COMMITMENTS } from "@/data/site";

// Word-by-word text scrubbing effect
const ScrubbingText = ({ text, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "start 25%"],
    });

    const words = text.split(" ");

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                const y = useTransform(scrollYProgress, [start, end], [6, 0]);
                return (
                    <motion.span
                        key={i}
                        style={{ opacity, y, display: "inline-block", marginRight: "0.28em" }}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </p>
    );
};

export const AboutContact = () => {
    const copy = (value, label) => {
        navigator.clipboard?.writeText(value);
        toast.success(`${label} copied to clipboard`);
    };

    return (
        <section
            id="about"
            data-testid="about-section"
            className="grain relative bg-[#0a0a0a] text-white py-20 sm:py-28 scroll-mt-20 overflow-hidden"
        >
            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="overline text-white/40 mb-6"
                >
                    04 — About &amp; Contact
                </motion.p>

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <p className="overline text-[#4a90d9] mb-4">Established 2021</p>
                            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.98]">
                                Your trusted partner for advanced
                                <br />
                                <span className="text-[#4a90d9]">diagnostic &amp; laboratory solutions.</span>
                            </h2>
                        </motion.div>

                        {/* Scrubbing text effect */}
                        <ScrubbingText
                            text={`${BRAND.name} was founded in 2021 on a simple principle: research and clinical teams deserve a partner who understands the instruments as well as the paperwork. We supply an organised catalog of diagnostic systems, laboratory equipment and sterile consumables — and back every unit with installation, calibration and preventive maintenance.`}
                            className="mt-8 max-w-xl text-white/70 leading-relaxed text-lg"
                        />

                        {/* Commitments — staggered spring in */}
                        <motion.ul
                            className="mt-8 grid sm:grid-cols-3 gap-3 max-w-xl"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.1 } },
                            }}
                        >
                            {COMMITMENTS.map((c) => (
                                <motion.li
                                    key={c}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                                        },
                                    }}
                                    className="flex items-start gap-2 border border-white/10 p-4 bg-white/[0.03] hover:bg-white/[0.07] transition-colors duration-300"
                                >
                                    <Sparkle size={16} weight="fill" className="text-[#4a90d9] mt-0.5 shrink-0" />
                                    <span className="text-sm text-white/85 leading-snug">{c}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Values strip */}
                        <motion.div
                            className="mt-6 flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <span className="overline text-white/40">Values</span>
                            {VALUES.map((v, i) => (
                                <span key={v} className="flex items-center gap-3">
                                    <span className="font-display font-bold text-white text-base">{v}</span>
                                    {i < VALUES.length - 1 && <span className="text-white/30">·</span>}
                                </span>
                            ))}
                        </motion.div>

                        <ScrubbingText
                            text="No forms, no waiting on a portal — for pricing, availability or a technical question, reach us directly. We answer fast."
                            className="mt-8 max-w-xl text-white/70 leading-relaxed"
                        />
                    </div>

                    {/* Direct contact block */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="border border-white/10"
                    >
                        <button
                            data-testid="contact-phone"
                            onClick={() => copy(CONTACT.phone, "Phone number")}
                            className="group w-full text-left p-7 border-b border-white/10 hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="flex items-center gap-2 overline text-white/40 mb-3">
                                <Phone size={14} weight="fill" /> Call us
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                                    {CONTACT.phone}
                                </span>
                                <Copy size={18} className="text-white/30 group-hover:text-[#4a90d9] transition-colors" />
                            </div>
                        </button>

                        <button
                            data-testid="contact-email"
                            onClick={() => copy(CONTACT.email, "Email")}
                            className="group w-full text-left p-7 border-b border-white/10 hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="flex items-center gap-2 overline text-white/40 mb-3">
                                <EnvelopeSimple size={14} weight="fill" /> Email us
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight break-all">
                                    {CONTACT.email}
                                </span>
                                <Copy size={18} className="text-white/30 group-hover:text-[#4a90d9] transition-colors shrink-0" />
                            </div>
                        </button>

                        <div className="p-7 border-b border-white/10">
                            <div className="flex items-center gap-2 overline text-white/40 mb-3">
                                <MapPin size={14} weight="fill" /> Visit
                            </div>
                            <p className="text-white/80 leading-relaxed">{CONTACT.address}</p>
                            {CONTACT.gstin && (
                                <p className="text-white/50 leading-relaxed mt-2 text-sm font-mono">
                                    GSTIN: {CONTACT.gstin}
                                </p>
                            )}
                        </div>

                        <div className="p-7">
                            <div className="flex items-center gap-2 overline text-white/40 mb-3">
                                <Clock size={14} weight="fill" /> Hours
                            </div>
                            <p className="text-white/80">{CONTACT.hours}</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 flex flex-wrap gap-4"
                >
                    <a
                        data-testid="about-call-cta"
                        href={CONTACT.phoneHref}
                        className="flex items-center gap-2 bg-white text-[#0a0a0a] hover:bg-[#4a90d9] hover:text-white transition-colors text-sm font-semibold px-6 py-4 rounded-full"
                    >
                        <Phone size={16} weight="fill" /> Call now
                    </a>
                    <a
                        data-testid="about-email-cta"
                        href={CONTACT.emailHref}
                        className="flex items-center gap-2 border border-white/30 hover:bg-white/10 transition-colors text-sm font-semibold px-6 py-4 rounded-full"
                    >
                        <EnvelopeSimple size={16} weight="fill" /> Send an email
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
