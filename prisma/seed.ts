import { PrismaClient } from '@prisma/client'
import { properties, submissions, inquiries } from '../src/lib/data'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // Seed Properties
    for (const property of properties) {
        const existingProperty = await prisma.property.findUnique({
            where: { slug: property.slug }
        })

        if (!existingProperty) {
            await prisma.property.create({
                data: {
                    id: property.id, // Explicit ID for linking
                    title: property.title,
                    slug: property.slug,
                    description: property.description || '',
                    price: property.price,
                    type: property.type,
                    bhk: property.bhk,
                    status: property.status || 'LISTED',
                    isFeatured: property.isFeatured || false,

                    location: property.location as any,
                    stats: property.stats as any,
                    amenities: property.amenities as any,
                    configurations: property.configurations as any,
                    contactDetails: property.contactDetails as any,
                    environmentalScores: property.environmentalScores as any,

                    sellerName: property.sellerName,
                    developerName: property.developerName,
                    highlights: property.highlights,
                    connectivity: property.connectivity,
                    usageType: property.usageType,
                    constructionStatus: property.constructionStatus,
                    possessionDate: property.possessionDate,
                    viewOrientation: property.viewOrientation,
                    auditScore: property.auditScore,

                    images: property.images as any,
                    projectImages: property.projectImages as any,
                    virtualTourUrl: property.virtualTourUrl,
                    masterPlanUrl: property.masterPlanUrl,
                    floorPlanUrl: property.floorPlanUrl,
                    mapUrl: property.mapUrl,

                    reraNumber: property.reraNumber,
                    reraQr: property.reraQr
                }
            })
            console.log(`Created property with id: ${property.id}`)
        } else {
            console.log(`Property ${property.slug} already exists.`)
        }
    }

    // Seed Submissions
    for (const submission of submissions) {
        const existingSubmission = await prisma.submission.findUnique({
            where: { id: submission.id }
        })

        if (!existingSubmission) {
            await prisma.submission.create({
                data: {
                    id: submission.id,
                    sellerId: submission.sellerId,
                    propertyName: submission.propertyName,
                    description: submission.description,
                    status: submission.status,
                    valuationAmount: submission.valuationAmount,

                    location: typeof submission.location === 'string' ? submission.location : JSON.stringify(submission.location),
                    carpetArea: submission.carpetArea,
                    floor: submission.floor,

                    sellerName: submission.sellerName,
                    developerName: submission.developerName,
                    societyId: submission.societyId,
                    tower: submission.tower,
                    contactDetails: submission.contactDetails as any,

                    image: submission.image,
                    projectImages: submission.projectImages as any,
                    amenities: submission.amenities as any,
                    highlights: submission.highlights,
                    connectivity: submission.connectivity,

                    configurations: submission.configurations as any,

                    virtualTourUrl: submission.virtualTourUrl,
                    masterPlanUrl: submission.masterPlanUrl,
                    floorPlanUrl: submission.floorPlanUrl,
                    mapUrl: submission.mapUrl,

                    reraNumber: submission.reraNumber,
                    reraQr: submission.reraQr
                }
            })
            console.log(`Created submission with id: ${submission.id}`)
        }
    }

    // Seed Inquiries
    for (const inquiry of inquiries) {
        const prop = await prisma.property.findUnique({ where: { id: inquiry.propertyId } })
        if (prop) {
            const existingInquiry = await prisma.inquiry.findFirst({
                where: {
                    email: inquiry.email,
                    propertyId: inquiry.propertyId
                }
            })

            if (!existingInquiry) {
                await prisma.inquiry.create({
                    data: {
                        propertyId: inquiry.propertyId,
                        name: inquiry.name,
                        email: inquiry.email,
                        phone: inquiry.phone,
                        message: inquiry.message
                    }
                })
                console.log(`Created inquiry for property ${inquiry.propertyId}`)
            }
        } else {
            console.warn(`Skipping inquiry for non-existent property ${inquiry.propertyId}`)
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
