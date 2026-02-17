import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const inquiry = await prisma.inquiry.create({
            data: {
                propertyId: body.propertyId,
                name: body.name,
                email: body.email,
                phone: body.phone,
                message: body.message
            }
        });
        return NextResponse.json(inquiry);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 });
    }
}
