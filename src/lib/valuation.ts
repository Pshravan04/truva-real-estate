export interface ValuationInput {
    societyId: string;
    carpetArea: number;
    floor: number;
    bhk: number;
}

// Simple valuation engine based on area and floor premiums
export function calculateValuation(input: ValuationInput): number {
    const baseRatePerSqFt = 20000; // Base rate for Mumbai

    // Society premiums (mock data)
    const societyPremiums: Record<string, number> = {
        's1': 1.2, // Ekta Tripolis
        's2': 1.15, // L&T Emerald Isle
        's3': 1.4, // Oberoi Esquire
        's4': 1.1, // Lodha Aurum Grande
        's5': 1.35 // Oberoi Garden City
    };

    const premium = societyPremiums[input.societyId] || 1.0;

    // Floor rise: 1% increase per 5 floors
    const floorRise = 1 + (Math.floor(input.floor / 5) * 0.01);

    // BHK premium (more BHK = premium)
    const bhkPremium = 1 + (input.bhk * 0.02);

    const totalValuation = input.carpetArea * baseRatePerSqFt * premium * floorRise * bhkPremium;

    return Math.round(totalValuation / 100000) * 100000; // Round to nearest lakh
}
