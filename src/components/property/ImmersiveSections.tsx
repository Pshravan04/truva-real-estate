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
