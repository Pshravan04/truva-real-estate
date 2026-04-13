"use client";

import React from "react";
import { Star, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface PropertyReviewsProps {
    property: Property;
    className?: string;
}

export function PropertyReviews({ property, className }: PropertyReviewsProps) {
    const reviews = property.propertyReviews || [
        {
            userName: "Ankit Sharma",
            rating: 5,
            comment: "Excellent property with Great connectivity. The amenities are top-notch and the society is very well maintained.",
            date: "2 months ago"
        },
        {
            userName: "Priya V.",
            rating: 4,
            comment: "Very spacious apartment. The natural light in the living room is amazing. Good for families.",
            date: "1 month ago"
        }
    ];

    return (
        <div className={cn("space-y-8 pt-12 border-t border-border/50", className)}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-accent rounded-full" />
                <h2 className="text-xl font-black text-primary tracking-tight">Property Reviews</h2>
            </div>

            <div className="space-y-6">
                {reviews.map((review, idx) => (
                    <div key={idx} className="p-8 bg-muted/20 rounded-[32px] border border-border/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 text-muted-foreground/5 opacity-20 group-hover:opacity-100 transition-opacity">
                            <MessageSquareQuote className="w-20 h-20 rotate-12" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-black">
                                        {review.userName.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-primary">{review.userName}</p>
                                        <p className="text-[10px] font-bold text-muted-foreground">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-3 h-3",
                                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/20"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">
                                "{review.comment}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
