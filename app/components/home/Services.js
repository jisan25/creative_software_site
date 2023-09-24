// get service data from local db Corportae
import ServicesData from "../../db/Corporate";
import { useState } from "react";

// google nuito font config
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });

const Services = () => {
  // get services data in service state varible
  const [services, setServices] = useState(ServicesData);

  // to shorten the paragraph
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };

  return (
    // services section
    <section id="services" className="services">
      <div className="container-fluid container-xl">
        {/* service heading */}
        <header className="section-header">
          <h2>Services</h2>
          <p>Veritatis et dolores facere numquam et praesentium</p>
        </header>

        <div className="row gy-4">
          {/* service */}
          {services.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className={`${"service-box"} ${item.color}`}>
                <i className={`${item.icon} ${"icon"}`}></i>
                <h3 className={nunito.className}>{item.title}</h3>
                <p>{truncateParagraph(item.description, 300)}</p>
                <a href="#" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}

          {/* end service */}
        </div>
      </div>
    </section>
  );
};

export default Services;
