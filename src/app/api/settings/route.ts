import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const settings = await prisma.settings.findUnique({
            where: { id: 1 }
        });
        return NextResponse.json(settings?.filterSettings || {});
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const settings = await prisma.settings.upsert({
            where: { id: 1 },
            update: { filterSettings: body },
            create: { id: 1, filterSettings: body }
        });
        return NextResponse.json(settings.filterSettings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
