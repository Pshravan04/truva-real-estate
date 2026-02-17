export type UserRole = 'ADMIN' | 'SELLER' | 'BUYER';

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
}

export interface Amenity {
    icon: string; // Name of the Lucide icon
    label: string;
}

export interface EnvironmentalScores {
    light: number;
    noise: number;
    air: number;
}

export type PropertyStatus = 'PENDING' | 'AUDITED' | 'LISTED' | 'SOLD';

export interface Property {
    id: string;
    sellerId?: string;
    title: string;
    slug: string;
    description: string;
    highlights?: string;
    connectivity?: string;
    developerName?: string;
    sellerName?: string;
    contactDetails?: {
        phone: string;
        email: string;
    };
    price: number;
    type: 'sale' | 'rent';
    usageType?: 'RESIDENTIAL' | 'COMMERCIAL';
    constructionStatus?: 'READY_TO_MOVE' | 'UNDER_CONSTRUCTION' | 'NEAR_POSSESSION';
    possessionDate?: string;
    bhk: number;
    configurations?: Array<{
        configuration: string;
        price: string;
        area?: string;
    }>;
    location: {
        area: string;
        city: string;
        address: string;
        tower?: string;
        floor?: number;
    };
    amenities: Amenity[];
    images: string[];
    stats: {
        bathrooms: number;
        areaSqFt: number;
    };
    isFeatured?: boolean;
    status: PropertyStatus;
    environmentalScores?: EnvironmentalScores;
    viewOrientation?: string;
    auditScore?: number; // 0-100 audit
    mapUrl?: string;
    projectImages?: string[];
    virtualTourUrl?: string;
    masterPlanUrl?: string;
    floorPlanUrl?: string;
    reraNumber?: string;
    reraQr?: string;
}

export interface Society {
    id: string;
    name: string;
    area: string;
    city: string;
    environmentalScores: EnvironmentalScores;
}

export interface Submission {
    id: string;
    sellerId: string;
    societyId: string;
    propertyName?: string;
    tower?: string;
    floor?: number;
    carpetArea?: number;
    status: 'PENDING' | 'VALUATED' | 'AUDITING' | 'LISTED';
    valuationAmount?: number;
    createdAt?: string;
    image?: string;
    developerName?: string;
    sellerName?: string;
    contactDetails?: {
        phone: string;
        email: string;
    };
    description?: string;
    highlights?: string;
    connectivity?: string;
    location?: string;
    amenities?: string[];
    configurations?: Array<{
        configuration: string;
        price: string;
    }>;
    mapUrl?: string;
    projectImages?: string[];
    virtualTourUrl?: string;
    masterPlanUrl?: string;
    floorPlanUrl?: string;
    reraNumber?: string;
    reraQr?: string;
}

export interface Inquiry {
    id: string;
    propertyId: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}