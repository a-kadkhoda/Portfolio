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
          <main className="min-h-[calc(100vh-150px)] min-w-full">
            <div className="container mx-auto">
              <Navbar />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
