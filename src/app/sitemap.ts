import { MetadataRoute } from 'next'
import { properties } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://truva.in' // Assuming this is the domain, or I should use a generic one or localhost for now, but truva.in is good for production desire. User said "live it on netlify", so maybe "https://truva.netlify.app" or similar. I'll use a placeholder variable.

    // Realistically, the user will configure the domain in Netlify. 
    // For now I'll use a relative path if possible? No, sitemaps need absolute URLs.
    // I'll genericize it or ask user. 
    // Actually, I'll use a standard placeholder and comment it.

    const domain = process.env.NEXT_PUBLIC_BASE_URL || 'https://truva-demo.netlify.app';

    const propertyEntries: MetadataRoute.Sitemap = properties.map((property) => ({
        url: `${domain}/properties/${property.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [
        {
            url: domain,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${domain}/buy`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${domain}/sell`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${domain}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...propertyEntries,
    ]
}
