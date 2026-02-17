import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Property } from '@/types';

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            orderBy: { createdAt: 'desc' }
        });

        // Parse JSON fields
        const parsedProperties = properties.map(p => ({
            ...p,
            location: p.location ? JSON.parse(JSON.stringify(p.location)) : null,
            stats: p.stats ? JSON.parse(JSON.stringify(p.stats)) : null,
            amenities: p.amenities ? JSON.parse(JSON.stringify(p.amenities)) : [],
            configurations: p.configurations ? JSON.parse(JSON.stringify(p.configurations)) : [],
            contactDetails: p.contactDetails ? JSON.parse(JSON.stringify(p.contactDetails)) : null,
            environmentalScores: p.environmentalScores ? JSON.parse(JSON.stringify(p.environmentalScores)) : null,
            images: p.images ? JSON.parse(JSON.stringify(p.images)) : [],
            projectImages: p.projectImages ? JSON.parse(JSON.stringify(p.projectImages)) : [],
        }));

        return NextResponse.json(parsedProperties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const property = await prisma.property.create({
            data: {
                ...body,
                location: body.location,
                stats: body.stats,
                amenities: body.amenities,
                configurations: body.configurations,
                contactDetails: body.contactDetails,
                environmentalScores: body.environmentalScores,
                images: body.images,
                projectImages: body.projectImages,
            }
        });

        return NextResponse.json(property);
    } catch (error) {
        console.error('Error creating property:', error);
        return NextResponse.json({ error: 'Failed to create property' }, { status: 500 });
    }
}
