const Support = () => {
  return (
    // support section
    <section className="company_section">
      {/* section heading */}
      <h2 className="title">need any help ?</h2>
      <div className="row mb-3">
        {/* column */}
        <div className="company-col-2 col-lg-4">
          <li>
            <a href="#">
              <i className="bi bi-buildings-fill"></i> Community
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-laptop"></i> Knowledge Base
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-headset"></i> Services
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-newspaper"></i> Training
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-pass-fill"></i> Ticket
            </a>
          </li>
        </div>
        {/* column */}
        <div
          className="company-col-middle col-lg-4"
          style={{
            background: "#4154F1",
            color: "white",
            padding: "20px 25px",
          }}
        >
          <div className="mb-4">
            <h4 className="mb-1">
              24/7 support from Createive Software internal experts
            </h4>
            <a
              className="company-link"
              href="#"
              style={{
                color: "ghostwhite",
                display: "inline",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
            >
              Let's talk <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div>
            <h4>Customer resources for suppliers and venues.</h4>
            <a
              className="company-link"
              href="#"
              style={{
                color: "ghostwhite",
                display: "inline",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
            >
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* column */}
        <div className="col-lg-4">
          <div
            className="row text-center place-content-center place-items-center"
            style={{ height: "100%" }}
          >
            <div className="mb-4">
              <span
                style={{
                  background: "#4154F1",
                  color: "#fff",
                  // width: "50px",
                  borderRadius: "50%",
                  padding: "25px",
                  paddingTop: "40px",
                }}
              >
                <i style={{ fontSize: "35px" }} className="bi bi-headset"></i>
              </span>
            </div>
            <h4 className="mt-1 font-bold h5">+88 9696 66 88 14</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
