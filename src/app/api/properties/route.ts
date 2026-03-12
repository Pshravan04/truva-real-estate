import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Property } from '@/types';

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(properties);
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
