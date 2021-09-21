import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      id="main-nav"
    >
      <div className="container logo">
        <a href="#home" className="navbar-brand">
          <img src="img/canva-photo-editor.png" alt="rot me not" width={130} height={50}/>
          <img src="img/oie_L1Y4pnSmuaO7.png" alt="rot me not" width={150} height={30}/>
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
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Add Ingredient
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Submit Recipe
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
