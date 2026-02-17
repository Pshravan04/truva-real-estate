"use client";

import { Footer } from "@/components/layout/Footer";
import { Building2, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { ValuationForm } from "@/components/property/ValuationForm";

export default function SellPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            {/* Hero / Form Section */}
            <section className="relative overflow-hidden bg-white py-12 md:py-24">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-secondary/30 to-white"></div>

                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-block bg-primary/5 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/10">
                            Seller Service
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black leading-tight text-primary">
                            Sell your home <br /> <span className="text-accent-foreground underline decoration-primary/20">faster & better</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-lg">
                            Get the best market price, zero spam calls, and genuine buyers.
                            Truva manages the entire process for you.
                        </p>

                        <div className="grid grid-cols-1 gap-8 mt-12">
                            <div className="flex gap-6 items-start">
                                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 border border-border/50">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl">Accurate Valuation</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Data-driven pricing to get you the best deal in Mumbai.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 border border-border/50">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl">Verified Buyers Only</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">We screen every buyer. No time wasters, only genuine offers.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/5 border border-border/50">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl">End-to-End Support</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Legal, paperwork, and negotiation handled by real estate experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <ValuationForm />

                </div>
            </section>


            <Footer />
        </main>
    );
}
