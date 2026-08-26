import { Seo } from "@/components/Seo";
import { Hero } from "@/components/Hero";
import { EditorialMarquee } from "@/components/Marquee";
import { Catalog } from "@/components/Catalog";
import { Services } from "@/components/Services";

import { AboutContact } from "@/components/AboutContact";

export default function Home() {
    return (
        <>
            <Seo
                title="Skymed Biomedical — Delivering Precision. Empowering Healthcare."
                description="Your trusted partner for advanced diagnostic and laboratory solutions — molecular diagnostics, RT-PCR, clinical equipment, POC and consumables. Established 2021."
            />
            <Hero />
            <EditorialMarquee />
            <Catalog />
            <Services />

            <AboutContact />
        </>
    );
}
