"use client";
import AboutCompany from "@/app/components/join-team/AboutCompany";
import Category from "@/app/components/join-team/Category";
import Requirements from "@/app/components/join-team/Requirements";

const JoinTeamPage = () => {
  return (
    <>
      <AboutCompany />
      <div className="container-xl container-fluid mb-5 mt-5">
        <div className="d-flex align-items-start gap-5">
          <div className="col-lg-3">
            <Category />
          </div>
          <div className="col-lg-9" style={{ paddingRight: "2.25rem" }}>
            <div className="tab-content">
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="software-developer"
              >
                <Requirements title="Software developer" />
              </div>
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="web-developer"
              >
                <Requirements title="Web developer" />
              </div>
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="android-developer"
              >
                <Requirements title="Android developer" />
              </div>
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="digital-marketer"
              >
                <Requirements title="Digital Marketer" />
              </div>
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="ui-ux-designer"
              >
                <Requirements title="Ui/Ux Designer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinTeamPage;
