import React, {Component} from "react";
import store, {UPDATE_IMAGE} from "../../store";
import { Link } from "react-router-dom";

class Wizard2 extends Component {

    constructor() {
        super();
        const reduxState = store.getState();
        this.state = {
            image: reduxState = reduxState.image
        }
    }
    //Input handlers
    handleInputImage(val) {
        this.setState({image: val});
    }

    saveChanges() {
        store.dispatch({
            type: UPDATE_IMAGE,
            payload: this.state.image
        })
    }

    render() {
        return (
            <div>
                <h4>Image URL</h4>
                <input 
                type="text"
                
                />
            </div>
        )
    }
}