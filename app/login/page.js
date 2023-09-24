const LoginPage = () => {
  return (
    <div className="bg-light h-75 d-flex flex-row pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card-group d-block d-md-flex row">
              <div className="card col-md-7 p-4 mt-5 mb-5">
                <div className="card-body login_page">
                  {/* log in form heading */}
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  {/* input username */}
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  {/* input password */}
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="bi bi-file-lock2-fill"></i>
                    </span>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="row">
                    {/* cta - login */}
                    <div className="col-6">
                      <button
                        className="btn btn-primary px-4 login_btn"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    {/* fotgot password */}
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
