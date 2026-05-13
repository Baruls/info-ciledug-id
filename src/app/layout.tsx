import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Info Ciledug – Portal Informasi Lokal Ciledug",
  description:
    "Portal informasi lokal terpercaya untuk warga Ciledug. Temukan kabar terkini, kuliner favorit, dan eksplorasi lokasi menarik di sekitar Ciledug.",
  keywords: ["Ciledug", "info Ciledug", "berita Ciledug", "kuliner Ciledug", "lokasi Ciledug"],
  openGraph: {
    title: "Info Ciledug – Portal Informasi Lokal",
    description: "Kabar terkini, kuliner, dan eksplorasi Ciledug dalam satu halaman.",
    siteName: "Info Ciledug",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
