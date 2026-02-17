"use client";

import React, { useState } from "react";
import { PlayCircle, Map as MapIcon, Frame, ChevronRight, Sparkles } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ScheduleCallForm } from "@/components/property/ScheduleCallForm";
import { Property } from "@/types";

interface ImmersiveSectionsProps {
    property: Property;
}

export function ImmersiveSections({ property }: ImmersiveSectionsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Schedule a Call");

    const openModal = (title: string) => {
        setModalTitle(title);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-12">
            {/* Virtual Tour */}
            {property.virtualTourUrl && (
                <div className="bg-white p-10 rounded-[40px] border border-border/50 shadow-sm space-y-8 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <PlayCircle className="w-32 h-32 rotate-12" />
                    </div>
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center">
                                <PlayCircle className="w-5 h-5 text-accent" />
                            </div>
                            <h2 className="text-xl font-black text-primary uppercase tracking-tight">Immersive Virtual Tour</h2>
                        </div>
                        <p className="text-muted-foreground text-sm font-bold max-w-xl">
                            Experience this property from every angle with our 3D walkthrough. Get a real feel for the space without leaving your seat.
                        </p>
                    </div>

                    <div className="relative aspect-video w-full rounded-[32px] overflow-hidden border border-border/50 group-hover:shadow-2xl transition-all duration-500 bg-secondary/20">
                        {/* Placeholder/Iframe for Virtual Tour */}
                        <iframe
                            src={property.virtualTourUrl}
                            className="w-full h-full border-0"
                            allowFullScreen
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-6 text-center space-y-6 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-black uppercase tracking-tight">Full Immersive Access</h3>
                                <p className="text-sm font-bold opacity-80">Request a guided virtual walkthrough with our property specialist.</p>
                            </div>
                            <button
                                onClick={() => openModal("Request Virtual Tour Access")}
                                className="px-8 py-4 bg-white text-primary rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all flex items-center gap-2 group/btn"
                            >
                                Get Access Now
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Plans Section */}
            {(property.masterPlanUrl || property.floorPlanUrl) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Master Plan */}
                    {property.masterPlanUrl && (
                        <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-sm space-y-6 group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center">
                                        <MapIcon className="w-4 h-4 text-accent" />
                                    </div>
                                    <h3 className="text-sm font-black text-primary uppercase tracking-widest">Master Plan</h3>
                                </div>
                                <Sparkles className="w-4 h-4 text-accent opacity-50" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 bg-secondary/10">
                                <img
                                    src={property.masterPlanUrl}
                                    alt="Master Plan"
                                    className="w-full h-full object-cover blur-[2px] opacity-50"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">High-Resolution Asset</p>
                                    <button
                                        onClick={() => openModal("Request Master Plan Details")}
                                        className="w-full bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all shadow-lg shadow-primary/20"
                                    >
                                        Unlock Master Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Floor Plan */}
                    {property.floorPlanUrl && (
                        <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-sm space-y-6 group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
                                        <Frame className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <h3 className="text-sm font-black text-primary uppercase tracking-widest">Floor Plan</h3>
                                </div>
                                <Sparkles className="w-4 h-4 text-accent opacity-50" />
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/30 bg-secondary/10">
                                <img
                                    src={property.floorPlanUrl}
                                    alt="Floor Plan"
                                    className="w-full h-full object-cover blur-[2px] opacity-50"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Detailed Layout Specifications</p>
                                    <button
                                        onClick={() => openModal("Request Floor Plan Specifications")}
                                        className="w-full bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all shadow-lg shadow-primary/20"
                                    >
                                        Request Floor Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Common Conversion Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-2">
                    <div className="p-8 pb-0 text-center space-y-1">
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Direct Engagement</p>
                        <h2 className="text-2xl font-black text-primary uppercase tracking-tight">{modalTitle}</h2>
                    </div>
                    <ScheduleCallForm configurations={property.configurations} />
                </div>
            </Modal>
        </div>
    );
}
