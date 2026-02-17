import Link from "next/link";
import { Search, MapPin, Sparkles, ChevronRight, Banknote, ShieldCheck, CheckCircle2, FileText, LayoutDashboard } from "lucide-react";

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
                <div className="max-w-3xl space-y-8">
                    {/* Elite Badge */}
                    <div className="inline-flex items-center gap-2 text-white/90 animate-in fade-in slide-in-from-left-4 duration-700">
                        <Banknote className="w-5 h-5" />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">HOMES WORTH 300+ CR SOLD</span>
                    </div>

                    {/* Primary Heading */}
                    <div className="space-y-2">
                        <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
                            Radically delightful <br />
                            <span className="text-white/40 italic font-serif -ml-1">home buying</span>
                        </h1>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                        <Link href="/buy" className="w-full sm:w-auto">
                            <button className="w-full bg-[#FF4802] hover:bg-[#e64002] text-white px-10 py-5 rounded-sm font-black text-[11px] uppercase tracking-widest transition-all">
                                Browse Truva Homes
                            </button>
                        </Link>
                        <Link href="/seller" className="w-full sm:w-auto">
                            <button className="w-full bg-transparent border border-white/40 hover:bg-white/10 text-white px-10 py-5 rounded-sm font-black text-[11px] uppercase tracking-widest transition-all">
                                Sell Your House
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Feature Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-md border-t border-white/10">
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/80">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <div className="h-10 w-px bg-white/20 hidden md:block" />
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">TOP 5% HOMES</h3>
                                <p className="text-[11px] font-bold text-white/40">Only in the finest societies</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/80">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div className="h-10 w-px bg-white/20 hidden md:block" />
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">FULLY RENOVATED</h3>
                                <p className="text-[11px] font-bold text-white/40">Quality audited and upgraded</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/80">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="h-10 w-px bg-white/20 hidden md:block" />
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">FAIR PRICES, NO COMMISSIONS</h3>
                                <p className="text-[11px] font-bold text-white/40">Data backed valuations by TruIQ</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white/80">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">LEGALLY CLEARED HOMES</h3>
                                <p className="text-[11px] font-bold text-white/40">Just come to sign</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
