import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Birds",
  description: "A Bird app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} antialiased data-scroll-behavior="smooth"`}>
        {children}
      </body>
    </html>
  );
}
