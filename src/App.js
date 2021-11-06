import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import Footer from './components/layouts/Footer';*/
import Header from './components/layouts/Header';
import SignIn from './components/SingIn';
import Kanban from './components/Kanban';
import DashBoard from './pages/DashBoard';
import FormAdPo from './pages/FormAdPo';

import './App.css';

class App extends Component {

    render() {
        /*  return (
           <Router>
             <Header />
             <Switch>
               <Route path="/" component={SignIn} />        
             </Switch>
             <Footer />
           </Router>
         ) */
        return (
            <Router>
                <Header/>
                <Switch>
                <Route  exact path="/" component={SignIn} />
                <Route exact path="/kanban" component={Kanban}/>
                <Route exact path="/formAdPo" component={FormAdPo} />
                <Route exact path="/dashboard" component={DashBoard}/>
                <Route path="/hola-mundo" component={()=> <h1 > Hola Mundo </h1 >} />    
                </Switch>
            </Router> 
        )
    }

}

export default App;