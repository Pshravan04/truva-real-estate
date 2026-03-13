"use client";

import React, { useState, useEffect } from "react";
import { IndianRupee, Calendar, Percent, TrendingUp, ChevronRight, Delete, RotateCcw, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

interface EMICalculatorProps {
    initialAmount?: number;
    className?: string;
}

type ActiveField = "amount" | "rate" | "tenure";

export function EMICalculator({ initialAmount = 5000000, className }: EMICalculatorProps) {
    const [activeField, setActiveField] = useState<ActiveField>("amount");
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

    const handleKeyPress = (key: string) => {
        let currentVal = activeField === "amount" ? amountStr : activeField === "rate" ? rateStr : tenureStr;
        let setVal = activeField === "amount" ? setAmountStr : activeField === "rate" ? setRateStr : setTenureStr;

        if (key === "delete") {
            setVal(currentVal.slice(0, -1) || "0");
        } else if (key === ".") {
            if (!currentVal.includes(".")) {
                setVal(currentVal + ".");
            }
        } else {
            if (currentVal === "0") {
                setVal(key);
            } else {
                setVal(currentVal + key);
            }
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const formatDisplay = (val: string, type: ActiveField) => {
        if (type === "amount") {
            const num = parseFloat(val) || 0;
            return num.toLocaleString('en-IN');
        }
        return val;
    };

    const KeyButton = ({ value, label, className: btnClass, variant = "gray" }: { value: string, label?: React.ReactNode, className?: string, variant?: "gray" | "dark" | "orange" }) => (
        <button
            onClick={() => handleKeyPress(value)}
            className={cn(
                "w-full aspect-square rounded-full flex items-center justify-center text-2xl font-medium transition-all active:scale-90 active:opacity-70",
                variant === "gray" && "bg-[#ebebeb] text-black hover:bg-[#d4d4d4]",
                variant === "dark" && "bg-[#333333] text-white hover:bg-[#4d4d4d]",
                variant === "orange" && "bg-[#FF6F38] text-white hover:opacity-90 shadow-lg shadow-[#FF6F38]/20",
                btnClass
            )}
        >
            {label || value}
        </button>
    );

    return (
        <div className={cn("bg-white rounded-[48px] border border-border/50 shadow-2xl shadow-primary/5 overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto", className)}>
            {/* Calculator Interface (iOS Style) */}
            <div className="bg-[#f2f2f7] p-8 lg:w-1/2 flex flex-col gap-8">
                {/* Visual Display */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 space-y-4">
                    <div
                        onClick={() => setActiveField("amount")}
                        className={cn("p-4 rounded-2xl cursor-pointer transition-all border-2", activeField === "amount" ? "border-[#FF6F38] bg-[#FF6F38]/5" : "border-transparent bg-secondary/30")}
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-1">Loan Amount</p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-black text-primary">₹{formatDisplay(amountStr, "amount")}</span>
                            <IndianRupee className="w-5 h-5 text-primary/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div
                            onClick={() => setActiveField("rate")}
                            className={cn("p-4 rounded-2xl cursor-pointer transition-all border-2", activeField === "rate" ? "border-[#FF6F38] bg-[#FF6F38]/5" : "border-transparent bg-secondary/30")}
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-1">Interest</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-black text-primary">{rateStr}%</span>
                                <Percent className="w-4 h-4 text-primary/20" />
                            </div>
                        </div>
                        <div
                            onClick={() => setActiveField("tenure")}
                            className={cn("p-4 rounded-2xl cursor-pointer transition-all border-2", activeField === "tenure" ? "border-[#FF6F38] bg-[#FF6F38]/5" : "border-transparent bg-secondary/30")}
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#FF6F38] mb-1">Tenure</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-black text-primary">{tenureStr} <span className="text-xs">Yrs</span></span>
                                <Calendar className="w-4 h-4 text-primary/20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 gap-4 max-w-[320px] mx-auto w-full">
                    {/* Row 1 */}
                    <KeyButton value="7" />
                    <KeyButton value="8" />
                    <KeyButton value="9" />
                    <button
                        onClick={() => {
                            setAmountStr("0");
                            setRateStr("0");
                            setTenureStr("0");
                        }}
                        className="w-full aspect-square rounded-full flex items-center justify-center bg-[#d1d1d6] text-black text-sm font-black uppercase tracking-tight hover:bg-[#c7c7cc] active:scale-95"
                    >
                        AC
                    </button>

                    {/* Row 2 */}
                    <KeyButton value="4" />
                    <KeyButton value="5" />
                    <KeyButton value="6" />
                    <KeyButton value="delete" label={<Delete className="w-6 h-6" />} variant="dark" />

                    {/* Row 3 */}
                    <KeyButton value="1" />
                    <KeyButton value="2" />
                    <KeyButton value="3" />
                    <button
                        onClick={() => {
                            const sequence: ActiveField[] = ["amount", "rate", "tenure"];
                            const next = sequence[(sequence.indexOf(activeField) + 1) % 3];
                            setActiveField(next);
                        }}
                        className="w-full aspect-square rounded-full flex items-center justify-center bg-[#FF6F38] text-white shadow-lg shadow-[#FF6F38]/20 hover:opacity-90 active:scale-95"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Row 4 */}
                    <div className="col-span-2">
                        <button
                            onClick={() => handleKeyPress("0")}
                            className="w-full h-full rounded-full bg-[#ebebeb] text-black text-2xl font-medium flex items-center justify-start px-8 hover:bg-[#d4d4d4] active:scale-95"
                        >
                            0
                        </button>
                    </div>
                    <KeyButton value="." />
                    <button
                        className="w-full aspect-square rounded-full flex items-center justify-center bg-black text-white hover:opacity-90 active:scale-95"
                    >
                        <Calculator className="w-6 h-6 text-[#FF6F38]" />
                    </button>
                </div>
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
