"use client";

import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import Link from "next/link";
import { Property } from "@/types";
import { cn } from "@/lib/utils";

interface BuyPropertyCardProps {
    property: Property;
}

export function BuyPropertyCard({ property }: BuyPropertyCardProps) {
    return (
        <Link
            href={`/properties/${property.slug}`}
            className="bg-white rounded-[24px] overflow-hidden border border-border/40 hover:shadow-xl transition-all duration-500 group flex flex-col h-full cursor-pointer"
        >
            {/* Image Container with Tags */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {property.viewOrientation && (
                        <span className="bg-white/95 backdrop-blur-md text-primary text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
                            {property.viewOrientation} view
                        </span>
                    )}
                    <span className="bg-white/95 backdrop-blur-md text-primary text-[8px] font-black px-2.5 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
                        Ready to move in
                    </span>
                </div>

                {/* Carousel Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                    {[0, 1, 2, 3].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "w-1 h-1 rounded-full transition-all duration-300",
                                i === 0 ? "bg-white w-3" : "bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-[17px] font-bold text-primary group-hover:text-[#FF4802] transition-colors tracking-tight leading-tight">
                        {property.bhk} BHK in {property.title.split(" ").slice(-1)}
                    </h3>
                    <p className="text-[15px] font-bold text-muted-foreground mt-1">
                        INR {(property.price / 10000000).toFixed(2)} Cr.
                    </p>
                </div>

                <div className="space-y-4 flex flex-col justify-between flex-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                        <Building2 className="w-3.5 h-3.5 text-muted-foreground/40" />
                        <span className="line-clamp-1">{property.developerName || "Premium Society"}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.03]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                            <Square className="w-3 h-3 text-muted-foreground/40" />
                            {property.stats.areaSqFt} Sq.ft
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
                            <MapPin className="w-3 h-3 text-muted-foreground/40" />
                            {property.location.area}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
