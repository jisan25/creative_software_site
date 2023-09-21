const Author = () => {
  return (
    <div className="blog-author d-flex align-items-center">
      <img
        src="/img/blog/blog-author.jpg"
        className="rounded-circle float-left"
        alt=""
      />
      <div>
        <h4>Jane Smith</h4>
        <div className="social-links">
          <a href="https://twitters.com/#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://facebook.com/#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com/#">
            <i className="biu bi-instagram"></i>
          </a>
        </div>
        <p>
          Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
          possimus accusantium. Quas repellat voluptatem officia numquam sint
          aspernatur voluptas. Esse et accusantium ut unde voluptas.
        </p>
      </div>
    </div>
  );
};

export default Author;
