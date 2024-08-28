import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer,Header } from "@/components";
import { AuthProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dario Marzzucco",
  description: "My own Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header/>
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
