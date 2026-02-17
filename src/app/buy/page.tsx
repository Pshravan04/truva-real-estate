"use client";

import { useState } from "react";
import { useData } from "@/context/DataContext";
import { Footer } from "@/components/layout/Footer";
import { BuySidebar } from "@/components/property/BuySidebar";
import { BuyPropertyCard } from "@/components/property/BuyPropertyCard";
import { ChevronDown } from "lucide-react";
import { Property } from "@/types";
import { cn } from "@/lib/utils";

export default function BuyPage() {
    const { properties, filterSettings } = useData();
    const [selectedLocality, setSelectedLocality] = useState("");
    const [selectedBhk, setSelectedBhk] = useState("");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, filterSettings.priceSettings.max * 10000000]);
    const [selectedBath, setSelectedBath] = useState("");
    const [sortBy, setSortBy] = useState("relevance");
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Generate localities list dynamically from our properties
    const localities = properties.reduce((acc: { name: string; count: number }[], p) => {
        const area = p.location.area || "Other";

        // If admin has defined specific locations, we track them differently
        if (filterSettings.locations.length > 0) {
            // Only count if it matches a defined location
            if (!filterSettings.locations.includes(area)) return acc;
        }

        const existing = acc.find(a => a.name === area);
        if (existing) existing.count++;
        else acc.push({ name: area, count: 1 });
        return acc;
    }, []);

    // Ensure all admin-defined locations are present even if count is 0
    if (filterSettings.locations.length > 0) {
        filterSettings.locations.forEach(loc => {
            if (!localities.find(l => l.name === loc)) {
                localities.push({ name: loc, count: 0 });
            }
        });
    }

    localities.sort((a, b) => b.count - a.count);

    // Filter Logic
    const filteredProperties = properties
        .filter((p: Property) => {
            const matchesLocality = selectedLocality ? p.location.area.toLowerCase().includes(selectedLocality.toLowerCase()) : true;
            const matchesBhk = selectedBhk ? p.bhk === parseInt(selectedBhk) : true;
            const matchesPrice = p.price <= priceRange[1];
            const matchesBath = selectedBath ? p.stats.bathrooms === parseInt(selectedBath) : true;

            return matchesLocality && matchesBhk && matchesPrice && matchesBath && p.status === "LISTED";
        })
        .sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "price-desc") return b.price - a.price;
            if (sortBy === "area-desc") return b.stats.areaSqFt - a.stats.areaSqFt;
            return 0; // Relevance (default)
        });

    const activeSortLabel = filterSettings.sortOptions.find(o => o.id === sortBy)?.label || "Relevance";

    return (
        <main className="min-h-screen flex flex-col pt-32 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar */}
                    <BuySidebar
                        localities={localities}
                        selectedLocality={selectedLocality}
                        onLocalityChange={setSelectedLocality}
                        selectedBhk={selectedBhk}
                        onBhkChange={setSelectedBhk}
                        priceRange={[0, priceRange[1] / 10000000]}
                        onPriceChange={(val) => setPriceRange([0, val * 10000000])}
                        selectedBath={selectedBath}
                        onBathChange={setSelectedBath}
                    />

                    {/* Main Content */}
                    <div className="flex-1 space-y-12">
                        {/* Header */}
                        <div className="flex justify-between items-end border-b border-black/[0.03] pb-10">
                            <h1 className="text-[32px] font-bold text-primary tracking-tight">
                                {filteredProperties.length} Handpicked homes
                            </h1>
                            <div className="flex items-center gap-3 relative">
                                <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Sort by</span>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsSortOpen(!isSortOpen)}
                                        className="bg-white border border-border/60 px-5 py-2.5 rounded-xl flex items-center gap-3 text-[11px] font-bold shadow-sm group min-w-[160px] justify-between hover:border-primary/20 transition-colors"
                                    >
                                        <span className="text-primary/80">{activeSortLabel}</span>
                                        <ChevronDown className={cn("w-3.5 h-3.5 text-primary/40 transition-transform", isSortOpen && "rotate-180")} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isSortOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-full bg-white border border-border/60 rounded-xl shadow-2xl py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                                            {filterSettings.sortOptions.map((option) => (
                                                <button
                                                    key={option.id}
                                                    onClick={() => {
                                                        setSortBy(option.id);
                                                        setIsSortOpen(false);
                                                    }}
                                                    className={cn(
                                                        "w-full text-left px-5 py-2.5 text-[11px] font-bold transition-colors",
                                                        sortBy === option.id
                                                            ? "text-[#FF4802] bg-[#FAFAFA]"
                                                            : "text-primary/60 hover:bg-[#FAFAFA] hover:text-primary"
                                                    )}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Property Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProperties.length > 0 ? (
                                filteredProperties.map((property: Property) => (
                                    <BuyPropertyCard key={property.id} property={property} />
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center space-y-4">
                                    <p className="text-2xl font-black text-primary opacity-20">No matching homes found</p>
                                    <button
                                        onClick={() => { setSelectedLocality(""); setSelectedBhk(""); setPriceRange([0, 90000000]); }}
                                        className="text-[11px] font-black uppercase tracking-widest text-[#FF4802]"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
