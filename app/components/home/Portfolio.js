// get all portfolio data from local db corporate
import PortfolioData from "../../db/portfolio";
import { useState } from "react";
const Portfolio = () => {
  // assign portfolio data to portfolios state
  const [portfolios, setPortfolios] = useState(PortfolioData);

  // filter item by category
  const filterItem = (category) => {
    const updatedPortfolios = PortfolioData.filter((item) => {
      return item.category === category;
    });
    setPortfolios(updatedPortfolios);
  };
  return (
    // portfolio section
    <section id="portfolio" className="portfolio">
      <div className="container-fluid container-xl">
        {/* portfolio header */}
        <header className="section-header">
          <h2>Portfolio</h2>
          <p>Check our latest work</p>
        </header>

        {/* portfolio buttons */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                onClick={() => setPortfolios(PortfolioData)}
                className="filter-active"
              >
                All
              </li>
              <li onClick={() => filterItem("app")}>App</li>
              <li onClick={() => filterItem("card")}>Card</li>
              <li onClick={() => filterItem("web")}>Web</li>
            </ul>
          </div>
        </div>
        {/* portfolios */}
        <div className="row gy-4 portfolio-container">
          {portfolios.map((portfolio) => {
            const { id, title, image, description } = portfolio;
            return (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app"
                key={id}
              >
                <div className="portfolio-wrap">
                  {/* portfolio image */}
                  <img src={image} className="img-fluid" alt="" />
                  {/* portfolio content */}
                  <div className="portfolio-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="portfolio-links">
                      <a
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
