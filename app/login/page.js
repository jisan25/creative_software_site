const LoginPage = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card-group d-block d-md-flex row">
              <div className="card col-md-7 p-4 mb-0">
                <div className="card-body login_page">
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i class="bi bi-person-fill"></i>
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i class="bi bi-file-lock2-fill"></i>
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-primary px-4 login_btn"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-6 text-end">
                      <button className="btn btn-link px-0" type="button">
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
