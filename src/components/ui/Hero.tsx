import { Search, MapPin, Sparkles, ChevronRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0 z-0 scale-105 animate-in fade-in zoom-in duration-1000">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern Home Interior"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center">

                {/* Elite Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exclusively Curated • Mumbai Edition</span>
                </div>

                {/* Primary Heading */}
                <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter max-w-5xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                    FIND YOUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">MASTERPIECE.</span>
                </h1>

                <p className="text-xl md:text-2xl mb-14 text-white max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                    Individually verified, fully renovated luxury residences in Mumbai's most prestigious enclaves.
                </p>

                {/* Search Bar - Premium Glassmorphism */}
                <div className="w-full max-w-4xl bg-white/5 backdrop-blur-3xl rounded-[40px] p-2 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in duration-700 delay-300">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="flex-1 w-full flex items-center gap-4 px-8 py-5 group">
                            <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <div className="flex-1 text-left">
                                <label className="block text-[9px] font-black text-white/40 uppercase tracking-widest">Location</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Worli, Bandra, Powai..."
                                    className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none font-bold text-base mt-0.5"
                                />
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-white/10 shrink-0" />

                        <div className="flex-1 w-full flex items-center gap-4 px-8 py-5 group">
                            <Sparkles className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                            <div className="flex-1 text-left">
                                <label className="block text-[9px] font-black text-white/40 uppercase tracking-widest">Property Type</label>
                                <select className="w-full bg-transparent text-white focus:outline-none font-bold text-base mt-0.5 appearance-none cursor-pointer">
                                    <option className="bg-neutral-900">Luxury Apartments</option>
                                    <option className="bg-neutral-900">Premium Penthouses</option>
                                    <option className="bg-neutral-900">Exclusive Villas</option>
                                </select>
                            </div>
                        </div>

                        <button className="w-full md:w-auto bg-primary hover:bg-white hover:text-primary p-6 px-10 rounded-[32px] transition-all flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 group m-1.5 md:m-1">
                            Search
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Experience Indicators */}
                <div className="mt-16 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 animate-in fade-in duration-1000 delay-500">
                    <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Verified Assets</span>
                    <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Direct Only</span>
                    <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> 100-Point Audit</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
                <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
            </div>
        </section>
    );
}
