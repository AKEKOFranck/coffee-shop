import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "@/components/Navigation/navigation";
import Footer from "@/components/Footer/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "coffeBABY — Coffee, Pastries & Good Moments",
  description: "coffeBABY — Coffee, pâtisseries et beaux moments à Abidjan.",
  icons: {
    icon: "/logoCook.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}