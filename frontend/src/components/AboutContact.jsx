import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, Clock, Copy } from "@phosphor-icons/react";
import { toast } from "sonner";
import { CONTACT, BRAND } from "@/data/site";

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
                <p className="overline text-white/40 mb-6">05 — About & Contact</p>

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.98]">
                            A decade equipping the labs
                            <br />
                            <span className="text-[#4a90d9]">that move medicine forward.</span>
                        </h2>
                        <p className="mt-8 max-w-xl text-white/70 leading-relaxed text-lg">
                            {BRAND.name} began on a simple principle: research and clinical
                            teams deserve a partner who understands the instruments as well
                            as the paperwork. We supply a broad catalog of laboratory
                            equipment and sterile surgical consumables, then stand behind
                            every unit with installation, calibration and maintenance.
                        </p>
                        <p className="mt-5 max-w-xl text-white/70 leading-relaxed">
                            No forms, no waiting on a portal — for pricing, availability or a
                            technical question, reach us directly. We answer fast.
                        </p>
                    </motion.div>

                    {/* Direct contact block */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="border border-white/10"
                    >
                        <button
                            data-testid="contact-phone"
                            onClick={() => copy(CONTACT.phone, "Phone number")}
                            className="group w-full text-left p-7 border-b border-white/10 hover:bg-white/[0.03] transition-colors"
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
                            className="group w-full text-left p-7 border-b border-white/10 hover:bg-white/[0.03] transition-colors"
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
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
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
