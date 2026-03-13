"use client";

import React from "react";
import { Footer } from "@/components/layout/Footer";
import { EMICalculator } from "@/components/property/EMICalculator";
import { Calculator, ShieldCheck, Zap, TrendingUp, Info } from "lucide-react";

export default function EMIPage() {
    return (
        <main className="min-h-screen flex flex-col pt-20">
            {/* Hero Section */}
            <section className="bg-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 bg-[#FF6F38]/10 text-[#FF6F38] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FF6F38]/20">
                            <Calculator className="w-3.5 h-3.5" /> Finance Tools
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9]">
                            Plan your lifestyle with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">Precision.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            Calculate your monthly EMIs, understand interest payouts, and discover the most viable financial path to your dream home.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-20 bg-[#FAFAFA]">
                <div className="container mx-auto px-4 md:px-6">
                    <EMICalculator className="-mt-32 relative z-20" />
                </div>
            </section>

            {/* Educational Content */}
            <section className="py-32 bg-white border-t border-border/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                                <ShieldCheck className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Transparent Calculation</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                Our calculator uses the standard reducing balance method to ensure 100% accuracy in your interest projections.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                                <Zap className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Pre-Approval Boost</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                Knowing your EMI budget helps our banking partners fast-track your home loan eligibility check.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                                <TrendingUp className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-black text-primary">Smart Payout Strategy</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">
                                Compare different tenures to see how increasing your EMI slightly can save you lakhs in interest over decades.
                            </p>
                        </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="mt-32 p-10 bg-black rounded-[40px] text-white flex flex-col md:flex-row items-center gap-10">
                        <div className="w-20 h-20 rounded-3xl bg-white/10 flex-shrink-0 flex items-center justify-center">
                            <Info className="w-10 h-10 text-[#FF6F38]" />
                        </div>
                        <div className="space-y-2 flex-1">
                            <h4 className="text-2xl font-black uppercase tracking-tight text-[#FF6F38]">Jangid Brothers Pro Tip</h4>
                            <p className="text-lg font-bold opacity-70 leading-relaxed">
                                Always aim for an EMI that is less than 40% of your monthly take-home income to maintain a premium lifestyle while building your asset.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
