"use client";

import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { useData } from "@/context/DataContext";
import { ShieldCheck, Zap, BarChart3, ChevronRight, Quote, Sparkles, MessageSquare, Timer, LayoutDashboard, MoveDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const { properties } = useData();
  const listedProperties = properties.filter(p => p.status === "LISTED");

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
            {listedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Market Insights */}
      <section className="py-24 bg-[#0a0a0a] text-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-[40px] overflow-hidden bg-black/40">
            {/* Left Main Content */}
            <div className="lg:col-span-8 p-12 md:p-24 space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  AN AVERAGE HOUSE TAKES 9-12 MONTHS TO SELL
                </p>
                <h2 className="text-5xl md:text-[80px] font-black leading-[0.95] tracking-tighter">
                  Most Truva homes <br />
                  <span className="text-[#FF4802]">sell by the weekend</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-12 pt-4">
                <button className="bg-white text-black px-10 py-5 rounded-sm font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-[#FF4802] hover:text-white transition-all shadow-xl shadow-white/5">
                  <MessageSquare className="w-5 h-5" />
                  Get early access
                </button>
                <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] group">
                  <span className="w-4 h-4 bg-[#FF4802] rounded-none inline-block" />
                  HERE'S WHY <MoveDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Stats Pane */}
            <div className="lg:col-span-4 border-l border-white/10 flex flex-col divide-y divide-white/10">
              <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <Timer className="w-6 h-6 text-white/60 group-hover:text-[#FF4802] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">AVERAGE TIME TO SELL:</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">45 days</p>
                </div>
              </div>
              <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-white/60 group-hover:text-[#FF4802] transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-2">TOTAL VALUE:</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">300+ Crs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Client Stories / Testimonials */}
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


      <Footer />
    </main>
  );
}
