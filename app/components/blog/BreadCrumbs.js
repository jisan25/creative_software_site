import Link from "next/link";

const BreadCrumbs = () => {
  return (
    // breadcrumbs
    <section className="breadcrumbs">
      <div className="container-xl container-fluid">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>
      </div>
    </section>
  );
};

export default BreadCrumbs;
