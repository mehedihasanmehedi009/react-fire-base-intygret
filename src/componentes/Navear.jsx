import { Link, NavLink } from "react-router";
import "./Navear.css";
import { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
 
const Navear = () => {
    const {users} = use(AuthContext)
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Log In">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/Registsr">Registar</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
    {
      users ?  <a className="btn">Sing OUt</a> : <Link to="/Log In">log
      in</Link>
    }
        </div>
      </div>
    </div>
  );
};

export default Navear;
