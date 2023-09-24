import Link from "next/link";

const LevelUp = () => {
  return (
    <section>
      <div className="container-fluid container-xl">
        <div className="d-flex justify-content-center align-items-center flex-column">
          {/* level up heading */}
          <h2 className="h2 text-center font-bold mb-4">
            Level Up your <span style={{ color: "#4154F1" }}>Business</span>{" "}
            With the Finest Solutions
          </h2>
          {/* shedule demo & company profile */}
          <div className="demo-company-wrapper d-flex justify-content-between">
            <Link
              href="/schedule-demo"
              className="demo text-center font-bold text-white"
              style={{
                width: "400px",
                padding: "20px 0px",
                fontSize: "22px",
                background: "#4154F1",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <i className="bi bi-headset"></i> SCHEDULE A DEMO
            </Link>
            <a
              href="#"
              className="company-profile text-center text-white font-bold"
              style={{
                width: "400px",
                padding: "20px 0px",
                background: "#012970",
                fontSize: "22px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
            >
              <i className="bi bi-file-earmark-fill"></i> COMPANY PROFILE
            </a>
            <span className="level-up-or-circle">Or</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUp;
