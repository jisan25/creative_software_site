// common components
import TopBar from "@/app/components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

// glbobal css
import "./globals.css";

// react slick carousel css

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * js vendor files (support js)
 */

// import "./assets/vendor/jquery/jquery.min";

// template main js file
// import "./assets/js/main";

import { Inter } from "next/font/google";
import WaChat from "./components/WaChat";

const inter = Inter({ subsets: ["latin"] });

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
