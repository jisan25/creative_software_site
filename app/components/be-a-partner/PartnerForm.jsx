import Link from "next/link";

const PartnerForm = () => {
  return (
    <>
      <h1 className="text-uppercase" style={{ marginBottom: "5px" }}>
        Become A Partner
      </h1>
      <p className="text-medium-emphasis" style={{ marginTop: "0px" }}>
        Please complete the form below to become a partner
      </p>
      {/* name & company name */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-person-fill"></i>
        </span>
        <input className="form-control" type="text" placeholder="Name" />

        <span className="input-group-text">
          <i className="bi bi-buildings-fill"></i>
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Company Name"
        />
      </div>
      {/* number & email */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-telephone-fill"></i>
        </span>
        <input
          className="form-control"
          type="number"
          placeholder="Phone Number"
        />

        <span className="input-group-text">
          <i className="bi bi-envelope-fill"></i>
        </span>
        <input className="form-control" type="text" placeholder="Email" />
      </div>
      {/* designation & type of company */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i class="bi bi-ubuntu"></i>
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Your Designation"
        />

        <span className="input-group-text">
          <i class="bi bi-building-fill-gear"></i>
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Type of Company"
        />
      </div>
      {/* company size */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <select className="form-select">
          <option selected disabled>
            Select Company Size
          </option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="501-1000">501-1000</option>
          <option value="1000+">1000+</option>
          <option value="employee">Employee</option>
        </select>
      </div>

      {/* country */}

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <select className="form-select">
          <option selected disabled>
            Select Country
          </option>
          <option value="1">Country 1</option>
          <option value="2">Country 2</option>
          <option value="3">Country 3</option>
        </select>
      </div>

      {/* solution  */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i class="bi bi-bullseye"></i>
        </span>
        <input
          className="form-control"
          type="text"
          placeholder="Solution Yor're Looking For"
        />
      </div>
      {/*  how do you know us */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <select className="form-select">
          <option selected disabled>
            How Do You Know Us?
          </option>
          <option value="google">Google</option>
          <option value="fb">FB</option>
          <option value="linkedin">LinkedIn</option>
          <option value="direct">Direct</option>
        </select>
      </div>

      {/* additional comments or question */}
      <label htmlFor="add-comments" className="mb-2">
        Additional Comments or Question
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-chat-fill"></i>
        </span>

        <textarea
          className="form-control"
          placeholder="optional"
          id="add-comments"
        ></textarea>
      </div>

      {/* I agree & check privacy policy */}
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label" style={{ fontSize: "14px" }}>
          I agree to receive other communications from creative software
        </label>
        <p>
          for more information check{" "}
          <Link
            href="/privacy"
            style={{ textDecoration: "underline", color: "#0d6efd" }}
          >
            our privacy policy
          </Link>
        </p>
      </div>

      <div style={{ display: "grid", placeItems: "end" }}>
        <button
          className="btn btn-block btn-success schedule_btn"
          type="button"
        >
          BECOME A PARTNER
        </button>
      </div>
    </>
  );
};

export default PartnerForm;
