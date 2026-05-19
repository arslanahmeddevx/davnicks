import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmbedWrapper from "@/components/EmbedWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grow a Garden Calculator",
  description: "Tools and Calculators for Grow a Garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <EmbedWrapper>
          <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
        </EmbedWrapper>
      </body>
    </html>
  );
}
