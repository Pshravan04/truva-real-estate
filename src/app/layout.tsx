import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} font-sans antialiased text-foreground check-pattern`} suppressHydrationWarning>
        <AuthProvider>
          <DataProvider>
            <Navbar />
            {children}
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
