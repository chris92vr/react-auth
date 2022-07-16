import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
import ProfileButton from "./ProfileButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faSignInAlt, faUserPlus } from '@fortawesome/fontawesome-free-solid'






const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item ">
            
              <Link className="nav-link active " aria-current="page" to="/">Home <FontAwesomeIcon icon={faHome as IconProp} /></Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active " aria-current="page" to="/login">Login  <FontAwesomeIcon icon={faSignInAlt as IconProp} /></Link>
            </li>
            <li className="nav-item 1">
              <Link className="nav-link active " aria-current="page" to="/register">Register  <FontAwesomeIcon icon={faUserPlus as IconProp} /></Link>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><LogoutButton /></li>
            <div className="dropdown-divider"></div>
            <li><ProfileButton /></li>
          </ul>
        </li>
     
          
           
            
           
     
            
          </ul>
        </div>
      </div>
    </nav>
    );
}


export default Nav;