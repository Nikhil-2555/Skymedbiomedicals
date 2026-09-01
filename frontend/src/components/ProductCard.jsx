import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

// Card view — used only for products that have a real product photo.
// Prices are intentionally NOT displayed; enquiries go via phone/email.
export const ProductCard = ({ product, index = 0 }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
        stiffness: 200,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
        stiffness: 200,
        damping: 30,
    });
    const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
    const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 });

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
        glareOpacity.set(0.12);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        glareOpacity.set(0);
    };

    const glareBackground = useTransform(
        [glareX, glareY],
        ([gx, gy]) =>
            `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.35) 0%, transparent 65%)`
    );

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.6,
                delay: Math.min(index * 0.07, 0.5),
                type: "spring",
                stiffness: 80,
                damping: 16,
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 800,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                to={`/product/${product.slug}`}
                data-testid={`product-card-${product.id}`}
                className="card-hover group relative flex flex-col h-full bg-white border border-[#e4e4e7] hover:border-[#0f4c81] overflow-hidden block"
            >
                {/* Glare overlay */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none rounded-sm"
                    style={{
                        background: glareBackground,
                        opacity: glareOpacity,
                    }}
                />

                <div className="relative overflow-hidden aspect-[4/3] bg-[#f1f3f5]">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="card-image absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 overline bg-white/85 backdrop-blur px-2.5 py-1 rounded-full z-10">
                        {product.code}
                    </span>
                    <span className="absolute bottom-0 right-0 grid place-items-center w-11 h-11 bg-[#0a0a0a] text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                        <ArrowUpRight size={18} weight="bold" />
                    </span>
                </div>
                <div className="p-5 flex flex-col flex-1 border-t border-[#e4e4e7]">
                    <span className="overline text-[#0f4c81] mb-2">{product.subCategory || product.category}</span>
                    <h3 className="font-display font-bold text-lg leading-snug tracking-tight text-[#0a0a0a]">
                        {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#52525b] leading-relaxed flex-1">
                        {product.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-dashed border-[#e4e4e7] flex items-center justify-end">
                        <span className="text-xs font-semibold text-[#0a0a0a] transition-colors group-hover:text-[#0f4c81]">
                            View specifications →
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
