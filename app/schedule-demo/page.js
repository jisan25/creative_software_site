import ProductForm from "../components/demo/ProductForm";

const ScheduleDemoPage = () => {
  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center schedule_page pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 mb-5" style={{ marginTop: "20px" }}>
              <div className="card mb-4 mx-4">
                <div className="card-body p-4">
                  <ProductForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemoPage;
