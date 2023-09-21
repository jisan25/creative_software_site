"use client";
// import ProductForm from "../../components/demo/ProductForm";
import ProductForm from "@/app/components/demo/ProductForm";

import BreadCrumbs from "../../components/product/BreadCrumbs";
import Description from "../../components/product/Description";
import Category from "../../components/product/Category";
import Info from "../../components/product/Info";
import YoutubeVideo from "../../components/product/YoutubeVideo";

// import { Metadata, ResolvingMetadata } from "next";

// product data from local db

import { ProductsData } from "../../db/Corporate";
// import { metadata } from "@/app/layout";
import { useEffect, useState } from "react";

const ProductDetailsPage = ({ params }) => {
  const [products, setProducts] = useState(ProductsData);
  const [product, setProduct] = useState({});

  if (product.title) {
    document.title = product.title + " - creative software ";
  }

  useEffect(() => {
    if (params.id) {
      products.find((item) => {
        if (item.slug === params.id) {
          setProduct(item);
        }
      });
    }
  }, []);

  // change page title

  // set dynamic metadata

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
                <Category title="features" />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
