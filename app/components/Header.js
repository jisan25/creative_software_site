"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// get site info from loacl db
import siteInfo from "../db/siteInfo";
// navbar components
import Products from "./navbar/products";
import Services from "./navbar/services";
import Company from "./navbar/company";
import Support from "./navbar/support";
import Resources from "./navbar/resources";

const Header = () => {
  // show nvabar background based on state
  const [isVisible, setIsVisible] = useState(false);

  // when user scroll the page
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    // show button if scroll
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      // hide button if user in on the top of the page
      setIsVisible(false);
    }
  };

  // use effect hook for check the page is scroll & listen to it
  useEffect(() => {
    // if scroll the page listen to scroll trigger
    window.addEventListener("scroll", listenToScroll);
    // remove trigger if user is on the top of the page
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    // index header section
    <header
      id="header"
      className={`${"header fixed-top"} ${!isVisible && "mt-4 pb-5"} ${
        isVisible && "header-scrolled"
      }`}
    >
      {/* navbar container */}
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        {/* logo */}
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/img/logo.png" alt="" />
          <span>{siteInfo.site_name}</span>
        </Link>

        {/* menu */}
        <nav id="navbar" className="navbar">
          <ul>
            {/* company */}
            <li className="dropdown company_menu">
              <a href="#">
                <span>Company</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Company />
              </ul>
            </li>
            {/* services */}
            <li className="dropdown services_menu">
              <a href="#">
                <span>Services</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Services />
              </ul>
            </li>
            {/* product */}
            <li className="dropdown products_menu">
              <a href="/product">
                <span>Products</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                {/* product section */}

                <Products />
              </ul>
            </li>
            {/* resources */}
            <li className="dropdown resources_menu">
              <a href="#">
                <span>Resources</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Resources />
              </ul>
            </li>

            {/* support */}

            <li className="dropdown support_menu">
              <a href="#">
                <span>Support</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <Support />
              </ul>
            </li>

            <li>
              <Link
                className="btn btn-light login_btn icon_style"
                href="/login"
              >
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-primary shedule_btn icon_style"
                href="/schedule-demo"
              >
                <i className="bi bi-calendar3"></i> Shedule A Demo
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
