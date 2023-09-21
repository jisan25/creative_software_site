import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // ====== hero section ======

    <section id="hero" className="hero d-flex align-items-center">
      <div className="container-fluid container-xl">
        <div className="row">
          {/* hero content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>We offer modern solutions for growing your business</h1>
            <h2>
            We are Ready  Team of talented people  for design & Develop websites, Software & Apps.
            </h2>
            <div>
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center mr-5"
                >
                  <span>Explore The Platform</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                <Link
                  href="/schedule-demo"
                  className="font-bold scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Request A Demo</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="footer-newsletter col-lg-9 mt-2">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
                <div className="mt-2 news-letter-benifits">
                  <span>
                    <i class="bi bi-check-lg"></i> Free plan available
                  </span>{" "}
                  <span>
                    <i class="bi bi-check-lg"></i> Easy Setup
                  </span>{" "}
                  <span>
                    <i class="bi bi-check-lg"></i> No credit card required
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="col-lg-6 hero-img">
            <img src="/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    // end hero
  );
};

export default Hero;
