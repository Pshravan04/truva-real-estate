"use client";

import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export function Differentiation() {
    return (
        <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Brand Statement */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-6 duration-700">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-[#FF6F38]/10 text-[#FF6F38] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                                Our Philosophy
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.95]">
                                NOT JUST ANOTHER <br />
                                <span className="text-[#FF6F38]">PROPERTY PORTAL.</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-bold text-primary leading-tight">
                                Finding listings is easy. Choosing the right property is not. <br />
                                <span className="text-muted-foreground">Jangid Brothers is built to solve that.</span>
                            </p>

                            <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-xl">
                                We combine intelligent property discovery with real human expertise and on-ground support — so you don’t just browse, you make the right decision.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {[
                                "Smart Shortlisting",
                                "Expert Consultation",
                                "End-to-End Assistance"
                            ].map((usp, i) => (
                                <div key={usp} className="flex items-center gap-3 group">
                                    <div className="bg-[#FF6F38] rounded-full p-1 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm font-black text-primary uppercase tracking-widest">{usp}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Trust Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-6 duration-700">
                        <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-xl shadow-black/[0.02] space-y-4 hover:-translate-y-2 transition-all">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                                <Award className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-black text-primary uppercase tracking-widest text-xs">Curated Selection</h4>
                            <p className="text-sm text-muted-foreground font-medium">We handpick every property to ensure quality societies and elite living.</p>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-xl shadow-black/[0.02] space-y-4 hover:-translate-y-2 transition-all delay-100">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-black text-primary uppercase tracking-widest text-xs">Human-Centric</h4>
                            <p className="text-sm text-muted-foreground font-medium">No bots. You get a dedicated relationship manager for every visit.</p>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-xl shadow-black/[0.02] space-y-4 hover:-translate-y-2 transition-all delay-200">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-black text-primary uppercase tracking-widest text-xs">Zero Spam Policy</h4>
                            <p className="text-sm text-muted-foreground font-medium">Your data stays with us. No unwanted calls from builders or brokers.</p>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-[#FF6F38]/20 bg-gradient-to-br from-white to-[#FF6F38]/5 shadow-xl shadow-[#FF6F38]/5 space-y-4 hover:-translate-y-2 transition-all delay-300">
                            <h4 className="font-black text-[#FF6F38] uppercase tracking-widest text-xs">Ready to Start?</h4>
                            <p className="text-sm text-primary font-bold">Find your Mumbai home today with expert guidance.</p>
                            <button className="w-full bg-[#FF6F38] text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
