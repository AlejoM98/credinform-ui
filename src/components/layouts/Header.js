import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                 <p className="navbar-brand" to={"/sign-in"}>CREDINFORM</p>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/sign-in" key = "LogOut">Log Out</Link>
                       {/*  <a className="nav-link" href={'http://localhost:3000/SignIn'}>Log Out</a> */}
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
export default Header;