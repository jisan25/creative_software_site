import Link from "next/link";

const HireForm = () => {
  return (
    <>
      {/* name & email */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-person-fill"></i>
        </span>
        <input className="form-control" type="text" placeholder="Name" />

        <span className="input-group-text">
          <i className="bi bi-envelope-fill"></i>
        </span>
        <input className="form-control" type="text" placeholder="Email" />
      </div>
      {/* number & project duration */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-telephone-fill"></i>
        </span>
        <input
          className="form-control"
          type="number"
          placeholder="Contact Number"
        />

        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <select className="form-select">
          <option selected disabled>
            Project Duration
          </option>
          <option value="1-10">Less than 1 month</option>
          <option value="11-50">1 to 3 Months</option>
          <option value="51-200">3 to 6 Months</option>
          <option value="201-500">6 to 12 Months</option>
          <option value="501-1000">More than 1 year</option>
          <option value="1000+">Not Sure</option>
        </select>
      </div>
      {/* Website */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <i className="bi bi-ubuntu"></i>
        </span>
        <input className="form-control" type="text" placeholder="Website" />
      </div>

      {/* Work Requirement */}
      <label htmlFor="add-comments" className="mb-2">
        Work Requirement
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-chat-fill"></i>
        </span>

        <textarea
          className="form-control"
          placeholder="Add Your Requirement"
          id="add-comments"
        ></textarea>
      </div>

      <div style={{ display: "grid", placeItems: "end" }}>
        <button
          className="btn btn-block btn-success hire-form-btn"
          style={{ background: "#32a581", border: "1px solid #32a581" }}
          type="button"
        >
          SEND US YOUR REQUIREMENT
        </button>
      </div>
    </>
  );
};

export default HireForm;
