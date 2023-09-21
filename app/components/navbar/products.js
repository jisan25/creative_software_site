import { ProductsData } from "../../db/Corporate";
import Link from "next/link";
import { useState } from "react";
const Products = () => {
  const [products, setProducts] = useState(ProductsData);

  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    <section className="product__sec">
      <div className="d-flex justify-content-around gap-3">
        <div className="product__col__wrapper row">
          <h2>PRODUCTS </h2>

          {/* product  */}
          {products.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <i className={item.icon}></i>
                </div>

                <div>
                  <Link
                    className="title-desc"
                    style={{ display: "block", whiteSpace: "normal" }}
                    href={"/product/" + item.slug}
                  >
                    <h4>{item.title}</h4>

                    <p className="mb-2">
                      {truncateParagraph(item.description, 80)}
                    </p>
                  </Link>

                  <Link
                    className="mt-4 font-bold product_learn-more"
                    href={"/product/" + item.slug}
                    style={{ display: "inline", color: "#4154F1" }}
                  >
                    Learn More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* product end */}
        </div>

        {/* <div className="product__col__wrapper">
          <div>
            <br />
            <br />
          </div>
          <div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-clipboard-data-fill"></i>
              </div>
              <div>
                <h4>Pharmacy Management Software</h4>
                <p>
                  Enhance pharmacy efficiency with Pharmacy Management Software.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-cloud-fog2-fill"></i>
              </div>
              <div>
                <h4>Parking Management Software</h4>
                <p>
                  Effortlessly control parking facilities with Parking
                  Management Software.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-currency-rupee"></i>
              </div>
              <div>
                <h4>Courier Management Software</h4>
                <p>
                  Optimize courier operations with Courier Management Software.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i class="bi bi-command"></i>
              </div>
              <div>
                <h4>Customer Relationship Management</h4>
                <p>Strengthen customer connections with CRM software.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product__col__wrapper">
          <div>
            <br />
            <br />
          </div>
          <div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-clipboard-data-fill"></i>
              </div>
              <div>
                <h4>Prescription Management System</h4>
                <p>
                  Efficiently manage prescriptions with Prescription Management
                  System.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-cloud-fog2-fill"></i>
              </div>
              <div>
                <h4>Micro Credit Management Software</h4>
                <p>
                  Streamline microcredit operations with Micro Credit Management
                  Software.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i className="bi bi-currency-rupee"></i>
              </div>
              <div>
                <h4>Diagnostic Management System</h4>
                <p>
                  Enhance diagnostic workflows with Diagnostic Management
                  System.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <i class="bi bi-command"></i>
              </div>
              <div>
                <h4>Enterprise Resource Planing (ERP)</h4>
                <p>
                  Optimize business processes with Enterprise Resource Planning
                  (ERP) software.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
