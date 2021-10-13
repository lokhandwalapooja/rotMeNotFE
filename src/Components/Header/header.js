import React from "react";
import { routes } from "../../utility/constants/constants";

const Header = (props) => {
  const { history } = props;

  return (
    <nav className="navbar navbar-expand-md navbar-light" id="main-nav">
      <div className="container logo">
        <a href="javascript:void(0)" className="navbar-brand">
          <img
            src="img/canva-photo-editor.png"
            alt="rot me not"
            width={130}
            height={50}
          />
          <img
            src="img/oie_L1Y4pnSmuaO7.png"
            alt="rot me not"
            width={150}
            height={30}
          />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                onClick={() => history.push(routes.ROOT)}
                className={`nav-link ${
                  history.location.pathname === routes.ROOT ? `active` : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="javascript:void(0)" className="nav-link">
                Add Ingredient
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="javascript:void(0)" className="nav-link">
                Submit Recipe
              </a>
            </li> */}
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                onClick={() => history.push(routes.RECIPIES_LIST)}
                className={`nav-link ${
                  history.location.pathname === routes.RECIPIES_LIST ? `active` : ""
                }`}
              >
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="javascript:void(0)" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
