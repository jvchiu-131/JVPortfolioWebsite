import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-screen overflow-x-hidden ">
            <Navbar />
            <main className="container flex items-center mx-auto max-w-screen flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 bg-[#0066FF] text-white">
              &copy; {new Date().getFullYear()} - Developed by JV Chiu
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
