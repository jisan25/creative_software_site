import ProductSlider from "./ProductSlider";

const Info = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li>
              <strong>Category</strong>: Web design
            </li>
            <li>
              <strong>Client</strong>: ASU Company
            </li>
            <li>
              <strong>Project date</strong>: 01 March, 2020
            </li>
            <li>
              <strong>Project URL</strong>: <a href="#">www.example.com</a>
            </li>
          </ul>
        </div>
      </div>
      <ProductSlider />
    </>
  );
};

export default Info;
