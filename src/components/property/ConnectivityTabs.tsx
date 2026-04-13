"use client";

import React, { useState } from "react";
import {
    Navigation,
    GraduationCap,
    Store,
    HeartPulse,
    Activity,
    MapPin,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectivityTabsProps {
    neighbourhood?: {
        schools?: string[];
        hospitals?: string[];
        transport?: string[];
        shopping?: string[];
    };
    className?: string;
}

const TABS = [
    { id: "connectivity", label: "Connectivity", icon: Navigation, key: "transport" },
    { id: "education", label: "Education", icon: GraduationCap, key: "schools" },
    { id: "shopping", label: "Shopping", icon: Store, key: "shopping" },
    { id: "healthcare", label: "Healthcare", icon: HeartPulse, key: "hospitals" },
    { id: "lifestyle", label: "Lifestyle", icon: Activity, key: "lifestyle" },
] as const;

export function ConnectivityTabs({ neighbourhood, className }: ConnectivityTabsProps) {
    const [activeTab, setActiveTab] = useState<typeof TABS[number]["id"]>("connectivity");

    const currentTabData = TABS.find(t => t.id === activeTab);
    const items = neighbourhood?.[currentTabData?.key as keyof typeof neighbourhood] || [];

    return (
        <div className={cn("space-y-6", className)}>
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 md:gap-4 border-b border-border/30 pb-4">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 font-black text-xs uppercase tracking-widest border border-transparent",
                                activeTab === tab.id
                                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                                    : "bg-white text-muted-foreground hover:bg-secondary/50 border-border/50"
                            )}
                        >
                            <Icon className={cn("w-4 h-4", activeTab === tab.id ? "text-white" : "text-primary")} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-[40px] border border-border/50 p-10 shadow-xl shadow-primary/5 min-h-[200px] relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                {items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-5 bg-secondary/10 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-bold text-sm text-primary tracking-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8 relative z-10">
                        <div className="w-16 h-16 rounded-3xl bg-secondary/30 flex items-center justify-center">
                            {React.createElement(currentTabData?.icon || MapPin, { className: "w-8 h-8 text-muted-foreground/30" })}
                        </div>
                        <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">
                            No listings found for {currentTabData?.label}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
