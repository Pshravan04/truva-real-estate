"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, Heart, LogOut, MessageSquare, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const transparent = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-[#FF4802] text-white py-1 relative z-50">
                <div className="container mx-auto px-4 flex items-center justify-center gap-4 overflow-hidden whitespace-nowrap">
                    <div className="flex items-center gap-8 animate-marquee">
                        {[1, 2, 3].map((i) => (
                            <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                <Megaphone className="w-3 h-3" />
                                We've just raised $9M in Series A Funding
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <nav
                className={cn(
                    "fixed top-[28px] left-0 right-0 z-50 transition-all duration-300",
                    (isScrolled || !transparent)
                        ? "bg-white/95 backdrop-blur-md border-b border-border py-3 shadow-sm"
                        : "bg-transparent py-5 text-white"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "text-2xl font-bold tracking-tight transition-colors",
                            (isScrolled || !transparent) ? "text-primary" : "text-white"
                        )}
                    >
                        Truva
                    </Link>

                    {/* Desktop Links */}
                    <div className={cn(
                        "hidden md:flex items-center gap-10",
                        (isScrolled || !transparent) ? "text-primary" : "text-white"
                    )}>
                        <div className="flex items-center gap-8">
                            <Link href="/buy" className="text-[11px] font-black uppercase tracking-widest hover:text-[#FF4802] transition-colors">
                                Browse Homes
                            </Link>
                            <Link href="/seller" className="text-[11px] font-black uppercase tracking-widest hover:text-[#FF4802] transition-colors">
                                Sell Your House
                            </Link>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link href="/saved" className="text-[11px] font-black uppercase tracking-widest hover:text-[#FF4802] transition-colors flex items-center gap-1">
                                <Heart className="w-3.5 h-3.5" />
                            </Link>

                            <button className="flex items-center gap-2 border border-current rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                <MessageSquare className="w-3.5 h-3.5" />
                                Talk to us
                            </button>

                            <button className="p-2 border border-current rounded-full">
                                <Menu className="w-4 h-4" />
                            </button>

                            {user && (
                                <div className="flex items-center gap-6">
                                    <span className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-3.5 h-3.5" />
                                        {user.name}
                                    </span>
                                    <button
                                        onClick={handleLogout}
                                        className="text-[10px] font-black uppercase tracking-widest bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                                    >
                                        <LogOut className="w-3.5 h-3.5" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2",
                            (isScrolled || !transparent) ? "text-primary" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b border-border p-4 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-5 text-primary">
                        <Link
                            href="/buy"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Buy
                        </Link>
                        <Link
                            href="/seller"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sell
                        </Link>
                        <Link
                            href="/saved"
                            className="text-base font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Heart className="w-4 h-4" /> Saved
                        </Link>
                        {user && (
                            <div className="pt-2 border-t border-border mt-2 space-y-2">
                                <div className="p-2 text-base font-medium flex items-center gap-2">
                                    <User className="w-4 h-4" /> {user.name}
                                </div>
                                <button
                                    onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                                    className="text-base font-medium bg-secondary text-secondary-foreground px-4 py-2 rounded-full w-full flex items-center justify-center gap-2"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}
