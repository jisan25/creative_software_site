import Link from "next/link";
// all products data from local db corporate
import { ProductsData } from "../../db/Corporate";
import { useState } from "react";
const Products = () => {
  // state
  const [products, setProducts] = useState(ProductsData);
  // shorten the text
  const truncateParagraph = (paragraph, maxLength) => {
    if (paragraph.length <= maxLength) {
      return paragraph;
    } else {
      return paragraph.slice(0, maxLength) + "...";
    }
  };
  return (
    // products section
    <section className="product__sec">
      <div className="d-flex justify-content-around gap-3">
        <div className="product__col__wrapper row">
          {/* heading */}
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
      </div>
    </section>
  );
};

export default Products;
