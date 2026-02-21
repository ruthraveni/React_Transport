import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/car" className="nav-item">Car</Link>
      <Link to="/truck" className="nav-item">Truck</Link>
      <Link to="/bike" className="nav-item">Bike</Link>
    </div>
  );
}

export default NavBar;