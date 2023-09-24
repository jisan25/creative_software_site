import React from "react";

// roboto google font configuration
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
});

const Resources = () => {
  return (
    <section className="resource__sec">
      <div className="row">
        {/* column */}
        <div className="col-lg-4 all-resources">
          {/* col heading */}
          <h2 className="mb-3 h4 font-bold">LEARN MORE</h2>
          {/* column content */}
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-asterisk"></i> All Resources
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-asterisk"></i> Documentation
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-pen-fill"></i> Blog
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-book-fill"></i> Case Studies
          </h4>
        </div>
        {/* column */}
        <div className="col-lg-4 all-resources">
          {/* column heading */}
          <h2 className="mb-3 h4 font-bold">LEARN MORE</h2>
          {/* column content */}
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-bounding-box"></i> Events
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-hypnotize"></i> Webinars
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-patch-question-fill"></i> FAQS
          </h4>
          <h4 className={`${"mb-3"} ${roboto.className}`}>
            <i className="bi bi-award-fill"></i> AWARDS AND RECOGNITION
          </h4>
        </div>
        {/* column */}
        <div className="col-lg-4 resource-col-middle d-flex align-items-center justify-content-center text-center">
          <div className="">
            <h4 className="mb-1 h6">
              24/7 support from Createive Software internal experts
            </h4>
            <a
              className="company-link"
              href="#"
              style={{
                color: "ghostwhite",
                display: "inline",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
            >
              Let's talk <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
