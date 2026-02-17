"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

interface Ripple {
    id: number;
    x: number;
    y: number;
}

export function FluidCursor() {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const [isPointer, setIsPointer] = useState(false);
    const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            cursorRef.current = { x: e.clientX, y: e.clientY };

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isClickable =
                target.onclick ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);

            // Spawn movement ripple occasionally
            if (Math.random() > 0.95) {
                spawnRipple(e.clientX, e.clientY);
            }
        };

        const handleClick = (e: MouseEvent) => {
            spawnRipple(e.clientX, e.clientY);
            // Spawn extra ripples on click for "splash" effect
            setTimeout(() => spawnRipple(e.clientX, e.clientY), 100);
            setTimeout(() => spawnRipple(e.clientX, e.clientY), 200);
        };

        const spawnRipple = (x: number, y: number) => {
            const id = Date.now() + Math.random();
            setRipples((prev) => [...prev.slice(-10), { id, x, y }]);
            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, 1000);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* The core "water blob" cursor */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isPointer ? 2.5 : 1,
                    backgroundColor: isPointer ? "rgba(212, 175, 55, 0.15)" : "rgba(255, 255, 255, 0.3)",
                }}
                className="w-8 h-8 rounded-full blur-[1px] border border-white/30 backdrop-blur-[2px] shadow-inner shadow-white/50"
            />

            {/* Trailing Ripples */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{
                            x: ripple.x,
                            y: ripple.y,
                            scale: 0,
                            opacity: 0.5,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: 4,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut"
                        }}
                        className="absolute w-12 h-12 rounded-full border border-white/20"
                    />
                ))}
            </AnimatePresence>

            {/* Liquid Dot center */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
            />
        </div>
    );
}
