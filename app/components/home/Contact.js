const Contact = () => {
  return (
    // contact section
    <section id="contact" className="contact">
      <div className="container-xl container-fluid">
        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div className="row gy-4 mt-4">
          <div className="d-flex contact__card_wrapper gap-2 justify-content-between">
            {/* card 1 */}
            <div className="contact-card d-flex align-items-center justify-content-center gap-4">
              <div className="icon_wrapper">
                <i class="bi bi-pass-fill"></i>
              </div>
              <div>
                <h4>Ticket</h4>
                <p>Automate customer service with AI</p>
              </div>
            </div>
            {/* card 2 */}
            <div className="contact-card d-flex align-items-center justify-content-center gap-4">
              <div className="icon_wrapper">
                <i class="bi bi-headset"></i>
              </div>
              <div>
                <h4>HelpDesk</h4>
                <p>Support Customers with tickets</p>
              </div>
            </div>
            {/* card 3 */}
            <div className="contact-card d-flex align-items-center justify-content-center gap-4">
              <div className="icon_wrapper">
                <i class="bi bi-book-fill"></i>
              </div>
              <div>
                <h4>KnowledgeBase</h4>
                <p>Guide and educate customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
