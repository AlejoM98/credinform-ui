/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './App';*/
import Login from './Login';
import Routes from './routes/Routes'; 
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';




/*ReactDOM.render(
  <BrowserRouter>
    <App />
    <Login />
  </BrowserRouter>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <BrowserRouter>
    <Login />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();