import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductRow } from "@/components/ProductRow";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SkeletonCard = ({ i }) => (
    <div
        className="bg-white border border-[#e4e4e7]"
        style={{ animationDelay: `${i * 60}ms` }}
    >
        <div className="skeleton aspect-[4/3]" />
        <div className="p-5 border-t border-[#e4e4e7] space-y-3">
            <div className="skeleton h-3 w-24" />
            <div className="skeleton h-4 w-3/4" />
            <div className="skeleton h-3 w-full" />
            <div className="skeleton h-3 w-2/3" />
        </div>
    </div>
);

export const Catalog = () => {
    const [active, setActive] = useState("All");
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const firstRun = useRef(true);

    // Show shimmer skeletons briefly whenever filter/query changes
    useEffect(() => {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        setLoading(true);
        const t = setTimeout(() => setLoading(false), 260);
        return () => clearTimeout(t);
    }, [active, query]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PRODUCTS.filter((p) => {
            // "Other" products are only visible when the user explicitly opens the "Other" tab.
            if (active === "All" && p.category === "Other") return false;
            const matchCat = active === "All" || p.category === active;
            const matchQ =
                !q ||
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.code.toLowerCase().includes(q);
            return matchCat && matchQ;
        });
    }, [active, query]);

    return (
        <section
            id="catalog"
            data-testid="catalog-section"
            className="bg-[#f8f9fa] py-20 sm:py-28 scroll-mt-20"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
                >
                    <div>
                        <p className="overline mb-4">02 — The Catalog</p>
                        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] text-[#0a0a0a] max-w-2xl">
                            Equipment & consumables,
                            <br />
                            <span className="text-[#0f4c81]">organised for procurement.</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-[#52525b] leading-relaxed">
                        A representative selection from our 200+ line. Every item is
                        specified, sourced and supported end-to-end. Browse a product for
                        full technical detail.
                    </p>
                </motion.div>

                {/* Controls — categories always visible; search hidden until products exist */}
                {CATEGORIES.length > 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8 border-y border-[#e4e4e7] py-5"
                >
                    {/* Desktop chips with sliding indicator */}
                    <div className="hidden md:flex flex-wrap gap-1">
                        {CATEGORIES.map((c) => {
                            const isActive = active === c;
                            return (
                                <button
                                    key={c}
                                    data-testid={`filter-${c.replace(/\s+/g, "-").toLowerCase()}`}
                                    onClick={() => setActive(c)}
                                    className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-300 ${
                                        isActive ? "text-white" : "text-[#0a0a0a] hover:text-[#0f4c81]"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="filter-indicator"
                                            className="absolute inset-0 bg-[#0a0a0a] rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                    <span className="relative z-10">{c}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile select */}
                    <div className="md:hidden">
                        <Select value={active} onValueChange={setActive}>
                            <SelectTrigger
                                data-testid="category-select"
                                className="w-full rounded-full border-[#e4e4e7] bg-white h-11"
                            >
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((c) => (
                                    <SelectItem key={c} value={c}>
                                        {c}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Search — only when catalog has products */}
                    {PRODUCTS.length > 0 && (
                    <div className="relative md:w-72">
                        <MagnifyingGlass
                            size={17}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52525b]"
                        />
                        <input
                            data-testid="catalog-search"
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search equipment, code…"
                            className="w-full h-11 pl-10 pr-4 rounded-full border border-[#e4e4e7] bg-white text-sm text-[#0a0a0a] placeholder:text-[#52525b] focus:outline-none focus:border-[#0f4c81] transition-colors"
                        />
                    </div>
                    )}
                </motion.div>
                )}

                {PRODUCTS.length > 0 && (
                <div className="flex items-center justify-between mb-6">
                    <p className="font-mono text-xs text-[#52525b]" data-testid="result-count">
                        {String(filtered.length).padStart(2, "0")} / {PRODUCTS.length} shown
                    </p>
                    {active !== "All" && (
                        <button
                            onClick={() => setActive("All")}
                            className="font-mono text-xs text-[#0f4c81] hover:underline"
                        >
                            Clear filter ✕
                        </button>
                    )}
                </div>
                )}

                <div className="relative min-h-[200px]">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="skeletons"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="grid-catalog"
                                data-testid="catalog-skeletons"
                            >
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <SkeletonCard key={i} i={i} />
                                ))}
                            </motion.div>
                        ) : filtered.length > 0 ? (
                            <motion.div
                                key={`grid-${active}-${query}`}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="space-y-10"
                            >
                                {/* Card grid for products with photos */}
                                {filtered.some((p) => p.image) && (
                                    <div className="grid-catalog">
                                        {filtered
                                            .filter((p) => p.image)
                                            .map((p, i) => (
                                                <ProductCard key={p.id} product={p} index={i} />
                                            ))}
                                    </div>
                                )}

                                {/* Text-only list for products without photos */}
                                {filtered.some((p) => !p.image) && (
                                    <div className="bg-[#f1f3f5]/40 border border-[#e4e4e7] rounded-sm overflow-hidden">
                                        <div className="hidden sm:grid grid-cols-[100px_1fr_180px_auto] gap-6 px-6 py-3 border-b border-[#e4e4e7] bg-white">
                                            <span className="overline">Code</span>
                                            <span className="overline">Product</span>
                                            <span className="overline text-right">Brand</span>
                                            <span className="w-9" />
                                        </div>
                                        {filtered
                                            .filter((p) => !p.image)
                                            .map((p, i) => (
                                                <ProductRow key={p.id} product={p} index={i} />
                                            ))}
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="border border-dashed border-[#e4e4e7] rounded-sm py-24 text-center"
                            >
                                {PRODUCTS.length === 0 ? (
                                    <>
                                        <p className="overline text-[#0f4c81] mb-3">Coming Soon</p>
                                        <p className="font-display text-3xl sm:text-4xl font-bold text-[#0a0a0a] max-w-xl mx-auto leading-tight">
                                            Our full catalog is being refreshed with new product photography.
                                        </p>
                                        <p className="mt-4 text-[#52525b] max-w-md mx-auto">
                                            For pricing, availability or a technical enquiry today, reach us directly by phone or email.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="font-display text-2xl font-bold text-[#0a0a0a]">
                                            No matching products
                                        </p>
                                        <p className="mt-2 text-sm text-[#52525b]">
                                            Try a different search term or category.
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
