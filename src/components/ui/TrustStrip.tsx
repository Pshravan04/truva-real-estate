"use client";

import { Zap, Search, Handshake, DollarSign } from "lucide-react";

export function TrustStrip() {
    const usps = [
        {
            icon: Zap,
            label: "Faster Site Visits",
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            icon: Search,
            label: "Verified Listings Only",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Handshake,
            label: "Dedicated Experts",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            icon: DollarSign,
            label: "Strong Price Negotiation",
            color: "text-green-500",
            bg: "bg-green-50"
        }
    ];

    return (
        <section className="bg-white border-y border-border py-12 relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {usps.map((usp, i) => (
                        <div key={usp.label} className="flex items-center gap-5 group">
                            <div className={`w-14 h-14 rounded-2xl ${usp.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                                <usp.icon className={`w-6 h-6 ${usp.color}`} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-black text-primary uppercase tracking-wider">
                                    {usp.label}
                                </h4>
                                <div className="h-0.5 w-8 bg-border group-hover:w-full group-hover:bg-[#FF6F38] transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
