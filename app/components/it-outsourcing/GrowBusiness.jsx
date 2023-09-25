import Link from "next/link";

const GrowBusiness = () => {
  return (
    <section className="text-center it-advantages">
      <div
        className="dash-design text-center"
        style={{ background: "#32a581" }}
      ></div>
      <div className="about__headline d-flex flex-column  align-items-center">
        <h4 className="h4 " style={{ padding: "0px 11.5rem" }}>
          Hire an <b>Employee</b> with us & join <b>3500+</b> clients that have
          Grown their businesses with us
        </h4>
        <div>
          <Link href={"/hiring"}>
            <button
              className="btn btn-primary my-5 btn-lg it-share-btn"
              style={{
                background: "#32a581",
                border: "1px solid #32a581",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              Share your Requirements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
