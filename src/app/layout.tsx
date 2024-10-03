import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "Fancy Components",
  description: "Ready to use, fancy and fun components to make the web fun again. Free & Open Source.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-overusedGrotesk min-h-screen bg-stone-200 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
