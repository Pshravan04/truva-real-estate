"use client";

import { MapPin, Bed, IndianRupee, Bath, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useData } from "@/context/DataContext";

interface BuySidebarProps {
    localities: { name: string; count: number }[];
    selectedLocality: string;
    onLocalityChange: (name: string) => void;
    selectedListingType: "sale" | "rent";
    onListingTypeChange: (type: "sale" | "rent") => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    selectedBhk: string;
    onBhkChange: (bhk: string) => void;
    priceRange: [number, number];
    onPriceChange: (value: number) => void;
    selectedBath: string;
    onBathChange: (bath: string) => void;
}

export function BuySidebar({
    localities,
    selectedLocality,
    onLocalityChange,
    selectedListingType,
    onListingTypeChange,
    selectedCategory,
    onCategoryChange,
    selectedBhk,
    onBhkChange,
    priceRange,
    onPriceChange,
    selectedBath,
    onBathChange
}: BuySidebarProps) {
    const { filterSettings } = useData();

    const formatINR = (amount: number) => {
        if (amount >= 10000000) return (amount / 10000000).toFixed(2) + " Cr";
        if (amount >= 100000) return (amount / 100000).toFixed(2) + " L";
        return amount.toLocaleString('en-IN');
    };

    return (
        <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-12 pb-20">
            {/* Buy/Rent Toggle */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    Listing Type
                </h3>
                <div className="flex bg-secondary/50 p-1.5 rounded-2xl border border-border/50">
                    <button
                        onClick={() => onListingTypeChange("sale")}
                        className={cn(
                            "flex-1 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                            selectedListingType === "sale" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary/60"
                        )}
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => onListingTypeChange("rent")}
                        className={cn(
                            "flex-1 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                            selectedListingType === "rent" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary/60"
                        )}
                    >
                        Rent
                    </button>
                </div>
            </section>

            {/* Property Category */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em]">
                    Collection
                </h3>
                <div className="flex flex-col gap-3">
                    {["PRIMARY", "SECONDARY", "UNDER_CONSTRUCTION"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(selectedCategory === cat ? "" : cat)}
                            className={cn(
                                "group flex items-center justify-between p-4 rounded-2xl border transition-all text-left",
                                selectedCategory === cat
                                    ? "bg-black border-black text-white shadow-xl shadow-black/10"
                                    : "bg-white border-border/60 text-primary/60 hover:border-primary/20"
                            )}
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest">
                                {cat.replace(/_/g, ' ')}
                            </span>
                            {selectedCategory === cat && <Check className="w-3 h-3 text-[#FF6F38]" />}
                        </button>
                    ))}
                </div>
            </section>

            {/* Locality */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#FF6F38]" /> Locality
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onLocalityChange("")}
                        className={cn(
                            "px-4 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all border",
                            selectedLocality === ""
                                ? "bg-black text-white border-black shadow-lg"
                                : "bg-white text-primary/60 border-border hover:border-primary/40"
                        )}
                    >
                        All
                    </button>
                    {localities.map((loc) => (
                        <button
                            key={loc.name}
                            onClick={() => onLocalityChange(loc.name)}
                            className={cn(
                                "px-4 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all border",
                                selectedLocality === loc.name
                                    ? "bg-black text-white border-black shadow-lg"
                                    : "bg-white text-primary/60 border-border hover:border-primary/40"
                            )}
                        >
                            {loc.name} <span className="text-[10px] opacity-40 ml-1 font-normal">{loc.count}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Bedrooms */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    <Bed className="w-3 h-3 text-[#FF6F38]" /> Bedrooms
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onBhkChange("")}
                        className={cn(
                            "px-4 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all border",
                            selectedBhk === ""
                                ? "bg-black text-white border-black shadow-lg"
                                : "bg-white text-primary/60 border-border hover:border-primary/40"
                        )}
                    >
                        All
                    </button>
                    {filterSettings.bhkOptions.map((bhk) => (
                        <button
                            key={bhk}
                            onClick={() => onBhkChange(bhk)}
                            className={cn(
                                "px-4 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all border",
                                selectedBhk === bhk
                                    ? "bg-black text-white border-black shadow-lg"
                                    : "bg-white text-primary/60 border-border hover:border-primary/40"
                            )}
                        >
                            {bhk}
                        </button>
                    ))}
                </div>
            </section>

            {/* Price Range */}
            <section className="space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                        <IndianRupee className="w-3 h-3 text-[#FF6F38]" /> Budget
                    </h3>
                    <span className="text-[11px] font-black text-[#FF6F38] tracking-widest">{formatINR(priceRange[1])}</span>
                </div>
                <div className="px-2">
                    <input
                        type="range"
                        min={0}
                        max={selectedListingType === 'sale' ? 500000000 : 500000}
                        step={selectedListingType === 'sale' ? 1000000 : 5000}
                        value={priceRange[1]}
                        onChange={(e) => onPriceChange(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-[#FF6F38]"
                    />
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-primary/20">
                        <span>Min</span>
                        <span>Max</span>
                    </div>
                </div>
            </section>

            {/* Bathrooms */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    <Bath className="w-3 h-3 text-[#FF6F38]" /> Bathrooms
                </h3>
                <div className="flex flex-wrap gap-2">
                    {filterSettings.bathOptions.map((bath) => (
                        <button
                            key={bath}
                            onClick={() => onBathChange(bath)}
                            className={cn(
                                "px-4 py-2 rounded-full text-[11px] font-medium tracking-tight transition-all border",
                                selectedBath === bath
                                    ? "bg-black text-white border-black shadow-lg"
                                    : "bg-white text-primary/60 border-border hover:border-primary/40"
                            )}
                        >
                            {bath}
                        </button>
                    ))}
                </div>
            </section>

            {/* Jangid Brothers Assured Badge */}
            <div className="p-8 bg-[#FFF8F6] rounded-[40px] relative overflow-hidden border border-[#FF6F38]/5 group">
                <div className="absolute top-4 right-4 text-[#FF6F38]/20">
                    <ShieldCheck className="w-10 h-10 rotate-12" />
                </div>
                <div className="space-y-6 relative z-10">
                    <p className="text-[11px] font-black text-primary tracking-widest uppercase">Verified Quality</p>
                    <ul className="space-y-4">
                        {filterSettings.assuranceLabels.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-black text-[#FF6F38] uppercase tracking-wide">
                                <div className="w-4 h-4 rounded-full bg-[#FF6F38] flex items-center justify-center">
                                    <Check className="w-2.5 h-2.5 text-white" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
