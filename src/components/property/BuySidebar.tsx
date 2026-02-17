"use client";

import { MapPin, Bed, IndianRupee, Bath, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useData } from "@/context/DataContext";

interface BuySidebarProps {
    localities: { name: string; count: number }[];
    selectedLocality: string;
    onLocalityChange: (name: string) => void;
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
    selectedBhk,
    onBhkChange,
    priceRange,
    onPriceChange,
    selectedBath,
    onBathChange
}: BuySidebarProps) {
    const { filterSettings } = useData();

    return (
        <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-12 pb-20">
            {/* Locality */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-[#FF4802]" /> Locality
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
                    <Bed className="w-3 h-3 text-[#FF4802]" /> Bedrooms
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
                        <IndianRupee className="w-3 h-3 text-[#FF4802]" /> Price
                    </h3>
                    <span className="text-[11px] font-black text-[#FF4802] tracking-widest">[ {filterSettings.priceSettings.min} - {filterSettings.priceSettings.max} CR ]</span>
                </div>
                <div className="px-2">
                    <input
                        type="range"
                        min={filterSettings.priceSettings.min}
                        max={filterSettings.priceSettings.max}
                        step={filterSettings.priceSettings.step}
                        value={priceRange[1]}
                        onChange={(e) => onPriceChange(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-[#FF4802]"
                    />
                    <div className="flex justify-between mt-4 text-[10px] font-bold text-primary/20">
                        <span>{filterSettings.priceSettings.min}</span>
                        <span>{Math.round(filterSettings.priceSettings.max * 0.25)}</span>
                        <span>{Math.round(filterSettings.priceSettings.max * 0.5)}</span>
                        <span>{Math.round(filterSettings.priceSettings.max * 0.75)}</span>
                        <span>{filterSettings.priceSettings.max}</span>
                    </div>
                </div>
            </section>

            {/* Bathrooms */}
            <section className="space-y-6">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.25em] flex items-center gap-2">
                    <Bath className="w-3 h-3 text-[#FF4802]" /> Bathrooms
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

            {/* Truva Assured Badge */}
            <div className="p-8 bg-[#FFF8F6] rounded-[40px] relative overflow-hidden border border-[#FF4802]/5 group">
                <div className="absolute top-4 right-4 text-[#FF4802]/20">
                    <ShieldCheck className="w-10 h-10 rotate-12" />
                </div>
                <div className="space-y-6 relative z-10">
                    <p className="text-[11px] font-black text-primary tracking-widest uppercase">All Truva homes are</p>
                    <ul className="space-y-4">
                        {filterSettings.assuranceLabels.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-black text-[#FF4802] uppercase tracking-wide">
                                <div className="w-4 h-4 rounded-full bg-[#FF4802] flex items-center justify-center">
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
