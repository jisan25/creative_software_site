const Category = () => {
  // switch tab functionality
  const handleChange = (e, tabContent) => {
    // get all nav buttons & remove active class
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    // set active class to selected tab
    e.currentTarget.classList.add("active");

    // get all tab contents
    const allTabs = document.querySelectorAll(".tab-pane");
    // remove show & active class from all tabs
    allTabs.forEach((element) => {
      element.classList.remove("show");
      element.classList.remove("active");
    });
    // add show & active class to selected tabs
    document.getElementById(tabContent).classList.add("show");
    document.getElementById(tabContent).classList.add("active");
  };
  return (
    <div
      className="nav flex-column nav-pills me-3 tab-button"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        className="nav-link"
        type="button"
        role="tab"
        onClick={(e) => handleChange(e, "software-developer")}
        style={{ fontSize: "20px" }}
      >
        Software Developer
      </button>
      <button
        className="nav-link active"
        type="button"
        role="tab"
        onClick={(e) => handleChange(e, "web-developer")}
      >
        Web Developer
      </button>
      <button
        className="nav-link"
        type="button"
        role="tab"
        onClick={(e) => handleChange(e, "android-developer")}
      >
        Android Developer
      </button>
      <button
        className="nav-link"
        type="button"
        role="tab"
        onClick={(e) => handleChange(e, "digital-marketer")}
      >
        Digital Marketer
      </button>
      <button
        className="nav-link"
        type="button"
        role="tab"
        onClick={(e) => handleChange(e, "ui-ux-designer")}
      >
        UI/UX Designer
      </button>
    </div>
  );
};

export default Category;
