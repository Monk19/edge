import React from "react";
import "./NavElement.modules.css";
function NavElement() {
  return (
    <div className="navigation-bar navbar navbar-expand-sm container-fluid row fixed-top ">
      <div className="row">
        <div className="col-3">
          <img src="" alt="edge-logo"></img>
        </div>
        <nav className="col-9">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>CARRERS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavElement;
