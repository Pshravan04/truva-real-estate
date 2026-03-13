"use client";

import React, { useState, useEffect } from "react";
import { IndianRupee, Calendar, Percent, TrendingUp, Calculator } from "lucide-react";

interface EMICalculatorProps {
    initialAmount?: number;
    className?: string;
}

export function EMICalculator({ initialAmount = 5000000, className }: EMICalculatorProps) {
    const [loanAmount, setLoanAmount] = useState(initialAmount);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [emi, setEmi] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const p = loanAmount;

        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalAmount = emiValue * n;

        setEmi(Math.round(emiValue));
        setTotalPayable(Math.round(totalAmount));
        setTotalInterest(Math.round(totalAmount - p));
    };

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interestRate, tenure]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatValue = (amount: number) => {
        if (amount >= 10000000) return (amount / 10000000).toFixed(2) + " Cr";
        if (amount >= 100000) return (amount / 100000).toFixed(2) + " L";
        return amount.toLocaleString('en-IN');
    };

    return (
        <div className={`bg-white p-8 md:p-12 rounded-[40px] border border-border/50 shadow-2xl shadow-primary/5 ${className}`}>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16">
                {/* Inputs */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                <IndianRupee className="w-4 h-4 text-[#FF6F38]" /> Loan Amount
                            </label>
                            <span className="text-sm font-black text-primary">{formatValue(loanAmount)}</span>
                        </div>
                        <input
                            type="range"
                            min="100000"
                            max="500000000"
                            step="100000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-[#FF6F38]"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground/40">
                            <span>1 L</span>
                            <span>50 Cr</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                <Percent className="w-4 h-4 text-[#FF6F38]" /> Interest Rate
                            </label>
                            <span className="text-sm font-black text-primary">{interestRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="5"
                            max="20"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-[#FF6F38]"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground/40">
                            <span>5%</span>
                            <span>20%</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <label className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#FF6F38]" /> Tenure (Years)
                            </label>
                            <span className="text-sm font-black text-primary">{tenure} Yrs</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="30"
                            step="1"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                            className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-[#FF6F38]"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground/40">
                            <span>1 Yr</span>
                            <span>30 Yrs</span>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-[#FAFAFA] md:p-10 p-6 rounded-[32px] border border-border/50 flex flex-col justify-center gap-10">
                    <div className="space-y-2 text-center lg:text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6F38]">Monthly Installment</p>
                        <h3 className="text-5xl md:text-6xl font-black text-primary tracking-tighter">
                            {formatCurrency(emi)}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-black/[0.03]">
                        <div className="space-y-1">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Total Interest</p>
                            <p className="text-xl font-black text-primary">{formatValue(totalInterest)}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Total Payable</p>
                            <p className="text-xl font-black text-primary">{formatValue(totalPayable)}</p>
                        </div>
                    </div>

                    <div className="mt-4 p-5 bg-white rounded-2xl border border-border/40 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF8F6] flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-[#FF6F38]" />
                        </div>
                        <p className="text-[11px] font-bold text-muted-foreground leading-snug">
                            Get pre-approved in under 24 hours with our banking partners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
