import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
