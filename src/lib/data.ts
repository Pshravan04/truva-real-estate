// Adding mock submissions and enhancing data for Admin Dashboard
import { Property, Society, Submission, Inquiry } from "@/types";

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
        title: "3 BHK in Ekta Tripolis",
        slug: "3-bhk-ekta-tripolis",
        description: "Fully renovated 3 BHK apartment in the premium Ekta Tripolis society. High floor with great views.",
        highlights: "Premium Italian marble flooring, Modular kitchen with built-in appliances, Custom designer lighting.",
        connectivity: "5 mins to Western Express Highway, 10 mins to Goregaon Railway Station, Walking distance to Hub Mall.",
        developerName: "Ekta World",
        sellerName: "Amit Malhotra",
        contactDetails: {
            phone: "+91 98200 12345",
            email: "amit.m@example.com"
        },
        price: 35000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "3.5 Cr", area: "1250 sqft" },
            { configuration: "2 BHK", price: "2.5 Cr", area: "950 sqft" }
        ],
        location: {
            area: "Goregaon West",
            city: "Mumbai",
            address: "Ekta Tripolis, Goregaon West, Mumbai",
            tower: "Tower A",
            floor: 15
        },
        amenities: [
            { icon: "Wifi", label: "Smart Home" },
            { icon: "Car", label: "Parking" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Garden" },
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Shield", label: "Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 3,
            areaSqFt: 1250,
        },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 7, air: 6 },
        viewOrientation: "Greenery",
        auditScore: 92,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.956627045129!2d72.84654931490234!3d19.164319987037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ad553ec57b%3A0xe54955726257f884!2sEkta%20Tripolis!5e0!3m2!1sen!2sin!4v1676543210123!5m2!1sen!2sin",
        projectImages: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        virtualTourUrl: "https://my.matterport.com/show/?m=9S7W2C3X4Y5",
        masterPlanUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        reraNumber: "P51800001234",
        reraQr: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
    },
    {
        id: "2",
        title: "2 BHK in Oberoi Esquire",
        slug: "2-bhk-oberoi-esquire",
        description: "Elegant 2 BHK apartment in the iconic Oberoi Esquire. Spacious layout with premium finishes.",
        highlights: "Direct access to Oberoi Mall, High-speed elevators, Unobstructed Aarey views.",
        connectivity: "Directly connected to Western Express Highway, 2 mins to proposed Metro station.",
        developerName: "Oberoi Realty",
        sellerName: "Siddharth Jain",
        contactDetails: {
            phone: "+91 99300 54321",
            email: "sid.jain@example.com"
        },
        price: 42000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "4.2 Cr", area: "1400 sqft" }
        ],
        location: {
            area: "Goregaon East",
            city: "Mumbai",
            address: "Oberoi Esquire, Goregaon East, Mumbai",
            tower: "Tower B",
            floor: 10
        },
        amenities: [
            { icon: "Car", label: "Parking" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Garden" },
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Shield", label: "Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687889-7e3d2223ca0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 2,
            areaSqFt: 1400,
        },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 9, air: 8 },
        viewOrientation: "City View",
        auditScore: 95,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.745123456789!2d72.85!3d19.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
        projectImages: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        virtualTourUrl: "https://my.matterport.com/show/?m=9S7W2C3X4Y5",
        masterPlanUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        floorPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: "3",
        title: "3 BHK in L&T Emerald Isle",
        slug: "3-bhk-lt-emerald-isle",
        description: "Sophisticated 3 BHK in the lush green L&T Emerald Isle. Overlooking Powai Lake, this home offers unparalleled peace.",
        highlights: "Lake-facing deck, VRF air conditioning, International standard safety systems.",
        connectivity: "2 mins to JVLR, 15 mins to International Airport, Close to Hiranandani Hospital.",
        developerName: "L&T Realty",
        sellerName: "Neha Gupta",
        contactDetails: {
            phone: "+91 98765 09876",
            email: "neha.g@example.com"
        },
        price: 52000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "5.2 Cr", area: "1650 sqft" },
            { configuration: "4 BHK", price: "7.1 Cr", area: "2100 sqft" }
        ],
        location: {
            area: "Powai",
            city: "Mumbai",
            address: "L&T Emerald Isle, Powai, Mumbai",
            tower: "Emerald A",
            floor: 28
        },
        amenities: [
            { icon: "Waves", label: "Infinity Pool" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Central Park" },
            { icon: "Zap", label: "EV Charging" },
            { icon: "Shield", label: "24/7 Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 3,
            areaSqFt: 1650,
        },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 8, air: 7 },
        viewOrientation: "Lake View",
        auditScore: 98,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1!2d72.9!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890124!5m2!1sen!2sin",
        projectImages: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"],
    },
    {
        id: "4",
        title: "2 BHK in Lodha Aurum Grande",
        slug: "2-bhk-lodha-aurum-grande",
        description: "Modern living at Lodha Aurum Grande. Compact yet efficiently designed 2 BHK for young professionals.",
        highlights: "Excellent daylighting, Clubhouse access, Close to corporate hubs.",
        connectivity: "Walking distance to Kanjurmarg Station, Easy access to LBS Marg.",
        developerName: "Lodha Group",
        sellerName: "Pankaj Desai",
        contactDetails: {
            phone: "+91 91234 56789",
            email: "pankaj.d@example.com"
        },
        price: 18500000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "1.85 Cr", area: "750 sqft" }
        ],
        location: {
            area: "Kanjurmarg",
            city: "Mumbai",
            address: "Lodha Aurum Grande, Kanjurmarg, Mumbai",
            tower: "Grande B",
            floor: 12
        },
        amenities: [
            { icon: "Car", label: "Parking" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Shield", label: "Security" },
            { icon: "Waves", label: "Pool" },
        ],
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 2,
            areaSqFt: 750,
        },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 7, noise: 6, air: 5 },
        viewOrientation: "Cityscape",
        auditScore: 88,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2!2d72.9!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890125!5m2!1sen!2sin",
        projectImages: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"],
    },
    {
        id: "5",
        title: "4 BHK in Rustomjee Elements",
        slug: "4-bhk-rustomjee-elements",
        description: "Ultra-luxury living at Rustomjee Elements. This bespoke 4 BHK residence offers expansive living spaces and world-class amenities in the heart of the city.",
        highlights: "Private elevator lobby, Designer kitchen, Concierge services, Alfresco dining area.",
        connectivity: "Located off Link Road, 10 mins to Juhu Beach, Close to premium schools and hospitals.",
        developerName: "Rustomjee Group",
        sellerName: "Rajesh Mehra",
        contactDetails: {
            phone: "+91 98200 55667",
            email: "rajesh.m@example.com"
        },
        price: 125000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "READY_TO_MOVE",
        bhk: 4,
        configurations: [
            { configuration: "4 BHK", price: "12.5 Cr", area: "3200 sqft" },
            { configuration: "5 BHK", price: "18.0 Cr", area: "4500 sqft" }
        ],
        location: {
            area: "Upper Juhu",
            city: "Mumbai",
            address: "Rustomjee Elements, Off Link Road, Upper Juhu, Mumbai",
            tower: "Wing C",
            floor: 18
        },
        amenities: [
            { icon: "Shield", label: "Multi-tier Security" },
            { icon: "Waves", label: "Rooftop Pool" },
            { icon: "Dumbbell", label: "Pro Gym" },
            { icon: "Trees", label: "Landscaped Gardens" },
            { icon: "Globe", label: "Business Center" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 5,
            areaSqFt: 3200,
        },
        isFeatured: true,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 8, air: 8 },
        viewOrientation: "Sea View",
        auditScore: 99,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890126!5m2!1sen!2sin",
        projectImages: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"],
    },
    {
        id: "6",
        title: "2 BHK in Piramal Aranya",
        slug: "2-bhk-piramal-aranya",
        description: "Experience serene luxury at Piramal Aranya. Overlooking the Rani Baug gardens, this home blends nature with modern architecture.",
        highlights: "Botanical garden views, Floor-to-ceiling windows, Italian marble finishes.",
        connectivity: "Excellent connectivity to South Mumbai via Eastern Freeway, 10 mins to Byculla Station.",
        developerName: "Piramal Realty",
        sellerName: "Anjali Khanna",
        contactDetails: {
            phone: "+91 99887 76655",
            email: "anjali.k@example.com"
        },
        price: 45000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "UNDER_CONSTRUCTION",
        possessionDate: "Dec 2025",
        bhk: 2,
        configurations: [
            { configuration: "2 BHK", price: "4.5 Cr", area: "1150 sqft" },
            { configuration: "3 BHK", price: "6.8 Cr", area: "1750 sqft" }
        ],
        location: {
            area: "Byculla",
            city: "Mumbai",
            address: "Piramal Aranya, Byculla East, Mumbai",
            tower: "Avyan",
            floor: 35
        },
        amenities: [
            { icon: "Trees", label: "Private Park" },
            { icon: "Waves", label: "Lap Pool" },
            { icon: "Dumbbell", label: "Fitness Center" },
            { icon: "Shield", label: "Smart Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 2,
            areaSqFt: 1150,
        },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 9, noise: 7, air: 9 },
        viewOrientation: "Botanical Garden",
        auditScore: 96,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5!2d72.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890127!5m2!1sen!2sin",
    },
    {
        id: "7",
        title: "3 BHK in Kalpataru Radiance",
        slug: "3-bhk-kalpataru-radiance",
        description: "Experience the glow of luxury at Kalpataru Radiance. A perfectly balanced 3 BHK with premium amenities and sprawling open spaces.",
        highlights: "Grand entrance lobby, Temperature controlled pool, Multi-purpose sports court.",
        connectivity: "Located in Goregaon West, Easy access to SV Road and Link Road, 10 mins to Inorbit Mall.",
        developerName: "Kalpataru Group",
        sellerName: "Sanjay Mehta",
        contactDetails: {
            phone: "+91 97766 55443",
            email: "sanjay.m@example.com"
        },
        price: 38000000,
        type: "sale",
        usageType: "RESIDENTIAL",
        constructionStatus: "NEAR_POSSESSION",
        possessionDate: "June 2024",
        bhk: 3,
        configurations: [
            { configuration: "3 BHK", price: "3.8 Cr", area: "1350 sqft" }
        ],
        location: {
            area: "Goregaon West",
            city: "Mumbai",
            address: "Kalpataru Radiance, Goregaon West, Mumbai",
            tower: "Radiance B",
            floor: 21
        },
        amenities: [
            { icon: "Waves", label: "Swimming Pool" },
            { icon: "Dumbbell", label: "Gym" },
            { icon: "Trees", label: "Parks" },
            { icon: "Shield", label: "High Security" },
        ],
        images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        ],
        stats: {
            bathrooms: 3,
            areaSqFt: 1350,
        },
        isFeatured: false,
        status: "LISTED",
        environmentalScores: { light: 8, noise: 7, air: 7 },
        viewOrientation: "Park View",
        auditScore: 94,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzAwLjAiTiA3MsKwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890128!5m2!1sen!2sin",
    }
];
