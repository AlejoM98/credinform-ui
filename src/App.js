import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import Footer from './components/layouts/Footer';*/
import Header from './components/layouts/Header';
import SignIn from './components/SingIn';
import Kanban from './components/Kanban';
import Kanban2 from './components/Kanban2.js';
import Kanban1 from './components/Kanban1';
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
                <Route  exact path="/sign-in" component={SignIn}/>
                <Route exact path="/kanban" component={Kanban}/>
                <Route exact path="/kanban1" component={Kanban1}/>
                <Route exact path="/kanban2" component={Kanban2}/>
                <Route exact path="/formAdPo" component={FormAdPo} />
                <Route exact path="/dashboard" component={DashBoard}/>
                <Route path="/hola-mundo" component={()=> <h1 > Hola Mundo </h1 >} />    
                </Switch>
            </Router> 
        )
    }

}

export default App;