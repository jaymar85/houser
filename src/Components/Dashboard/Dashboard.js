import React, {Component} from "react";
import {HashRouter, Link} from 'react-router-dom';
import routes from "../../routes";
import House from "../House/House";


class Dashboard extends Component {

    render() {

        return(
        <HashRouter>  
            <div>
                <Link to="/Wizard"><button>Add a Property</button></Link>
            <div>
            {this.props.homelisting.map((item, i) => {
                return (
                    // property_name, address, city, state, zip
                <House key={i}
                    image={item.image}
                    property_name={item.property_name}
                />
                ); 
            })}
            </div>
            {routes}
            </div>
        </HashRouter>
        )
    }
}

export default Dashboard;
