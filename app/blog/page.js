import Article from "@/app/components/blog/Article";
import BreadCrumbs from "@/app/components/blog/BreadCrumbs";
import Sidebar from "@/app/components/blog/Sidebar";

const BlogPage = () => {
  return (
    <main id="main">
      {/* breadcrumbs */}
      <BreadCrumbs />
      {/* blog section */}
      <section id="blog" className="blog">
        <div className="container-xl container-fluid">
          <div className="row">
            <div className="col-lg-8 entries">
              <Article />
              <Article />
              <Article />
              <Article />
              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end blog entries */}

            {/* sidebar */}
            <div className="col-lg-4">
              <Sidebar />
            </div>
            {/* end sidebar */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
