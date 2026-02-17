"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ValuationForm } from "@/components/property/ValuationForm";
import { Building2, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SellerPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20 relative overflow-hidden bg-[#FAFAFA]">

            {/* Background Depth Effects */}
            <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none opacity-60" />

            <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center">
                <div className="w-full flex flex-col gap-32 items-center">

                    {/* Top: Value Proposition - Centered & Immersive */}
                    <div className="space-y-16 text-center flex flex-col items-center max-w-5xl">
                        <div className="space-y-8 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 bg-white text-primary text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-border shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                Seller Suite • Premium Access
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.95] tracking-tighter">
                                Experience the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">Truva Standard.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                                List your property with Mumbai's most exclusive real estate partner. Zero spam, 100% verified buyers, and AI-driven premium valuation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                            {[
                                { icon: ShieldCheck, title: "Verified Listings", desc: "100-point physical audit ensures elite quality.", color: "bg-accent text-accent-foreground" },
                                { icon: Zap, title: "Swift Closures", desc: "Average 45 days time-to-sale for prime assets.", color: "bg-orange-500" },
                                { icon: BarChart3, title: "Fair Value AI", desc: "Real-time market analytics for max return.", color: "bg-purple-500" }
                            ].map((item, i) => (
                                <div key={i} className="group bg-white p-8 rounded-[32px] border border-border/60 shadow-xl shadow-black/[0.02] hover:shadow-primary/5 transition-all text-left flex flex-col gap-5">
                                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-black text-primary text-sm uppercase tracking-widest leading-none">{item.title}</p>
                                        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: The Unified Form - Unconstrained Width */}
                    <div className="relative w-full max-w-7xl">
                        <div className="absolute -inset-20 bg-primary/5 rounded-[100px] blur-[100px] opacity-40 pointer-events-none" />
                        <ValuationForm />
                    </div>

                    {/* Bottom Social Proof / Trust Banner */}
                    <div className="w-full max-w-5xl py-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Trusted by 500+ Luxury Homeowners</p>
                        <div className="flex items-center gap-12 grayscale">
                            <Building2 className="w-24 h-6 animate-pulse" />
                            <ShieldCheck className="w-24 h-6" />
                            <Zap className="w-24 h-6 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
