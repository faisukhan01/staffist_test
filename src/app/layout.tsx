import type { Metadata } from "next";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Staffist - AI-Powered Ethical Healthcare Staffing",
  description:
    "Connect with qualified healthcare professionals quickly and compliantly. Streamline your NHS and private healthcare staffing needs with AI-powered solutions.",
  keywords: [
    "Staffist",
    "Healthcare Staffing",
    "NHS Staffing",
    "AI Staffing",
    "Healthcare Recruitment",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${jakarta.variable} antialiased font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
