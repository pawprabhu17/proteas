import React from "react";
import { Link } from "react-router-dom";
import "../css/navigation.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={`mx-2 ${liClassName}`}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
};
class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <h4 className="d-inline">#PROTEA</h4>
          <h4 className="d-inline">FIRE</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/fixtures" name="Fixtures" />
            <NavItem path="/news" name="News" />
            <NavItem path="/about_csa" name="About CSA" />
            <NavItem path="/fans" name="Fan Page" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
