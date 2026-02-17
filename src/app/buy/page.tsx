"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { FilterBar } from "@/components/property/FilterBar";
import { useData } from "@/context/DataContext";

export default function BuyPage() {
    const { properties } = useData();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBhk, setSelectedBhk] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [selectedOrientation, setSelectedOrientation] = useState("");

    // Filter Logic
    const filteredProperties = properties.filter((property) => {
        // Search match
        const matchesSearch =
            property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.city.toLowerCase().includes(searchQuery.toLowerCase());

        // BHK match
        const matchesBhk = selectedBhk ? property.bhk === parseInt(selectedBhk) : true;

        // Orientation match
        const matchesOrientation = selectedOrientation ? property.viewOrientation === selectedOrientation : true;

        // Price match (Simple logic: Under, Between, Above)
        let matchesPrice = true;
        if (selectedPrice) {
            const price = property.price;
            const filterVal = parseInt(selectedPrice);
            if (filterVal === 20000000) matchesPrice = price < 20000000;
            else if (filterVal === 40000000) matchesPrice = price >= 20000000 && price <= 40000000;
            else if (filterVal === 60000000) matchesPrice = price > 40000000;
        }

        return matchesSearch && matchesBhk && matchesPrice && matchesOrientation;
    });

    return (
        <main className="min-h-screen flex flex-col pt-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">Properties for Sale in Mumbai</h1>
                    <FilterBar
                        onSearchChange={setSearchQuery}
                        onBhkChange={setSelectedBhk}
                        onPriceChange={setSelectedPrice}
                        onOrientationChange={setSelectedOrientation}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-muted-foreground">
                            <p className="text-xl font-medium">No properties found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedBhk(""); setSelectedPrice(""); }}
                                className="mt-4 text-primary hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
