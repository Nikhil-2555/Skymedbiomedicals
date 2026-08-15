import { BRAND, CONTACT, NAV } from "@/data/site";
import { scrollToId } from "@/lib/useLenis";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const go = (id) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToId(id), 300);
        } else scrollToId(id);
    };

    return (
        <footer
            data-testid="site-footer"
            className="bg-[#0a0a0a] text-white pt-16 sm:pt-20 overflow-hidden"
        >
            <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
                <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-14 border-b border-white/10">
                    <div>
                        <div className="font-display font-extrabold text-2xl tracking-tight">
                            {BRAND.name}
                            <span className="text-[#4a90d9]">.</span>
                        </div>
                        <p className="mt-4 max-w-sm text-white/60 leading-relaxed text-sm">
                            {BRAND.tagline}
                        </p>
                    </div>
                    <div>
                        <div className="overline text-white/40 mb-4">Explore</div>
                        <ul className="space-y-3">
                            {NAV.map((n) => (
                                <li key={n.id}>
                                    <button
                                        onClick={() => go(n.id)}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                    >
                                        {n.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="overline text-white/40 mb-4">Reach us</div>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href={CONTACT.phoneHref} className="text-white/80 hover:text-white transition-colors">
                                    {CONTACT.phone}
                                </a>
                            </li>
                            <li>
                                <a href={CONTACT.emailHref} className="text-white/80 hover:text-white transition-colors break-all">
                                    {CONTACT.email}
                                </a>
                            </li>
                            <li className="text-white/50 leading-relaxed pt-1">{CONTACT.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-white/40 font-mono">
                    <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
                    <span>Precision · Reliability · Compliance</span>
                </div>
            </div>

            <div
                aria-hidden
                className="select-none font-display font-black tracking-tighter leading-none text-white/[0.06] text-[19vw] text-center whitespace-nowrap -mb-[2vw]"
            >
                {BRAND.short.toUpperCase()}
            </div>
        </footer>
    );
};
