import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quotes, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { TESTIMONIALS } from "@/data/site";

export const Testimonials = () => {
    const [i, setI] = useState(0);
    const t = TESTIMONIALS[i];
    const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setI((v) => (v + 1) % TESTIMONIALS.length);

    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="bg-[#f8f9fa] py-20 sm:py-28 border-t border-[#e4e4e7] scroll-mt-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="overline mb-4">04 — In their words</p>
                        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] text-[#0a0a0a]">
                            Trusted where
                            <br />
                            <span className="text-[#0f4c81]">precision matters.</span>
                        </h2>
                    </div>
                    <Quotes size={64} weight="fill" className="hidden sm:block text-[#e4e4e7]" />
                </div>

                <div className="border-t border-[#e4e4e7] pt-10">
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={i}
                            data-testid="testimonial-quote"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-4xl"
                        >
                            <p className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl leading-[1.25] tracking-tight text-[#0a0a0a]">
                                “{t.quote}”
                            </p>
                            <footer className="mt-8">
                                <div className="font-semibold text-[#0a0a0a]">{t.name}</div>
                                <div className="text-sm text-[#52525b] font-mono mt-1">{t.role}</div>
                            </footer>
                        </motion.blockquote>
                    </AnimatePresence>

                    <div className="flex items-center justify-between mt-12 border-t border-[#e4e4e7] pt-6">
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setI(idx)}
                                    aria-label={`Testimonial ${idx + 1}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        idx === i ? "w-8 bg-[#0f4c81]" : "w-4 bg-[#e4e4e7]"
                                    }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                data-testid="testimonial-prev"
                                onClick={prev}
                                className="grid place-items-center w-11 h-11 rounded-full border border-[#e4e4e7] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors"
                                aria-label="Previous"
                            >
                                <ArrowLeft size={18} weight="bold" />
                            </button>
                            <button
                                data-testid="testimonial-next"
                                onClick={next}
                                className="grid place-items-center w-11 h-11 rounded-full border border-[#e4e4e7] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-colors"
                                aria-label="Next"
                            >
                                <ArrowRight size={18} weight="bold" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
