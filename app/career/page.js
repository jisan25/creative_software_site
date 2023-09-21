import Link from "next/link";

const ContactPage = () => {
  return (
    <main
      className="bg-light d-flex flex-row align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="container-xl container-fluid">
        <div className="row">
          <h2 className="h4 mb-4 text-center">
            Need some content about joining us in a partner or career adventure
          </h2>
          <div className="col-lg-6 career-join">
            <div class="card pl-3">
              <div class="card-body">
                <div>
                  <i
                    style={{ color: "#0B5ED7", fontSize: "50px" }}
                    class="bi bi-people-fill"
                  ></i>
                </div>
                <h5 class="h4 font-bold card-title mb-3">Join our team</h5>
                <p class="card-text mb-3">
                  Interesting in applying for a position? View our Careers page
                  for open positions and apply.
                </p>
                <Link href="/join-team" class="card-link">
                  Careative Software carers
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 career-join">
            <div class="card pl-3">
              <div class="card-body">
                <div className="mb-2">
                  <i
                    style={{ color: "#0B5ED7", fontSize: "50px" }}
                    class="bi bi-slack"
                  ></i>
                </div>
                <h5 class="h4 font-bold card-title mb-3">Become a partner</h5>
                <p class="card-text mb-4">
                  For general queries including partnership opportunities.
                </p>
                <Link href="/become-a-partner" class="card-link">
                  Contact Sales
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
