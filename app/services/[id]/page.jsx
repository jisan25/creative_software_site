"use client";
import ServicesData from "@/app/db/Corporate";
import { useEffect, useState } from "react";

import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });

const ServiceDetailsPage = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState({});
  useEffect(() => {
    getService();
  }, []);
  const getService = () => {
    ServicesData.find((item) => {
      if (item.slug === params.id) {
        setService(item);
      }
    });
    setLoading(false);
  };

  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    <main id="main">
      <section id="services" className="services">
        {loading && <h4 className="h4 text-center">Loading ....</h4>}
        {!loading && (
          <div className="container-fluid container-xl">
            <header className="section-header">
              <h2>Service</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              {/* service */}
              {service.id && (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className={`${"service-box"} ${service.color}`}>
                    <i className={`${service.icon} ${"icon"}`}></i>
                    <h3 className={nunito.className}>{service.title}</h3>
                    <p>{truncateParagraph(service.description, 300)}</p>
                    <a href="#" className="read-more">
                      <span>Read More</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              )}

              {/* end service */}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ServiceDetailsPage;
