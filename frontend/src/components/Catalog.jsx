import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Catalog = () => {
    const [active, setActive] = useState("All");
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PRODUCTS.filter((p) => {
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
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8 border-y border-[#e4e4e7] py-5">
                    {/* Desktop chips */}
                    <div className="hidden md:flex flex-wrap gap-2">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                data-testid={`filter-${c.replace(/\s+/g, "-").toLowerCase()}`}
                                onClick={() => setActive(c)}
                                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                                    active === c
                                        ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                                        : "bg-white text-[#0a0a0a] border-[#e4e4e7] hover:border-[#0f4c81]"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
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

                    {/* Search */}
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
                </div>

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

                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border border-dashed border-[#e4e4e7] rounded-sm py-24 text-center"
                    >
                        <p className="font-display text-2xl font-bold text-[#0a0a0a]">
                            No matching products
                        </p>
                        <p className="mt-2 text-sm text-[#52525b]">
                            Try a different search term or category.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
