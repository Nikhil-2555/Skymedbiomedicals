import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { BRAND, NAV, CONTACT } from "@/data/site";
import { scrollToId } from "@/lib/useLenis";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Track which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        NAV.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

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
                className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
                    scrolled
                        ? "top-0 bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] py-2"
                        : "top-0 bg-white/95 backdrop-blur-xl py-3"
                }`}
            >
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        data-testid="brand-logo"
                        onClick={() => {
                            if (location.pathname !== "/") navigate("/");
                            else scrollToId("top");
                        }}
                        className="flex items-center gap-3 group shrink-0"
                    >
                        <img
                            src={BRAND.logo}
                            alt={`${BRAND.short} Logo`}
                            className={`w-auto object-contain transition-all duration-300 ${
                                scrolled ? "h-10 sm:h-12" : "h-12 sm:h-14"
                            }`}
                        />
                    </button>

                    {/* Desktop nav — visible from lg (1024px+) up */}
                    <nav className="hidden lg:flex items-center">
                        <div className="flex items-center bg-[#f5f7fa] rounded-full px-1.5 py-1.5">
                            {NAV.map((item) => (
                                <button
                                    key={item.id}
                                    data-testid={`nav-${item.id}`}
                                    onClick={() => go(item.id)}
                                    className={`relative text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
                                        activeSection === item.id
                                            ? "bg-[#003366] text-white shadow-md"
                                            : "text-[#374151] hover:text-[#003366] hover:bg-white/80"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* CTA button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            data-testid="header-phone"
                            href={CONTACT.phoneHref}
                            className="group flex items-center gap-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#003366] to-[#004d80] hover:from-[#00264d] hover:to-[#003d66] transition-all duration-300 px-5 py-2.5 rounded-full shadow-lg shadow-[#003366]/20 hover:shadow-[#003366]/30 hover:scale-[1.02]"
                        >
                            <Phone
                                size={15}
                                weight="fill"
                                className="group-hover:animate-[wiggle_0.5s_ease-in-out]"
                            />
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        data-testid="mobile-menu-toggle"
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f7fa] text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Menu"
                    >
                        {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
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
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                            onClick={() => setOpen(false)}
                        />
                        <motion.aside
                            key="drawer"
                            data-testid="mobile-drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-[min(92vw,400px)] bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between p-5 border-b border-[#e5e7eb]">
                                <img
                                    src={BRAND.logo}
                                    alt={`${BRAND.name} Logo`}
                                    className="h-12 w-auto object-contain"
                                />
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f5f7fa] text-[#374151] hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                                >
                                    <X size={20} weight="bold" />
                                </button>
                            </div>

                            {/* Drawer nav links */}
                            <nav className="flex-1 overflow-y-auto px-5 pt-6 pb-4 flex flex-col gap-1">
                                {NAV.map((item, i) => (
                                    <motion.button
                                        key={item.id}
                                        data-testid={`drawer-nav-${item.id}`}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.08 + i * 0.06,
                                            duration: 0.4,
                                            ease: "easeOut",
                                        }}
                                        onClick={() => go(item.id)}
                                        className={`text-left text-lg font-semibold tracking-tight py-4 px-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                                            activeSection === item.id
                                                ? "bg-[#003366]/5 text-[#003366]"
                                                : "text-[#374151] hover:bg-[#f5f7fa] hover:text-[#003366]"
                                        }`}
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                                                activeSection === item.id
                                                    ? "bg-[#4ecb71] scale-100"
                                                    : "bg-[#d1d5db] scale-75"
                                            }`}
                                        />
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Drawer footer */}
                            <div className="p-5 border-t border-[#e5e7eb] flex flex-col gap-3 bg-[#f9fafb]">
                                <a
                                    href={CONTACT.phoneHref}
                                    className="flex items-center justify-center gap-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#003366] to-[#004d80] px-4 py-3.5 rounded-xl shadow-lg shadow-[#003366]/15"
                                >
                                    <Phone size={16} weight="fill" />
                                    {CONTACT.phone}
                                </a>
                                <a
                                    href={CONTACT.emailHref}
                                    className="flex items-center justify-center gap-2 text-sm text-[#6b7280] hover:text-[#003366] transition-colors"
                                >
                                    <Envelope size={14} />
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
