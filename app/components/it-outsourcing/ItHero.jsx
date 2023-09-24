const ItHero = () => {
  return (
    <section className="it-hero text-center d-flex flex-column justify-content-center align-items-center">
      <div className="headline">
        <h4 className="h4">Outsource in Any Domain</h4>
        <h2 className="h2 font-bold">Hire Dedicated Virtual Employees</h2>
      </div>
      <div className="top-bottom-border">
        Starting from just us <span>$995</span>/Month only
      </div>
      <div className="icons-with-infos d-flex gap-5 text-white">
        <span>
          <i className="bi bi-people-fill"></i> 2000+ Employees
        </span>
        <span>
          <i className="bi bi-globe-asia-australia"></i> 150+ Domains
        </span>
        <span>
          <i className="bi bi-clock-history"></i> Start Within 8 Hours
        </span>
      </div>
    </section>
  );
};

export default ItHero;
