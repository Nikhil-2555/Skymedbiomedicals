// Global site content — edit brand, contact, services and testimonials here.

export const BRAND = {
    name: "Vanta Biomedical",
    short: "Vanta",
    tagline: "Precision instruments for the people who advance medicine.",
    logo: "https://images.unsplash.com/photo-1762939079730-23708c0dd337?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGxvZ298ZW58MHx8fHwxNzg1MzAxODEwfDA&ixlib=rb-4.1.0&q=85",
};

export const CONTACT = {
    phone: "+91 98200 41000",
    phoneHref: "tel:+919820041000",
    email: "hello@vantabiomedical.com",
    emailHref: "mailto:hello@vantabiomedical.com",
    address: "Plot 42, Life Sciences Park, Andheri East, Mumbai 400093",
    hours: "Mon – Sat · 09:00 – 19:00 IST",
};

export const HERO_IMAGE =
    "https://images.unsplash.com/photo-1775504982885-b0c0f089a0bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85";

export const SERVICES_IMAGE =
    "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjB3b3JraW5nJTIwaW4lMjBsYWJ8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85";

export const MARQUEE_ITEMS = [
    "Laboratory Equipment",
    "Surgical Consumables",
    "Installation & Setup",
    "Calibration",
    "Preventive Maintenance",
    "Biomedical Instruments",
    "Turnkey Lab Projects",
];

export const STATS = [
    { value: "12+", label: "Years in the field" },
    { value: "200+", label: "Catalogued products" },
    { value: "140+", label: "Institutions served" },
    { value: "48h", label: "Service response SLA" },
];

export const SERVICES = [
    {
        no: "01",
        title: "Installation & Lab Setup",
        summary:
            "Turnkey commissioning of laboratory and clinical spaces — from bench layout to power, gas and airflow validation.",
        points: [
            "Site survey & load planning",
            "Bench, fume & utility layout",
            "Equipment commissioning & handover",
        ],
    },
    {
        no: "02",
        title: "Calibration & Validation",
        summary:
            "Traceable calibration and IQ/OQ/PQ documentation that keeps your instruments audit-ready and accurate.",
        points: [
            "Traceable multi-point calibration",
            "IQ / OQ / PQ documentation",
            "Compliance-ready certificates",
        ],
    },
    {
        no: "03",
        title: "Preventive Maintenance",
        summary:
            "Scheduled service contracts that maximise uptime with genuine parts and a guaranteed response window.",
        points: [
            "Annual maintenance contracts",
            "Genuine spares & consumables",
            "48-hour on-site response",
        ],
    },
];

export const TESTIMONIALS = [
    {
        quote: "Vanta set up our entire molecular biology wing on schedule and handled calibration without a single re-visit. Their documentation cleared our accreditation audit on the first pass.",
        name: "Dr. Aparna Menon",
        role: "Head of Research · Meridian Institute of Life Sciences",
    },
    {
        quote: "Procurement is usually painful. Vanta's catalog is organised, the specs are honest, and consumables arrive sterile and on time. They've become our default supplier.",
        name: "Rakesh Iyer",
        role: "Procurement Lead · Sunrise Multispecialty Hospital",
    },
    {
        quote: "When a centrifuge went down mid-study they were on-site the next morning with the right part. That reliability is exactly why we keep the service contract.",
        name: "Dr. Thomas George",
        role: "Lab Director · Coastal Diagnostics Network",
    },
];

export const NAV = [
    { label: "Catalog", id: "catalog" },
    { label: "Services", id: "services" },
    { label: "Clients", id: "testimonials" },
    { label: "About", id: "about" },
];
