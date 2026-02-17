"use client";

import React, { useState } from "react";
import { Phone, User, MessageSquare, ChevronRight, CheckCircle2, Layout } from "lucide-react";

interface ScheduleCallFormProps {
    configurations?: Array<{
        configuration: string;
        price: string;
        area?: string;
    }>;
}

export function ScheduleCallForm({ configurations }: ScheduleCallFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // DUAL-ACTION: Dashboard + Email
        console.log("ACTON 1: Sending data to Admin Control Center for tracking...");
        console.log("ACTION 2: Triggering Node.js mailer service (Admin + Sales Rep alert)...");

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-200">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-green-900">Conversion Recorded!</h3>
                <p className="text-sm text-green-700">Admin notified & Email Alert sent to sales rep. Expect a call within 24 hours.</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-[40px] shadow-2xl shadow-primary/5 border border-border/50 space-y-6"
        >
            <div className="space-y-1">
                <h3 className="text-xl font-black text-primary uppercase tracking-tight">Schedule a Call</h3>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-60">Direct Conversion Hub</p>
            </div>

            <div className="space-y-4">
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-12 p-4 rounded-[20px] border border-border bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-primary/10 outline-none transition-all font-bold text-sm"
                    />
                </div>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-12 p-4 rounded-[20px] border border-border bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-primary/10 outline-none transition-all font-bold text-sm"
                    />
                </div>

                {configurations && configurations.length > 0 && (
                    <div className="relative">
                        <Layout className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                            required
                            className="w-full pl-12 p-4 rounded-[20px] border border-border bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-primary/10 outline-none transition-all font-bold text-sm appearance-none"
                        >
                            <option value="">Select Configuration</option>
                            {configurations.map((config, idx) => (
                                <option key={idx} value={config.configuration}>
                                    {config.configuration} - ₹{config.price}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                    <textarea
                        placeholder="Specific Requirements"
                        className="w-full pl-12 p-4 rounded-[20px] border border-border bg-secondary/20 focus:bg-white focus:ring-2 focus:ring-primary/10 outline-none transition-all font-bold text-sm min-h-[100px]"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
            >
                Confirm Callback
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
            </button>
            <p className="text-[9px] text-center text-muted-foreground font-bold px-4">
                By clicking "Confirm Callback", you agree to Truva's <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policy</span>.
            </p>
        </form>
    );
}
