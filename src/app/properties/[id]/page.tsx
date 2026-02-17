"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    MapPin, Bed, Bath, Square, Share2, Heart,
    Shield, Check, Eye, Zap, Info, Phone,
    Mail, Building2, Layout, Calendar, Globe, Sparkles
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ImageGallery } from "@/components/property/ImageGallery";
import { useData } from "@/context/DataContext";
import { WhatsAppButton } from "@/components/property/WhatsAppButton";
import { ScheduleCallForm } from "@/components/property/ScheduleCallForm";
import { ImmersiveSections } from "@/components/property/ImmersiveSections";
import { cn } from "@/lib/utils";

interface PageProps {
    params: Promise<{ id: string }>;
}

import { Property } from "@/types";

export default function PropertyDetailsPage({ params }: PageProps) {
    const { id } = use(params);
    const { properties } = useData();
    const [property, setProperty] = useState<Property | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const found = properties.find((p) => p.id === id);
        if (found) {
            setProperty(found);
        } else if (id.startsWith('prop-')) {
            // Dynamic fallback logic
            setProperty({
                id: id,
                title: "Oberoi Realty Asset",
                slug: "dynamic-asset-preview",
                description: "A recently verified premium asset, currently undergoing final platform deployment.",
                price: 45000000,
                type: "sale",
                bhk: 3,
                location: { area: "Goregaon East", city: "Mumbai", address: "Goregaon East, Mumbai" },
                amenities: [{ icon: "Shield", label: "Truva Verified" }],
                images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498b"],
                stats: { bathrooms: 3, areaSqFt: 1450 },
                status: "LISTED"
            } as Property);
        }
        setIsLoading(false);
    }, [id, properties]);

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!property) return notFound();

    return (
        <main className="min-h-screen flex flex-col pt-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2 opacity-30">/</span>
                    <Link href="/buy" className="hover:text-primary transition-colors">Buy</Link>
                    <span className="mx-2 opacity-30">/</span>
                    <span className="text-primary truncate max-w-[200px]">{property.title}</span>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                    <ImageGallery images={property.images} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Header Info */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-primary text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-primary/20">
                                            <Shield className="w-3 h-3" /> Truva Assured
                                        </span>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">
                                            ID: TRV-{property.id}00
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                                        {property.title}
                                    </h1>
                                    <div className="flex items-center text-sm font-bold text-muted-foreground gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
                                            <Building2 className="w-4 h-4" />
                                        </div>
                                        {property.developerName} • {property.location.address}
                                    </div>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-4xl font-black text-primary tracking-tighter">
                                        ₹{(property.price / 10000000).toFixed(2)} <span className="text-xl">Cr</span>
                                    </p>
                                    <div className="flex items-center md:justify-end gap-1 text-[9px] font-black text-accent-foreground uppercase tracking-widest mt-1">
                                        <Zap className="w-3 h-3" /> High Appreciation Area
                                    </div>
                                </div>
                            </div>

                            {/* Key Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-[32px] border border-border/50 shadow-xl shadow-primary/5">
                                <div className="space-y-1 pl-4 border-l-2 border-primary">
                                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Type</span>
                                    <p className="text-sm font-black text-primary">{property.bhk} BHK</p>
                                </div>
                                <div className="space-y-1 pl-4 border-l-2 border-primary">
                                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Built-up</span>
                                    <p className="text-sm font-black text-primary">{property.stats?.areaSqFt || 0} SQFT</p>
                                </div>
                                <div className="space-y-1 pl-4 border-l-2 border-accent">
                                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Usage</span>
                                    <p className="text-sm font-black text-primary">{property.usageType === 'RESIDENTIAL' ? 'RESIDENTIAL' : 'COMMERCIAL'}</p>
                                </div>
                                <div className="space-y-1 pl-4 border-l-2 border-green-500">
                                    <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Status</span>
                                    <p className="text-sm font-black text-primary">
                                        {property.constructionStatus?.replace(/_/g, ' ')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Description & Highlights */}
                        <div className="bg-white p-10 rounded-[40px] border border-border/50 shadow-sm space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-xl font-black text-primary flex items-center gap-2 uppercase tracking-tight">
                                    <Layout className="w-5 h-5" /> The Property Experience
                                </h2>
                                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent/20 pl-6 py-2">
                                    "{property.description}"
                                </p>
                            </div>

                            {property.highlights && (
                                <div className="space-y-6">
                                    <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Info className="w-4 h-4 text-accent" /> Elite Highlights
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                                        {property.highlights.split(',').map((h, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm font-bold text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                                {h.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {property.connectivity && (
                                <div className="pt-8 border-t border-border/50 space-y-4">
                                    <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Globe className="w-4 h-4 text-accent" /> Location Insights
                                    </h3>
                                    <p className="text-sm font-bold text-muted-foreground leading-relaxed pl-6">
                                        {property.connectivity}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Unit Configurations */}
                        {property.configurations && property.configurations.length > 0 && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-black text-primary uppercase tracking-tight">Unit Configurations</h2>
                                <div className="bg-white rounded-[32px] border border-border/50 shadow-xl shadow-primary/5 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead className="bg-secondary/30">
                                            <tr className="text-[9px] font-black uppercase tracking-widest text-muted-foreground border-b border-border">
                                                <th className="px-8 py-4">Configuration</th>
                                                <th className="px-8 py-4">Carpet Area</th>
                                                <th className="px-8 py-4 text-right">Estimate Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/30">
                                            {property.configurations.map((config, i) => (
                                                <tr key={i} className="hover:bg-secondary/10 transition-colors">
                                                    <td className="px-8 py-5 font-black text-primary text-sm">{config.configuration}</td>
                                                    <td className="px-8 py-5 font-bold text-muted-foreground text-sm">{config.area || 'N/A'}</td>
                                                    <td className="px-8 py-5 font-black text-accent-foreground text-sm text-right">₹{config.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Amenities */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-black text-primary uppercase tracking-tight">World-Class Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {property.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-border/50 rounded-[28px] shadow-sm hover:shadow-xl transition-all group">
                                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <Check className="w-6 h-6 text-accent-foreground group-hover:text-white" />
                                        </div>
                                        <span className="font-black text-xs uppercase tracking-widest text-primary">{amenity.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ImmersiveSections property={property} />

                        {/* Map Section */}
                        {property.mapUrl && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-black text-primary uppercase tracking-tight">Location Context</h2>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <MapPin className="w-3 h-3" /> {property.location.area}
                                    </span>
                                </div>
                                <div className="aspect-video w-full rounded-[40px] border border-border/50 overflow-hidden shadow-2xl shadow-primary/5">
                                    <iframe
                                        src={property.mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Project Visualization Section */}
                        {property.projectImages && property.projectImages.length > 0 && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-black text-primary uppercase tracking-tight">The Project</h2>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Sparkles className="w-3 h-3 text-accent" /> Premium Vision
                                    </span>
                                </div>
                                <ImageGallery images={property.projectImages} />
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Conversion Hub */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="sticky top-24 space-y-6">
                            {/* Contact Hub */}
                            <div className="bg-white p-8 rounded-[40px] border border-border shadow-2xl shadow-primary/5 space-y-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Presented By</p>
                                    <h3 className="text-2xl font-black text-primary flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                            <span className="text-xs font-black">{property.sellerName?.charAt(0)}</span>
                                        </div>
                                        {property.sellerName}
                                    </h3>
                                    <div className="flex flex-col gap-2 pt-4">
                                        <a href={`tel:${property.contactDetails?.phone}`} className="flex items-center gap-3 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                                            <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            {property.contactDetails?.phone}
                                        </a>
                                        <a href={`mailto:${property.contactDetails?.email}`} className="flex items-center gap-3 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                                            <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            {property.contactDetails?.email}
                                        </a>
                                    </div>
                                </div>

                                <WhatsAppButton
                                    propertyId={property.id}
                                    propertyTitle={property.title}
                                    phoneNumber={property.contactDetails?.phone || "+919876543210"}
                                />

                                <div className="pt-4">
                                    <ScheduleCallForm configurations={property.configurations} />
                                </div>
                            </div>

                            {/* Trust Guarantee */}
                            <div className="bg-primary p-8 rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                                <Shield className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 rotate-12" />
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 p-1 bg-white text-primary rounded-full" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Truva Verified Listing</span>
                                    </div>
                                    <h3 className="text-xl font-black">Zero-Brokerage Guarantee</h3>
                                    <p className="text-[11px] leading-relaxed font-bold opacity-80 uppercase tracking-wider">
                                        Direct access to verified sellers. Zero hidden costs. 100% legal transparency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
