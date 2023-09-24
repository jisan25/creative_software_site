const Features = () => {
  // to handle tab change
  const toggleTab = (e, id) => {
    const tab = document.getElementById(id);

    // get all tabls
    const allTabs = document.querySelectorAll(".tab-pane");
    // remove active class from other tabs
    allTabs.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    // get all tab buttons

    const tabButtons = document.querySelectorAll(".nav-link");

    // remove active class from other tab buttons
    tabButtons.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    // apply active class to the selected tab
    if (tab) {
      tab.classList.add("active");
    }
  };

  return (
    // features section
    <section id="features" className="features">
      <div className="container-fluid container-xl">
        {/* section header */}
        <header className="section-header">
          <h2>Features</h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>

        <div className="row">
          {/* feature image */}
          <div className="col-lg-6">
            <img src="/img/features.png" className="img-fluid" alt="" />
          </div>
          {/* feature contents */}
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Eos aspernatur rem</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Facilis neque ipsa</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Volup amet voluptas</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Rerum omnis sint</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Alias possimus</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Repellendus mollitia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tab section */}
        <div className="row feture-tabs">
          <div className="col-lg-6">
            {/* tab section heading */}
            <h3>
              Neque officiis dolore maiores et exercitationem quae est seda
              lidera pat claero
            </h3>

            {/* tab buttons */}
            <ul className="nav nav-pills mb-3">
              {/* tab button */}
              <li>
                <a
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => toggleTab(e, "tab1")}
                >
                  Saepe fuga 1
                </a>
              </li>
              {/* tab button */}
              <li>
                <a
                  className="nav-link"
                  onClick={(e) => toggleTab(e, "tab2")}
                  style={{ cursor: "pointer" }}
                >
                  Voluptates
                </a>
              </li>
              {/* tab button */}
              <li>
                <a
                  className="nav-link"
                  onClick={(e) => toggleTab(e, "tab3")}
                  style={{ cursor: "pointer" }}
                >
                  Corrupti
                </a>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content">
              {/* tab */}
              <div className="tab-pane fade show active" id="tab1">
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
              {/* tab */}
              <div className="tab-pane fade show" id="tab2">
                <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Tab 2</h2>
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
              {/* tab */}
              <div className="tab-pane fade show" id="tab3">
                <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Tab 3</h2>
                <p>
                  Consequuntur inventore voluptates consequatur aut vel et. Eos
                  doloribus expedita. Sapiente atque consequatur minima nihil
                  quae aspernatur quo suscipit voluptatem.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Repudiandae rerum velit modi et officia quasi facilis</h4>
                </div>
                <p>
                  Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                  Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                  et.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check2"></i>
                  <h4>Incidunt non veritatis illum ea ut nisi</h4>
                </div>
                <p>
                  Non quod totam minus repellendus autem sint velit. Rerum
                  debitis facere soluta tenetur. Iure molestiae assumenda sunt
                  qui inventore eligendi voluptates nisi at. Dolorem quo
                  tempora. Quia et perferendis.
                </p>
              </div>
            </div>
          </div>
          {/* tab section image */}
          <div className="col-lg-6">
            <img src="/img/features-2.png" className="img-fluid" alt="" />
          </div>
        </div>

        {/* after tab section */}
        <div className="row feature-icons">
          <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

          <div className="row">
            {/* after tab image */}
            <div className="col-xl-4 text-center">
              <img src="/img/features-3.png" className="img-fluid p-4" alt="" />
            </div>

            {/* after tab contents */}
            <div className="col-xl-8 d-flex content">
              <div className="row align-self-center gy-4">
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-line-chart-line"></i>
                  <div>
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-stack-line"></i>
                  <div>
                    <h4>Ullamco laboris nisi</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-brush-4-line"></i>
                  <div>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-magic-line"></i>
                  <div>
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-command-line"></i>
                  <div>
                    <h4>Molestiae dolor</h4>
                    <p>
                      Et fuga et deserunt et enim. Dolorem architecto ratione
                      tensa raptor marte
                    </p>
                  </div>
                </div>
                {/* content */}
                <div className="col-md-6 icon-box">
                  <i className="ri-radar-line"></i>
                  <div>
                    <h4>Explicabo consectetur</h4>
                    <p>
                      Est autem dicta beatae suscipit. Sint veritatis et sit
                      quasi ab aut inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
