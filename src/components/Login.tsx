import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="input-group d-flex justify-content-center">
        <div className="">
          <input
            type="text"
            className="form-control mx-lg"
            placeholder="Username"
            aria-label="Username"
          />
        </div>
        <div className="">
          <input
            type="text"
            className="form-control mx-lg"
            placeholder="Password"
            aria-label="Password"
          />
        </div>
        <div className="">
          <button type="button" className="btn btn-light">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
