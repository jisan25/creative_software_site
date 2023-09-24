import Category from "@/app/components/sitemap/Category";
import Pages from "@/app/components/sitemap/Pages";
const SiteMapPage = () => {
  return (
    <div className="container-xl container-flu mb-5">
      <div className="row">
        {/* sitemap heading */}
        <h2 className="h2 font-bold mb-4">SITEMAP</h2>
        <Category />
        <Pages />
      </div>
    </div>
  );
};

export default SiteMapPage;
