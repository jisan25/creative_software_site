"use client";

import { useEffect } from "react";
import Facilities from "../components/be-a-partner/Facilities";
import PartnerForm from "../components/be-a-partner/PartnerForm";

// product data from local db

const ProductDetailsPage = () => {
  useEffect(() => {
    document.title = "Become a Partner - creative software ";
  }, []);

  return (
    <>
      <main id="main">
        <section className="become-a-partner">
          <div className="container-fluid container-xl">
            <div className="row gy-4 gap-2">
              <div className="col-lg-7 schedule_page">
                <div className="card mb-4">
                  <div className="card-body">
                    <PartnerForm />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Facilities />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailsPage;
