import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import { primaryFont } from "./ui/fonts";

const font = Orbitron({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Andreas Freiburg",
  description: "Personal website for Andreas Freiburg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} antialiased bg-primary`}>
        <div className="flex h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
