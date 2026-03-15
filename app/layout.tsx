import { Montserrat, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AIChatButton from "@/components/ui/AIChatButton";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <AIChatButton />
      </body>
    </html>
  );
}
