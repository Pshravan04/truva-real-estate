import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { FluidCursor } from "@/components/layout/FluidCursor";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

import { DataProvider } from "@/context/DataContext";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Truva - Buy & Sell Flats in Mumbai",
  description: "Radically delightful home buying experience. Fully renovated homes in the finest societies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased text-foreground check-pattern cursor-none-on-desktop`} suppressHydrationWarning>
        <AuthProvider>
          <DataProvider>
            <Navbar />
            <FluidCursor />
            {children}
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
