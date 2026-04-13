"use client";

import React from "react";
import {
    TrainFront,
    MapPin,
    ShieldCheck,
    Trees,
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface FeatureRatingsProps {
    property: Property;
    className?: string;
}

export function FeatureRatings({ property, className }: FeatureRatingsProps) {
    const ratings = [
        {
            label: "Connectivity",
            value: property.featureRatings?.connectivity || 4.3,
            icon: TrainFront
        },
        {
            label: "Neighbourhood",
            value: property.featureRatings?.neighbourhood || 3.9,
            icon: MapPin
        },
        {
            label: "Safety",
            value: property.featureRatings?.safety || 3.2,
            icon: ShieldCheck
        },
        {
            label: "Livability",
            value: property.featureRatings?.livability || 4.0,
            icon: Trees
        }
    ];

    return (
        <div className={cn("space-y-8 pt-12 border-t border-border/50", className)}>
            <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-primary tracking-tight">Ratings based on features</h3>
                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                    <Info className="w-3 h-3 text-muted-foreground/60" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {ratings.map((rating, idx) => {
                    const percentage = (rating.value / 5) * 100;
                    const strokeDasharray = `${percentage}, 100`;

                    return (
                        <div key={idx} className="flex flex-col items-center gap-4 text-center group">
                            <div className="relative w-24 h-24">
                                {/* SVG Circular Progress */}
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#f3f4f6"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke={rating.value >= 4 ? "#10b981" : rating.value >= 3 ? "#84cc16" : "#eab308"}
                                        strokeWidth="2"
                                        strokeDasharray={strokeDasharray}
                                        className="transition-all duration-1000 ease-out"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                {/* Center Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground/40 group-hover:text-primary transition-colors">
                                        <rating.icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-base font-black text-primary">{rating.value}/5</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{rating.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
