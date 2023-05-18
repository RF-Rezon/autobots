import React, { useState } from "react";

const NavBar = () => {
    const [user, setUser] = useState(false);
  return (
    <div>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between flex-col md:flex-row">
            <div className="flex gap-x-4 items-center justify-evenly flex-col md:flex-row">
              <div className="w-12 h-12">
                <img src="https://i.ibb.co/80t2LrQ/pngegg.png" alt="pngegg" />
              </div>
              <p className="text-2xl font-semibold text-gray-700">AUTOBOTS</p>
            </div>

            <div>
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm flex-col md:flex-row">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Home
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      All Toys
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      My Toys
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Add A Toy
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                      Blogs
                    </a>
                  </li>

                  <li>
                    <div className="flex items-center justify-between gap-x-3">
                        {user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80" />
                          </div>
                        </label>
                        :
                          <a className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white shadow" href="/">
                            Login
                          </a>}
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
