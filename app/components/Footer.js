import Link from "next/link";
// site information from local db siteinfo
import siteInfo from "../db/siteInfo";

const Footer = () => {
  return (
    // footer section
    <footer id="footer" className="footer">
      {/* footer part */}
      <div className="footer-top">
        <div className="container-xl container-fluid">
          <div className="row gy-4 justify-content-between">
            {/* footer col 1 -> logo, description & social  */}
            <div className="col-lg-6 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="/img/logo.png" alt="" />
                <span>{process.env.SITE_NAME}</span>
              </a>
              <p>{siteInfo.site_description}</p>
            </div>
            {/* footer col 2 */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            {/* footer col 3 */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            {/* footer col 4 */}
            <div className="col-lg-2 footer-links">
              <h4>Support</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Community</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#">Training</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#">Ticket</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer credit */}
      <div className="container-fluid container-xl">
        <div className="copyright">
          <div className="d-flex justify-content-between align-items-center">
            {/* credit - col */}
            <div>
              &copy; 2015-{new Date().getFullYear()}{" "}
              <strong>
                {/* <span>{process.env.SITE_NAME}</span>*/}
                <a
                  href="https://www.creativesoftware.com.bd"
                  speechify-initial-font-family="Roboto, sans-serif"
                  speechify-initial-font-size="16px"
                >
                  Creative Software.&nbsp;
                </a>
              </strong>
              All Rights Reserved.
            </div>
            {/* credit - col */}
            <div className="social-links d-flex align-items-center justify-content-start gap-3">
              <div style={{ marginTop: "-5px" }}>Follow Us on</div>
              <div className="d-flex gap-3">
                <a href="#" className="youtube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            {/* credit - col */}
            <div className="footer_page">
              <Link
                href="#"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Data Policy
              </Link>
              <Link
                href="/privacy"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Privacy Policy
              </Link>
              <Link
                href="/terms"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Terms Of Use
              </Link>

              <Link
                href="/return"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Return and Refund Policy
              </Link>
              <Link
                href="/sitemap"
                speechify-initial-font-family="Roboto, sans-serif"
                speechify-initial-font-size="16px"
              >
                <span className="font-bold">·</span> Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
