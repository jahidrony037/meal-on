import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [letter, setLetter] = useState("");

  return (
    <nav className="text-center">
      <div className="navbar bg-base-100 mt-5 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-40 text-[#150B2BB2]"
            >
              <li>
                <NavLink to="/" className="text-[16px] font-normal">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes" className="text-[16px] font-normal">
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-[16px] font-normal">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-[32px] text-lg text-[#150B2B] p-0">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150B2BB2]">
            <li>
              <NavLink to="/" className="text-[16px] font-normal">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipes" className="text-[16px] font-normal">
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-[16px] font-normal">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:space-x-4 space-x-2">
          <form action="">
            <div className="form-control relative">
              <NavLink to={`/meals/${letter}`} className="absolute">
                <button className="btn btn-ghost btn-circle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </NavLink>
              <input
                type="text"
                required
                placeholder="write a letter for search"
                className="input border-[1px] border-solid border-[#150B2B0D] w-32 md:w-auto rounded-full focus:outline-none md:pl-14 pl-10"
                onChange={(event) =>
                  setLetter(
                    event.target.value !== "" ? event.target.value : "a"
                  )
                }
              />
            </div>
          </form>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar bg-[#0BE58A]"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/6wXGdhw/Frame.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
