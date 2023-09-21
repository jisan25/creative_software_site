"use client";
const Category = () => {
  const handleChane = (e, page) => {
    const allTabButtons = document.querySelectorAll(".nav-link");
    allTabButtons.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    const allTabPages = document.querySelectorAll(".tab-pane");
    allTabPages.forEach((element) => {
      element.classList.remove("show");
      element.classList.remove("active");
    });
    document.getElementById(page).classList.add("show");
    document.getElementById(page).classList.add("active");
  };
  return (
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          type="button"
          role="tab"
          onClick={(e) => handleChane(e, "creative-software")}
        >
          Creative Software
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "services")}
          class="nav-link"
          id="profile-tab"
          type="button"
          role="tab"
        >
          Services
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
          onClick={(e) => handleChane(e, "products")}
        >
          Products
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "career")}
          class="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Career
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "resources")}
          class="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Resources
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "support")}
          class="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Support
        </button>
      </li>
    </ul>
  );
};

export default Category;
