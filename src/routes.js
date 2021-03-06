import React from "react";
import {Switch, Route} from "react-router-dom";
import Wizard from "./Components/Wizard/Wizard";
import Wizard2 from "./Components/Wizard/Wizard2"
import Dashboard from "./Components/Dashboard/Dashboard";
//import components to use in Route

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Wizard' component={Wizard}/>
        <Route path='/Wizard' component={Wizard2}/>
    </Switch>
);