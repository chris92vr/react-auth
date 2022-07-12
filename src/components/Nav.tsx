import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
import ProfileButton from "./ProfileButton";



const loggedIn = localStorage.getItem('loggedIn');


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
            
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
            </li>
            
            <LogoutButton />
           
     
            <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><ProfileButton /></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}


export default Nav;