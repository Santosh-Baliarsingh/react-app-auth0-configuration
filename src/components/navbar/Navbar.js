import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const {user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="google.com">
            <i
              className="bi bi-flower3 d-inline-block align-text-top me-2"
              style={{ fontSize: "20px" }}
            ></i>
            React
          </a>
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="google.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="google.com">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="google.com"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="google.com">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="google.com">
                      Cloud
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="google.com">
                      Artifical Intelligence
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {
              isAuthenticated && <p className="text-success fw-bold pt-3">{`Welcome ${user.name}`}</p>
            }
            {isAuthenticated ? (
              <button
                className="btn btn-danger mx-2"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            ) : (
              <button
                className="btn btn-success mx-2"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
