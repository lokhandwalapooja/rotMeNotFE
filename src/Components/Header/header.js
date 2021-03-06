import React from "react";
import { Roles, routes } from "../../utility/constants/constants";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction/userActions";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const role = useSelector((state) => state.authReducer?.user?.role);

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
            {/* {role === Roles.ADMIN ? ( */}
              <li className="nav-item">
                <a
                  href="javascript:void(0)"
                  className={`nav-link ${
                    history.location.pathname === routes.INGREDIENTS
                      ? `active`
                      : ""
                  }`}
                  onClick={() => history.push(routes.INGREDIENTS)}
                >
                  Ingredients
                </a>
              </li>
            {/* ) : null} */}
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                onClick={() => history.push(routes.RECIPIES_LIST)}
                className={`nav-link ${
                  history.location.pathname === routes.RECIPIES_LIST
                    ? `active`
                    : ""
                }`}
              >
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                onClick={() => history.push(routes.MY_RECIPIES)}
                className={`nav-link ${
                  history.location.pathname === routes.MY_RECIPIES
                    ? `active`
                    : ""
                }`}
              >
                My Recipes
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                onClick={() => history.push(routes.ABOUT)}
                className={`nav-link ${
                  history.location.pathname === routes.ABOUT ? `active` : ""
                }`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="javascript:void(0)"
                className="nav-link"
                onClick={() => dispatch(logout())}
              >
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
