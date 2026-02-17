"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Property, Submission, Society, Inquiry } from "@/types";
import { societies as initialSocieties } from "@/lib/data"; // Keep societies static for now

export interface FilterSettings {
    bhkOptions: string[];
    bathOptions: string[];
    assuranceLabels: string[];
    locations: string[];
    sortOptions: { id: string; label: string }[];
    priceSettings: { min: number; max: number; step: number };
}

interface DataContextType {
    properties: Property[];
    submissions: Submission[];
    societies: Society[];
    inquiries: Inquiry[];
    filterSettings: FilterSettings;
    addSubmission: (submission: Submission) => Promise<void>;
    approveSubmission: (subId: string) => Promise<void>;
    rejectSubmission: (subId: string) => Promise<void>;
    deleteProperty: (propertyId: string) => Promise<void>;
    updatePropertyStatus: (propertyId: string, status: Property['status']) => Promise<void>;
    addListing: (property: Property) => Promise<void>;
    updateFilterSettings: (settings: Partial<FilterSettings>) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const defaultFilterSettings: FilterSettings = {
    bhkOptions: ["2 BHK", "2.5 BHK", "3 BHK", "4 BHK"],
    bathOptions: ["2 Bath", "3 Bath", "4 Bath"],
    assuranceLabels: ["Legally cleared", "Fully refurbished", "Ready-to-move in"],
    locations: ["Worli", "Parel", "Lower Parel", "Dadra", "Byculla", "Prabhadevi"],
    sortOptions: [
        { id: 'relevance', label: 'Relevance' },
        { id: 'price-asc', label: 'Price: Low to High' },
        { id: 'price-desc', label: 'Price: High to Low' },
        { id: 'area-desc', label: 'Area: Largest First' }
    ],
    priceSettings: { min: 1, max: 20, step: 0.5 }
};

export function DataProvider({ children }: { children: ReactNode }) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [societies] = useState<Society[]>(initialSocieties);
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [filterSettings, setFilterSettings] = useState<FilterSettings>(defaultFilterSettings);
    const [isInitialized, setIsInitialized] = useState(false);

    // Fetch Initial Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Parallel fetch for properties and submissions
                const [propsRes, subsRes] = await Promise.all([
                    fetch('/api/properties'),
                    fetch('/api/submissions')
                ]);

                if (propsRes.ok) {
                    const data = await propsRes.json();
                    if (Array.isArray(data)) setProperties(data);
                }

                if (subsRes.ok) {
                    const data = await subsRes.json();
                    if (Array.isArray(data)) setSubmissions(data);
                }

                // Fetch settings separately to not block main content
                const settingsRes = await fetch('/api/settings');
                if (settingsRes.ok) {
                    const savedSettings = await settingsRes.json();
                    if (Object.keys(savedSettings).length > 0) {
                        setFilterSettings(prev => ({ ...prev, ...savedSettings }));
                    }
                }
            } catch (error) {
                console.error("Failed to fetch initial data", error);
            } finally {
                setIsInitialized(true);
            }
        };

        fetchData();
    }, []);

    const addSubmission = async (submission: Submission) => {
        try {
            const res = await fetch('/api/submissions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission)
            });
            if (res.ok) {
                const savedSubmission = await res.json();
                setSubmissions(prev => [savedSubmission, ...prev]);
            }
        } catch (error) {
            console.error("Failed to add submission", error);
        }
    };

    const approveSubmission = async (subId: string) => {
        try {
            const res = await fetch('/api/admin/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: subId })
            });

            if (res.ok) {
                const newProperty = await res.json();
                // Optimistically update UI
                setProperties(prev => [newProperty, ...prev]);
                setSubmissions(prev => prev.filter(s => s.id !== subId));
            }
        } catch (error) {
            console.error("Failed to approve submission", error);
        }
    };

    const rejectSubmission = async (subId: string) => {
        // Optimistic update
        setSubmissions(prev => prev.filter(s => s.id !== subId));
        // TODO: Backend API call for rejection status update if needed
    };

    const deleteProperty = async (propertyId: string) => {
        setProperties(prev => prev.filter(p => p.id !== propertyId));
        // TODO: Backend API call
    };

    const updatePropertyStatus = async (propertyId: string, status: Property['status']) => {
        setProperties(prev => prev.map(p => p.id === propertyId ? { ...p, status } : p));
        // TODO: Backend API call
    };

    const addListing = async (property: Property) => {
        try {
            const res = await fetch('/api/properties', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(property)
            });
            if (res.ok) {
                const savedProperty = await res.json();
                setProperties(prev => [savedProperty, ...prev]);
            }
        } catch (error) {
            console.error("Failed to add listing", error);
        }
    };

    const updateFilterSettings = async (settings: Partial<FilterSettings>) => {
        const newSettings = { ...filterSettings, ...settings };
        setFilterSettings(newSettings);

        try {
            await fetch('/api/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSettings)
            });
        } catch (error) {
            console.error("Failed to update settings", error);
        }
    };

    return (
        <DataContext.Provider value={{
            properties,
            submissions,
            societies,
            inquiries,
            filterSettings,
            addSubmission,
            approveSubmission,
            rejectSubmission,
            deleteProperty,
            updatePropertyStatus,
            addListing,
            updateFilterSettings
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
