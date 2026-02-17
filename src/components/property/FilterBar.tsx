"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
    onSearchChange: (value: string) => void;
    onBhkChange: (value: string) => void;
    onPriceChange: (value: string) => void;
    onOrientationChange: (value: string) => void;
}

export function FilterBar({ onSearchChange, onBhkChange, onPriceChange, onOrientationChange }: FilterBarProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex flex-col md:flex-row gap-4 items-center">

            {/* Search Input */}
            <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search by location, project..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            {/* Filters Form */}
            <div className="flex gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
                <select
                    className="px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-xs font-bold"
                    onChange={(e) => onBhkChange(e.target.value)}
                >
                    <option value="">BHK Configuration</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4+ BHK</option>
                </select>

                <select
                    className="px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-xs font-bold"
                    onChange={(e) => onPriceChange(e.target.value)}
                >
                    <option value="">Max Budget</option>
                    <option value="20000000">Under 2 Cr</option>
                    <option value="40000000">2 Cr - 4 Cr</option>
                    <option value="60000000">Above 4 Cr</option>
                </select>

                <select
                    className="px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer text-xs font-bold"
                    onChange={(e) => onOrientationChange(e.target.value)}
                >
                    <option value="">View Orientation</option>
                    <option value="Greenery">Greenery</option>
                    <option value="Forest">Forest</option>
                    <option value="Hill">Hill</option>
                    <option value="City View">City View</option>
                    <option value="Lake View">Lake View</option>
                </select>

                <button className="px-4 py-2 rounded-lg border border-input hover:bg-secondary flex items-center gap-2 text-xs font-bold whitespace-nowrap">
                    <SlidersHorizontal className="w-3 h-3" /> Filters
                </button>
            </div>
        </div>
    );
}
