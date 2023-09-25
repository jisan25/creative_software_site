"use client";

// extenral package
import Link from "next/link";
import { useEffect, useState } from "react";

// components
import ItHero from "@/app/components/it-outsourcing/ItHero";

// all services data from local db corporate
import ServicesData from "@/app/db/Corporate";

// google font config
import { Nunito } from "next/font/google";
import About from "@/app/components/it-outsourcing/About";
import Advantages from "@/app/components/it-outsourcing/Advantages";
import Hiring from "@/app/components/it-outsourcing/Hiring";
import GrowBusiness from "@/app/components/it-outsourcing/GrowBusiness";
const nunito = Nunito({ subsets: ["cyrillic"] });

const ServiceDetailsPage = ({ params }) => {
  // state
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState({});

  // after page is loaded
  useEffect(() => {
    getService();
  }, []);

  // return service matched to route params
  const getService = () => {
    ServicesData.find((item) => {
      if (item.slug === params.slug) {
        setService(item);
      }
    });
    setLoading(false);
  };

  // shorten the text
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    <main id="main" className="container-xl container-fluid">
      <ItHero />
      <section id="services" className="services">
        {/* show a loader */}
        {loading && <h4 className="h4 text-center">Loading ....</h4>}
        {!loading && (
          <div className="container-fluid container-xl">
            {/* section header */}
            <header className="section-header">
              <p>{service.title} - category</p>
            </header>

            <div className="row gy-4">
              {/* service */}
              {service.id &&
                service.category.map((cat) => (
                  <div className="col-lg-4 col-md-6" key={cat.id}>
                    <div className={`${"service-box green"}`}>
                      <i className="icon bi bi-command"></i>
                      <h3 className={nunito.className}>{cat}</h3>

                      <Link href="/hiring" className="read-more">
                        <span>Get Started</span>{" "}
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}

              {/* end service */}
            </div>
          </div>
        )}
      </section>
      <About />
      <Advantages />
      <Hiring />
      <GrowBusiness />
    </main>
  );
};

export default ServiceDetailsPage;
