import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Property } from '@/types';

export async function POST(request: Request) {
    try {
        const { id } = await request.json();

        // Start transaction
        const result = await prisma.$transaction(async (tx) => {
            // 1. Get submission
            const submission = await tx.submission.findUnique({
                where: { id }
            });

            if (!submission) {
                throw new Error('Submission not found');
            }

            // 2. Create Property
            const newProperty = await tx.property.create({
                data: {
                    title: submission.propertyName || `${submission.developerName} Asset`,
                    slug: `new-listing-${Date.now()}`,
                    description: submission.description || "Verified Asset",
                    price: submission.valuationAmount || 0,
                    type: 'sale',
                    bhk: 3, // Default fallback
                    location: typeof submission.location === 'string'
                        ? { area: submission.location, city: 'Mumbai', address: 'Verified Asset' }
                        : (submission.location || { area: 'Mumbai', city: 'Mumbai' }),
                    amenities: submission.amenities || [],
                    images: submission.projectImages || [submission.image || ""],
                    projectImages: submission.projectImages || [],
                    virtualTourUrl: submission.virtualTourUrl,
                    masterPlanUrl: submission.masterPlanUrl,
                    floorPlanUrl: submission.floorPlanUrl,
                    reraNumber: submission.reraNumber,
                    reraQr: submission.reraQr,
                    stats: { bathrooms: 2, areaSqFt: submission.carpetArea || 0 }, // Defaults
                    status: 'LISTED',
                    sellerName: submission.sellerName,
                    developerName: submission.developerName,
                    configurations: submission.configurations || [],
                    highlights: submission.highlights,
                    connectivity: submission.connectivity,
                    mapUrl: submission.mapUrl
                }
            });

            // 3. Delete Submission or Mark as Approved
            await tx.submission.delete({
                where: { id }
            });

            return newProperty;
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Approval error:', error);
        return NextResponse.json({ error: 'Failed to approve submission' }, { status: 500 });
    }
}
