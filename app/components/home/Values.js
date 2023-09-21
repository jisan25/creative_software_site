const Values = () => {
  return (
    // values section
    <section id="values" className="values">
      <div className="container-fluid container-xl">
        {/* section header */}
        <header className="section-header">
          <h2>Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">
          {/* value 1 */}
          <div className="col-lg-4">
            <div className="box">
              <img src="assets/img/values-1.png" className="img-fluid" alt="" />
              <h3>Ad cupiditate sed est odio</h3>
              <p>
                Eum ad dolor et. Autem aut fugiat debitis voluptatem
                consequuntur sit. Et veritatis id.
              </p>
            </div>
          </div>
          {/* value 2 */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
              <h3>Voluptatem voluptatum alias</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
            </div>
          </div>
          {/* value 3 */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
