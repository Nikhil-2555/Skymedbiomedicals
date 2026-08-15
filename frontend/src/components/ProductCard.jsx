import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export const ProductCard = ({ product, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link
                to={`/product/${product.slug}`}
                data-testid={`product-card-${product.id}`}
                className="group relative flex flex-col h-full bg-white border border-[#e4e4e7] hover:border-[#0f4c81] transition-colors duration-300"
            >
                <div className="relative overflow-hidden aspect-[4/3] bg-[#f1f3f5]">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 overline bg-white/85 backdrop-blur px-2.5 py-1 rounded-full">
                        {product.code}
                    </span>
                    <span className="absolute bottom-0 right-0 grid place-items-center w-11 h-11 bg-[#0a0a0a] text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowUpRight size={18} weight="bold" />
                    </span>
                </div>
                <div className="p-5 flex flex-col flex-1 border-t border-[#e4e4e7]">
                    <span className="overline text-[#0f4c81] mb-2">{product.category}</span>
                    <h3 className="font-display font-bold text-lg leading-snug tracking-tight text-[#0a0a0a]">
                        {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#52525b] leading-relaxed flex-1">
                        {product.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-dashed border-[#e4e4e7] flex items-center justify-between">
                        <span className="font-mono text-xs text-[#52525b]">
                            {product.price}
                        </span>
                        <span className="text-xs font-semibold text-[#0a0a0a] group-hover:text-[#0f4c81] transition-colors">
                            View specs
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
