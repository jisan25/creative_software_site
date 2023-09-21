import Categories from "./sidebar/Categories";
import RecentPosts from "./sidebar/RecentPosts";
import Search from "./sidebar/Search";
import Tags from "./sidebar/Tags";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Search</h3>
      <Search />

      <h3 className="sidebar-title">Categories</h3>
      <Categories />

      <h3 className="sidebar-title">Recent Posts</h3>

      <RecentPosts />

      <h3 className="sidebar-title">Tags</h3>
      <Tags />
    </div>
  );
};

export default Sidebar;
