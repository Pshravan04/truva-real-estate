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

export const submissions: Submission[] = [];

export const inquiries: Inquiry[] = [];

export const properties: Property[] = [
    {
        id: "1",
        title: "The Crest at Juhu",
        slug: "the-crest-juhu-primary",
        description: "Opulent 4 BHK residences with panoramic ocean views. Experience the ultimate in beachside luxury living.",
        highlights: "Beach Front, Private Elevators, 24/7 Concierge, Sky Lounge.",
        connectivity: "Located in the heart of Juhu, 5 mins from Juhu Beach and Prithvi Theatre.",
        developerName: "Marathon Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 85000000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "Dec 2026",
        bhk: 4,
        configurations: [
            { configuration: "4 BHK", price: "8.5 Cr", area: "2400 sqft" },
            { configuration: "5 BHK", price: "12.0 Cr", area: "3200 sqft" }
        ],
        location: {
            area: "Juhu",
            city: "Mumbai",
            address: "Juhu Tara Road, Juhu, Mumbai",
            tower: "Ocean Wing",
            floor: 12
        },
        amenities: [
            { icon: "Shield", label: "Multi-tier Security" },
            { icon: "Waves", label: "Infinity Pool" },
            { icon: "Dumbbell", label: "Premium Gym" },
            { icon: "ShieldCheck", label: "Jangid Brothers Assured" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 4, areaSqFt: 2400 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 7, air: 9 },
        viewOrientation: "Sea Facing",
        auditScore: 97,
        reraNumber: "P51800001234",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800001234.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.9!2d72.825!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDknMzAuMCJF!5e0!3m2!1sen!2sin!4v123456789",
        neighbourhood: {
            schools: ["Juhu Parle School", "Jamnabai Narsee"],
            hospitals: ["Cooper Hospital", "Nanavati Max"],
            transport: ["Vile Parle Station", "Western Express Highway"],
            shopping: ["Juhu Mall", "Dynamic Mall"]
        }
    },
    {
        id: "2",
        title: "Green Park Towers",
        slug: "green-park-towers-goregaon-east-primary",
        description: "Modern 2 BHK apartments surrounded by the lush greenery of Aarey Colony. A perfect escape from city noise.",
        highlights: "Forest Views, Integrated Clubhouse, Jogging Tracks, Sustainable Design.",
        connectivity: "Direct access to Western Express Highway, 10 mins from Goregaon Railway Station.",
        developerName: "Kanakiya Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 18500000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "1.85 Cr", area: "650 sqft" }
        ],
        location: {
            area: "Goregaon East",
            city: "Mumbai",
            address: "Aarey Colony Road, Goregaon East, Mumbai",
            tower: "Tower B",
            floor: 5
        },
        amenities: [
            { icon: "Shield", label: "Smart Security" },
            { icon: "Trees", label: "Aarey Path View" },
            { icon: "Zap", label: "Power Backup" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6eb3c?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 2, areaSqFt: 650 },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 9, air: 9 },
        viewOrientation: "Park View",
        auditScore: 94,
        reraNumber: "P51800009876",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800009876.png",
        masterPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7",
        floorPlanUrl: "https://images.unsplash.com/photo-1503387762-592bed58ef23",
        neighbourhood: {
            schools: ["Oberoi International", "Ryan International"],
            hospitals: ["Lifeline Medicare", "Suvidha Hospital"],
            transport: ["Goregaon Metro", "Western Express Highway"],
            shopping: ["Oberoi Mall", "Hub Mall"]
        }
    },
    {
        id: "3",
        title: "Signature Suites",
        slug: "signature-suites-andheri-primary",
        description: "Elegant 1 BHK studio suites for young professionals in the heart of Andheri's business district.",
        highlights: "Business Hub Proximity, Rooftop Cafe, High-speed Internet, Co-working Space.",
        connectivity: "2 mins from Andheri Metro Station and WEH.",
        developerName: "Lodha Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 12500000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "June 2025",
        bhk: 1,
        configurations: [
            { configuration: "Studio", price: "1.25 Cr", area: "450 sqft" }
        ],
        location: {
            area: "Andheri",
            city: "Mumbai",
            address: "Saki Naka, Andheri East, Mumbai",
            tower: "Alpha",
            floor: 20
        },
        amenities: [
            { icon: "Shield", label: "Bio-metric Entry" },
            { icon: "Zap", label: "Work Cafe" },
            { icon: "Building2", label: "Business Center" }
        ],
        images: [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 1, areaSqFt: 450 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 7, noise: 6, air: 7 },
        viewOrientation: "Skyline",
        auditScore: 92,
        reraNumber: "P51900005544",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51900005544.png",
        neighbourhood: {
            schools: ["Seven Hills School", "Holy Family"],
            hospitals: ["Seven Hills Hospital", "Sushrusha"],
            transport: ["Andheri Metro", "Airport T2"],
            shopping: ["Time Square", "Kohinoor Continental"]
        }
    },
    {
        id: "4",
        title: "The Loft at Juhu",
        slug: "the-loft-juhu-rent-1bhk",
        description: "Chic 1 BHK loft for rent. Perfect for creatives who want to live near the celebrity hub.",
        highlights: "Double Height Ceiling, Minimalist Decor, Private Balcony, Walking distance to beach.",
        connectivity: "Located near Juhu Circle, easy access to Bandra and Andheri.",
        developerName: "Private Developer",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 65000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 1,
        configurations: [
            { configuration: "1 BHK", price: "65k/mo", area: "550 sqft" }
        ],
        location: {
            area: "Juhu",
            city: "Mumbai",
            address: "Gulmohar Road, Juhu Scheme, Mumbai",
            tower: "Sky Heights",
            floor: 8
        },
        amenities: [
            { icon: "Shield", label: "24/7 Gatekeeper" },
            { icon: "Waves", label: "Rooftop Deck" }
        ],
        images: [
            "https://images.unsplash.com/photo-1512918583481-dfd9fd5d2770?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 1, areaSqFt: 550 },
        isFeatured: false,
        status: "LISTED",
        depositAmount: 200000,
        brokerage: "No Brokerage",
        maintenance: "₹3,500/mo",
        waterSupply: "Both",
        leaseTerm: "11 Months",
        leaseType: "Any",
        propertyCondition: "Well Maintained",
        propertyAge: "5-10 Years",
        termsAndConditions: "Family preferred, No pets.",
        environmentalScores: { light: 9, noise: 8, air: 8 },
        viewOrientation: "Garden View",
        auditScore: 95,
        neighbourhood: {
            transport: ["Juhu Bus Depot", "Vile Parle Station"],
            shopping: ["Nature's Basket", "JW Marriott Shops"]
        }
    },
    {
        id: "5",
        title: "Palm Grove Residency",
        slug: "palm-grove-powai-secondary-3bhk",
        description: "Spacious 3 BHK in a premium reselling project at Powai. Ready for immediate move-in.",
        highlights: "Lake-facing, Neo-Classical Architecture, Fully Renovated, Italian Marble Flooring.",
        connectivity: "Walking distance to Hiranandani gardens, 5 mins to JVLR.",
        developerName: "Hiranandani Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 42500000,
        type: "sale",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "4.25 Cr", area: "1350 sqft" }
        ],
        location: {
            area: "Powai",
            city: "Mumbai",
            address: "Central Avenue, Powai, Mumbai",
            tower: "Wing 1",
            floor: 14
        },
        amenities: [
            { icon: "Shield", label: "Premium Security" },
            { icon: "Waves", label: "Shared Pool" },
            { icon: "Dumbbell", label: "Society Gym" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 3, areaSqFt: 1350 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 9, air: 8 },
        viewOrientation: "Lake Facing",
        auditScore: 96,
        reraNumber: "P51800000101",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800000101.png",
        neighbourhood: {
            schools: ["Hiranandani Foundation School", "Podar International"],
            hospitals: ["Hiranandani Hospital"],
            transport: ["Powai Metro station", "Saki Naka Metro"],
            shopping: ["Galleria Mall", "D-Mart Powai"]
        }
    },
    {
        id: "6",
        title: "Heights of Heritage",
        slug: "heights-heritage-goregaon-west-secondary-2bhk",
        description: "Well-maintained 2 BHK in the heart of Goregaon West. Close to SV Road and Link Road.",
        highlights: "Vaastu Compliant, Clear Title, Open View, High ROI Locality.",
        connectivity: "5 mins to SV Road, 10 mins to Goregaon Station.",
        developerName: "Siddha Group",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 16500000,
        type: "sale",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "1.65 Cr", area: "750 sqft" }
        ],
        location: {
            area: "Goregaon West",
            city: "Mumbai",
            address: "Link Road, Goregaon West, Mumbai",
            tower: "Victory",
            floor: 3
        },
        amenities: [
            { icon: "Shield", label: "24/7 Security" },
            { icon: "Zap", label: "High-speed Lifts" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 2, areaSqFt: 750 },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 7, air: 7 },
        viewOrientation: "City View",
        auditScore: 91,
        reraNumber: "P51800002233",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800002233.png",
        neighbourhood: {
            schools: ["VIBGYOR School", "Balmandir"],
            hospitals: ["Siddharth Hospital"],
            transport: ["Goregaon Link Rd", "Proposed Metro"],
            shopping: ["Inorbit Mall", "City Centre"]
        }
    },
    {
        id: "7",
        title: "Skyview Heights",
        slug: "skyview-heights-andheri-rent-2bhk",
        description: "Modern 2 BHK for rent in a high-rise building at Andheri East. Fully air-conditioned.",
        highlights: "Semi-furnished, modular kitchen, gas pipeline, allocated parking.",
        connectivity: "Near WEH and Metro Line 1.",
        developerName: "Shapoorji Pallonji",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 85000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "85k/mo", area: "850 sqft" }
        ],
        location: {
            area: "Andheri",
            city: "Mumbai",
            address: "Marol Pipeline Road, Andheri East, Mumbai",
            tower: "Sky One",
            floor: 18
        },
        amenities: [
            { icon: "Shield", label: "CCTV Security" },
            { icon: "Dumbbell", label: "Gymnasium" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 2, areaSqFt: 850 },
        isFeatured: true,
        status: "LISTED",
        depositAmount: 300000,
        brokerage: "1 Month",
        maintenance: "Included",
        waterSupply: "Municipal",
        leaseTerm: "11 Months",
        leaseType: "Family Only",
        propertyCondition: "Excellent / Semi-Furnished",
        propertyAge: "0-5 Years",
        termsAndConditions: "11 months lock-in period.",
        environmentalScores: { light: 8, noise: 7, air: 8 },
        viewOrientation: "Skyline View",
        auditScore: 93,
        neighbourhood: {
            transport: ["Marol Naka Metro", "Andheri Station"],
            shopping: ["Phoenix Marketcity", "Hubtown Solaris"]
        }
    },
    {
        id: "8",
        title: "Lakeview Apartments",
        slug: "lakeview-powai-rent-3bhk",
        description: "A beautiful 3 BHK with a direct view of the Powai Lake. Peaceful and high-class society.",
        highlights: "Lake facing balcony, lush garden, squash court, steam and sauna.",
        connectivity: "Located near IIT Bombay, Easy connectivity to LBS Marg.",
        developerName: "K Raheja Corp",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 135000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "1.35L/mo", area: "1250 sqft" }
        ],
        location: {
            area: "Powai",
            city: "Mumbai",
            address: "Lakeside Road, Powai, Mumbai",
            tower: "Lake Wing",
            floor: 21
        },
        amenities: [
            { icon: "Shield", label: "Elite Security" },
            { icon: "Waves", label: "Clubhouse Pool" },
            { icon: "Dumbbell", label: "Health Club" }
        ],
        images: [
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 3, areaSqFt: 1250 },
        isFeatured: false,
        status: "LISTED",
        depositAmount: 400000,
        brokerage: "1 Month",
        maintenance: "₹12,000/mo",
        waterSupply: "Both",
        leaseTerm: "22 Months",
        leaseType: "Family/Company",
        propertyCondition: "Premium / Fully Furnished",
        propertyAge: "2-5 Years",
        termsAndConditions: "Company lease preferred. Profile check required.",
        environmentalScores: { light: 9, noise: 9, air: 8 },
        viewOrientation: "Powai Lake",
        auditScore: 96,
        neighbourhood: {
            schools: ["Kiwon School", "Podar"],
            hospitals: ["LH Hiranandani Hospital"],
            transport: ["Powai Metro Station", "Vikhroli Station"],
            shopping: ["Galleria", "R City Mall"]
        }
    },
    {
        id: "9",
        title: "Garden Villa",
        slug: "garden-villa-goregaon-east-rent-4bhk",
        description: "Ultra-luxurious 4 BHK duplex for rent. Massive garden area and private party hall.",
        highlights: "Duplex, Private Entrance, Large Balconies, Servant quarter, Dedicated 4 car parking.",
        connectivity: "Near Film City Road, easy access to Oberoi Woods.",
        developerName: "Oberoi Realty Ltd",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 250000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 4,
        configurations: [
            { configuration: "4 BHK", price: "2.5L/mo", area: "2200 sqft" }
        ],
        location: {
            area: "Goregaon East",
            city: "Mumbai",
            address: "Film City Road, Goregaon East, Mumbai",
            tower: "Highland",
            floor: 1
        },
        amenities: [
            { icon: "ShieldCheck", label: "Security Plus" },
            { icon: "Waves", label: "Private Jacuzzi" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 4, areaSqFt: 2200 },
        isFeatured: true,
        status: "LISTED",
        depositAmount: 750000,
        brokerage: "Negotiable",
        maintenance: "₹25,000/mo",
        waterSupply: "Borewell",
        leaseTerm: "11 Months",
        leaseType: "High-Profile / Company",
        propertyCondition: "Ultra-Luxury / Duplex",
        propertyAge: "0-2 Years",
        termsAndConditions: "Strict profile verification. No large gatherings allowed.",
        environmentalScores: { light: 9, noise: 10, air: 9 },
        viewOrientation: "Lush Greenery",
        auditScore: 98,
        neighbourhood: {
            hospitals: ["Lifeline Medicare"],
            transport: ["Goregaon Metro", "Film City Bus Stop"]
        }
    },
    {
        id: "10",
        title: "Modern Studio",
        slug: "modern-studio-andheri-rent-1bhk",
        description: "Compact yet incredibly functional 1 BHK for rent. Ideal for working professionals near SEEPZ.",
        highlights: "Modular Kitchen, Smart Locks, Walking distance to Metro, Fully tiles floor.",
        connectivity: "2 mins from MIDC Central Road.",
        developerName: "Indiabulls",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 45000,
        type: "rent",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 1,
        configurations: [
            { configuration: "1 BHK", price: "45k/mo", area: "450 sqft" }
        ],
        location: {
            area: "Andheri",
            city: "Mumbai",
            address: "Central Road, MIDC, Andheri East, Mumbai",
            tower: "Urban Square",
            floor: 7
        },
        amenities: [
            { icon: "Shield", label: "CCTV" },
            { icon: "Zap", label: "Wi-Fi enabled" }
        ],
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 1, areaSqFt: 450 },
        isFeatured: false,
        status: "LISTED",
        depositAmount: 120000,
        brokerage: "No Brokerage",
        maintenance: "₹2,000/mo",
        waterSupply: "Municipal",
        leaseTerm: "11 Months",
        leaseType: "Bachelors/Working Professionals",
        propertyCondition: "Modern / Functional",
        propertyAge: "5-7 Years",
        termsAndConditions: "Working professionals only. ID proof mandatory.",
        environmentalScores: { light: 7, noise: 5, air: 7 },
        viewOrientation: "Business Park",
        auditScore: 89,
        neighbourhood: {
            transport: ["SEEPZ Metro", "MIDC Bus Stop"],
            shopping: ["Local Market"]
        }
    },
    {
        id: "11",
        title: "City Center Plaza",
        slug: "city-center-plaza-andheri-primary-3bhk",
        description: "New launch 3 BHK project in Andheri West. State of the art facilities and location.",
        highlights: "Automated Parking, Swimming Pool, Multipurpose Hall, Earthquake Resistant.",
        connectivity: "Near Infinity Mall and Link Road.",
        developerName: "Sunteck Realty",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 32500000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "March 2027",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "3.25 Cr", area: "1050 sqft" }
        ],
        location: {
            area: "Andheri",
            city: "Mumbai",
            address: "Link Road, Andheri West, Mumbai",
            tower: "Tower 1",
            floor: 10
        },
        amenities: [
            { icon: "Shield", label: "Round clock security" },
            { icon: "Waves", label: "Heated Pool" },
            { icon: "Dumbbell", label: "Crossfit Gym" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 3, areaSqFt: 1050 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 7, air: 7 },
        auditScore: 94,
        reraNumber: "P51800003344",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800003344.png",
        neighbourhood: {
            schools: ["Bhavan's School", "Hansraj Morarji"],
            hospitals: ["Kokilaben Dhirubhai Ambani"],
            transport: ["DN Nagar Metro", "Andheri Link Rd"],
            shopping: ["Infinity Mall West", "Crystal Point"]
        }
    },
    {
        id: "12",
        title: "Eco-Friendly Living",
        slug: "eco-friendly-goregaon-west-primary-2bhk",
        description: "Sustainable 2 BHK with high efficiency energy systems and water recycling.",
        highlights: "Solar Powered, Rainwater Harvesting, Organic Garden, Electric Car Charging.",
        connectivity: "Located near SV Road for easy transit.",
        developerName: "Godrej Properties",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 19500000,
        type: "sale",
        category: "PRIMARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "Dec 2025",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "1.95 Cr", area: "720 sqft" }
        ],
        location: {
            area: "Goregaon West",
            city: "Mumbai",
            address: "SV Road, Goregaon West, Mumbai",
            tower: "Eco Wing",
            floor: 15
        },
        amenities: [
            { icon: "Trees", label: "Organic Garden" },
            { icon: "Zap", label: "Solar Backup" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 2, areaSqFt: 720 },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 10, noise: 8, air: 9 },
        auditScore: 99,
        reraNumber: "P51800007766",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800007766.png",
        neighbourhood: {
            transport: ["Goregaon Station", "SV Road Express"],
            shopping: ["Hypercity", "City Centre"]
        }
    },
    {
        id: "13",
        title: "Luxury Penthouse",
        slug: "luxury-penthouse-juhu-secondary-5bhk",
        description: "Truly bespoke 5 BHK penthouse with private terrace and internal elevator.",
        highlights: "360 Sea views, Private Pool, Internal Elevator, Italian furniture, Walk-in closets.",
        connectivity: "Exclusive address in Juhu Scheme.",
        developerName: "Kalpataru Ltd",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 155000000,
        type: "sale",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 5,
        configurations: [
            { configuration: "Penthouse", price: "15.5 Cr", area: "4500 sqft" }
        ],
        location: {
            area: "Juhu",
            city: "Mumbai",
            address: "Gulmohar Cross Road, Juhu, Mumbai",
            tower: "Penthouse Level",
            floor: 15
        },
        amenities: [
            { icon: "Shield", label: "Ultimate Security" },
            { icon: "Waves", label: "Private Pool" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 5, areaSqFt: 4500 },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 10, noise: 10, air: 10 },
        viewOrientation: "Panoramic Ocean",
        auditScore: 100,
        reraNumber: "P51900008888",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51900008888.png",
        neighbourhood: {
            shopping: ["Designer Boutiques", "Juhu Plaza"]
        }
    },
    {
        id: "14",
        title: "Royal Palms Residency",
        slug: "royal-palms-goregaon-east-secondary-3bhk",
        description: "Exquisite 3 BHK unit for resale in a prestige colony of Goregaon East.",
        highlights: "Golf Course View, Open plan kitchen, Teakwood finish, Smart switches.",
        connectivity: "Near Marol-Maroshi road, easy commute to Powai.",
        developerName: "Royal Palms",
        sellerName: "Authorized Jangid Brothers Seller Partner",
        price: 27500000,
        type: "sale",
        category: "SECONDARY",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "2.75 Cr", area: "1450 sqft" }
        ],
        location: {
            area: "Goregaon East",
            city: "Mumbai",
            address: "Aarey Colony Road, Goregaon East, Mumbai",
            tower: "Cypress",
            floor: 4
        },
        amenities: [
            { icon: "Shield", label: "Intercom Facilities" },
            { icon: "Trees", label: "Golf Course Path" }
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800"
        ],
        stats: { bathrooms: 3, areaSqFt: 1450 },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 9, air: 9 },
        viewOrientation: "Forest View",
        auditScore: 95,
        reraNumber: "P51800004455",
        reraQr: "https://static.maharera.mahaonline.gov.in/project-qr/P51800004455.png",
        neighbourhood: {
            transport: ["Goregaon Station", "Powai Bus link"],
            shopping: ["Filmfare Market"]
        }
    }
];
