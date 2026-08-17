import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, EnvelopeSimple, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { getProductBySlug, getRelated } from "@/data/products";
import { CONTACT } from "@/data/site";
import { Seo } from "@/components/Seo";
import { scrollToId } from "@/lib/useLenis";

export default function ProductDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = getProductBySlug(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-screen grid place-items-center px-5">
                <div className="text-center">
                    <Seo title="Product not found — Skymed Biomedicals" />
                    <p className="font-display font-black text-6xl tracking-tighter text-[#0a0a0a]">404</p>
                    <p className="mt-3 text-[#52525b]">We couldn&apos;t find that product.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 mt-6 bg-[#0a0a0a] text-white text-sm font-semibold px-6 py-3 rounded-full"
                    >
                        <ArrowLeft size={16} weight="bold" /> Back to catalog
                    </Link>
                </div>
            </div>
        );
    }

    const related = getRelated(product);

    return (
        <div className="bg-[#f8f9fa]">
            <Seo
                title={`${product.name} (${product.code}) — Skymed Biomedicals`}
                description={`${product.tagline} ${product.description}`}
            />
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-28 sm:pt-32 pb-20">
                <button
                    data-testid="back-to-catalog"
                    onClick={() => {
                        navigate("/");
                        setTimeout(() => scrollToId("catalog"), 300);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#52525b] hover:text-[#0a0a0a] transition-colors mb-8"
                >
                    <ArrowLeft size={16} weight="bold" /> All products
                </button>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden border border-[#e4e4e7] bg-white aspect-square lg:sticky lg:top-28"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute top-4 left-4 overline bg-white/85 backdrop-blur px-3 py-1.5 rounded-full">
                            {product.code}
                        </span>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="overline text-[#0f4c81] mb-4">{product.category}</p>
                        <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tighter leading-[0.98] text-[#0a0a0a]">
                            {product.name}
                        </h1>
                        <p className="mt-5 text-lg text-[#52525b] leading-relaxed">
                            {product.description}
                        </p>

                        {/* Specs table — exposed grid */}
                        <div className="mt-10">
                            <p className="overline mb-4">Technical Specifications</p>
                            <div className="border border-[#e4e4e7] bg-white">
                                {product.specs.map((s, i) => (
                                    <div
                                        key={s.label}
                                        className={`grid grid-cols-2 ${
                                            i < product.specs.length - 1 ? "border-b border-[#e4e4e7]" : ""
                                        }`}
                                    >
                                        <div className="p-4 font-mono text-xs uppercase tracking-wider text-[#52525b] border-r border-[#e4e4e7]">
                                            {s.label}
                                        </div>
                                        <div className="p-4 font-semibold text-sm text-[#0a0a0a]">
                                            {s.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mt-8">
                            <p className="overline mb-4">Highlights</p>
                            <ul className="space-y-3">
                                {product.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <CheckCircle size={20} weight="fill" className="text-[#0f4c81] shrink-0 mt-0.5" />
                                        <span className="text-[#0a0a0a]">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact block */}
                        <div className="mt-10 border border-[#e4e4e7] bg-white p-6">
                            <p className="font-display font-bold text-xl tracking-tight text-[#0a0a0a]">
                                Pricing on request — {product.price}
                            </p>
                            <p className="mt-2 text-sm text-[#52525b]">
                                For a quotation, availability or technical guidance on the{" "}
                                <span className="font-mono">{product.code}</span>, reach us directly.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    data-testid="detail-call"
                                    href={CONTACT.phoneHref}
                                    className="flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#0f4c81] transition-colors text-white text-sm font-semibold px-5 py-3 rounded-full"
                                >
                                    <Phone size={15} weight="fill" /> {CONTACT.phone}
                                </a>
                                <a
                                    data-testid="detail-email"
                                    href={CONTACT.emailHref}
                                    className="flex items-center gap-2 border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors text-sm font-semibold px-5 py-3 rounded-full"
                                >
                                    <EnvelopeSimple size={15} weight="fill" /> Email enquiry
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Related */}
                {related.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-end justify-between border-t border-[#e4e4e7] pt-8 mb-8">
                            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0a0a0a]">
                                Related in {product.category}
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {related.map((r) => (
                                <Link
                                    key={r.id}
                                    to={`/product/${r.slug}`}
                                    data-testid={`related-${r.id}`}
                                    className="group bg-white border border-[#e4e4e7] hover:border-[#0f4c81] transition-colors"
                                >
                                    <div className="overflow-hidden aspect-[4/3]">
                                        <img
                                            src={r.image}
                                            alt={r.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-[#e4e4e7] flex items-center justify-between gap-2">
                                        <span className="font-display font-semibold text-[#0a0a0a] leading-snug">
                                            {r.name}
                                        </span>
                                        <ArrowUpRight size={18} weight="bold" className="text-[#0f4c81] shrink-0" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
