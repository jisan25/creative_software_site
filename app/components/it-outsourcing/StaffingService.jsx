// get all services data from local db
import ServicesData from "@/app/db/Corporate";

// google nuito font config
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["cyrillic"] });
import Link from "next/link";
const About = () => {
  return (
    <section id="services" className="services">
      <div className="container-fluid container-xl">
        {/* service heading */}
        <header className="section-header">
          <h2>Our Virtual Stuffing Services</h2>
          <p>Hire a remote employee in any domain</p>
        </header>

        <div className="row gy-4">
          {/* it outsourcing service start */}
          {ServicesData.map(
            (item) =>
              item.slug === "it-outsourcing" &&
              item.category.map((cat) => (
                <div className="col-lg-4 col-md-6" key={cat.id}>
                  <div className={`${"service-box purple"}`}>
                    <i className={`${cat.icon} ${"icon"}`}></i>
                    <h3 className={nunito.className}>{cat.name}</h3>

                    <Link href="/hiring" className="read-more">
                      <span>Get Started</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))
          )}

          {/* end service */}
        </div>
      </div>
    </section>
  );
};

export default About;
