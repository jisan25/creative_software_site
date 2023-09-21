import BreadCrumbs from "@/app/components/blog/BreadCrumbs";
import Sidebar from "@/app/components/blog/Sidebar";
import Article from "@/app/components/blog/single/Article";
import Author from "@/app/components/blog/single/Author";
import Comments from "@/app/components/blog/single/Comments";

const BlogSinglePage = () => {
  return (
    <>
      <main id="main">
        {/* breadcrumbs */}

        <BreadCrumbs />

        <section id="blog" className="blog">
          <div className="container-fluid container-xl">
            <div className="row">
              <div className="col-lg-8 entries">
                <Article />

                <Author />

                <Comments />
              </div>

              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogSinglePage;
