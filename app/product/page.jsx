// get all products data from local db
import { ProductsData } from "@/app/db/Corporate";

import Link from "next/link";

// google font congig

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });

export default function PortFolioPage() {
  // shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // All products section
    <section id="services" className="services">
      <div className="container-fluid container-xl">
        {/* section header */}
        <header className="section-header">
          <h2>All Products</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </header>

        <div className="row gy-4">
          {/* products */}
          {ProductsData.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className={`${"service-box"} ${"purple"}`}>
                <i className={`${item.icon} ${"icon"}`}></i>
                <h3 className={nunito.className}>{item.title}</h3>
                <p>{truncateParagraph(item.description, 300)}</p>
                {/* cta - read more */}
                <Link href={"/product/" + item.slug} className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}

          {/* end service */}
        </div>
      </div>
    </section>
  );
}
