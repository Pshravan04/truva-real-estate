"use client";

import React, { useState, useEffect } from "react";
import { IndianRupee, Calendar, Percent, TrendingUp, RotateCcw, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

interface EMICalculatorProps {
    initialAmount?: number;
    className?: string;
}


export function EMICalculator({ initialAmount = 5000000, className }: EMICalculatorProps) {
    const [amountStr, setAmountStr] = useState(initialAmount.toString());
    const [rateStr, setRateStr] = useState("8.5");
    const [tenureStr, setTenureStr] = useState("20");

    const [emi, setEmi] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateEMI = () => {
        const amount = parseFloat(amountStr) || 0;
        const rate = parseFloat(rateStr) || 0;
        const tenure = parseFloat(tenureStr) || 0;

        if (amount === 0 || rate === 0 || tenure === 0) {
            setEmi(0);
            setTotalPayable(0);
            setTotalInterest(0);
            return;
        }

        const r = rate / 12 / 100;
        const n = tenure * 12;
        const p = amount;

        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalAmount = emiValue * n;

        setEmi(Math.round(emiValue));
        setTotalPayable(Math.round(totalAmount));
        setTotalInterest(Math.round(totalAmount - p));
    };

    useEffect(() => {
        calculateEMI();
    }, [amountStr, rateStr, tenureStr]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatDisplay = (val: string, type: "amount" | "rate" | "tenure") => {
        if (type === "amount") {
            const num = parseFloat(val) || 0;
            return num.toLocaleString('en-IN');
        }
        return val;
    };

    return (
        <div className={cn("bg-white rounded-[48px] border border-border/50 shadow-2xl shadow-primary/5 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto", className)}>
            {/* Input Interface (iPhone Style) */}
            <div className="bg-[#f2f2f7] p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center gap-10">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-[#FF6F38]/10 text-[#FF6F38] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FF6F38]/20">
                        <Calculator className="w-3.5 h-3.5" /> Input Details
                    </div>
                    <h2 className="text-3xl font-black text-primary tracking-tight">Financial Input</h2>
                </div>

                <div className="space-y-6">
                    {/* Amount Input */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 hover:border-[#FF6F38]/30 transition-all">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-2">Loan Amount (₹)</p>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                value={amountStr}
                                onChange={(e) => setAmountStr(e.target.value)}
                                className="w-full bg-transparent text-4xl font-black text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="0"
                            />
                            <IndianRupee className="w-8 h-8 text-primary/10" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Rate Input */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 hover:border-[#FF6F38]/30 transition-all">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-2">Interest Rate (%)</p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    step="0.1"
                                    value={rateStr}
                                    onChange={(e) => setRateStr(e.target.value)}
                                    className="w-full bg-transparent text-2xl font-black text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="8.5"
                                />
                                <Percent className="w-5 h-5 text-primary/10" />
                            </div>
                        </div>

                        {/* Tenure Input */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 hover:border-[#FF6F38]/30 transition-all">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-2">Tenure (Years)</p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={tenureStr}
                                    onChange={(e) => setTenureStr(e.target.value)}
                                    className="w-full bg-transparent text-2xl font-black text-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="20"
                                />
                                <Calendar className="w-5 h-5 text-primary/10" />
                            </div>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={() => {
                        setAmountStr("5000000");
                        setRateStr("8.5");
                        setTenureStr("20");
                    }}
                    className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 hover:text-[#FF6F38] transition-colors"
                >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset to Defaults
                </button>
            </div>


            {/* Premium Results Interface */}
            <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-between bg-white relative">
                <div className="absolute top-0 right-0 p-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6F38]/5 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-[#FF6F38]" />
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6F38]">Estimated Monthly Payment</p>
                        <h2 className="text-6xl md:text-7xl font-black text-primary tracking-tighter leading-none">
                            {formatCurrency(emi)}
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-black/[0.03]">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Total Interest</p>
                            <p className="text-2xl font-black text-primary">₹{(totalInterest / 100000).toFixed(2)} Lac</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Total Amount</p>
                            <p className="text-2xl font-black text-primary">₹{(totalPayable / 10000000).toFixed(2)} Cr</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 p-8 rounded-[32px] bg-black text-white space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF6F38] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38]">Pro Tip</span>
                    </div>
                    <p className="text-base font-bold leading-relaxed opacity-80">
                        Maximize your savings by choosing shorter tenures. Every 1% reduction in interest rate could save you lakhs.
                    </p>
                    <button className="w-full py-4 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-[#FF6F38] hover:text-white transition-all">
                        Talk to Finance Expert
                    </button>
                </div>
            </div>
        </div>
    );
}
