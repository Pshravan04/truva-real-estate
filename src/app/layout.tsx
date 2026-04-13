import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Jangid Brothers | Premium Real Estate Discovery",
  description: "Experience radically delightful real estate with Jangid Brothers. Transparent, verified, and premium property listings.",
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
        <Analytics />
      </body>
    </html>
  );
}
