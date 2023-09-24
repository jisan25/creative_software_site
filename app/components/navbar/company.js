import Link from "next/link";
// site information from local db siteInfo
import siteInfo from "@/app/db/siteInfo";

const Company = () => {
  // shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // company
    <section className="company_section">
      <div className="d-flex justify-content-around gap-4 align-items-start">
        {/* heading */}
        <h2 className="title">about creative software</h2>

        {/* customer care */}
        <div className="">
          <h4 className="font-bold h5">
            {" "}
            <span
              style={{
                color: "#4154F1",
              }}
            >
              <i style={{ fontSize: "25px" }} className="bi bi-headset"></i>
            </span>{" "}
            +88 9696 66 88 14
          </h4>
        </div>
      </div>
      <div className="row mb-3">
        {/* company about column */}
        <div className="company-col-1 col-lg-5">
          <p>{truncateParagraph(siteInfo.site_description, 240)}</p>
        </div>
        {/* links column */}
        <div className="company-col-2 col-lg-3 d-flex flex-column align-items-center">
          <li>
            <Link href="/career">
              <i className="bi bi-laptop"></i> Careers
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="bi bi-headset"></i> Contact Us
            </Link>
          </li>

          <li>
            <Link href="/become-a-partner">
              <i className="bi bi-person-fill-add"></i> Become a Partner
            </Link>
          </li>
        </div>
        {/* follow us column */}
        <div className="company-col-3 col-lg-4 d-flex flex-column  align-items-center mt-4">
          <div className="navbar-social-links">
            <div className="text-center h4">Follow Us On</div>
            <div className="d-flex gap-2 justify-content-center">
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
        </div>
      </div>
    </section>
  );
};

export default Company;
