import Contact from "../components/home/Contact";

const ContactPage = () => {
  /*
    => contact page
  */
  return (
    <main
      className="bg-light d-flex flex-row align-items-center"
      style={{ height: "75vh" }}
    >
      <div className="container-xl container-fluid">
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
