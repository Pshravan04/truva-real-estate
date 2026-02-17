import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const domain = process.env.NEXT_PUBLIC_BASE_URL || 'https://truva-demo.netlify.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${domain}/sitemap.xml`,
    }
}
