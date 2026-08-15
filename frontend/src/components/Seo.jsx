import { useEffect } from "react";

// Lightweight on-page SEO: updates title + meta description per page.
export function Seo({ title, description }) {
    useEffect(() => {
        if (title) document.title = title;
        if (description) {
            let tag = document.querySelector('meta[name="description"]');
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("name", "description");
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", description);
        }
    }, [title, description]);
    return null;
}
