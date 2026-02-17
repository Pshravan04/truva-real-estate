"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Property, Submission, Society, Inquiry } from "@/types";
import { properties as initialProperties, submissions as initialSubmissions, societies as initialSocieties, inquiries as initialInquiries } from "@/lib/data";

interface DataContextType {
    properties: Property[];
    submissions: Submission[];
    societies: Society[];
    inquiries: Inquiry[];
    addSubmission: (submission: Submission) => void;
    approveSubmission: (subId: string) => void;
    rejectSubmission: (subId: string) => void;
    deleteProperty: (propertyId: string) => void;
    updatePropertyStatus: (propertyId: string, status: Property['status']) => void;
    addListing: (property: Property) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY = "truva_platform_data";

export function DataProvider({ children }: { children: ReactNode }) {
    const [properties, setProperties] = useState<Property[]>(initialProperties);
    const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
    const [societies] = useState<Society[]>(initialSocieties);
    const [inquiries, setInquiries] = useState<Inquiry[]>(initialInquiries);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initial Load
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                if (parsed.properties) setProperties(parsed.properties);
                if (parsed.submissions) setSubmissions(parsed.submissions);
                // Inquiries and societies are less dynamic for now but could be persistent too
            } catch (e) {
                console.error("Failed to parse saved data", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save on Change
    useEffect(() => {
        if (isInitialized) {
            const dataToSave = { properties, submissions };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
        }
    }, [properties, submissions, isInitialized]);

    const addSubmission = (submission: Submission) => {
        setSubmissions(prev => [submission, ...prev]);
    };

    const approveSubmission = (subId: string) => {
        const submission = submissions.find(s => s.id === subId);
        if (submission) {
            const newProperty: Property = {
                id: `prop-${Date.now()}`,
                title: submission.propertyName || `${submission.developerName} Asset`,
                slug: `new-listing-${Date.now()}`,
                description: submission.description || "New property listing approved from submission.",
                price: submission.valuationAmount || 0,
                type: 'sale' as const,
                bhk: 3, // Default
                location: {
                    area: submission.location || "Mumbai",
                    city: "Mumbai",
                    address: "Verified Asset"
                },
                amenities: submission.amenities ? submission.amenities.map(a => ({ icon: 'Check', label: a })) : [],
                images: [submission.projectImages?.[0] || submission.image || ""],
                projectImages: submission.projectImages || [],
                virtualTourUrl: submission.virtualTourUrl,
                masterPlanUrl: submission.masterPlanUrl,
                floorPlanUrl: submission.floorPlanUrl,
                stats: { bathrooms: 2, areaSqFt: submission.carpetArea || 0 },
                status: 'LISTED' as const,
                auditScore: 100,
                sellerName: submission.sellerName,
                developerName: submission.developerName,
                configurations: submission.configurations,
                highlights: submission.highlights,
                connectivity: submission.connectivity,
                mapUrl: submission.mapUrl
            };

            setProperties(prev => [newProperty, ...prev]);
            setSubmissions(prev => prev.filter(s => s.id !== subId));
        }
    };

    const rejectSubmission = (subId: string) => {
        setSubmissions(prev => prev.filter(s => s.id !== subId));
    };

    const deleteProperty = (propertyId: string) => {
        setProperties(prev => prev.filter(p => p.id !== propertyId));
    };

    const updatePropertyStatus = (propertyId: string, status: Property['status']) => {
        setProperties(prev => prev.map(p => p.id === propertyId ? { ...p, status } : p));
    };

    const addListing = (property: Property) => {
        setProperties(prev => [property, ...prev]);
    };

    return (
        <DataContext.Provider value={{
            properties,
            submissions,
            societies,
            inquiries,
            addSubmission,
            approveSubmission,
            rejectSubmission,
            deleteProperty,
            updatePropertyStatus,
            addListing
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
