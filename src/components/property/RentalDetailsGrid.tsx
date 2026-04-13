"use client";

import React from "react";
import {
    BedDouble,
    Building2,
    User,
    Key,
    Car,
    Cake,
    Home,
    CalendarDays
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface RentalDetailsGridProps {
    property: Property;
    className?: string;
}

export function RentalDetailsGrid({ property, className }: RentalDetailsGridProps) {
    const detailItems = [
        {
            value: `${property.bhk} Bedroom`,
            label: "No. of Bedroom",
            icon: BedDouble
        },
        {
            value: property.usageType?.toLowerCase() === 'residential' ? 'Apartment' : 'Commercial',
            label: "Property Type",
            icon: Building2
        },
        {
            value: property.preferredTenant || "Family",
            label: "Preferred Tenant",
            icon: User
        },
        {
            value: property.possessionDate || "Immediately",
            label: "Possession",
            icon: Key
        },
        {
            value: property.parking || "Bike and Car",
            label: "Parking",
            icon: Car
        },
        {
            value: property.propertyAge || "5-10 Years",
            label: "Age of Building",
            icon: Cake
        },
        {
            value: property.balcony || "NA",
            label: "Balcony",
            icon: Home
        },
        {
            value: property.postedOn || "Apr 7, 2026",
            label: "Posted On",
            icon: CalendarDays
        }
    ];

    return (
        <div className={cn("bg-white border border-border/80 divide-y md:divide-y-0 md:border-collapse", className)}>
            <div className="grid grid-cols-2">
                {detailItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "p-6 flex items-start gap-4 border-border/80",
                            idx % 2 === 0 ? "border-r" : "",
                            idx < detailItems.length - 2 ? "border-b" : ""
                        )}
                    >
                        <div className="w-10 h-10 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground/60 shrink-0">
                            <item.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-sm font-black text-primary leading-tight">{item.value}</p>
                            <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
