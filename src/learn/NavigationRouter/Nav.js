import React from "react";
import "./NavRoute.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <h2 onClick={() => navigate("/")}>logo</h2>
      </div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/developer">Developers</Link>
        </li>
        <li>
          <Link to="/fetchcomp">Data</Link>
        </li>
        <li>
          <Link to="/magnifire">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
