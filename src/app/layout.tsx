import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Manrope } from 'next/font/google';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
 title: "puff and plug",
 description: "E-commmmerce store for all your needs",
 icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const fontHeading = Manrope({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-heading',
});

const fontBody = Manrope({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-body',
});

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode; }>) {
 return (
  <html lang="en" className={`${GeistSans.variable}`}>
   <body className={cn(
    'antialiased',
    fontHeading.variable,
    fontBody.variable
   )}>
    <Header />
    <TRPCReactProvider>{children}</TRPCReactProvider>
    <Toaster />
    <Footer />
   </body>
  </html>
 );
}
