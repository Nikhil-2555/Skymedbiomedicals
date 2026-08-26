// Global site content — edit brand, contact, services and testimonials here.

export const BRAND = {
    name: "Skymed Biomedical",
    short: "Skymed",
    tagline: "Delivering precision. Empowering healthcare.",
    aboutLine:
        "Your trusted partner for advanced diagnostic & laboratory solutions.",
    logo: "https://images.unsplash.com/photo-1762939079730-23708c0dd337?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGxvZ298ZW58MHx8fHwxNzg1MzAxODEwfDA&ixlib=rb-4.1.0&q=85",
    establishedYear: "2021",
};

export const VALUES = ["Quality", "Innovation", "Reliability"];

export const COMMITMENTS = [
    "Committed to quality.",
    "Focused on innovation.",
    "Dedicated to healthcare.",
];

export const CONTACT = {
    phone: "+91 99090 12390",
    phoneHref: "tel:+919909012390",
    email: "skymedbiomedical@gmail.com",
    emailHref: "mailto:skymedbiomedical@gmail.com",
    address: "Skymed Biomedical, Shop No.E11 & E12, Chandanpark Society, Behind Virmaya Sankul, Near Kadi Nagrik Char Rasta, Chandkheda, Ahmedabad - 382424. GSTIN: 24BTXPM1741F1ZI",
    hours: "Mon – Sat · 09:00 – 19:00 IST",
};

export const HERO_IMAGE =
    "https://images.unsplash.com/photo-1775504982885-b0c0f089a0bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85";

export const SERVICES_IMAGE =
    "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjB3b3JraW5nJTIwaW4lMjBsYWJ8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85";

export const MARQUEE_ITEMS = [
    "Delivering Precision",
    "Empowering Healthcare",
    "Molecular Diagnostics",
    "RT-PCR Systems",
    "Clinical Lab Equipment",
    "Point-of-Care Solutions",
    "Service & Support",
];

export const STATS = [
    { value: "4+", label: "Years serving healthcare" },
    { value: "200+", label: "Products in stock" },
    { value: "6", label: "Solution categories" },
    { value: "48h", label: "Service response SLA" },
];

// Six solution areas — matches the company profile.
export const SERVICES = [
    {
        no: "01",
        title: "Molecular Diagnostic Systems",
        summary:
            "End-to-end molecular diagnostic platforms — nucleic acid extractors, thermal cyclers and analytical workstations — for genomic research and infectious-disease workflows.",
        points: [
            "Sample-to-answer workflows",
            "Assay validation support",
            "Cold-chain reagent sourcing",
        ],
    },
    {
        no: "02",
        title: "RT-PCR Instruments & Consumables",
        summary:
            "Real-time PCR systems with matched consumables — plates, seals, master mixes and probe kits — engineered for reproducible amplification.",
        points: [
            "Quantitative & qualitative RT-PCR",
            "High-throughput 96-well plates",
            "Multi-channel detection optics",
        ],
    },
    {
        no: "03",
        title: "Clinical Laboratory Equipment",
        summary:
            "Fully-auto haematology, biochemistry and immunoassay analysers plus benchtop essentials that keep clinical laboratories running at scale.",
        points: [
            "Mindray haematology & biochemistry",
            "Centrifuges, incubators, shakers",
            "Cold storage & refrigeration",
        ],
    },
    {
        no: "04",
        title: "Point-of-Care Diagnostic Solutions",
        summary:
            "Rapid tests and portable analysers for HIV, HCV, HBsAg, dengue, typhoid, syphilis, troponin and urinalysis — at the point of care.",
        points: [
            "Rapid immunoassay cards",
            "Urine strip readers",
            "Portable POC analysers",
        ],
    },
    {
        no: "05",
        title: "Laboratory Consumables & Accessories",
        summary:
            "Everyday lab essentials — gloves, syringes, tubes, tips, slides, containers and reagents — kept in ready stock for same-week dispatch across India.",
        points: [
            "Vacuum blood collection tubes",
            "Nitrile & latex examination gloves",
            "Pipette tips, MCTs & slides",
        ],
    },
    {
        no: "06",
        title: "Service & Technical Support",
        summary:
            "On-site installation, traceable calibration, IQ/OQ/PQ documentation and preventive maintenance contracts backed by a 48-hour response SLA.",
        points: [
            "Installation & commissioning",
            "IQ / OQ / PQ documentation",
            "Annual maintenance contracts",
        ],
    },
];

export const TESTIMONIALS = [
    {
        quote: "Skymed set up our entire molecular biology wing on schedule and handled calibration without a single re-visit. Their documentation cleared our accreditation audit on the first pass.",
        name: "Dr. Aparna Menon",
        role: "Head of Research · Meridian Institute of Life Sciences",
    },
    {
        quote: "Procurement is usually painful. Skymed's catalog is organised, the specs are honest, and consumables arrive sterile and on time. They've become our default supplier.",
        name: "Rakesh Iyer",
        role: "Procurement Lead · Sunrise Multispecialty Hospital",
    },
    {
        quote: "When a Mindray analyser went down mid-study they were on-site the next morning with the right part. That reliability is exactly why we keep the AMC.",
        name: "Dr. Thomas George",
        role: "Lab Director · Coastal Diagnostics Network",
    },
];

export const NAV = [
    { label: "Catalog", id: "catalog" },
    { label: "Solutions", id: "services" },
    { label: "Clients", id: "testimonials" },
    { label: "About", id: "about" },
];
