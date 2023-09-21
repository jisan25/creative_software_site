import Link from "next/link";

const BreadCrumbs = ({ heading }) => {
  return (
    <section className="breadcrumbs">
      <div className="container-xl container-fluid">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Product Details</li>
        </ol>
        <h2>{heading}</h2>
      </div>
    </section>
  );
};

export default BreadCrumbs;
