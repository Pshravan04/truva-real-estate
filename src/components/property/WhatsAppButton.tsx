"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
    propertyId: string;
    propertyTitle: string;
    phoneNumber: string; // e.g., "+919876543210"
}

export function WhatsAppButton({ propertyId, propertyTitle, phoneNumber }: WhatsAppButtonProps) {
    const message = encodeURIComponent(`Hi, I'm interested in the ${propertyTitle} (ID: ${propertyId}) I saw on Truva.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold transition-all shadow-lg group"
        >
            <MessageCircle className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
            Chat on WhatsApp
        </a>
    );
}
