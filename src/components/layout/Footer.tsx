import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Phone, MessageSquare } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#FF4802] text-white pt-24 pb-16 font-sans overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
                    {/* Brand & Socials */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
                                Joyful, Honest <br />
                                & Fast housing
                            </h2>
                        </div>

                        <div className="flex gap-3">
                            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/30 transition-all">
                                    <Icon className="w-5 h-5 text-white" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="w-full md:w-80 bg-white p-6 rounded-[24px] shadow-2xl relative">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-[#FF4802] rounded-full flex items-center justify-center">
                                <span className="text-white font-black text-lg">A</span>
                            </div>
                            <div>
                                <h4 className="text-black font-black text-sm uppercase tracking-tight">Truva HQ</h4>
                                <p className="text-black/60 text-xs font-bold">+91 8655479971</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 bg-[#2D2D2D] text-white py-3 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
                                <Phone className="w-3 h-3" />
                                Call
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-black/10 text-black py-3 rounded-md text-[10px] font-black uppercase tracking-widest hover:bg-black/5 transition-colors">
                                <MessageSquare className="w-3 h-3" />
                                Whatsapp
                            </button>
                        </div>

                        {/* Visual Stack Effect */}
                        <div className="absolute -bottom-1.5 -right-1.5 inset-0 border border-white/20 -z-10 rounded-[24px]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* For Buyers */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-white/60">For Buyers</h4>
                        <ul className="space-y-4">
                            <li><Link href="/buy" className="text-sm font-black hover:opacity-70 transition-opacity">Browse homes</Link></li>
                            <li><Link href="/loan-assistance" className="text-sm font-black hover:opacity-70 transition-opacity">Get loan assistance</Link></li>
                        </ul>
                    </div>

                    {/* For Sellers */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-white/60">For Sellers</h4>
                        <ul className="space-y-4">
                            <li><Link href="/seller" className="text-sm font-black hover:opacity-70 transition-opacity">Get free home valuation</Link></li>
                            <li><Link href="/why-sell" className="text-sm font-black hover:opacity-70 transition-opacity">Why sell with Truva?</Link></li>
                        </ul>
                    </div>

                    {/* More */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-white/60">More</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-sm font-black">
                                <Link href="/about" className="hover:opacity-70">About us</Link>
                                <span className="text-white/40">•</span>
                                <Link href="/careers" className="hover:opacity-70">Careers</Link>
                                <span className="text-white/40">•</span>
                                <Link href="/blog" className="hover:opacity-70">Blogs</Link>
                            </div>
                            <Link href="/privacy" className="block text-sm font-black hover:opacity-70">Privacy policy</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-white/10 space-y-6">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white/60">Know your townships</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-black">
                            <span className="hover:opacity-70 cursor-pointer">Oberoi Garden city</span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="hover:opacity-70 cursor-pointer">Runwal Greens</span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="hover:opacity-70 cursor-pointer">Raheja Vistas</span>
                            <span className="text-white/20 text-xs">•</span>
                            <span className="hover:opacity-70 cursor-pointer">L&T Emerald Isle</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}