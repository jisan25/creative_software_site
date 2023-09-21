import Link from "next/link";

const Article = () => {
  return (
    // article
    <article className="entry">
      <div className="entry-img">
        <img src="/img/blog/blog-1.jpg" alt="" className="img-fluid" />
      </div>

      <h2 className="entry-title">
        <Link href="/blog/1">
          Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
          quia
        </Link>
      </h2>

      <div className="entry-meta">
        <ul>
          <li className="d-flex align-items-center">
            <i className="bi bi-person"></i>
            <a href="blog-single.html">John Doe</a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-clock"></i>
            <a href="blog-single.html">
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </a>
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-chat-dots"></i>
            <a href="blog-single.html">12 Comments</a>
          </li>
        </ul>
      </div>

      <div className="entry-content">
        <p>
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam
          animi praesentium. Aliquam et laboriosam eius aut nostrum quidem
          aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque
          deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt.
          Voluptate porro consequatur assumenda perferendis dolore.
        </p>
        <div className="read-more">
          <Link href="/blog/1">Read More</Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
