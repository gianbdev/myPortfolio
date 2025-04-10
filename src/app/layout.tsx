
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio | Backend Developer",
  description: "Desarrollador backend especializado en Laravel y Spring Boot",
  keywords: ["backend", "developer", "laravel", "spring boot", "portfolio"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`antialiased bg-background text-foreground`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-140px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}