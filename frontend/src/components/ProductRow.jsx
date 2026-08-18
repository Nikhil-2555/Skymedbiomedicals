import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

// Text-only list row for catalog items without a product photo.
// Renders full-width, borders-based, minimal — feels like a technical index.
export const ProductRow = ({ product, index = 0 }) => {
    const brand = product.specs?.find((s) => s.label === "Brand")?.value;
    const type = product.specs?.find((s) => s.label === "Type")?.value;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
                duration: 0.45,
                delay: Math.min(index * 0.04, 0.4),
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <Link
                to={`/product/${product.slug}`}
                data-testid={`product-row-${product.id}`}
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[100px_1fr_180px_auto] items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-5 border-b border-[#e4e4e7] hover:bg-white transition-colors"
            >
                <span className="font-mono text-[11px] tracking-wider text-[#52525b] group-hover:text-[#0f4c81] transition-colors">
                    {product.code}
                </span>
                <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base sm:text-lg tracking-tight text-[#0a0a0a] leading-snug group-hover:text-[#0f4c81] transition-colors truncate">
                        {product.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#52525b] truncate">{type}</p>
                </div>
                <span className="hidden sm:block overline text-right">
                    {brand || product.category}
                </span>
                <span className="grid place-items-center w-9 h-9 rounded-full border border-[#e4e4e7] text-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white group-hover:border-[#0a0a0a] transition-colors">
                    <ArrowUpRight size={15} weight="bold" />
                </span>
            </Link>
        </motion.div>
    );
};
