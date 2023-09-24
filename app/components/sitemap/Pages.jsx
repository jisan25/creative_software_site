import Link from "next/link";

const Pages = () => {
  return (
    // sitemap pages
    <div className="tab-content mt-3" id="myTabContent">
      {/* page */}
      <div
        className="tab-pane fade show active"
        id="creative-software"
        role="tabpanel"
      >
        <ul className="sitemap-pages">
          <li>
            <Link href={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/schedule-demo"}>Schedule A Demo</Link>
          </li>
          <li>
            <Link href={"/data-policy"}>Data Policy</Link>
          </li>
          <li>
            <Link href={"/privacy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/terms"}>Terms of Use</Link>
          </li>
          <li>
            <Link href={"/return"}>Return and Refund Policy</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div className="tab-pane fade" id="services" role="tabpanel">
        <ul className="sitemap-pages">
          <li>
            <Link href={"#"}>All Services</Link>
          </li>
          <li>
            <Link href={"/services/it-outsourcing"}>IT Outsourcing</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div
        className="tab-pane fade"
        id="products"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link href={"/product"}>All Products</Link>
          </li>
          <li>
            <Link href={"/product/point-of-sales-software"}>
              Point of Sales Software
            </Link>
          </li>
          <li>
            <Link href={"/product/restaurant-management-software"}>
              Restaurant Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/freight-forwarding-software"}>
              Freight Forwarding Software
            </Link>
          </li>
          <li>
            <Link href={"/product/hospital-management-software"}>
              Hospital Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/pharmacy-management-software"}>
              Pharmacy Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/parking-management-software"}>
              Parking Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/courier-management-software"}>
              Courier Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/prescription-management-system"}>
              Prescription Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/micro-credit-management-software"}>
              Micro Credit Management Software
            </Link>
          </li>
          <li>
            <Link href={"/product/diagnostic-management-system"}>
              Diagnostic Management System
            </Link>
          </li>
          <li>
            <Link href={"/product/enterprise-resource-planning-erp"}>
              Enterprise Resource Planning
            </Link>
          </li>
          <li>
            <Link href={"/product/customer-relationship-management"}>
              Customer Relationship Management
            </Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div
        className="tab-pane fade"
        id="career"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          <li>
            <Link href={"/join-team"}>Join our team</Link>
          </li>
          <li>
            <Link href={"/become-a-partner"}>Become a partner</Link>
          </li>
        </ul>
      </div>
      {/* page */}
      <div
        className="tab-pane fade"
        id="resources"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link href={"#"}>All Resources</Link>
          </li>
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
          <li>
            <Link href={"#"}>Case Studies</Link>
          </li>
          <li>
            <Link href={"#"}>Events</Link>
          </li>
          <li>
            <Link href={"#"}>Webinars</Link>
          </li>
          <li>
            <Link href={"#"}>FAQS</Link>
          </li>
          <li>
            <Link href={"#"}>AWARDS AND RECOGNITION</Link>
          </li>
        </ul>
      </div>
      <div
        className="tab-pane fade"
        id="support"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <ul className="sitemap-pages">
          <li>
            <Link href={"#"}>Community</Link>
          </li>
          <li>
            <Link href={"#"}>Knowledge Base</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Training</Link>
          </li>
          <li>
            <Link href={"#"}>Ticket</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pages;
