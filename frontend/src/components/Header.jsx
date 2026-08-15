import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
                        V
                    </span>
                    <span className="font-display font-extrabold tracking-tight text-[#0a0a0a] text-lg leading-none">
                        {BRAND.short}
                        <span className="text-[#0f4c81]">.</span>
                    </span>
                </button>

                <nav className="hidden md:flex items-center gap-9">
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

                <div className="hidden md:flex items-center gap-4">
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
                    className="md:hidden text-[#0a0a0a] p-1"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Menu"
                >
                    {open ? <X size={26} /> : <List size={26} />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="md:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 px-5 py-6 flex flex-col gap-1"
                >
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => go(item.id)}
                            className="text-left text-lg font-display font-semibold text-[#0a0a0a] py-3 border-b border-[#e4e4e7]"
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href={CONTACT.phoneHref}
                        className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#0a0a0a] px-4 py-3 rounded-full"
                    >
                        <Phone size={15} weight="fill" />
                        {CONTACT.phone}
                    </a>
                </div>
            )}
        </header>
    );
};
