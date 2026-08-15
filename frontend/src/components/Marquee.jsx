import Marquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "@/data/site";

export const EditorialMarquee = () => {
    return (
        <section
            id="marquee"
            data-testid="marquee-section"
            className="bg-[#0a0a0a] py-6 sm:py-8 border-y border-[#0a0a0a]"
        >
            <Marquee speed={40} gradient={false} autoFill>
                {MARQUEE_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24">
                        <span className="marquee-item font-display font-bold text-white text-3xl sm:text-5xl tracking-tight">
                            {item}
                        </span>
                        <span className="text-[#0f4c81] text-3xl sm:text-5xl leading-none">
                            &#10022;
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};
