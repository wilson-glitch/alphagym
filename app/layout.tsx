import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Alpha Gym Kota Bharu — Gym Terbaru di Kota Bharu",
  description:
    "Peralatan baharu, berhawa dingin, dibuka setiap hari di tengah bandar Kota Bharu. Walk-in RM12. Tiada bayaran pendaftaran.",
  openGraph: {
    title: "Alpha Gym Kota Bharu",
    description:
      "Gym terbaru di Kota Bharu. Peralatan baharu, berhawa dingin, buka setiap hari.",
    locale: "ms_MY",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ms" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="bg-ink pb-16 font-sans text-body antialiased sm:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
