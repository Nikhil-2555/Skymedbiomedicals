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

// Catalog is intentionally empty — real products & photos to be uploaded.
export const PRODUCTS = [];

/*
Template for adding a product:
{
    id: 1,
    slug: "product-slug",
    name: "Product Name",
    category: "Category Name",
    tagline: "One line tagline.",
    image: "https://your-image-url.jpg",
    price: "₹1,000",
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
