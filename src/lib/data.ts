// Adding mock submissions and enhancing data for Admin Dashboard
import { Property, Society, Submission, Inquiry } from "../types";

export const societies: Society[] = [
    {
        id: "s1",
        name: "Ekta Tripolis",
        area: "Goregaon West",
        city: "Mumbai",
        environmentalScores: { light: 8, noise: 7, air: 6 }
    },
    {
        id: "s2",
        name: "L&T Emerald Isle",
        area: "Powai",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 8, air: 7 }
    },
    {
        id: "s3",
        name: "Oberoi Esquire",
        area: "Goregaon East",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 9, air: 8 }
    },
    {
        id: "s4",
        name: "Lodha Aurum Grande",
        area: "Kanjurmarg",
        city: "Mumbai",
        environmentalScores: { light: 7, noise: 6, air: 5 }
    },
    {
        id: "s5",
        name: "Oberoi Garden City",
        area: "Goregaon East",
        city: "Mumbai",
        environmentalScores: { light: 9, noise: 8, air: 8 }
    }
];

export const submissions: Submission[] = [];

export const inquiries: Inquiry[] = [];

export const properties: Property[] = [];
