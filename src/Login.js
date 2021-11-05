/* eslint-disable no-unused-vars */
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import Kanban from './components/Kanban.js';
import FormAdPo from './pages/FormAdPo';
import DashBoard from './pages/DashBoard';
/*import Kanban2 from './components/Kanban2';*/


function Login1() {

  return (
  <Router>
    <div className="Login">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>CREDINFORM</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className = "nav-item">
                <Link className = "nav-link" to={"/fromadpo"}>Adicionar Poliza</Link>
              </li>
              <li className = "nav-item">
                <Link className = "nav-link" to={"/dashboard"}> DashBoard </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path= "/kanban" component={Kanban}/>
            <Route path="/fromadpo" component = {FormAdPo}/>
            <Route path="/dashboard" pages = {DashBoard}/>
            <Route exact path='/' component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default Login1;
/*<li className = "nav-item">
                <Link className = "nav-link" to={"/kanban"}>Kanban</Link>
              </li>
              */