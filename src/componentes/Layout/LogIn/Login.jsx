import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Registar</h1>
        <form>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Log In</button>
          </fieldset>
        </form>
        <p>
          {" "}
          Already have an account? please{" "}
          <Link
            to="/Registsr"
            className="hover:text-blue-800 text-blue-500 underline"
          >
            Registar
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
