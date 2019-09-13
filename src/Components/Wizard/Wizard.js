import React, {Component} from "react";
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE, ADD_LISTING} from "../../store";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Wizard extends Component {

    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode,
            newListing: reduxState.newListing
        }
    }
    // Input handlers
    handleInputName(val) {
        this.setState({name: val});
    }
    handleInputAddress(val) {
        this.setState({name: val});
    }  
    handleInputCity(val) {
        this.setState({city: val});
    }
    handleInputState(val) {
        this.setState({state: val});
    }  
    handleInputZip(val) {
        this.setState({zipcode: val});
    }
    // Input Reset
    handlerReset = () => {
        this.setState({
            ...this.state,          
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: 0
        })
    }

    saveChanges() {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        });
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        });
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        });
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        });
        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: this.state.zipcode
        });
    }

    addListing() {
        axios
            .post("/api/houses", this.state)
            .then(() => {
                this.state.newListing
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return(
            <div>
                <Link
                to="/"
                ><button>Cancel</button></Link>
                {/* Property Name Input */}
                <h5>Property Name</h5>
                <input
                type="text"
                value={this.state.name}
                onChange={ e => this.handleInputName(e.target.value)}
                />
                {/* Address Input */}
                <h5>Address</h5>
                <input
                type="text"
                value={this.state.address}
                onChange={ e => this.handleInputAddress(e.target.value)}
                />
                {/* City Input */}
                <h5>City</h5>
                <input
                type="text"
                value={this.state.city}
                onChange={ e => this.handleInputCity(e.target.value)}
                />
                {/* State Input */}
                <h5>State</h5>
                <input
                type="text"
                value={this.state.state}
                onChange={ e => this.handleInputState(e.target.value)}
                />
                {/* Zipcode Input*/}
                <h5>Zip</h5>
                <input
                text="text"
                placeholder="0"
                value={this.state.zipcode}
                onChange={ e => this.handleInputZip(e.target.value)}
                />
                <h1>Wizard</h1>

                <div>
                <Link 
                to="/">
                <button>Next Step</button>
                </Link>
                </div>
            </div>
        )
    }
}