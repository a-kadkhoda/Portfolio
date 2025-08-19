import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../features/navbar/components/Navbar";
import Providers from "./Providers";
import Footer from "@/features/footer/components/Footer";

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
      <body className="size-full">
        <section className=" size-full overflow-y-auto overflow-x-hidden relative">
          <Providers>
            <div className=" 2xl:w-[calc(100%-520px)] xl:w-[calc(100%-260px)] mx-auto">
              <Navbar />
              <main className=" min-h-[calc(100svh-150px)] py-20 ">
                {children}
              </main>
              <Footer />
            </div>
            <div className="w-full h-[90px] bg-[#29292C] absolute bottom-0 -z-10 rounded-t-2xl" />
          </Providers>
        </section>
      </body>
    </html>
  );
}
