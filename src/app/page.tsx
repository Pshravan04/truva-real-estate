"use client";

import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { useData } from "@/context/DataContext";
import { ShieldCheck, Zap, BarChart3, ChevronRight, Quote, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { properties } = useData();
  const featuredProperties = properties.filter(p => p.isFeatured);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFA] relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Background Depth Effects */}
      <div className="absolute top-[80vh] left-0 right-0 h-[1000px] pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-40" />
      </div>

      {/* Section 1: The Truva Service Standard */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-border shadow-sm">
              The Standards
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none">
              RADICALLY BETTER <br />
              <span className="opacity-40">HOME BUYING.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Physical Verification",
                desc: "Every home is subjected to a 100-point structural and legal audit by our internal engineers.",
                accent: "bg-accent"
              },
              {
                icon: Zap,
                title: "Direct Access",
                desc: "Navigate the market without noise. Direct-to-owner connections ensured for every single listing.",
                accent: "bg-orange-500"
              },
              {
                icon: BarChart3,
                title: "Zero Spam Policy",
                desc: "Your privacy is an asset. No discovery calls or data sharing until you initiate a site visit.",
                accent: "bg-primary"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[40px] border border-border/60 shadow-xl shadow-black/[0.02] hover:shadow-primary/5 transition-all text-left flex flex-col gap-6">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", item.accent)}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-black text-primary text-lg uppercase tracking-wider">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Featured Collections */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary/60 text-[10px] font-black uppercase tracking-[0.2em]">
                Exclusively Curated
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter leading-none">
                MUMBAI'S FINEST <br />
                <span className="opacity-40">RESIDENCES.</span>
              </h2>
            </div>
            <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest flex items-center gap-3">
              View Collection
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Client Stories / Testimonials */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                Client Stories
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.95]">
                TRUST IS THE <br />
                <span className="opacity-40 font-outline">ONLY CURRENCY.</span>
              </h2>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-black text-primary tracking-tighter">10k+</p>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Families</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-4xl font-black text-primary tracking-tighter">500+</p>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Verified Homes</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  quote: "Truva made finding our dream home so easy. The transparency and verified listings saved us months of hassle.",
                  author: "Rahul & Priyanshi",
                  sub: "Bought in Andheri"
                },
                {
                  quote: "Finally a platform that respects privacy. I didn't get a single spam call after registering.",
                  author: "Sameer K.",
                  sub: "Bought in Powai"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-border/60 shadow-xl shadow-black/[0.02] relative group">
                  <Quote className="absolute top-10 right-10 w-8 h-8 text-primary/5 group-hover:text-primary transition-colors" />
                  <p className="text-lg font-bold text-primary mb-6 leading-relaxed">"{item.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-black text-primary text-xs tracking-tighter">
                      {item.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-primary text-xs uppercase tracking-widest">{item.author}</p>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{item.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 px-6">
        <div className="container mx-auto max-w-7xl bg-primary rounded-[56px] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-black/20 to-primary" />
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full" />

          <div className="relative z-10 space-y-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              READY FOR YOUR <br />
              <span className="opacity-40">NEXT CHAPTER?</span>
            </h2>
            <button className="bg-white text-primary hover:bg-black hover:text-white px-12 py-6 rounded-3xl transition-all font-black text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center gap-4 group">
              Speak with an Expert
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
