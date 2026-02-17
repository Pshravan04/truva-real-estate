"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { useData } from "@/context/DataContext";
import { Property, Submission } from "@/types";
import {
    LayoutDashboard,
    FileText,
    Users,
    ShieldCheck,
    Map,
    TrendingUp,
    CheckCircle,
    XCircle,
    Eye,
    Star,
    Edit3,
    Plus,
    Trash2,
    Settings,
    Mail,
    Globe,
    MapPin,
    IndianRupee,
    ArrowLeft // Added for "Back to Dashboard" button
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ValuationForm } from "@/components/property/ValuationForm"; // Imported ValuationForm

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('properties');
    const [showAddListing, setShowAddListing] = useState(false); // Added showAddListing state
    const {
        properties: mockProperties,
        submissions: mockSubmissions,
        societies,
        inquiries,
        approveSubmission,
        rejectSubmission,
        deleteProperty,
        updatePropertyStatus
    } = useData();

    const toggleStatus = (id: string, status: string) => {
        updatePropertyStatus(id, status as any);
    };

    return (
        <main className="min-h-screen flex flex-col pt-20">
            <div className="flex-1 flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-white border-r border-border p-6 space-y-2">
                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-4 ml-2">Control Center</p>

                    <button
                        onClick={() => { setActiveTab('properties'); setShowAddListing(false); }}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                            activeTab === 'properties' ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary"
                        )}
                    >
                        <LayoutDashboard className="w-4 h-4" />
                        Property CRUD
                    </button>

                    <button
                        onClick={() => setActiveTab('submissions')}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                            activeTab === 'submissions' ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary"
                        )}
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Verification Engine
                    </button>

                    <button
                        onClick={() => setActiveTab('leads')}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                            activeTab === 'leads' ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary"
                        )}
                    >
                        <TrendingUp className="w-4 h-4" />
                        Lead Monitoring
                    </button>

                    <button
                        onClick={() => setActiveTab('content')}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                            activeTab === 'content' ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary"
                        )}
                    >
                        <Globe className="w-4 h-4" />
                        Content Control
                    </button>

                    <button
                        onClick={() => setActiveTab('taxonomy')}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all",
                            activeTab === 'taxonomy' ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary"
                        )}
                    >
                        <Settings className="w-4 h-4" />
                        Taxonomy & Filters
                    </button>
                </aside>

                {/* Main Content */}
                <section className="flex-1 bg-secondary/30 p-8 overflow-x-auto min-h-screen">
                    {/* 1. Property CRUD */}
                    {activeTab === 'properties' && (
                        <div className="space-y-6">
                            {!showAddListing ? (
                                <>
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <h1 className="text-2xl font-black text-primary">Property Management</h1>
                                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Full CRUD • Asset Control</p>
                                        </div>
                                        <button
                                            onClick={() => setShowAddListing(true)}
                                            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-black transition-all shadow-lg text-sm"
                                        >
                                            <Plus className="w-4 h-4" /> Add Listing
                                        </button>
                                    </div>

                                    <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
                                        <table className="w-full text-left">
                                            <thead className="bg-secondary/50 border-b border-border">
                                                <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                    <th className="px-6 py-4">Asset</th>
                                                    <th className="px-6 py-4">Price</th>
                                                    <th className="px-6 py-4">Status</th>
                                                    <th className="px-6 py-4">Truva Assured</th>
                                                    <th className="px-6 py-4 text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {mockProperties.map((prop) => (
                                                    <tr key={prop.id} className="hover:bg-secondary/20 transition-colors">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-lg bg-secondary flex-shrink-0" />
                                                                <div>
                                                                    <p className="font-bold text-sm">{prop.title}</p>
                                                                    <p className="text-[10px] text-muted-foreground uppercase">{prop.location.area}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 font-bold text-sm text-primary">₹{(prop.price / 10000000).toFixed(2)} Cr</td>
                                                        <td className="px-6 py-4">
                                                            <select
                                                                value={prop.status}
                                                                onChange={(e) => toggleStatus(prop.id, e.target.value)}
                                                                className="text-[10px] font-black border border-border rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary/20"
                                                            >
                                                                <option value="LISTED">LISTED</option>
                                                                <option value="SOLD">SOLD</option>
                                                                <option value="PENDING">COMING SOON</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <button
                                                                onClick={() => toggleStatus(prop.id, prop.status === 'AUDITED' ? 'LISTED' : 'AUDITED')}
                                                                className={cn(
                                                                    "w-12 h-6 rounded-full p-1 transition-all flex items-center",
                                                                    prop.status === 'LISTED' ? "bg-accent/20 border border-accent/30 justify-end" : "bg-slate-200 border border-slate-300 justify-start"
                                                                )}
                                                            >
                                                                <div className={cn("w-4 h-4 rounded-full", prop.status === 'LISTED' ? "bg-accent-foreground" : "bg-slate-400")} />
                                                            </button>
                                                        </td>
                                                        <td className="px-6 py-4 flex items-center justify-center gap-2">
                                                            <Link href={`/properties/${prop.slug}`} target="_blank">
                                                                <button className="p-2 bg-secondary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                                                    <Eye className="w-4 h-4" />
                                                                </button>
                                                            </Link>
                                                            <button className="p-2 bg-secondary text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                                                                <Edit3 className="w-4 h-4" />
                                                            </button>
                                                            <button onClick={() => deleteProperty(prop.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setShowAddListing(false)}
                                            className="p-2 bg-white border border-border rounded-xl hover:bg-secondary transition-all"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                        <div>
                                            <h1 className="text-2xl font-black text-primary">Add New Listing</h1>
                                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Property Deployment Zone</p>
                                        </div>
                                    </div>

                                    <div className="bg-secondary/10 rounded-[40px] p-1 border border-border/50">
                                        <ValuationForm />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* 2. Verification Engine */}
                    {activeTab === 'submissions' && (
                        <div className="space-y-8">
                            <div className="mb-8">
                                <h1 className="text-2xl font-black text-primary">Verification Engine</h1>
                                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Pending Appraisal • Compliance Audit</p>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {mockSubmissions.map(sub => {
                                    const society = (societies || []).find(s => s.id === sub.societyId);
                                    return (
                                        <div key={sub.id} className="bg-white rounded-[40px] border border-border shadow-2xl shadow-primary/5 overflow-hidden group hover:border-primary/20 transition-all">
                                            <div className="flex flex-col lg:flex-row">
                                                {/* Property Image Overlay */}
                                                <div className="relative w-full lg:w-80 h-64 lg:h-auto overflow-hidden bg-secondary">
                                                    <img
                                                        src={sub.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                                        alt="Property"
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                    <div className="absolute bottom-6 left-6 text-white">
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Valuation</p>
                                                        <p className="text-xl font-black">₹{(sub.valuationAmount || 0) / 10000000} Cr</p>
                                                    </div>
                                                </div>

                                                <div className="flex-1 p-8 md:p-10 space-y-8">
                                                    {/* Header Info */}
                                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center gap-3">
                                                                <span className="bg-primary/5 text-primary text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest border border-primary/10">Pending Approval</span>
                                                                <span className="flex items-center gap-1 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                                                                    <FileText className="w-3 h-3" />
                                                                    Listed: {sub.createdAt || "Recent"}
                                                                </span>
                                                            </div>
                                                            <h3 className="text-2xl font-black text-primary leading-tight">
                                                                {society?.name || sub.propertyName || "Unknown Asset"} • {sub.tower || "Main Tower"}
                                                            </h3>
                                                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                                                {sub.developerName || "Unknown Developer"} • {society?.area || sub.location || "Mumbai"}, {society?.city || "Mumbai"}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <Link href={`/properties/dynamic-asset-preview`} target="_blank">
                                                                <button className="flex items-center gap-2 bg-secondary text-primary px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm">
                                                                    <Eye className="w-4 h-4" />
                                                                    Preview Page
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    {/* Details Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-border/50">
                                                        {/* Unit Specs */}
                                                        <div className="space-y-4">
                                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-l-2 border-primary pl-3">Asset Details</p>
                                                            <div className="space-y-2">
                                                                <p className="text-sm font-bold text-primary flex justify-between">
                                                                    <span className="text-muted-foreground opacity-60">Floor</span>
                                                                    <span>Level {sub.floor}</span>
                                                                </p>
                                                                <p className="text-sm font-bold text-primary flex justify-between">
                                                                    <span className="text-muted-foreground opacity-60">Carpet Area</span>
                                                                    <span>{sub.carpetArea} SQFT</span>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        {/* Seller Info */}
                                                        <div className="space-y-4">
                                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] border-l-2 border-accent pl-3">Owner Details</p>
                                                            <div className="space-y-2">
                                                                <p className="text-sm font-bold text-primary flex items-center gap-2">
                                                                    <Users className="w-4 h-4 text-accent" />
                                                                    {sub.sellerName}
                                                                </p>
                                                                <div className="flex flex-col gap-1 text-[11px] font-bold text-muted-foreground">
                                                                    <p className="flex items-center gap-2">
                                                                        <Mail className="w-3 h-3" /> {sub.contactDetails?.email}
                                                                    </p>
                                                                    <p className="flex items-center gap-2">
                                                                        <TrendingUp className="w-3 h-3 rotate-45" /> {sub.contactDetails?.phone}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Actions Area */}
                                                        <div className="flex flex-col gap-3 justify-end">
                                                            <button onClick={() => approveSubmission(sub.id)} className="w-full bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                                                <CheckCircle className="w-5 h-5" />
                                                                Approve & List Asset
                                                            </button>
                                                            <button
                                                                onClick={() => rejectSubmission(sub.id)}
                                                                className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-3"
                                                            >
                                                                <XCircle className="w-5 h-5" />
                                                                Reject Submission
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* 3. Lead Monitoring */}
                    {activeTab === 'leads' && (
                        <div className="space-y-6">
                            <h1 className="text-2xl font-black text-primary mb-6">Lead Monitoring Dashboard</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Buyer Interests */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Users className="w-4 h-4" /> Buyer Interests (Dual-Action)
                                    </h3>
                                    {inquiries.map(inq => (
                                        <div key={inq.id} className="bg-white p-6 rounded-3xl border border-border space-y-3 hover:border-primary/20 transition-all cursor-pointer">
                                            <div className="flex justify-between items-start">
                                                <p className="font-bold text-sm text-primary">{inq.name}</p>
                                                <span className="text-[10px] font-black bg-accent/10 text-accent px-2 py-1 rounded-full uppercase">Property Discovery</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground italic leading-relaxed">"{inq.message}"</p>
                                            <div className="flex gap-4 pt-2">
                                                <a href={`tel:${inq.phone} `} className="text-[10px] font-black text-primary flex items-center gap-1 uppercase tracking-widest hover:underline">
                                                    <Mail className="w-3 h-3" /> Track Lead
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Seller Inquiries */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Edit3 className="w-4 h-4" /> Seller Appraisals
                                    </h3>
                                    <div className="bg-white p-6 rounded-3xl border border-border border-dashed flex flex-col items-center justify-center text-center py-12">
                                        <TrendingUp className="w-8 h-8 text-slate-300 mb-4" />
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Awaiting Rapid Appraisals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 4. Content Control */}
                    {activeTab === 'content' && (
                        <div className="space-y-6">
                            <h1 className="text-2xl font-black text-primary mb-6">Content & SEO Taxonomy</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-3xl border border-border space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold">Township Knowledge Modules</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Manage articles for Parel, Powai, and South Mumbai Townships.</p>
                                    <button className="w-full bg-secondary text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                        Initialize Editor
                                    </button>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-border space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-bold">Article Taxonomy</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Update blog tags and hierarchy for SEO optimization.</p>
                                    <button className="w-full bg-secondary text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                        Manage Tags
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 5. Taxonomy & Filters */}
                    {activeTab === 'taxonomy' && (
                        <TaxonomyControl />
                    )}
                </section>
            </div>

            <Footer />
        </main>
    );
}

function TaxonomyControl() {
    const { filterSettings, updateFilterSettings } = useData();
    const [newItem, setNewItem] = useState({ type: '', value: '', id: '' });

    const addItem = (type: 'bhkOptions' | 'bathOptions' | 'assuranceLabels' | 'locations') => {
        if (!newItem.value) return;
        updateFilterSettings({
            [type]: [...filterSettings[type], newItem.value]
        });
        setNewItem({ type: '', value: '', id: '' });
    };

    const removeItem = (type: 'bhkOptions' | 'bathOptions' | 'assuranceLabels' | 'locations', index: number) => {
        const newList = [...filterSettings[type]];
        newList.splice(index, 1);
        updateFilterSettings({ [type]: newList });
    };

    const addSortOption = () => {
        if (!newItem.id || !newItem.value) return;
        updateFilterSettings({
            sortOptions: [...filterSettings.sortOptions, { id: newItem.id, label: newItem.value }]
        });
        setNewItem({ type: '', value: '', id: '' });
    };

    const removeSortOption = (index: number) => {
        const newList = [...filterSettings.sortOptions];
        newList.splice(index, 1);
        updateFilterSettings({ sortOptions: newList });
    };

    const updatePriceSetting = (key: 'min' | 'max' | 'step', value: string) => {
        updateFilterSettings({
            priceSettings: { ...filterSettings.priceSettings, [key]: parseFloat(value) }
        });
    };

    return (
        <div className="max-w-6xl space-y-10 pb-20">
            <div>
                <h1 className="text-2xl font-black text-primary">Taxonomy & Filters</h1>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Marketplace Logic • Global Options</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* BHK Options */}
                <div className="bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Plus className="w-4 h-4 text-primary" /> BHK Options
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {filterSettings.bhkOptions.map((opt, i) => (
                            <span key={i} className="bg-secondary px-3 py-1.5 rounded-lg text-xs font-bold text-primary flex items-center gap-2">
                                {opt}
                                <button onClick={() => removeItem('bhkOptions', i)} className="text-primary/40 hover:text-red-500 transition-colors">
                                    <XCircle className="w-3.5 h-3.5" />
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="e.g. 5 BHK"
                            value={newItem.type === 'bhk' ? newItem.value : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'bhk', value: e.target.value })}
                            className="flex-1 bg-secondary border-none rounded-xl px-4 py-2.5 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <button onClick={() => addItem('bhkOptions')} className="bg-primary text-white p-2.5 rounded-xl hover:bg-black transition-all">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Bathroom Options */}
                <div className="bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Plus className="w-4 h-4 text-primary" /> Bath Options
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {filterSettings.bathOptions.map((opt, i) => (
                            <span key={i} className="bg-secondary px-3 py-1.5 rounded-lg text-xs font-bold text-primary flex items-center gap-2">
                                {opt}
                                <button onClick={() => removeItem('bathOptions', i)} className="text-primary/40 hover:text-red-500 transition-colors">
                                    <XCircle className="w-3.5 h-3.5" />
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="e.g. 5 Bath"
                            value={newItem.type === 'bath' ? newItem.value : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'bath', value: e.target.value })}
                            className="flex-1 bg-secondary border-none rounded-xl px-4 py-2.5 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <button onClick={() => addItem('bathOptions')} className="bg-primary text-white p-2.5 rounded-xl hover:bg-black transition-all">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Locations */}
                <div className="bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <MapPin className="w-4 h-4 text-[#FF4802]" /> Primary Locations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {filterSettings.locations.map((loc, i) => (
                            <span key={i} className="bg-secondary px-3 py-1.5 rounded-lg text-xs font-bold text-primary flex items-center gap-2">
                                {loc}
                                <button onClick={() => removeItem('locations', i)} className="text-primary/40 hover:text-red-500 transition-colors">
                                    <XCircle className="w-3.5 h-3.5" />
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="e.g. Juhu"
                            value={newItem.type === 'loc' ? newItem.value : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'loc', value: e.target.value })}
                            className="flex-1 bg-secondary border-none rounded-xl px-4 py-2.5 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <button onClick={() => addItem('locations')} className="bg-primary text-white p-2.5 rounded-xl hover:bg-black transition-all">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Price Settings */}
                <div className="bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <IndianRupee className="w-4 h-4 text-[#FF4802]" /> Price Slider Limits
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black opacity-30 uppercase tracking-widest">Min (CR)</label>
                            <input
                                type="number"
                                value={filterSettings.priceSettings.min}
                                onChange={(e) => updatePriceSetting('min', e.target.value)}
                                className="w-full bg-secondary border-none rounded-xl px-3 py-2 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black opacity-30 uppercase tracking-widest">Max (CR)</label>
                            <input
                                type="number"
                                value={filterSettings.priceSettings.max}
                                onChange={(e) => updatePriceSetting('max', e.target.value)}
                                className="w-full bg-secondary border-none rounded-xl px-3 py-2 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black opacity-30 uppercase tracking-widest">Step size</label>
                            <input
                                type="number"
                                step="0.1"
                                value={filterSettings.priceSettings.step}
                                onChange={(e) => updatePriceSetting('step', e.target.value)}
                                className="w-full bg-secondary border-none rounded-xl px-3 py-2 text-xs font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                            />
                        </div>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-2xl">
                        <p className="text-[10px] font-bold text-muted-foreground leading-relaxed">
                            These values control the marketplace price slider. "Max" determines the default filter ceiling.
                        </p>
                    </div>
                </div>

                {/* Sorting Options */}
                <div className="col-span-full md:col-span-2 bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-primary" /> Marketplace Sorting Logic
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filterSettings.sortOptions.map((opt, i) => (
                            <div key={i} className="bg-secondary p-4 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.15em] mb-1">ID: {opt.id}</p>
                                    <p className="text-xs font-bold text-primary">{opt.label}</p>
                                </div>
                                <button onClick={() => removeSortOption(i)} className="p-2 text-primary/20 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-border/40">
                        <input
                            type="text"
                            placeholder="Unique ID (e.g. price-asc)"
                            value={newItem.type === 'sort' ? newItem.id : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'sort', id: e.target.value })}
                            className="bg-secondary border-none rounded-xl px-4 py-3 text-xs font-bold flex-1 focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Display Label (e.g. Price: Low to High)"
                            value={newItem.type === 'sort' ? newItem.value : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'sort', value: e.target.value })}
                            className="bg-secondary border-none rounded-xl px-4 py-3 text-xs font-bold flex-1 focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <button onClick={addSortOption} className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all">
                            Add Sort Option
                        </button>
                    </div>
                </div>

                {/* Assurance Labels */}
                <div className="col-span-full bg-white p-8 rounded-[32px] border border-border space-y-6">
                    <h3 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-[#FF4802]" /> Truva Assurance Labels
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {filterSettings.assuranceLabels.map((opt, i) => (
                            <span key={i} className="bg-[#FFF8F6] border border-[#FF4802]/10 px-4 py-2 rounded-xl text-xs font-black text-[#FF4802] flex items-center gap-3">
                                {opt}
                                <button onClick={() => removeItem('assuranceLabels', i)} className="text-[#FF4802]/40 hover:text-red-500 transition-colors">
                                    <XCircle className="w-4 h-4" />
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Add new assurance label..."
                            value={newItem.type === 'label' ? newItem.value : ''}
                            onChange={(e) => setNewItem({ ...newItem, type: 'label', value: e.target.value })}
                            className="flex-1 bg-secondary border-none rounded-xl px-5 py-3 text-sm font-bold focus:ring-1 focus:ring-primary/20 outline-none"
                        />
                        <button onClick={() => addItem('assuranceLabels')} className="bg-[#FF4802] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all">
                            Add Label
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
