"use client";

import React from "react";
import {
    Sofa,
    Droplets,
    Bath,
    Utensils,
    Compass,
    Layers,
    PawPrint,
    ShieldCheck,
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface RentalOverviewProps {
    property: Property;
    className?: string;
}

export function RentalOverview({ property, className }: RentalOverviewProps) {
    const overviewItems = [
        {
            label: "Furnishing Status",
            value: property.furnishingStatus || "Semi",
            icon: Sofa
        },
        {
            label: "Water Supply",
            value: property.waterSupply || "Both",
            icon: Droplets,
            hasInfo: true
        },
        {
            label: "Bathroom",
            value: property.stats?.bathrooms || "2",
            icon: Bath
        },
        {
            label: "Non-Veg Allowed",
            value: property.nonVegAllowed || "Yes",
            icon: Utensils
        },
        {
            label: "Facing",
            value: property.viewOrientation || "NA",
            icon: Compass
        },
        {
            label: "Floor",
            value: property.floorDetail || "4/4",
            icon: Layers
        },
        {
            label: "Pet Allowed",
            value: property.petAllowed || "NA",
            icon: PawPrint
        },
        {
            label: "Gated Security",
            value: property.gatedSecurity || "Yes",
            icon: ShieldCheck
        }
    ];

    return (
        <div className={cn("space-y-6 pt-12 border-t border-border/50", className)}>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-1 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-primary tracking-tight">Overview</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {overviewItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-dashed border-border/60 last:border-0 md:border-b">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground/70">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[11px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black text-primary">{item.value}</span>
                            {item.hasInfo && <Info className="w-3 h-3 text-muted-foreground/40" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
