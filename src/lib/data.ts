// Adding mock submissions and enhancing data for Admin Dashboard
import { Property, Society, Submission, Inquiry } from "../types";

export const societies: Society[] = [
    {
        id: "s1",
        name: "Ekta Tripolis",
        area: "Goregaon West",
        city: "Mumbai",
        environmentalScores: { light: 8, noise: 7, air: 6 }
    },
    {
        id: "s2",
        name: "L&T Emerald Isle",
        area: "Powai",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 8, air: 7 }
    },
    {
        id: "s3",
        name: "Oberoi Esquire",
        area: "Goregaon East",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 9, air: 8 }
    },
    {
        id: "s4",
        name: "Lodha Aurum Grande",
        area: "Kanjurmarg",
        city: "Mumbai",
        environmentalScores: { light: 7, noise: 6, air: 5 }
    },
    {
        id: "s5",
        name: "Oberoi Garden City",
        area: "Goregaon East",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 8, air: 8 }
    }
];

export const submissions: Submission[] = [
    {
        id: "sub1",
        sellerId: "u1",
        societyId: "s1",
        tower: "Tower A",
        floor: 15,
        carpetArea: 1250,
        status: "VALUATED",
        valuationAmount: 38500000,
        createdAt: "2024-02-10",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        developerName: "Ekta World",
        sellerName: "Amit Malhotra",
        contactDetails: {
            phone: "+91 98200 12345",
            email: "amit.m@example.com"
        }
    },
    {
        id: "sub2",
        sellerId: "u2",
        societyId: "s3",
        tower: "Tower B",
        floor: 10,
        carpetArea: 1400,
        status: "AUDITING",
        valuationAmount: 42000000,
        createdAt: "2024-02-12",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        developerName: "Oberoi Realty",
        sellerName: "Siddharth Jain",
        contactDetails: {
            phone: "+91 99300 54321",
            email: "sid.jain@example.com"
        }
    },
    {
        id: "sub3",
        sellerId: "u3",
        societyId: "s5",
        tower: "Tower C-1",
        floor: 22,
        carpetArea: 950,
        status: "PENDING",
        createdAt: "2024-02-14",
        image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        developerName: "Oberoi Realty",
        sellerName: "Vikram Singh",
        contactDetails: {
            phone: "+91 98111 22233",
            email: "vikram.s@example.com"
        }
    }
];

export const inquiries: Inquiry[] = [
    {
        id: "inq1",
        propertyId: "1",
        name: "Rahul Sharma",
        email: "rahul@example.com",
        phone: "+91 98765 43210",
        message: "Interested in the 3BHK in Ekta Tripolis. Please call back."
    }
];

export const properties: Property[] = [
    {
        id: "1",
        title: "Piramal Aranya",
        slug: "piramal-aranya-byculla",
        description: "Bespoke 2, 3 & 4 BHK residences at Aranya, Byculla. Overlooking the lush greenery of Rani Baug and the Arabian Sea.",
        highlights: "Sea Views, Botanical Garden Views, Premium Club, High-Speed Connectivity.",
        connectivity: "Located on Eastern Express Highway, 10 mins to South Mumbai.",
        developerName: "Piramal Realty",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 45000000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "Dec 2025",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "4.5 Cr", area: "1050 sqft" },
            { configuration: "3 BHK", price: "6.8 Cr", area: "1450 sqft" }
        ],
        location: {
            area: "Byculla",
            city: "Mumbai",
            address: "Piramal Aranya, Byculla East, Mumbai",
            tower: "Tower A",
            floor: 25
        },
        amenities: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Waves", label: "Infinity Pool" },
            { icon: "Dumbbell", label: "State-of-art Gym" },
            { icon: "Trees", label: "Botanical Garden View" },
        ],
        images: [
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
        ],
        stats: { bathrooms: 3, areaSqFt: 1050 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 8, air: 8 },
        viewOrientation: "Sea View",
        auditScore: 98,
        reraNumber: "P51900003342",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51900003342.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23?auto=format&fit=crop&w=800&q=80",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5!2d72.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
        neighbourhood: {
            schools: ["St. Mary's School", "Greenlawns School"],
            hospitals: ["Masina Hospital", "JJ Hospital"],
            transport: ["Byculla Station", "Eastern Freeway"],
            shopping: ["High Street Phoenix", "Palladium Mall"]
        }
    },
    {
        id: "2",
        title: "Oberoi Esquire",
        slug: "oberoi-esquire-goregaon",
        description: "Experience the pinnacle of luxury at Oberoi Esquire. Ready-to-move-in 3 BHK apartments in Goregaon East.",
        highlights: "Part of Oberoi Garden City, Integrated development, Premium finishes.",
        connectivity: "Direct WEH access, Near Hub Mall and Oberoi Mall.",
        developerName: "Oberoi Realty",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 55000000,
        type: "sale",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "5.5 Cr", area: "1650 sqft" }
        ],
        location: {
            area: "Goregaon East",
            city: "Mumbai",
            address: "Oberoi Garden City, Goregaon East, Mumbai",
            tower: "Wing B",
            floor: 18
        },
        amenities: [
            { icon: "Car", label: "Covered Parking" },
            { icon: "Dumbbell", label: "Fitness Center" },
            { icon: "Waves", label: "Clubhouse Pool" },
            { icon: "Shield", label: "Multi-tier Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&w=800&q=80"
        ],
        stats: { bathrooms: 3, areaSqFt: 1650 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 9, air: 7 },
        viewOrientation: "Cityscape",
        auditScore: 96,
        reraNumber: "P51800005229",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800005229.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23?auto=format&fit=crop&w=800&q=80",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890124!5m2!1sen!2sin",
        neighbourhood: {
            schools: ["Oberoi International", "Ryan Global"],
            hospitals: ["Lifeline Medicare", "Suvidha Hospital"],
            transport: ["Goregaon Metro", "Western Express Highway"],
            shopping: ["Oberoi Mall", "Hub Mall"]
        }
    },
    {
        id: "3",
        title: "Lodha World One",
        slug: "lodha-world-one-lower-parel",
        description: "Live in one of the iconic skyscrapers of Mumbai. World-class 4 BHK residences with unparalleled luxury.",
        highlights: "Tallest residential building, Observatory deck, Private elevators.",
        connectivity: "Heart of Lower Parel, minutes from Worli and Prabhadevi.",
        developerName: "Lodha Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 120000000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 4,
        configurations: [
            { configuration: "3 BHK", price: "9.5 Cr", area: "2200 sqft" },
            { configuration: "4 BHK", price: "12.0 Cr", area: "3200 sqft" }
        ],
        location: {
            area: "Lower Parel",
            city: "Mumbai",
            address: "The Park, Lower Parel, Mumbai",
            tower: "World View",
            floor: 65
        },
        amenities: [
            { icon: "Shield", label: "Bespoke Concierge" },
            { icon: "Waves", label: "Private Pool" },
            { icon: "Dumbbell", label: "Equinox Gym" },
        ],
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
        ],
        stats: { bathrooms: 4, areaSqFt: 3200 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 7, air: 6 },
        viewOrientation: "Panoramic Sea View",
        auditScore: 99,
        reraNumber: "P51900008345",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51900008345.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23?auto=format&fit=crop&w=800&q=80",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890125!5m2!1sen!2sin",
        neighbourhood: {
            schools: ["Dhirubhai Ambani Intl", "Aditya Birla World"],
            hospitals: ["Jaslok Hospital", "Global Hospital"],
            transport: ["Lower Parel Monorail", "Sea Link"],
            shopping: ["Phoenix Palladium", "Kamala Mills"]
        }
    },
    {
        id: "4",
        title: "Luxury 3 BHK for Rent",
        slug: "luxury-3-bhk-powai-rent",
        description: "Fully furnished high-end 3 BHK apartment in the premium Hiranandani Gardens, Powai.",
        highlights: "Lake-facing, Neo-classical architecture, Fully furnished with designer pieces.",
        connectivity: "Close to JVLR and EEH, easy access to airport.",
        developerName: "Hiranandani Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 150000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "1.5L/mo", area: "1350 sqft" }
        ],
        location: {
            area: "Powai",
            city: "Mumbai",
            address: "Hiranandani Gardens, Powai, Mumbai",
            tower: "Pasadena",
            floor: 15
        },
        amenities: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Waves", label: "Community Pool" },
            { icon: "Dumbbell", label: "Resident Gym" },
        ],
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
        ],
        stats: { bathrooms: 3, areaSqFt: 1350 },
        isFeatured: false,
        status: "LISTED",
        depositAmount: 450000,
        waterSupply: "Both",
        leaseTerm: "11 Months",
        reraNumber: "P51800000165",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800000165.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23?auto=format&fit=crop&w=800&q=80",
        neighbourhood: {
            schools: ["Hiranandani Foundation School", "Podar International"],
            hospitals: ["Hiranandani Hospital"],
            transport: ["Powai Metro station", "Saki Naka Metro"],
            shopping: ["Galleria Mall", "D-Mart Powai"]
        }
    },
    {
        id: "5",
        title: "Premium 2 BHK for Rent",
        slug: "premium-2-bhk-worli-rent",
        description: "A stunning 2 BHK with a view of the Sea Link. Modern interiors and high-end security features.",
        highlights: "Sea views, Open layout, Valet parking, Smart home enabled.",
        connectivity: "Seconds away from Worli Sea Link.",
        developerName: "Indiabulls Greens",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 120000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "1.2L/mo", area: "950 sqft" }
        ],
        location: {
            area: "Worli",
            city: "Mumbai",
            address: "Indiabulls Sky Forest, Worli, Mumbai",
            tower: "Tower 2",
            floor: 42
        },
        amenities: [
            { icon: "Shield", label: "Hi-Tech Security" },
            { icon: "Waves", label: "Sky Pool" },
            { icon: "Dumbbell", label: "Elite Gym" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
        ],
        stats: { bathrooms: 2, areaSqFt: 950 },
        isFeatured: true,
        status: "LISTED",
        depositAmount: 360000,
        waterSupply: "Municipal",
        leaseTerm: "22 Months",
        reraNumber: "P51900000456",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51900000456.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23?auto=format&fit=crop&w=800&q=80",
        neighbourhood: {
            schools: ["GEMS Education", "Podar Intl Worli"],
            hospitals: ["Lilavati Hospital", "Podar Hospital"],
            transport: ["Worli Sea Link", "Proposed Metro"],
            shopping: ["Atria Mall", "High Street Phoenix"]
        }
    }
];
