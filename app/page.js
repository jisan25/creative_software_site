"use client";
import PopUpAd from "./components/home/PopUpAd";
import About from "./components/home/About";
import Counts from "./components/home/Counts";
import Values from "./components/home/Values";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Services from "./components/home/Services";
import Pricing from "./components/home/Pricing";
import Faq from "./components/home/Faq";
import Portfolio from "./components/home/Portfolio";
import Testimonials from "./components/home/Testimonials";
import Team from "./components/home/Team";
import Clients from "./components/home/Clients";
import Blog from "./components/home/Blog";
import Contact from "./components/home/Contact";
import LevelUp from "./components/home/LevelUp";
import siteInfo from "./db/siteInfo";
import { useEffect } from "react";

export default function Home() {
  // after page is loaded set page title dynamically from local db name siteinfo
  useEffect(() => {
    document.title = siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <>
      <PopUpAd />
      <Hero />
      <main id="main">
        <About />
        <Values />
        <Counts />
        <Features />
        <Services />
        <Pricing />
        <Portfolio />
        <Testimonials />
        <Team />
        <Clients />
        <Blog />
        <Faq />
        <Contact />
        <LevelUp />
      </main>
    </>
  );
}
