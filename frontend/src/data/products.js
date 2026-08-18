// Product catalog data. Add new products by appending objects here.
// Each product needs: id, slug (url-safe, unique), name, category, tagline,
// image (url), price (display string or 'On request'), specs [], features [], description.
//
// HOW TO ADD A PRODUCT:
//   1. Copy any object below (or use the template at the bottom).
//   2. Give it a NEW unique `id` and `slug`.
//   3. Replace name, category, image url, specs and description.
//   4. Save — it appears in the catalog and gets its own /product/<slug> page automatically.

export const CATEGORIES = [
    "All",
    "Molecular Diagnostics",
    "Mindray Hematology",
    "Polymed",
    "Other",
];

export const PRODUCTS = [
    {
        id: 1,
        slug: "truelab-uno-dx",
        name: "Truelab Uno Dx",
        category: "Molecular Diagnostics",
        tagline:
            "Portable single-bay RT-PCR analyser — compact molecular diagnostics for low-volume testing.",
        image: "https://customer-assets-39nsmqrw.emergentagent.net/job_lab-solutions-hub-1/artifacts/p9velohh_truelab_Uno_Dx.webp",
        price: "On request",
        code: "SB-MD001",
        specs: [
            { label: "Brand", value: "Molbio" },
            { label: "Model", value: "Truelab Uno Dx" },
            { label: "Throughput", value: "10 – 12 samples per 8 hours" },
            { label: "Testing Bays", value: "1 (Single)" },
            { label: "Category", value: "Molecular Diagnostics" },
        ],
        features: [
            "Single testing bay for streamlined diagnostics",
            "Compact footprint ideal for low-volume testing",
            "Point-of-care ready — battery-operable field deployment",
        ],
        description:
            "The Truelab Uno Dx is a compact, single-bay real-time quantitative micro-PCR analyser designed for point-of-care molecular diagnostics. Its streamlined workflow and small footprint make it ideal for clinics, remote sites and low-volume testing environments where portability and simplicity matter.",
    },
    {
        id: 2,
        slug: "truelab-duo",
        name: "Truelab Duo",
        category: "Molecular Diagnostics",
        tagline:
            "Dual-bay RT-PCR analyser with complete random access — run two assays simultaneously.",
        image: "https://customer-assets-39nsmqrw.emergentagent.net/job_lab-solutions-hub-1/artifacts/hf1ke6dt_Truelab_duo.webp",
        price: "On request",
        code: "SB-MD002",
        specs: [
            { label: "Brand", value: "Molbio" },
            { label: "Model", value: "Truelab Duo" },
            { label: "Throughput", value: "20 – 24 samples per 8 hours" },
            { label: "Testing Bays", value: "2 (Dual, random access)" },
            { label: "Category", value: "Molecular Diagnostics" },
        ],
        features: [
            "Dual testing bays for enhanced flexibility",
            "Complete random access — run different assays in parallel",
            "Twice the throughput without doubling the footprint",
        ],
        description:
            "The Truelab Duo is a dual-bay real-time micro-PCR analyser with complete random access, letting labs run two independent assays simultaneously. Ideal for mid-volume clinical labs and diagnostic centres that need flexibility and parallel testing without a full-scale PCR setup.",
    },
    {
        id: 3,
        slug: "truelab-quattro",
        name: "Truelab Quattro",
        category: "Molecular Diagnostics",
        tagline:
            "Four-bay high-throughput RT-PCR platform for high-volume molecular diagnostics.",
        image: "https://customer-assets-39nsmqrw.emergentagent.net/job_lab-solutions-hub-1/artifacts/xmoczz1m_Quattro.webp",
        price: "On request",
        code: "SB-MD003",
        specs: [
            { label: "Brand", value: "Molbio" },
            { label: "Model", value: "Truelab Quattro" },
            { label: "Throughput", value: "40 – 48 samples per 8 hours" },
            { label: "Testing Bays", value: "4 (Quad, random access)" },
            { label: "Category", value: "Molecular Diagnostics" },
        ],
        features: [
            "Four independent testing bays for high-volume diagnostics",
            "Complete random access for an optimised, parallel workflow",
            "Scales molecular testing without expanding the physical bench",
        ],
        description:
            "The Truelab Quattro is a high-throughput four-bay real-time micro-PCR system that scales molecular testing for busy diagnostic labs, hospital reference centres and public-health screening programmes. Complete random access across all four bays keeps the workflow optimised even when multiple assays run in parallel.",
    },
];

/*
Template for adding a product:
{
    id: 4,
    slug: "product-slug",
    name: "Product Name",
    category: "Category Name",   // one of CATEGORIES above
    tagline: "One line tagline.",
    image: "https://your-image-url.jpg",
    price: "₹1,000",             // or "On request"
    code: "SB-XX001",
    specs: [
        { label: "Brand", value: "Skymed" },
        { label: "Type", value: "..." },
    ],
    features: ["Feature 1", "Feature 2", "Feature 3"],
    description: "Full paragraph description.",
}
*/

export function getProductBySlug(slug) {
    return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(product, count = 3) {
    return PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, count);
}
