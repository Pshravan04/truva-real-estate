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
        floorPlanUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
    }
];
