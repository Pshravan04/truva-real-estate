"use client";

import React, { useState } from "react";
import { Building2, ChevronDown, User, Phone, Search, ChevronRight, Mail, LayoutPanelLeft, Info, MapPin, Sparkles, Zap, DollarSign, Calendar, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useData } from "@/context/DataContext";
import { Submission } from "@/types";

export function ValuationForm() {
    const { addSubmission, societies } = useData();
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        propertyName: "",
        sellerName: "",
        developerName: "",
        email: "",
        phone: "",
        location: "",
        propertyType: "Ready To move", // Underconstruction, Ready To move, Near Possession
        usageType: "Non commercial", // Commercial, Non commercial
        description: "",
        highlights: "",
        connectivity: "",
        amenities: ["", "", "", "", "", ""],
        configurations: [{ configuration: "2 BHK", price: "" }],
        possessionDate: "",
        societyId: "",
        mapUrl: "",
        projectImages: [] as string[],
        virtualTourUrl: "",
        masterPlanUrl: "",
        floorPlanUrl: "",
        reraNumber: "",
        reraQr: ""
    });

    const filteredSocieties = societies.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.area.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSocietySelect = (id: string, name: string, area: string) => {
        setFormData({ ...formData, societyId: id, location: `${name}, ${area}`, propertyName: name });
        setSearchQuery(name);
        setShowResults(false);
    };

    const handleAmenityChange = (index: number, value: string) => {
        const newAmenities = [...formData.amenities];
        newAmenities[index] = value;
        setFormData({ ...formData, amenities: newAmenities });
    };


    const addConfiguration = () => {
        setFormData({
            ...formData,
            configurations: [...formData.configurations, { configuration: "", price: "" }]
        });
    };

    const removeConfiguration = (index: number) => {
        if (formData.configurations.length > 1) {
            const newConfigs = formData.configurations.filter((_, i) => i !== index);
            setFormData({ ...formData, configurations: newConfigs });
        }
    };

    const handleConfigChange = (index: number, field: "configuration" | "price", value: string) => {
        const newConfigs = [...formData.configurations];
        newConfigs[index][field] = value;
        setFormData({ ...formData, configurations: newConfigs });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const submission: Submission = {
            id: `sub-${Date.now()}`,
            sellerId: "u1", // Hardcoded for now
            societyId: formData.societyId,
            sellerName: formData.sellerName,
            developerName: formData.developerName,
            propertyName: formData.propertyName,
            location: formData.location,
            carpetArea: 1250, // Default or calculated
            valuationAmount: 45000000, // Simulated valuation
            status: "VALUATED",
            createdAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            image: formData.projectImages[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            configurations: formData.configurations,
            amenities: formData.amenities.filter(a => a !== ""),
            description: formData.description,
            highlights: formData.highlights,
            connectivity: formData.connectivity,
            mapUrl: formData.mapUrl,
            virtualTourUrl: formData.virtualTourUrl,
            masterPlanUrl: formData.masterPlanUrl,
            floorPlanUrl: formData.floorPlanUrl,
            reraNumber: formData.reraNumber,
            reraQr: formData.reraQr,
            projectImages: formData.projectImages.filter(img => img !== "")
        };

        addSubmission(submission);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after success message
        setTimeout(() => setIsSuccess(false), 5000);
    };

    const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
        <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
                <div className="bg-primary/5 p-3 rounded-2xl ring-1 ring-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-primary tracking-tight leading-tight">{title}</h3>
                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{subtitle}</p>
                </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-border/80 via-border/40 to-transparent" />
        </div>
    );

    return (
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/10 border border-border/50 max-w-7xl w-full mx-auto relative z-10 transition-all hover:shadow-primary/20">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-black text-primary mb-2 tracking-tighter">Request a Valuation</h2>
                <p className="text-primary font-bold uppercase text-[10px] tracking-[0.2em]">Provide details for a premium, 100-point physical audit.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">

                    {/* Column 1: Asset Details */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <SectionHeader icon={Building2} title="Asset Details" subtitle="Project Basics" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Property Name</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Project/Building Name"
                                            className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.propertyName}
                                            onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 uppercase">
                                    <label className="text-[10px] font-black text-muted-foreground tracking-widest ml-1">Developer</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. Oberoi Realty"
                                            className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.developerName}
                                            onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 uppercase col-span-full">
                                    <label className="text-[10px] font-black text-muted-foreground tracking-widest ml-1">Location Map Link (Google Maps)</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder="Paste Google Maps link here"
                                            className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.mapUrl}
                                            onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 uppercase col-span-full">
                                    <label className="text-[10px] font-black text-muted-foreground tracking-widest ml-1">Immersive Media URLs (Virtual Tour, Master Plan, Floor Plan)</label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="relative">
                                            <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                                            <input
                                                type="text"
                                                placeholder="Virtual Tour URL"
                                                className="w-full pl-10 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-12"
                                                value={formData.virtualTourUrl}
                                                onChange={(e) => setFormData({ ...formData, virtualTourUrl: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                                            <input
                                                type="text"
                                                placeholder="Master Plan URL"
                                                className="w-full pl-10 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-12"
                                                value={formData.masterPlanUrl}
                                                onChange={(e) => setFormData({ ...formData, masterPlanUrl: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative">
                                            <LayoutPanelLeft className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                                            <input
                                                type="text"
                                                placeholder="Floor Plan URL"
                                                className="w-full pl-10 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-12"
                                                value={formData.floorPlanUrl}
                                                onChange={(e) => setFormData({ ...formData, floorPlanUrl: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 uppercase col-span-full">
                                    <label className="text-[10px] font-black text-muted-foreground tracking-widest ml-1">MahaRERA Details</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Info className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                                            <input
                                                type="text"
                                                placeholder="MahaRERA Number"
                                                className="w-full pl-10 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-12"
                                                value={formData.reraNumber}
                                                onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Info className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                                            <input
                                                type="text"
                                                placeholder="MahaRERA QR URL"
                                                className="w-full pl-10 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-12"
                                                value={formData.reraQr}
                                                onChange={(e) => setFormData({ ...formData, reraQr: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 relative">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Location / Society</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Goregaon East, Mumbai"
                                        className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setShowResults(true);
                                        }}
                                        onFocus={() => setShowResults(true)}
                                    />
                                </div>
                                {showResults && searchQuery && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                        {filteredSocieties.map(s => (
                                            <button
                                                key={s.id}
                                                type="button"
                                                className="w-full text-left p-4 hover:bg-primary/5 border-b border-border last:border-0 group flex items-center justify-between"
                                                onClick={() => handleSocietySelect(s.id, s.name, s.area)}
                                            >
                                                <div>
                                                    <p className="font-bold text-sm text-primary">{s.name}</p>
                                                    <p className="text-[10px] font-black uppercase text-muted-foreground">{s.area}, {s.city}</p>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Construction Status</label>
                                    <div className="relative">
                                        <select
                                            className="w-full p-4 rounded-2xl border border-border/60 appearance-none bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.propertyType}
                                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                        >
                                            <option>Ready To move</option>
                                            <option>Underconstruction</option>
                                            <option>Near Possession</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Usage Type</label>
                                    <div className="relative">
                                        <select
                                            className="w-full p-4 rounded-2xl border border-border/60 appearance-none bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.usageType}
                                            onChange={(e) => setFormData({ ...formData, usageType: e.target.value })}
                                        >
                                            <option>Non commercial</option>
                                            <option>Commercial</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Configurations & Amenities */}
                    <div className="space-y-10">
                        {/* Configurations */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <SectionHeader icon={LayoutPanelLeft} title="Configurations" subtitle="Layout & Pricing" />
                                <button
                                    type="button"
                                    onClick={addConfiguration}
                                    className="bg-primary hover:bg-black text-white p-2.5 px-5 rounded-2xl transition-all flex items-center gap-2 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/10 hover:shadow-primary/20"
                                >
                                    <Plus className="w-4 h-4" /> Add
                                </button>
                            </div>

                            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {formData.configurations.map((config, idx) => (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-[28px] bg-secondary/20 border border-border/50 relative group animate-in zoom-in-95 duration-200">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Configuration</label>
                                            <div className="relative">
                                                <LayoutPanelLeft className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e.g. 2 BHK"
                                                    className="w-full pl-12 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-xs h-12"
                                                    value={config.configuration}
                                                    onChange={(e) => handleConfigChange(idx, "configuration", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Expected Price</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="e.g. 2.5 Cr"
                                                    className="w-full pl-12 p-3 rounded-xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-xs h-12"
                                                    value={config.price}
                                                    onChange={(e) => handleConfigChange(idx, "price", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {formData.configurations.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeConfiguration(idx)}
                                                className="absolute -top-1.5 -right-1.5 bg-white text-destructive p-1.5 rounded-full shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="space-y-6 pt-10 border-t border-border/40">
                            <SectionHeader icon={Zap} title="Amenities" subtitle="Select Up to 6 Features" />
                            <div className="grid grid-cols-2 gap-4">
                                {formData.amenities.map((amenity, idx) => (
                                    <div key={idx} className="relative">
                                        <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50 pointer-events-none" />
                                        <input
                                            type="text"
                                            placeholder={`Amenity ${idx + 1}`}
                                            className="w-full pl-10 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-[11px] h-14"
                                            value={amenity}
                                            onChange={(e) => handleAmenityChange(idx, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Narrative (Full Width) */}
                <div className="space-y-10 pt-16 border-t border-border/60">
                    <SectionHeader icon={Sparkles} title="Project Narrative" subtitle="The Story & Features" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-2">
                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Description</label>
                            <textarea
                                required
                                placeholder="Tell us about your home's unique charm, view, and specific improvements..."
                                className="w-full p-5 rounded-[28px] border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm min-h-[160px] resize-none leading-relaxed"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Key Highlights</label>
                                <div className="relative">
                                    <Info className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Pool view, High floor"
                                        className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                        value={formData.highlights}
                                        onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Connectivity</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. 5 min to Metro"
                                        className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                        value={formData.connectivity}
                                        onChange={(e) => setFormData({ ...formData, connectivity: e.target.value })}
                                    />
                                </div>
                            </div>
                            {formData.propertyType !== "Ready To move" && (
                                <div className="space-y-2 transition-all animate-in slide-in-from-top-2">
                                    <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Possession Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. Dec 2025"
                                            className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                            value={formData.possessionDate}
                                            onChange={(e) => setFormData({ ...formData, possessionDate: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Property Visuals (Full Width) */}
                <div className="space-y-10 pt-16 border-t border-border/60">
                    <SectionHeader icon={Sparkles} title="Property Visuals" subtitle="High-Resolution Assets" />

                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* Upload Button */}
                        <label className="relative aspect-square rounded-[32px] border-2 border-dashed border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 group overflow-hidden">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                onChange={async (e) => {
                                    const files = Array.from(e.target.files || []);
                                    if (files.length === 0) return;

                                    const newImages = await Promise.all(
                                        files.slice(0, 5).map(file => new Promise<string>((resolve) => {
                                            const reader = new FileReader();
                                            reader.onloadend = () => resolve(reader.result as string);
                                            reader.readAsDataURL(file);
                                        }))
                                    );

                                    setFormData(prev => ({
                                        ...prev,
                                        projectImages: [...newImages, ...prev.projectImages].slice(0, 10).filter(img => img !== "")
                                    }));
                                }}
                            />
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <Plus className="w-6 h-6" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Upload Images</span>
                        </label>

                        {/* Image Previews */}
                        {formData.projectImages.map((img, idx) => img && (
                            <div key={idx} className="relative aspect-square rounded-[32px] overflow-hidden border border-border group">
                                <img src={img} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newImages = formData.projectImages.filter((_, i) => i !== idx);
                                            setFormData({ ...formData, projectImages: newImages });
                                        }}
                                        className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-red-500 transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Info (Full Width) */}
                <div className="space-y-10 pt-16 border-t border-border/60">
                    <SectionHeader icon={User} title="Contact Information" subtitle="Owner Details" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Seller Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <input
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                    value={formData.sellerName}
                                    onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Phone Number</label>
                            <div className="flex">
                                <span className="flex items-center justify-center w-14 bg-secondary/40 border border-border/60 border-r-0 rounded-l-2xl font-black text-[11px] text-muted-foreground">+91</span>
                                <input
                                    required
                                    type="tel"
                                    placeholder="98765 43210"
                                    className="w-full p-4 rounded-r-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                <input
                                    required
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full pl-12 p-4 rounded-2xl border border-border/60 bg-white focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all text-sm h-14"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col items-center">
                    <button type="submit" className="w-full max-w-xl bg-primary text-primary-foreground font-black py-7 rounded-[28px] hover:bg-black transition-all shadow-2xl hover:shadow-primary/30 uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 group">
                        Confirm & Request Audit
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <p className="text-[9px] text-center text-muted-foreground mt-8 font-black uppercase tracking-[0.2em] opacity-60">
                        Secure Submission • Guaranteed Response within 24 Hours
                    </p>
                </div>

            </form>
        </div>
    );
}
