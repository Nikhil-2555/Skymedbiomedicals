import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, Phone } from "@phosphor-icons/react";
import { BRAND, NAV, CONTACT } from "@/data/site";
import { scrollToId } from "@/lib/useLenis";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const go = (id) => {
        setOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToId(id), 300);
        } else {
            scrollToId(id);
        }
    };

    return (
        <>
            <header
                data-testid="site-header"
                className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
                    scrolled
                        ? "bg-white/70 backdrop-blur-xl border-b border-black/5 py-3"
                        : "bg-transparent border-b border-transparent py-5"
                }`}
            >
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between">
                    <button
                        data-testid="brand-logo"
                        onClick={() => {
                            if (location.pathname !== "/") navigate("/");
                            else scrollToId("top");
                        }}
                        className="flex items-center gap-3 group"
                    >
                        <span className="grid place-items-center w-8 h-8 bg-[#0a0a0a] text-white font-display font-black text-lg leading-none rounded-[3px] transition-colors group-hover:bg-[#0f4c81]">
                            S
                        </span>
                        <span className="font-display font-extrabold tracking-tight text-[#0a0a0a] text-lg leading-none">
                            {BRAND.short}
                            <span className="text-[#0f4c81]">.</span>
                        </span>
                    </button>

                    {/* Desktop nav — visible from lg (1024px+) up */}
                    <nav className="hidden lg:flex items-center gap-9">
                        {NAV.map((item) => (
                            <button
                                key={item.id}
                                data-testid={`nav-${item.id}`}
                                onClick={() => go(item.id)}
                                className="relative text-sm font-medium text-[#0a0a0a] py-1 group"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#0f4c81] transition-[width] duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            data-testid="header-phone"
                            href={CONTACT.phoneHref}
                            className="flex items-center gap-2 text-sm font-semibold text-white bg-[#0a0a0a] hover:bg-[#0f4c81] transition-colors px-4 py-2.5 rounded-full"
                        >
                            <Phone size={15} weight="fill" />
                            {CONTACT.phone}
                        </a>
                    </div>

                    <button
                        data-testid="mobile-menu-toggle"
                        className="lg:hidden text-[#0a0a0a] p-1"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Menu"
                    >
                        {open ? <X size={26} /> : <List size={26} />}
                    </button>
                </div>
            </header>

            {/* Slide-in drawer — tablet + mobile */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            key="overlay"
                            data-testid="drawer-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
                            onClick={() => setOpen(false)}
                        />
                        <motion.aside
                            key="drawer"
                            data-testid="mobile-drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-[min(92vw,380px)] bg-white z-[70] lg:hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between p-5 border-b border-[#e4e4e7]">
                                <span className="font-display font-extrabold tracking-tight text-[#0a0a0a] text-lg">
                                    {BRAND.name}
                                    <span className="text-[#0f4c81]">.</span>
                                </span>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="p-1 text-[#0a0a0a]"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
                                {NAV.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        data-testid={`drawer-nav-${item.id}`}
                                        initial={{ opacity: 0, x: 12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                                        onClick={() => go(item.id)}
                                        className="text-left text-2xl font-display font-bold tracking-tight text-[#0a0a0a] py-4 border-b border-[#e4e4e7] hover:text-[#0f4c81] transition-colors"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>

                            <div className="p-5 border-t border-[#e4e4e7] flex flex-col gap-3">
                                <a
                                    href={CONTACT.phoneHref}
                                    className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#0a0a0a] px-4 py-3.5 rounded-full"
                                >
                                    <Phone size={15} weight="fill" />
                                    {CONTACT.phone}
                                </a>
                                <a
                                    href={CONTACT.emailHref}
                                    className="text-center text-sm text-[#52525b] hover:text-[#0a0a0a] transition-colors"
                                >
                                    {CONTACT.email}
                                </a>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
