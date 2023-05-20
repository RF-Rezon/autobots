import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <header className="bg-white rounded-md p-8 my-5 mx-5 md:mx-0">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col md:flex-row">
            <div className="flex gap-x-4 items-center justify-evenly flex-col md:flex-row pb-4 md:pb-0">
              <div className="w-12 h-12">
                <img src="https://i.ibb.co/80t2LrQ/pngegg.png" alt="pngegg" />
              </div>
              <p className="text-2xl font-semibold text-gray-700">AUTOBOTS</p>
            </div>

            <div>
              <nav>
                <ul className="flex items-center gap-6 text-sm flex-col md:flex-row">
                  <li>
                    <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/alltoys">
                      All Toys
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/mytoys">
                      My Toys
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/addatoy">
                      Add A Toy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/blogs">
                      Blogs
                    </NavLink>
                  </li>

                  <li>
                    <div className="flex items-center justify-between gap-x-3">
                      {user ? (
                        <>
                          <Tooltip id="my-tooltip" />
                          <div className="flex flex-row items-center justify-between space-x-4">
                            <span data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                              <label className="avatar">
                                <div className="w-10 rounded-full">
                                  <img src={user?.photoURL} />
                                </div>
                              </label>
                            </span>
                            <a
                              className="inline-block shrink-0 rounded-md border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 cursor-pointer"
                              onClick={handleLogOut}
                            >
                              LogOut
                            </a>
                          </div>
                        </>
                      ) : (
                        <a
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 cursor-pointer"
                          href="/login"
                        >
                          Login
                        </a>
                      )}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
