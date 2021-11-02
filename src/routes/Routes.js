import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashBoard from '../pages/DashBoard';


function Routes() {
    return(
       <BrowserRouter>
       <Switch>
           <Route path ="/" component={DashBoard} />
       </Switch>
       </BrowserRouter>
    );
}
export default Routes;