import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import TopNavbar from "@/components/topbar";
import { ThemeSwitcher } from "@/components/theme-switcher";


export const metadata: Metadata = {
  title: 'Mercurio Noticias',
  description: 'Página de noticias de la región Piura'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="font-Sans">
          <ThemeProvider             
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <TopNavbar />
              <Navbar />
              <ThemeSwitcher />

          {children}

          </ThemeProvider>


          </body>
    </html>
  );
}
