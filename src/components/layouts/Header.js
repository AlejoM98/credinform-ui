import React, { Component } from "react";

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                 <p className="navbar-brand" to={"/sign-in"}>CREDINFORM</p>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <p className="nav-link" to={"/sign-in"}>Login</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link" to={"/sign-up"}>Log Out</p>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
export default Header;