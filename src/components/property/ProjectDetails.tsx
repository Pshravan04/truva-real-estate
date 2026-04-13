"use client";

import React from "react";
import {
    Maximize,
    FileText,
    Building2,
    Calendar,
    BadgeIndianRupee,
    Milestone,
    LayoutGrid,
    ShieldCheck,
    ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface ProjectDetailsProps {
    property: Property;
    className?: string;
}

export function ProjectDetails({ property, className }: ProjectDetailsProps) {
    const details = [
        {
            label: "Project Units",
            value: property.projectUnits || "156",
            icon: null
        },
        {
            label: "Area Unit",
            value: "sq.ft.",
            icon: null
        },
        {
            label: "Project Area",
            value: property.projectArea || "2.18 Acres",
            icon: Maximize
        },
        {
            label: "Sizes",
            value: property.stats?.areaSqFt ? `${property.stats.areaSqFt} sq.ft.` : "1645 - 1948 sq.ft.",
            icon: FileText
        },
        {
            label: "Project Size",
            value: `${property.totalBuildings || '2'} Buildings - ${property.projectUnits || '156'} units`,
            icon: Building2
        },
        {
            label: "Launch Date",
            value: property.launchDate || "Oct, 2025",
            icon: Calendar
        },
        {
            label: "Avg. Price",
            value: property.avgPricePerSqFt || "₹7.98 K/sq.ft",
            icon: BadgeIndianRupee
        },
        {
            label: "Possession Starts",
            value: property.possessionDate || "Sep, 2029",
            icon: Milestone
        },
        {
            label: "Configuration",
            value: `${property.bhk} BHK Apartment`,
            icon: LayoutGrid
        },
        {
            label: "Rera Id",
            value: property.reraNumber || "PRM/KA/RERA/1250/3...",
            icon: ShieldCheck,
            isLink: true
        }
    ];

    return (
        <div className={cn("bg-white rounded-[40px] border border-border/50 p-10 shadow-xl shadow-primary/5", className)}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                {details.map((detail, idx) => (
                    <div key={idx} className="space-y-1 group">
                        <div className="flex items-center gap-2">
                            {detail.icon && (
                                <detail.icon className="w-4 h-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                            )}
                            <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest leading-none">
                                {detail.label}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            {detail.isLink ? (
                                <>
                                    <p className="text-sm font-black text-primary truncate hover:text-accent transition-colors underline decoration-primary/20 underline-offset-4">
                                        {detail.value}
                                    </p>
                                    <button className="text-[10px] font-black text-[#6366f1] uppercase tracking-widest mt-1 flex items-center gap-1 hover:gap-2 transition-all">
                                        Check RERA Status <ArrowUpRight className="w-3 h-3" />
                                    </button>
                                </>
                            ) : (
                                <p className="text-sm font-black text-primary">
                                    {detail.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
