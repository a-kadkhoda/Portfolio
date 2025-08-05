import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../features/navbar/components/Navbar";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "portofolio",
  description: "aliakbar kadkhoda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="container mx-auto">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
