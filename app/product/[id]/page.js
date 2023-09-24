"use client";

// components
import ProductForm from "@/app/components/demo/ProductForm";
import BreadCrumbs from "../../components/product/BreadCrumbs";
import Description from "../../components/product/Description";
import Category from "../../components/product/Category";
import Features from "../../components/product/Features";
import Info from "../../components/product/Info";
import YoutubeVideo from "../../components/product/YoutubeVideo";

// all products data from local db corporate
import { ProductsData } from "../../db/Corporate";
import { useEffect, useState } from "react";

const ProductDetailsPage = ({ params }) => {
  // state
  const [products, setProducts] = useState(ProductsData);
  const [product, setProduct] = useState({});

  useEffect(() => {
    // set page title with product title & company name dynamically
    if (params.id) {
      products.find((item) => {
        if (item.slug === params.id) {
          setProduct(item);
          document.title = item.title + " - creative software ";
        }
      });
    }
  }, []);

  return (
    <>
      <main id="main">
        <BreadCrumbs heading={product.title} />
        <section id="portfolio-details" className="portfolio-details">
          <div className="container-fluid container-xl">
            <div className="row gy-4">
              {/* slider */}
              <YoutubeVideo />
              <div className="col-lg-5 schedule_page">
                <div className="card mb-4">
                  <div className="card-body">
                    <ProductForm products={products} productData={product} />
                  </div>
                </div>
              </div>

              {/* <Info /> */}
            </div>
            <div className="row gy-4 align-items-center">
              <Info />
              <Description title={product.title} desc={product.description} />
              {params.id === "point-of-sales-software" && (
                <Category title="pos category" />
              )}
              {params.id !== "point-of-sales-software" && (
                <Features
                  title={`${product.title} - features`}
                  slug={params.id}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
