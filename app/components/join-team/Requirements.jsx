import PopUpJoinForm from "@/app/components/join-team/PopUpJoinForm";
import { useState } from "react";
const Requirements = ({ title }) => {
  // joinform state - default is false
  const [joinForm, setJoinForm] = useState(false);

  // handle apply now
  const applyNow = () => {
    setJoinForm(true);
    // go to top of the page
    document.documentElement.scrollTop = 0;
    // show pop up join form is join form state is true
    if (joinForm) {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(".pop-up-transparent-bg").style.display = "block";
    }
  };

  return (
    <>
      {joinForm && <PopUpJoinForm />}

      <div className="requirements">
        <h2 className="h1 text-uppercase mb-4 font-bold">{title}</h2>
        {/* role */}
        <div className="mb-4">
          <h3 className="h3">Role</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>
              The role focuses on constructing mobile applications, maintaining
              and updating the functions of existing applications. They should
              understand and work around the patterns and methods related to the
              iOS platform.
            </li>
          </ul>
        </div>
        {/* responsibilities */}
        <div className="mb-4">
          <h3 className="h3">Responsibilities</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>Develop, Design, Build & Support iOS Apps.</li>
            <li>
              Work with a skilled cross-platform team throughout the complete
              cycle of development and take it to delivery.
            </li>
            <li>
              Maintaining code quality for scalability, flexibility, and
              robustness including test cases.
            </li>
            <li>Work on performance optimization & bug fixes</li>
            <li>
              Continuously research, discover & implement the latest
              technologies to increase efficiency and reduce development time.
            </li>
          </ul>
        </div>
        {/* skills required */}
        <div className="mb-4">
          <h3 className="h3">Skills Required</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>
              High-grade logical and problem-solving skills with Object-Oriented
              Programming
            </li>
            <li>Hands-on experience of UIKit & XCode5+.</li>
            <li>Excellent skills of Objective-C, Swift</li>
            <li>
              Experience in RESTful Web Service Integration JSON & XML Parsing.
            </li>
            <li>Experience in publishing apps to iTunes.</li>
            <li>Knowledge of 3rd Party Library Integration.</li>
            <li>
              Exposure to current mobile trends and emerging technologies.
            </li>
            <li>Version Control (SVN & Git) knowledge is required.</li>
          </ul>
        </div>
        {/* educational qualification */}
        <div className="mb-4">
          <h3 className="h3">Educational Qualification</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>BE/B-Tech (CE/IT), BCA, B Sc. (IT)</li>
            <li>ME/M-Tech (CE/IT), MCA, M Sc. (IT)</li>
            <li>
              Any graduate, post-graduate, or diploma degree holder with
              excellent knowledge of Computer Science or Information Technology
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="h3">Experience</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>
              Any fresher or experienced candidate can apply who satisfies some
              of the criteria mentioned above.
            </li>
          </ul>
        </div>
        {/* location */}
        <div className="mb-4">
          <h3 className="h3">Location</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
        {/* call to action apply now */}
        <button onClick={() => applyNow()} className="btn btn-lg btn-primary">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default Requirements;
