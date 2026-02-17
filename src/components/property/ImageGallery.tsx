"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Grid, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);
    const [direction, setDirection] = useState(0);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setDirection(1);
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setDirection(-1);
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    // Close lightbox on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setShowLightbox(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <div
                className="relative group rounded-[40px] overflow-hidden bg-secondary/30 aspect-video md:aspect-[21/9] cursor-zoom-in border border-border/50 shadow-2xl shadow-primary/5"
                onClick={() => setShowLightbox(true)}
            >
                <div className="absolute inset-0 z-0">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

                {/* Aesthetic Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="p-4 rounded-3xl bg-white/90 hover:bg-white text-primary shadow-xl backdrop-blur-md transition-colors border border-white/50"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="p-4 rounded-3xl bg-white/90 hover:bg-white text-primary shadow-xl backdrop-blur-md transition-colors border border-white/50"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* View Controls */}
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                        className="px-4 py-2 bg-white/90 text-primary text-[10px] font-black uppercase tracking-widest rounded-2xl backdrop-blur-md border border-white/50 shadow-xl flex items-center gap-2"
                        onClick={(e) => { e.stopPropagation(); setShowLightbox(true); }}
                    >
                        <Maximize2 className="w-3 h-3" />
                        Full Screen
                    </button>
                </div>

                {/* Thumbnails Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                        {images.map((img, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ y: -4 }}
                                onClick={(e) => { e.stopPropagation(); setDirection(idx > currentImage ? 1 : -1); setCurrentImage(idx); }}
                                className={cn(
                                    "w-20 h-14 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all shadow-lg",
                                    currentImage === idx ? "border-white scale-110" : "border-transparent opacity-50 hover:opacity-100"
                                )}
                            >
                                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                            </motion.button>
                        ))}
                    </div>

                    <div className="px-4 py-2 bg-black/40 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl backdrop-blur-md border border-white/10 hidden md:flex items-center gap-2 ml-4">
                        <Grid className="w-3 h-3" />
                        {currentImage + 1} / {images.length}
                    </div>
                </div>
            </div>

            {/* Immersive Lightbox Modal */}
            <AnimatePresence>
                {showLightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
                        onClick={() => setShowLightbox(false)}
                    >
                        {/* Lightbox Header */}
                        <div className="flex items-center justify-between p-8">
                            <div className="text-white space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Truva Immersive Gallery</p>
                                <h3 className="text-lg font-black uppercase tracking-tight">Luxury Property Preview</h3>
                            </div>
                            <button
                                onClick={() => setShowLightbox(false)}
                                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Large Image Container */}
                        <div className="flex-1 relative flex items-center justify-center overflow-hidden" onClick={e => e.stopPropagation()}>
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 200, damping: 25 },
                                        opacity: { duration: 0.3 }
                                    }}
                                    className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl rounded-2xl"
                                />
                            </AnimatePresence>

                            {/* Lightbox Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-8 p-6 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-8 p-6 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Lightbox Footer Thumbnails */}
                        <div className="p-12" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-center gap-4 overflow-x-auto no-scrollbar py-4 max-w-5xl mx-auto">
                                {images.map((img, idx) => (
                                    <motion.button
                                        key={idx}
                                        whileHover={{ y: -8, scale: 1.05 }}
                                        onClick={() => { setDirection(idx > currentImage ? 1 : -1); setCurrentImage(idx); }}
                                        className={cn(
                                            "w-28 h-20 rounded-[20px] overflow-hidden border-2 flex-shrink-0 transition-all",
                                            currentImage === idx ? "border-white" : "border-transparent opacity-30 hover:opacity-100"
                                        )}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
