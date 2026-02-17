import Link from "next/link";
import { Heart, MapPin, Bed, Bath, Square, Shield } from "lucide-react";
import { Property } from "@/types";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Link href={`/properties/${property.slug}`} className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                    <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                    </button>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        Fully Renovated
                    </span>
                    {property.reraNumber && (
                        <span className="bg-green-600/90 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                            <Shield className="w-3 h-3" /> RERA
                        </span>
                    )}
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">{property.title}</h3>
                        <div className="flex items-center text-primary/80 font-bold text-sm mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {property.location.area}, {property.location.city}
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg text-primary">₹{(property.price / 10000000).toFixed(2)} Cr</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border text-sm text-primary font-bold">
                    <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.bhk} BHK</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.stats.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{property.stats.areaSqFt} sqft</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
