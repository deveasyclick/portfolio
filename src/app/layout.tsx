import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import ThemeProvider from "@/components/portfolio/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufadeniyi.dev"),
  title: "Yusuf Adeniyi — Product Engineer",
  description:
    "Senior full-stack engineer building reliable products across backend architecture, payments, and the systems behind a great user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script
          id="portfolio-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(()=>{let t;try{t=localStorage.getItem('portfolio-theme')}catch{}const theme=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
