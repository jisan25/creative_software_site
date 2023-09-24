import Link from "next/link";
import { useEffect } from "react";

const PopUpJoinForm = () => {
  // show join form after page is loaded
  useEffect(() => {
    document.querySelector(".popup").style.display = "block";
  }, []);

  // close join form
  const handleClose = () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".pop-up-transparent-bg").style.display = "none";
  };

  return (
    <>
      <div className="pop-up-transparent-bg"></div>
      <div className="popup">
        {/* call to action close */}
        <button
          className="popup-btn-join"
          id="close"
          onClick={() => handleClose()}
        >
          &times;
        </button>
        <div className="card mb-4 p-3">
          <div className="card-body">
            {/* form sub heading */}
            <p
              className="text-medium-emphasis mb-3"
              style={{ marginTop: "0px" }}
            >
              Please complete the form below to join our team
            </p>
            {/* name  */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            {/*   email & number*/}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input className="form-control" type="text" placeholder="Email" />
              <span className="input-group-text">
                <i className="bi bi-telephone-fill"></i>
              </span>
              <input
                className="form-control"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            {/* present address  */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-geo-alt-fill"></i>
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="present address"
              />
            </div>

            {/* applying for */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-caret-down-fill"></i>
              </span>
              <select className="form-select">
                <option selected disabled>
                  Applying For
                </option>
                <option value="software-developer">Software Developer</option>
                <option value="web-developer">Web Developer</option>
                <option value="android-developer">Android Developer</option>
                <option value="digital-marketer">Digital Marketer</option>
                <option value="ui-ux-designer">UI-UX Designer</option>
              </select>
            </div>

            {/* country */}

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-caret-down-fill"></i>
              </span>
              <select className="form-select">
                <option selected disabled>
                  Experience
                </option>
                <option value="1">Fresher</option>
                <option value="2">0-2 years</option>
                <option value="3">2-5 years</option>
                <option value="4">5years +</option>
              </select>
            </div>

            {/* education */}

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-caret-down-fill"></i>
              </span>
              <select className="form-select">
                <option selected disabled>
                  Education
                </option>
                <option value="1">BSC in Computer Science</option>
                <option value="2">Diploma in Computer Science</option>
                <option value="3">Other Graduate</option>
              </select>
            </div>

            {/* additional comments or question */}
            <label htmlFor="add-comments" className="mb-2 resume-label">
              Upload Resume/CV
            </label>
            <div className="input-group">
              <input className="form-control" type="file" id="formFile" />
            </div>

            {/* I agree & check privacy policy */}
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" />
              <label
                className="form-check-label resume-label"
                style={{ fontSize: "14px", paddingTop: "1px" }}
              >
                I agree to receive other communications from creative software
              </label>
              <p className="text-left">
                for more information check{" "}
                <Link
                  href="/privacy"
                  style={{ textDecoration: "underline", color: "#0d6efd" }}
                >
                  our privacy policy
                </Link>
              </p>
            </div>
            {/* call to action - apply now */}
            <div style={{ display: "grid", placeItems: "end" }}>
              <button
                className="btn btn-block btn-lg btn-primary form-btn"
                style={{ background: "#4154F1" }}
                type="button"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpJoinForm;
