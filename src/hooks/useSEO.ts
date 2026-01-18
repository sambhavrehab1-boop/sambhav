import { useEffect } from "react";

/**
 * Custom hook to update document title and meta description dynamically for SEO.
 * @param title - The page title
 * @param description - The page meta description
 */
export function useSEO(title: string, description?: string) {
    useEffect(() => {
        // Update Document Title
        document.title = `${title} | Sambhav Nasha Mukti Kendra Dehradun`;

        // Update Meta Description
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);

            // Update Open Graph Description too
            let ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', description);
            }
        }
    }, [title, description]);
}
