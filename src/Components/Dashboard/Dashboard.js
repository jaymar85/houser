import React, {Component} from "react";
import {HashRouter, Link} from 'react-router-dom';
import routes from "../../routes";
import House from "../House/House";


class Dashboard extends Component {

    render() {

        return(
        <HashRouter>  
            <div>
                <House/>
                <Link to="/Wizard"><button>Add a Property</button></Link>
            {routes}
            </div>
        </HashRouter>
        )
    }
}

export default Dashboard;
