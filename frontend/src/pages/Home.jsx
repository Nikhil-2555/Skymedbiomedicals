import { Seo } from "@/components/Seo";
import { Hero } from "@/components/Hero";
import { EditorialMarquee } from "@/components/Marquee";
import { Catalog } from "@/components/Catalog";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { AboutContact } from "@/components/AboutContact";

export default function Home() {
    return (
        <>
            <Seo
                title="Skymed Biomedicals — Precision Lab Equipment & Surgical Consumables"
                description="An organised catalog of laboratory equipment and sterile surgical consumables, backed by installation, calibration and maintenance for research institutions and hospitals."
            />
            <Hero />
            <EditorialMarquee />
            <Catalog />
            <Services />
            <Testimonials />
            <AboutContact />
        </>
    );
}
