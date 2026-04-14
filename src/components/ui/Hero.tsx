import Link from "next/link";
import { Search, MapPin, Sparkles, ChevronRight, Banknote, ShieldCheck, CheckCircle2, FileText, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-black">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0 z-0 scale-100">
                <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 text-white pt-20">
                <div className="flex flex-col items-center text-center space-y-10">
                    {/* Primary Heading */}
                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter animate-in fade-in slide-in-from-top-6 duration-700">
                            Mumbai Real Estate, <br />
                            <span className="text-[#FF6F38]">Simplified.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-white/70 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
                            Discover verified homes across Mumbai — <br />
                            buy, rent, or invest with complete confidence.
                        </p>
                    </div>

                    {/* CTAs & Trust Items */}
                    <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/buy">
                                <button className="bg-[#FF6F38] hover:bg-[#e64002] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-[#FF6F38]/30">
                                    Explore Properties
                                </button>
                            </Link>
                            <Link href="/seller">
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                                    Post Requirement
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                            {[
                                { label: "Verified Listings" },
                                { label: "Expert Advisors" },
                                { label: "Zero Spam" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-white/80">
                                    <div className="bg-[#FF6F38] rounded-full p-1">
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Search Engine - The Centerpiece */}
                    <div className="w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-[40px] p-2 shadow-2xl shadow-black/20 animate-in zoom-in-95 duration-1000 delay-300">
                        <div className="flex flex-col">
                            {/* Search Tabs */}
                            <div className="flex items-center p-2 gap-2">
                                {['Buy', 'Rent', 'Resale', 'New Projects'].map((tab) => (
                                    <button
                                        key={tab}
                                        className={cn(
                                            "px-8 py-3 rounded-[24px] text-[10px] font-black uppercase tracking-widest transition-all",
                                            tab === 'Buy' ? "bg-primary text-white shadow-xl" : "text-primary/40 hover:bg-primary/5 hover:text-primary"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Search Input Area */}
                            <div className="flex flex-col md:flex-row items-center gap-2 p-3 bg-secondary/30 rounded-[32px]">
                                <div className="flex-1 relative w-full">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                                    <input
                                        type="text"
                                        placeholder="Search by location, project, or builder..."
                                        className="w-full bg-transparent pl-14 pr-6 py-5 text-primary font-bold text-sm outline-none placeholder:text-primary/30"
                                    />
                                </div>

                                <div className="h-10 w-px bg-primary/10 hidden md:block" />

                                <div className="flex items-center gap-2 w-full md:w-auto px-4">
                                    <select className="bg-transparent text-primary font-black text-[10px] uppercase tracking-widest outline-none py-4 cursor-pointer">
                                        <option>Budget</option>
                                        <option>1Cr - 2Cr</option>
                                        <option>2Cr - 5Cr</option>
                                    </select>
                                    <select className="bg-transparent text-primary font-black text-[10px] uppercase tracking-widest outline-none py-4 cursor-pointer">
                                        <option>BHK</option>
                                        <option>2 BHK</option>
                                        <option>3 BHK</option>
                                    </select>
                                    <select className="bg-transparent text-primary font-black text-[10px] uppercase tracking-widest outline-none py-4 cursor-pointer">
                                        <option>Property Type</option>
                                        <option>Apartment</option>
                                        <option>Villa</option>
                                    </select>
                                </div>

                                <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white p-5 rounded-[24px] flex items-center justify-center transition-all group">
                                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
