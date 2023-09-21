const Pricing = () => {
  return (
    // pricing section
    <section id="pricing" className="pricing">
      <div className="container-xl container-fluid">
        <header className="section-header">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </header>

        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
              <div className="price">
                <sup>$</sup>0<span> / mo</span>
              </div>
              <img src="/img/pricing-free.png" className="img-fluid" alt="" />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
              <div className="price">
                <sup>$</sup>19<span> / mo</span>
              </div>
              <img
                src="/img/pricing-starter.png"
                className="img-fluid"
                alt=""
              />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3 style={{ color: "ff901c" }}>Business Plan</h3>
              <div className="price">
                <sup>$</sup>29<span> / mo</span>
              </div>
              <img
                src="/img/pricing-business.png"
                className="img-fluid"
                alt=""
              />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
              <div className="price">
                <sup>$</sup>49<span> / mo</span>
              </div>
              <img
                src="/img/pricing-ultimate.png"
                className="img-fluid"
                alt=""
              />
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
