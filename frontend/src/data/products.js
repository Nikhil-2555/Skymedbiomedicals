// Product catalog data. Add new products by appending objects here.
// Each product needs: id, slug (url-safe, unique), name, category, tagline,
// image (url), price (display string or "On request"), specs [], features [], description.
//
// HOW TO ADD A PRODUCT:
//   1. Copy any object below.
//   2. Give it a NEW unique `id` and `slug`.
//   3. Replace name, category, image url, specs and description.
//   4. Save — it appears in the catalog and gets its own /product/<slug> page automatically.

const IMG = {
    labEquip1:
        "https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxiaW9tZWRpY2FsJTIwZXF1aXBtZW50JTIwbWljcm9zY29wZXxlbnwwfHx8fDE3ODUzMDE4MDN8MA&ixlib=rb-4.1.0&q=85",
    labEquip2:
        "https://images.unsplash.com/photo-1526930382372-67bf22c0fce2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxiaW9tZWRpY2FsJTIwZXF1aXBtZW50JTIwbWljcm9zY29wZXxlbnwwfHx8fDE3ODUzMDE4MDN8MA&ixlib=rb-4.1.0&q=85",
    surgical1:
        "https://images.unsplash.com/photo-1688565631957-0306970fdd74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwc3RlcmlsZXxlbnwwfHx8fDE3ODUzMDE4MDN8MA&ixlib=rb-4.1.0&q=85",
    surgical2:
        "https://images.unsplash.com/photo-1668453598237-27098d2575ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxzdXJnaWNhbCUyMGluc3RydW1lbnRzJTIwc3RlcmlsZXxlbnwwfHx8fDE3ODUzMDE4MDN8MA&ixlib=rb-4.1.0&q=85",
    lab: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjB3b3JraW5nJTIwaW4lMjBsYWJ8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85",
    interior:
        "https://images.unsplash.com/photo-1775504982885-b0c0f089a0bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYWJvcmF0b3J5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzg1MzAxODAzfDA&ixlib=rb-4.1.0&q=85",
};

export const CATEGORIES = [
    "All",
    "Laboratory Equipment",
    "Diagnostic Instruments",
    "Microscopy",
    "Surgical Consumables",
    "Sterilization",
    "Lab Furniture",
];

export const PRODUCTS = [
    {
        id: 1,
        slug: "high-speed-refrigerated-centrifuge",
        name: "High-Speed Refrigerated Centrifuge",
        category: "Laboratory Equipment",
        tagline: "Up to 21,000 RPM with sub-degree thermal stability.",
        image: IMG.labEquip1,
        price: "On request",
        code: "VB-CF-2100R",
        specs: [
            { label: "Max Speed", value: "21,000 RPM" },
            { label: "Max RCF", value: "30,130 × g" },
            { label: "Temperature", value: "-20°C to +40°C" },
            { label: "Capacity", value: "4 × 100 mL" },
        ],
        features: [
            "Brushless induction drive for maintenance-free operation",
            "Auto-rotor recognition with imbalance detection",
            "99 programmable protocols with acceleration profiling",
        ],
        description:
            "A workhorse refrigerated centrifuge engineered for demanding molecular biology and clinical workflows. Precision temperature control protects sensitive samples while the brushless drive delivers repeatable, vibration-damped spins.",
    },
    {
        id: 2,
        slug: "research-grade-trinocular-microscope",
        name: "Research-Grade Trinocular Microscope",
        category: "Microscopy",
        tagline: "Plan-achromatic optics with camera-ready trinocular head.",
        image: IMG.labEquip2,
        price: "On request",
        code: "VB-MS-880T",
        specs: [
            { label: "Magnification", value: "40× – 1000×" },
            { label: "Optics", value: "Infinity Plan Achromat" },
            { label: "Illumination", value: "3W LED Köhler" },
            { label: "Head", value: "Trinocular 30°" },
        ],
        features: [
            "Camera-ready trinocular port for digital documentation",
            "Köhler illumination for even, glare-free fields",
            "Quintuple nosepiece with click-stop objectives",
        ],
        description:
            "Built for histology, pathology and academic research. The infinity-corrected optical train and true Köhler illumination deliver crisp, high-contrast imaging suitable for publication-quality capture.",
    },
    {
        id: 3,
        slug: "sterile-surgical-instrument-set",
        name: "Sterile Surgical Instrument Set",
        category: "Surgical Consumables",
        tagline: "Single-use, gamma-sterilized general procedure tray.",
        image: IMG.surgical1,
        price: "On request",
        code: "VB-SG-STR14",
        specs: [
            { label: "Contents", value: "14 instruments" },
            { label: "Material", value: "AISI 420 Stainless" },
            { label: "Sterility", value: "Gamma, SAL 10⁻⁶" },
            { label: "Packaging", value: "Peel-pouch, indicator" },
        ],
        features: [
            "Individually validated sterility with dose indicator",
            "Passivated surgical stainless resists corrosion",
            "Ergonomic ring handles with box-lock precision",
        ],
        description:
            "A ready-to-use general surgery tray for OT and minor-procedure rooms. Each set ships gamma-sterilized with a colour-changing indicator, eliminating reprocessing turnaround.",
    },
    {
        id: 4,
        slug: "precision-surgical-scissors",
        name: "Precision Surgical Scissors",
        category: "Surgical Consumables",
        tagline: "Tungsten-carbide edges for clean, effortless dissection.",
        image: IMG.surgical2,
        price: "On request",
        code: "VB-SG-SC07",
        specs: [
            { label: "Length", value: "145 mm" },
            { label: "Edge", value: "Tungsten Carbide" },
            { label: "Tip", value: "Sharp / Blunt" },
            { label: "Finish", value: "Satin, non-glare" },
        ],
        features: [
            "TC inserts extend edge life 3× over standard steel",
            "Non-reflective satin finish reduces OT glare",
            "Autoclavable to 134°C for reusable variants",
        ],
        description:
            "Engineered for fine tissue work, these scissors pair a satin non-glare body with tungsten-carbide cutting inserts for a precise, low-fatigue cut over thousands of cycles.",
    },
    {
        id: 5,
        slug: "co2-jacketed-incubator",
        name: "CO₂ Jacketed Incubator",
        category: "Laboratory Equipment",
        tagline: "180°C dry-heat decontamination with IR CO₂ control.",
        image: IMG.lab,
        price: "On request",
        code: "VB-IN-160W",
        specs: [
            { label: "Volume", value: "160 L" },
            { label: "CO₂ Sensor", value: "Infrared" },
            { label: "Temp Range", value: "+5°C above ambient to 55°C" },
            { label: "Decontam", value: "180°C dry heat" },
        ],
        features: [
            "IR CO₂ sensor unaffected by humidity or temperature",
            "One-touch 180°C sterilization cycle",
            "Seamless drawn-corner chamber for easy cleaning",
        ],
        description:
            "A water-jacketed cell-culture incubator delivering rock-stable CO₂ and humidity. The high-temperature decontamination cycle protects long-running cultures from contamination events.",
    },
    {
        id: 6,
        slug: "digital-benchtop-ph-meter",
        name: "Digital Benchtop pH Meter",
        category: "Diagnostic Instruments",
        tagline: "0.001 pH resolution with automatic temperature compensation.",
        image: IMG.labEquip1,
        price: "On request",
        code: "VB-PH-700B",
        specs: [
            { label: "Range", value: "-2.000 to 20.000 pH" },
            { label: "Resolution", value: "0.001 pH" },
            { label: "Calibration", value: "Up to 5 points" },
            { label: "ATC", value: "Automatic" },
        ],
        features: [
            "GLP-compliant data logging with timestamps",
            "Five-point calibration with buffer recognition",
            "Backlit graphic display with electrode diagnostics",
        ],
        description:
            "A laboratory-standard pH/mV/ORP meter with GLP data integrity. Electrode-condition diagnostics flag ageing probes before they compromise your readings.",
    },
    {
        id: 7,
        slug: "class-ii-biosafety-cabinet",
        name: "Class II Biosafety Cabinet",
        category: "Laboratory Equipment",
        tagline: "Type A2 containment with EC-motor HEPA filtration.",
        image: IMG.interior,
        price: "On request",
        code: "VB-BSC-A2-4",
        specs: [
            { label: "Width", value: "1200 mm" },
            { label: "Filtration", value: "H14 HEPA, 99.999%" },
            { label: "Airflow", value: "Downflow + inflow" },
            { label: "Motor", value: "DC ECM, auto-compensating" },
        ],
        features: [
            "Auto-compensating ECM maintains airflow as filters load",
            "Real-time airflow monitoring with audible alarms",
            "Motorized sash with safe-height interlock",
        ],
        description:
            "Personnel, product and environmental protection for handling biohazardous agents. The self-adjusting ECM keeps certified airflow constant across the filter's service life.",
    },
    {
        id: 8,
        slug: "horizontal-autoclave-sterilizer",
        name: "Horizontal Autoclave Sterilizer",
        category: "Sterilization",
        tagline: "Class B vacuum cycle for wrapped and hollow loads.",
        image: IMG.surgical1,
        price: "On request",
        code: "VB-AC-80B",
        specs: [
            { label: "Chamber", value: "80 L" },
            { label: "Cycle", value: "Class B, fractionated vacuum" },
            { label: "Max Temp", value: "134°C" },
            { label: "Printer", value: "Integrated cycle log" },
        ],
        features: [
            "Fractionated pre-vacuum for full-load penetration",
            "Integrated printer + USB cycle documentation",
            "Double-locking door with pressure interlock",
        ],
        description:
            "A Class B benchtop autoclave for clinics and labs sterilizing wrapped, porous and hollow instruments. Every cycle is documented for audit-ready traceability.",
    },
    {
        id: 9,
        slug: "orbital-shaking-incubator",
        name: "Orbital Shaking Incubator",
        category: "Laboratory Equipment",
        tagline: "Triple-eccentric drive for uniform, quiet agitation.",
        image: IMG.labEquip2,
        price: "On request",
        code: "VB-OS-200I",
        specs: [
            { label: "Speed", value: "20 – 300 RPM" },
            { label: "Orbit", value: "25 mm" },
            { label: "Temp", value: "Ambient +5°C to 60°C" },
            { label: "Platform", value: "Universal, quick-swap" },
        ],
        features: [
            "Triple-eccentric drive for whisper-quiet running",
            "Quick-change platform accepts mixed flask clamps",
            "PID temperature uniformity within ±0.3°C",
        ],
        description:
            "Combines precise thermal control with smooth orbital agitation for microbial and cell-suspension culture. The heavy triple-eccentric drive stays quiet even at full load.",
    },
    {
        id: 10,
        slug: "hematology-analyzer-5-part",
        name: "5-Part Hematology Analyzer",
        category: "Diagnostic Instruments",
        tagline: "Automated CBC with 5-part differential in 60 seconds.",
        image: IMG.lab,
        price: "On request",
        code: "VB-HA-5D",
        specs: [
            { label: "Throughput", value: "60 samples/hr" },
            { label: "Parameters", value: "29 + 3 histograms" },
            { label: "Sample", value: "20 µL whole blood" },
            { label: "Differential", value: "5-part" },
        ],
        features: [
            "Micro-sampling ideal for paediatric draws",
            "Onboard QC with Levey-Jennings tracking",
            "Bidirectional LIS connectivity",
        ],
        description:
            "A compact 5-part differential analyzer for clinical and research labs. Low sample volume and onboard QC make it dependable for high-throughput haematology.",
    },
    {
        id: 11,
        slug: "stereo-zoom-microscope",
        name: "Stereo Zoom Microscope",
        category: "Microscopy",
        tagline: "Greenough optics with fluid 0.7×–4.5× zoom.",
        image: IMG.labEquip1,
        price: "On request",
        code: "VB-MS-ST45",
        specs: [
            { label: "Zoom", value: "0.7× – 4.5×" },
            { label: "Working Dist.", value: "100 mm" },
            { label: "Illumination", value: "LED ring + transmitted" },
            { label: "Head", value: "Binocular 45°" },
        ],
        features: [
            "Long working distance for dissection and assembly",
            "Dual LED illumination, reflected + transmitted",
            "Fine-focus with tension adjustment",
        ],
        description:
            "Ideal for dissection, QC inspection and electronics rework. The Greenough optical system delivers an erect, three-dimensional image with a generous working distance.",
    },
    {
        id: 12,
        slug: "nitrile-examination-gloves",
        name: "Nitrile Examination Gloves",
        category: "Surgical Consumables",
        tagline: "Powder-free, textured grip with low-modulus comfort.",
        image: IMG.surgical2,
        price: "On request",
        code: "VB-CN-GLV",
        specs: [
            { label: "Material", value: "Nitrile, powder-free" },
            { label: "Thickness", value: "0.10 mm fingertip" },
            { label: "AQL", value: "1.5" },
            { label: "Pack", value: "100 / box" },
        ],
        features: [
            "Latex-free — safe for sensitised staff",
            "Textured fingertips for wet & dry grip",
            "Chemo-splash tested for handling cytotoxics",
        ],
        description:
            "A dependable everyday examination glove offering barrier protection without latex allergens. Low-modulus nitrile reduces hand fatigue across long shifts.",
    },
    {
        id: 13,
        slug: "laminar-flow-clean-bench",
        name: "Laminar Flow Clean Bench",
        category: "Lab Furniture",
        tagline: "ISO Class 5 horizontal flow for aseptic prep.",
        image: IMG.interior,
        price: "On request",
        code: "VB-LF-HZ4",
        specs: [
            { label: "Class", value: "ISO 5 / Class 100" },
            { label: "Filtration", value: "H14 HEPA" },
            { label: "Work Surface", value: "304 Stainless" },
            { label: "Lighting", value: "LED + UV cycle" },
        ],
        features: [
            "Horizontal laminar flow protects the work zone",
            "Stainless work surface with coved corners",
            "Timed UV decontamination cycle",
        ],
        description:
            "A horizontal laminar-flow bench delivering an ISO Class 5 environment for media plating, electronics assembly and non-hazardous aseptic tasks.",
    },
    {
        id: 14,
        slug: "vortex-mixer-variable-speed",
        name: "Variable-Speed Vortex Mixer",
        category: "Laboratory Equipment",
        tagline: "Touch-start orbital mixing up to 3,000 RPM.",
        image: IMG.labEquip2,
        price: "On request",
        code: "VB-VX-30",
        specs: [
            { label: "Speed", value: "0 – 3,000 RPM" },
            { label: "Orbit", value: "4 mm" },
            { label: "Modes", value: "Touch / Continuous" },
            { label: "Weight", value: "3.6 kg cast base" },
        ],
        features: [
            "Heavy cast base stays planted at high speed",
            "Touch-to-mix and continuous modes",
            "Interchangeable tube and plate heads",
        ],
        description:
            "A compact benchtop vortexer with a heavy die-cast base that resists walking. Swap heads for tubes, plates or multiple vessels in seconds.",
    },
    {
        id: 15,
        slug: "surgical-blade-scalpel-pack",
        name: "Surgical Scalpel Blade Pack",
        category: "Surgical Consumables",
        tagline: "Carbon-steel blades, individually foil-sealed sterile.",
        image: IMG.surgical1,
        price: "On request",
        code: "VB-CN-BLD10",
        specs: [
            { label: "Sizes", value: "No. 10, 11, 15, 22, 23" },
            { label: "Material", value: "Carbon steel" },
            { label: "Sterility", value: "Gamma sterile" },
            { label: "Pack", value: "100 foil-sealed" },
        ],
        features: [
            "Individually foil-wrapped for guaranteed sterility",
            "Precision-ground edge for clean incision",
            "Fits all standard No. 3 & No. 4 handles",
        ],
        description:
            "Sterile carbon-steel blades ground to a consistent, keen edge. Individual foil seals maintain sterility to the point of use.",
    },
    {
        id: 16,
        slug: "uv-vis-spectrophotometer",
        name: "UV-VIS Spectrophotometer",
        category: "Diagnostic Instruments",
        tagline: "190–1100 nm scanning with split-beam stability.",
        image: IMG.lab,
        price: "On request",
        code: "VB-SP-UV11",
        specs: [
            { label: "Range", value: "190 – 1100 nm" },
            { label: "Bandwidth", value: "1 nm" },
            { label: "Optics", value: "Split-beam" },
            { label: "Detector", value: "Silicon photodiode" },
        ],
        features: [
            "Split-beam design corrects for lamp drift",
            "Onboard nucleic-acid & protein quant methods",
            "USB export to PC software",
        ],
        description:
            "A split-beam UV-VIS instrument for quantitative analysis across life science and QC labs. Preloaded methods speed up routine nucleic-acid and kinetics work.",
    },
];

export function getProductBySlug(slug) {
    return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(product, count = 3) {
    return PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, count);
}
