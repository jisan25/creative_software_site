// common components
import TopBar from "@/app/components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import WaChat from "./components/WaChat";

// glbobal css
import "./globals.css";

// react slick carousel css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// google font configuration
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// home page metadata - title & description
export const metadata = {
  title: process.env.SITE_NAME + " - " + process.env.SITE_TITLE,
  description: process.env.SITE_TITLE,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Header />
        {children}
        <GoToTop />
        <WaChat />
        <Footer />
      </body>
    </html>
  );
}
