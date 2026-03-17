"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    MapPin, Bed, Bath, Square, Share2, Heart,
    Shield, Check, Eye, Zap, Info,
    Building2, Layout, Calendar, Globe, Sparkles,
    Calculator, Search
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ImageGallery } from "@/components/property/ImageGallery";
import { useData } from "@/context/DataContext";
import { WhatsAppButton } from "@/components/property/WhatsAppButton";
import { ScheduleCallForm } from "@/components/property/ScheduleCallForm";
import { ImmersiveSections } from "@/components/property/ImmersiveSections";
import { EMICalculator } from "@/components/property/EMICalculator";
import { cn } from "@/lib/utils";
import { Property } from "@/types";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function PropertyDetailsPage({ params }: PageProps) {
    const { slug } = use(params);
    const { properties, isInitialized } = useData();
    const [property, setProperty] = useState<Property | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isInitialized) return;

        const found = properties.find((p) => p.slug === slug);
        if (found) {
            setProperty(found);
        } else if (slug === 'dynamic-asset-preview') {
            setProperty({
                id: '999',
                title: "Oberoi Realty Asset",
                slug: "dynamic-asset-preview",
                description: "A recently verified premium asset, currently undergoing final platform deployment.",
                price: 45000000,
                type: "sale",
                bhk: 3,
                location: { area: "Goregaon East", city: "Mumbai", address: "Goregaon East, Mumbai" },
                amenities: [{ icon: "Shield", label: "Jangid Brothers Verified" }],
                images: ["https://images.unsplash.com/photo-1600607687644-c7171b42498b"],
                stats: { bathrooms: 3, areaSqFt: 1450 },
                status: "LISTED"
            } as Property);
        }
        setIsLoading(false);
    }, [slug, properties, isInitialized]);

    if (!isInitialized || isLoading) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FAFAFA]">
            <div className="w-12 h-12 border-4 border-[#FF6F38] border-t-transparent rounded-full animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Initializing Discovery...</p>
        </div>
    );

    if (!property) return notFound();

    return (
        <main className="min-h-screen flex flex-col pt-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6 py-8 relative z-10">
                {/* Breadcrumb */}
                <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2 opacity-30">/</span>
                    <Link href="/buy" className="hover:text-primary transition-colors">
                        {property.type === 'rent' ? 'Rent' : 'Buy'}
                    </Link>
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
                                        <span className="bg-[#FF6F38] text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-[#FF6F38]/20">
                                            <Shield className="w-3 h-3" /> Jangid Brothers Assured
                                        </span>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">
                                            ID: JB-{property.id}00
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
                                        {property.type === 'sale' ? (
                                            <>₹{(property.price / 10000000).toFixed(2)} <span className="text-xl">Cr</span></>
                                        ) : (
                                            <>₹{property.price.toLocaleString()} <span className="text-xl">/mo</span></>
                                        )}
                                    </p>
                                    {property.type === 'rent' && property.depositAmount && (
                                        <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mt-1">
                                            Deposit: ₹{property.depositAmount.toLocaleString()}
                                        </p>
                                    )}
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

                            {/* MahaRERA Details */}
                            {(property.reraNumber || property.reraQr) && (
                                <div className="flex items-center gap-4 p-6 bg-white rounded-[24px] border border-border/50 shadow-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">MahaRERA Registration</p>
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            {property.reraNumber && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-black text-primary tracking-tight">{property.reraNumber}</span>
                                                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-wider border border-green-200">Verified</span>
                                                </div>
                                            )}
                                            {property.reraQr && (
                                                <a
                                                    href={property.reraQr}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-primary text-xs font-bold transition-all group"
                                                >
                                                    <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                    View QR Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Description & Highlights */}
                        <div className="bg-white p-10 rounded-[40px] border border-border/50 shadow-sm space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-xl font-black text-primary flex items-center gap-2 uppercase tracking-tight">
                                    <Layout className="w-5 h-5" /> About Property
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

                        <ImmersiveSections property={property} />

                        {/* Virtual Tour Section */}
                        {property.virtualTourUrl && (
                            <div className="space-y-8 pt-12 border-t border-border/50">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 bg-[#FF6F38]/10 text-[#FF6F38] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FF6F38]/20">
                                        <Eye className="w-3.5 h-3.5" /> Virtual Experience
                                    </div>
                                    <h2 className="text-3xl font-black text-primary tracking-tight">Immersive 3D Tour</h2>
                                    <p className="text-muted-foreground font-medium">Walk through your potential future home from anywhere in the world.</p>
                                </div>
                                <div className="aspect-video w-full rounded-[40px] border border-border/50 overflow-hidden shadow-2xl shadow-primary/5 bg-secondary/20 relative group">
                                    <iframe
                                        src={property.virtualTourUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="relative z-10"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <div className="flex flex-col items-center gap-4 text-primary/40">
                                            <Zap className="w-12 h-12 animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Loading Immersive Space...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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

                        <ImageGallery images={property.projectImages || []} />

                        {/* Rental & Utility Details */}
                        {(property.waterSupply || property.leaseTerm) && (
                            <div className="space-y-8 pt-12 border-t border-border/50">
                                <h2 className="text-xl font-black text-primary uppercase tracking-tight">Utilities & Terms</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {property.waterSupply && (
                                        <div className="flex items-center gap-4 p-6 bg-white border border-border/50 rounded-[28px] shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Water Supply</p>
                                                <p className="font-black text-sm text-primary">{property.waterSupply}</p>
                                            </div>
                                        </div>
                                    )}
                                    {property.leaseTerm && (
                                        <div className="flex items-center gap-4 p-6 bg-white border border-border/50 rounded-[28px] shadow-sm">
                                            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center">
                                                <Calendar className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Lease Term</p>
                                                <p className="font-black text-sm text-primary">{property.leaseTerm}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Neighbourhood Highlights */}
                        {property.neighbourhood && Object.values(property.neighbourhood).some(arr => arr && arr.length > 0) && (
                            <div className="space-y-8 pt-12 border-t border-border/50">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-500 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-purple-500/20">
                                        <Search className="w-3.5 h-3.5" /> Discovery
                                    </div>
                                    <h2 className="text-3xl font-black text-primary tracking-tight">Explore Neighbourhood</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {Object.entries(property.neighbourhood).map(([category, items]) => (
                                        items && items.length > 0 && (
                                            <div key={category} className="space-y-4">
                                                <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                                                    {category === 'schools' && <Building2 className="w-4 h-4 text-accent" />}
                                                    {category === 'hospitals' && <Info className="w-4 h-4 text-red-500" />}
                                                    {category === 'transport' && <Globe className="w-4 h-4 text-blue-500" />}
                                                    {category === 'shopping' && <Sparkles className="w-4 h-4 text-yellow-500" />}
                                                    {category}
                                                </h3>
                                                <ul className="space-y-3">
                                                    {items.map((item, i) => (
                                                        <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-border/40 shadow-sm text-xs font-bold text-muted-foreground">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Conversion Hub */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="sticky top-24 space-y-6">
                            {/* Presented By */}
                            <div className="bg-white p-8 rounded-[40px] border border-border shadow-2xl shadow-primary/5 space-y-4">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Presented By</p>
                                <h3 className="text-lg font-black text-primary flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#FF6F38]/10 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5 text-[#FF6F38]" />
                                    </div>
                                    Authorized Jangid Brothers <br /> Seller Partner
                                </h3>
                            </div>

                            <WhatsAppButton
                                propertyId={property.id}
                                propertyTitle={property.title}
                                phoneNumber="+919152012345"
                            />

                            {property.type === 'sale' && (
                                <EMICalculator
                                    variant="mini"
                                    initialAmount={property.price}
                                    className="!shadow-none border border-border/50"
                                />
                            )}

                            <div className="pt-4">
                                <ScheduleCallForm configurations={property.configurations} />
                            </div>

                            {/* Trust Guarantee */}
                            <div className="bg-primary p-8 rounded-[40px] text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                                <Shield className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 rotate-12" />
                                <div className="relative z-10 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 p-1 bg-white text-primary rounded-full" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Jangid Brothers Verified Listing</span>
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
