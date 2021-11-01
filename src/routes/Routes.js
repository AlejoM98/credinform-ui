import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import Kanban from '../components/Kanban.js';
import FormAdPo from '../pages/FormAdPo';

function Routes() {
    return(
       <BrowserRouter>
       <Switch>
           <Route path ="/" component={DashBoard} />
           <Route path= "/kanban" component={Kanban}/>
           <Route path="/fromadpo" component = {FormAdPo}/>
           <Route path="/dashboard" pages = {DashBoard}/>
       </Switch>
       </BrowserRouter>
    );
}
export default Routes;