import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const settings = await prisma.settings.findUnique({
            where: { id: 'global_settings' }
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
            where: { id: 'global_settings' },
            update: { filterSettings: body },
            create: { id: 'global_settings', filterSettings: body }
        });
        return NextResponse.json(settings.filterSettings);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
