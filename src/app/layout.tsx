import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./_app";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Go Pikachu!!",
  description: "Frontend coding test for Balize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
