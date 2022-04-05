import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  text-white bg-dark">
        <div className="container-fluid">
          <nav className="navbar-brand" to="/">
            SpaceX Logo
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <nav className="nav-link text-white" aria-current="page" href="/">
                  Home
                </nav>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
